# app/routers/auth.py
from datetime import timedelta, datetime
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext

from app.models.models import CadastroModel, LoginModel, TokenData
from app import crud
import os

SECRET_KEY = os.getenv("SECRET_KEY", "changeme")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/login")

# Removido prefixo /auth para compatibilidade com frontend
router = APIRouter(tags=["Autenticação"])

# --------- Funções de senha ---------
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# --------- Funções de token JWT ---------
def create_access_token(data: dict, expires_minutes: int | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=expires_minutes or ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# --------- Dependência: usuário atual ---------
async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciais inválidas ou token expirado.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str | None = payload.get("id")
        email: str | None = payload.get("email")
        role: str | None = payload.get("role")
        if not user_id or not email:
            raise credentials_exception
        token_data = TokenData(id=user_id, email=email, role=role)
    except JWTError:
        raise credentials_exception

    user = await crud.buscar_usuario(token_data.id)
    if not user:
        raise credentials_exception
    user["_id"] = str(user["_id"])
    return user

# --------- Decorador de permissão ---------
def require_roles(*allowed_roles):
    async def role_checker(user=Depends(get_current_user)):
        if user.get("role") not in allowed_roles:
            raise HTTPException(status_code=403, detail="Permissão negada.")
        return user
    return role_checker

# --------- Endpoints ---------
@router.post("/cadastro", status_code=201)
async def cadastro_usuario(dados: CadastroModel):
    existing_user = await crud.buscar_usuario_por_email(dados.email)
    if existing_user:
        raise HTTPException(status_code=409, detail="E-mail já cadastrado")
    hashed_pw = hash_password(dados.senha)
    user_dict = {
        "nome": dados.nome,
        "email": dados.email,
        "senha": hashed_pw,
        "role": "user",
        "criadoEm": datetime.utcnow(),
    }
    inserted_user = await crud.criar_usuario(user_dict)
    return {"message": "Usuário cadastrado com sucesso", "id": str(inserted_user["_id"])}

@router.post("/login")
async def login_usuario(dados: LoginModel):
    user = await crud.buscar_usuario_por_email(dados.email)
    if not user or not verify_password(dados.senha, user["senha"]):
        raise HTTPException(status_code=401, detail="E-mail ou senha inválidos")
    access_token = create_access_token(
        data={"id": str(user["_id"]), "email": user["email"], "role": user.get("role", "user")}
    )
    return {"access_token": access_token, "token_type": "bearer"}