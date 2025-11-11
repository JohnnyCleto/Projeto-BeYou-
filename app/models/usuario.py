# app/models/usuario.py
from pydantic import BaseModel, EmailStr
from typing import Optional

class UsuarioIn(BaseModel):
    nome: str
    email: EmailStr
    senha: str

class UsuarioOut(BaseModel):
    id: Optional[str]
    nome: str
    email: EmailStr
    role: Optional[str] = "user"

class LoginModel(BaseModel):
    email: EmailStr
    senha: str
