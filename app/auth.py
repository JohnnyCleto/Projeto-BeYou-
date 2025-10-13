# app/auth.py
from passlib.context import CryptContext
from datetime import timedelta, datetime
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from app.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES, db
from app.models import TokenData
from app import crud
from bson import ObjectId

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(data: dict, expires_minutes: int | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=(expires_minutes or ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciais inválidas (token)",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str | None = payload.get("id")
        email: str | None = payload.get("email")
        role: str | None = payload.get("role")
        if user_id is None or email is None:
            raise credentials_exception
        token_data = TokenData(id=user_id, email=email, role=role)
    except JWTError:
        raise credentials_exception

    user = await crud.buscar_usuario(token_data.id)
    if not user:
        raise credentials_exception
    # normalize _id to string
    user["_id"] = str(user["_id"])
    return user


def require_roles(*allowed_roles):
    async def role_checker(user = Depends(get_current_user)):
        if user.get("role") not in allowed_roles:
            raise HTTPException(status_code=403, detail="Permissão negada")
        return user
    return role_checker
