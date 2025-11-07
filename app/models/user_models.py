# app/models/user_models.py
from pydantic import BaseModel, EmailStr
from typing import Optional

class UsuarioIn(BaseModel):
    nome: str
    email: EmailStr
    senha: str

class UsuarioOut(BaseModel):
    id: str
    nome: str
    email: EmailStr

class LoginModel(BaseModel):
    email: EmailStr
    senha: str

class TokenData(BaseModel):
    email: Optional[str] = None
