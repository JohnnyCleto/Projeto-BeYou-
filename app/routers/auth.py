# app/routers/auth.py
from fastapi import APIRouter, HTTPException, status
from datetime import datetime, timedelta
from jose import jwt, JWTError
from passlib.context import CryptContext
from app.models.usuario import UsuarioIn, LoginModel
from app.crud import crud_mongo
import os

SECRET_KEY = os.getenv("SECRET_KEY", "changeme")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60))
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()

def hash_password(pw): return pwd_context.hash(pw)
def verify_password(p, h): return pwd_context.verify(p, h)

def create_token(data: dict):
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    data.update({"exp": expire})
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

@router.post("/cadastro")
async def cadastro(dados: UsuarioIn):
    user = await crud_mongo.buscar_usuario_por_email(dados.email)
    if user:
        raise HTTPException(409, "E-mail já cadastrado")
    dados.senha = hash_password(dados.senha)
    novo = await crud_mongo.criar_usuario(dados.model_dump())
    return {"message": "Usuário criado", "id": str(novo["_id"])}

@router.post("/login")
async def login(dados: LoginModel):
    user = await crud_mongo.buscar_por_email(dados.email)
    if not user or not verify_password(dados.senha, user["senha"]):
        raise HTTPException(401, "Credenciais inválidas")
    token = create_token({"id": str(user["_id"]), "email": user["email"]})
    return {"access_token": token, "token_type": "bearer"}
