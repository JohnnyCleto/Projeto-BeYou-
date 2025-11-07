# app/crud/crud.py
from app.db import db, get_db
from bson import ObjectId
from datetime import datetime
import logging

logger = logging.getLogger("uvicorn.error")

# ===================== USUÁRIOS ===================== #
async def criar_usuario(usuario: dict):
    db = get_db()
    usuario["criadoEm"] = datetime.utcnow()
    result = await db.usuarios.insert_one(usuario)
    return await db.usuarios.find_one({"_id": result.inserted_id})

async def buscar_usuario_por_email(email: str):
    db = get_db()
    return await db.usuarios.find_one({"email": email})

async def buscar_usuario(id: str):
    db = get_db()
    return await db.usuarios.find_one({"_id": ObjectId(id)})

async def listar_usuarios():
    db = get_db()
    return await db.usuarios.find().to_list(1000)

async def atualizar_usuario(id: str, usuario: dict):
    db = get_db()
    await db.usuarios.update_one({"_id": ObjectId(id)}, {"$set": usuario})
    return await buscar_usuario(id)

async def deletar_usuario(id: str):
    db = get_db()
    result = await db.usuarios.delete_one({"_id": ObjectId(id)})
    return result.deleted_count

async def buscar_por_email(email: str):
    db = get_db()
    return await db.usuarios.find_one({"email": email})

# ===================== AGENDAMENTO ===================== #
async def criar_agendamento(agendamento: dict):
    check_db()
    result = await db.agendamentos.insert_one(agendamento)
    return await db.agendamentos.find_one({"_id": result.inserted_id})

async def listar_agendamentos():
    check_db()
    return await db.agendamentos.find().to_list(1000)

async def buscar_agendamento(id: str):
    check_db()
    return await db.agendamentos.find_one({"_id": ObjectId(id)})

async def atualizar_agendamento(id: str, agendamento: dict):
    check_db()
    await db.agendamentos.update_one({"_id": ObjectId(id)}, {"$set": agendamento})
    return await buscar_agendamento(id)

async def deletar_agendamento(id: str):
    check_db()
    result = await db.agendamentos.delete_one({"_id": ObjectId(id)})
    return result.deleted_count

# ===================== NOTIFICAÇÃO ===================== #
async def criar_notificacao(notificacao: dict):
    check_db()
    notificacao.setdefault("data", datetime.utcnow())
    notificacao.setdefault("lida", False)
    result = await db.notificacoes.insert_one(notificacao)
    return await db.notificacoes.find_one({"_id": result.inserted_id})

async def listar_notificacoes():
    check_db()
    return await db.notificacoes.find().to_list(1000)

async def marcar_notificacao_lida(id: str):
    check_db()
    await db.notificacoes.update_one({"_id": ObjectId(id)}, {"$set": {"lida": True}})
    return await db.notificacoes.find_one({"_id": ObjectId(id)})

# ===================== CARRINHO ===================== #
async def adicionar_item(item: dict):
    check_db()
    result = await db.carrinho.insert_one(item)
    return await db.carrinho.find_one({"_id": result.inserted_id})

async def listar_carrinho_por_usuario(usuarioId: str):
    check_db()
    return await db.carrinho.find({"usuarioId": usuarioId}).to_list(1000)

async def listar_carrinho():
    check_db()
    return await db.carrinho.find().to_list(1000)

async def atualizar_item(id: str, item: dict):
    check_db()
    await db.carrinho.update_one({"_id": ObjectId(id)}, {"$set": item})
    return await db.carrinho.find_one({"_id": ObjectId(id)})

async def remover_item(id: str):
    check_db()
    result = await db.carrinho.delete_one({"_id": ObjectId(id)})
    return result.deleted_count

# ===================== PEDIDOS ===================== #
async def criar_pedido(pedido: dict):
    check_db()
    pedido["data_criacao"] = datetime.utcnow()
    pedido.setdefault("status", "pendente")
    result = await db.pedidos.insert_one(pedido)
    return await db.pedidos.find_one({"_id": result.inserted_id})

async def listar_pedidos_por_usuario(usuarioId: str):
    check_db()
    return await db.pedidos.find({"usuarioId": usuarioId}).to_list(1000)

async def buscar_pedido(id: str):
    check_db()
    return await db.pedidos.find_one({"_id": ObjectId(id)})

async def listar_pedidos_por_loja(lojaId: str):
    check_db()
    return await db.pedidos.find({"lojaId": lojaId}).to_list(1000)

# ===================== PESQUISA ===================== #
async def criar_pesquisa(pesquisa: dict):
    check_db()
    result = await db.pesquisas.insert_one(pesquisa)
    return await db.pesquisas.find_one({"_id": result.inserted_id})

async def listar_pesquisas():
    check_db()
    return await db.pesquisas.find().to_list(1000)

async def pesquisar(q: str):
    check_db()
    query = {"$or": [
        {"titulo": {"$regex": q, "$options": "i"}},
        {"categoria": {"$regex": q, "$options": "i"}}
    ]}
    return await db.pesquisas.find(query).to_list(1000)
