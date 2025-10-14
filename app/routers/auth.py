# app/routers/auth.py
from datetime import timedelta, datetime
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from bson import ObjectId

from app.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from app.models import TokenData
from app import crud

# =========================
# Router principal
# =========================
router = APIRouter(prefix="/auth", tags=["Autenticação"])

# =========================
# Configurações de Criptografia e OAuth2
# =========================
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

# =========================
# Funções de Senha
# =========================
def hash_password(password: str) -> str:
    """Gera o hash de uma senha."""
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifica se a senha em texto corresponde ao hash armazenado."""
    return pwd_context.verify(plain_password, hashed_password)

# =========================
# Funções de Token JWT
# =========================
def create_access_token(data: dict, expires_minutes: int | None = None) -> str:
    """Cria um token JWT com tempo de expiração."""
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(
        minutes=expires_minutes or ACCESS_TOKEN_EXPIRE_MINUTES
    )
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# =========================
# Dependência: Obter Usuário Atual
# =========================
async def get_current_user(token: str = Depends(oauth2_scheme)):
    """Valida o token JWT e retorna o usuário autenticado."""
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

    # Normaliza o campo _id para string
    user["_id"] = str(user["_id"])
    return user

# =========================
# Decorador de Permissão por Função
# =========================
def require_roles(*allowed_roles):
    """Decorator para restringir acesso a usuários com papéis específicos."""
    async def role_checker(user=Depends(get_current_user)):
        if user.get("role") not in allowed_roles:
            raise HTTPException(status_code=403, detail="Permissão negada.")
        return user
    return role_checker
