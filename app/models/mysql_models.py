# app/models/mysql_models.py 
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db_mysql import Base

class Carrinho(Base):
    __tablename__ = "carrinho"
    id = Column(Integer, primary_key=True)
    usuarioId = Column(String(100))
    lojaId = Column(String(100))
    produto = Column(String(150))
    quantidade = Column(Integer)
    preco = Column(Float)
    criado_em = Column(DateTime, default=datetime.utcnow)

class Pedido(Base):
    __tablename__ = "pedidos"
    id = Column(Integer, primary_key=True)
    usuarioId = Column(String(100))
    lojaId = Column(String(100))
    total = Column(Float)
    status = Column(String(50), default="pendente")
    data_criacao = Column(DateTime, default=datetime.utcnow)

    itens = relationship("PedidoItem", back_populates="pedido", cascade="all, delete")

class PedidoItem(Base):
    __tablename__ = "pedido_itens"
    id = Column(Integer, primary_key=True)
    pedido_id = Column(Integer, ForeignKey("pedidos.id"))
    produto = Column(String(150))
    quantidade = Column(Integer)
    preco = Column(Float)
    pedido = relationship("Pedido", back_populates="itens")
