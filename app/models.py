# app/models.py
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime

# ---- Shared / output helper ----
class IDModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")

# Usuario input for registration
class UsuarioIn(BaseModel):
    nome: str
    email: EmailStr
    senha: str
    role: Optional[str] = "user"  # "user", "loja", "admin"

# Usuario output (não expõe senha)
class UsuarioOut(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    nome: str
    email: EmailStr
    role: Optional[str] = "user"
    criadoEm: Optional[datetime] = None

# Modelos para token
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None
    email: Optional[str] = None
    role: Optional[str] = None

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

# Pedido
class PedidoItem(BaseModel):
    produto: str
    quantidade: int
    preco: float

class PedidoIn(BaseModel):
    usuarioId: str
    lojaId: str
    itens: List[PedidoItem]
    total: float

class PedidoOut(PedidoIn):
    id: Optional[str]
    data_criacao: Optional[datetime] = None
    status: Optional[str] = "pendente"
