# app/models.py
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime

# ---- Shared / output helper ----
class IDModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")

# Usuario
class UsuarioIn(BaseModel):
    nome: str
    email: EmailStr
    senha: str

class UsuarioOut(UsuarioIn):
    id: Optional[str]
    criadoEm: Optional[datetime] = None

# Agendamento
class AgendamentoIn(BaseModel):
    cliente: str
    servico: str
    dataHora: datetime
    status: Optional[str] = "pendente"

class AgendamentoOut(AgendamentoIn):
    id: Optional[str]

# Notificacao
class NotificacaoIn(BaseModel):
    mensagem: str

class NotificacaoOut(NotificacaoIn):
    id: Optional[str]
    lida: Optional[bool] = False
    data: Optional[datetime] = None

# Carrinho
class CarrinhoIn(BaseModel):
    usuarioId: str
    lojaId: str
    produto: str
    quantidade: Optional[int] = 1
    preco: float

class CarrinhoOut(CarrinhoIn):
    id: Optional[str]

# Pesquisa
class PesquisaIn(BaseModel):
    titulo: str
    descricao: Optional[str] = None
    categoria: str
    preco: Optional[float] = None
    lojaId: Optional[str] = None

class PesquisaOut(PesquisaIn):
    id: Optional[str]
    criadoEm: Optional[datetime] = None
