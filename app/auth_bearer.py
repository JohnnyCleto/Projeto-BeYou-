# app/auth_bearer.py
from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
from app.config import SECRET_KEY, ALGORITHM


class JWTBearer(HTTPBearer):
    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super().__call__(request)
        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(status_code=403, detail="Token inválido ou esquema incorreto.")
            if not self.verify_jwt(credentials.credentials):
                raise HTTPException(status_code=403, detail="Token JWT inválido ou expirado.")
            return credentials.credentials
        else:
            raise HTTPException(status_code=403, detail="Credenciais não fornecidas.")

    def verify_jwt(self, jwtoken: str) -> bool:
        try:
            jwt.decode(jwtoken, SECRET_KEY, algorithms=[ALGORITHM])
            return True
        except Exception:
            return False
# ==========================================
# Fim do arquivo app/auth_bearer.py
# ==========================================