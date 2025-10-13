from fastapi import APIRouter, HTTPException
from app.config import db
from app.models import PedidoIn, PedidoOut
from bson import ObjectId
from datetime import datetime

router = APIRouter(prefix="/pedidos", tags=["Pedidos"])


@router.post("/", response_model=PedidoOut)
async def criar_pedido(pedido: PedidoIn):
    """Cria um novo pedido"""
    pedido_dict = pedido.dict()
    pedido_dict["data_criacao"] = datetime.utcnow()
    result = await db.pedidos.insert_one(pedido_dict)
    novo_pedido = await db.pedidos.find_one({"_id": result.inserted_id})
    return novo_pedido


@router.get("/{usuarioId}", response_model=list[PedidoOut])
async def listar_pedidos(usuarioId: str):
    """Lista todos os pedidos de um usuário"""
    pedidos = await db.pedidos.find({"usuarioId": usuarioId}).to_list(100)
    return pedidos


@router.get("/detalhe/{pedidoId}", response_model=PedidoOut)
async def buscar_pedido(pedidoId: str):
    """Busca um pedido específico"""
    if not ObjectId.is_valid(pedidoId):
        raise HTTPException(status_code=400, detail="ID inválido")
    pedido = await db.pedidos.find_one({"_id": ObjectId(pedidoId)})
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    return pedido
