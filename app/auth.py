# app/auth.py
from passlib.context import CryptContext
from datetime import timedelta, datetime
from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from app.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from app.models.models import CadastroModel, LoginModel, TokenData
from app.crud import crud_mongo
import os

# =========================
# Configurações de token
# =========================
SECRET_KEY = os.getenv("SECRET_KEY", SECRET_KEY or "changeme")
ALGORITHM = os.getenv("ALGORITHM", ALGORITHM or "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", ACCESS_TOKEN_EXPIRE_MINUTES or 60))

# =========================
# Contexto de criptografia
# =========================
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

router = APIRouter()

# =========================
# Funções utilitárias
# =========================
def hash_password(password: str) -> str:
    """
    Hash da senha com bcrypt.
    Trunca para 72 bytes para evitar erros do bcrypt.
    """
    # Bcrypt suporta no máximo 72 bytes
    pw_bytes = password.encode("utf-8")[:72]
    return pwd_context.hash(pw_bytes)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    pw_bytes = plain_password.encode("utf-8")[:72]
    return pwd_context.verify(pw_bytes, hashed_password)

def create_access_token(data: dict, expires_minutes: int | None = None) -> str:
    """
    Cria token JWT
    """
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=expires_minutes or ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    """
    Recupera usuário a partir do token JWT
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Token inválido ou expirado",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("id")
        if not user_id:
            raise credentials_exception
        token_data = TokenData(id=user_id, email=payload.get("email"), role=payload.get("role"))
    except JWTError:
        raise credentials_exception

    user = await crud_mongo.buscar_usuario(token_data.id)
    if not user:
        raise credentials_exception
    user["_id"] = str(user["_id"])
    return user

def require_roles(*allowed_roles):
    """
    Dependency para verificar roles do usuário.
    """
    async def role_checker(user = Depends(get_current_user)):
        if user.get("role") not in allowed_roles:
            raise HTTPException(status_code=403, detail="Permissão negada")
        return user
    return role_checker

# =========================
# Endpoints
# =========================
@router.post("/cadastro", status_code=201)
async def cadastro_usuario(dados: CadastroModel):
    """
    Endpoint para cadastro de usuário
    """
    existing_user = await crud_mongo.buscar_usuario_por_email(dados.email)
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
    inserted_user = await crud_mongo.criar_usuario(user_dict)
    inserted_user["_id"] = str(inserted_user["_id"])
    return {"message": "Usuário cadastrado com sucesso", "id": inserted_user["_id"]}

@router.post("/login")
async def login_usuario(dados: LoginModel):
    """
    Endpoint para login de usuário
    """
    user = await crud_mongo.buscar_usuario_por_email(dados.email)
    if not user or not verify_password(dados.senha, user["senha"]):
        raise HTTPException(status_code=401, detail="E-mail ou senha inválidos")

    access_token = create_access_token(
        data={"id": str(user["_id"]), "email": user["email"], "role": user.get("role", "user")}
    )
    return {"access_token": access_token, "token_type": "bearer"}
