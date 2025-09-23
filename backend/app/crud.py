# app/crud.py
from app.config import db
from app.models import (
    UsuarioIn, UsuarioOut,
    AgendamentoIn, AgendamentoOut,
    NotificacaoIn, NotificacaoOut,
    CarrinhoIn, CarrinhoOut,
    PesquisaIn, PesquisaOut
)
from bson import ObjectId

# ===================== USUÁRIO ===================== #
async def criar_usuario(usuario: dict):
    result = await db.usuarios.insert_one(usuario)
    return await db.usuarios.find_one({"_id": result.inserted_id})

async def listar_usuarios():
    return await db.usuarios.find().to_list(1000)

async def buscar_usuario(id: str):
    return await db.usuarios.find_one({"_id": ObjectId(id)})

async def atualizar_usuario(id: str, usuario: dict):
    await db.usuarios.update_one({"_id": ObjectId(id)}, {"$set": usuario})
    return await buscar_usuario(id)

async def deletar_usuario(id: str):
    result = await db.usuarios.delete_one({"_id": ObjectId(id)})
    return result.deleted_count

# ===================== AGENDAMENTO ===================== #
async def criar_agendamento(agendamento: dict):
    result = await db.agendamentos.insert_one(agendamento)
    return await db.agendamentos.find_one({"_id": result.inserted_id})

async def listar_agendamentos():
    return await db.agendamentos.find().to_list(1000)

async def buscar_agendamento(id: str):
    return await db.agendamentos.find_one({"_id": ObjectId(id)})

async def atualizar_agendamento(id: str, agendamento: dict):
    await db.agendamentos.update_one({"_id": ObjectId(id)}, {"$set": agendamento})
    return await buscar_agendamento(id)

async def deletar_agendamento(id: str):
    result = await db.agendamentos.delete_one({"_id": ObjectId(id)})
    return result.deleted_count

# ===================== NOTIFICAÇÃO ===================== #
async def criar_notificacao(notificacao: dict):
    result = await db.notificacoes.insert_one(notificacao)
    return await db.notificacoes.find_one({"_id": result.inserted_id})

async def listar_notificacoes():
    return await db.notificacoes.find().to_list(1000)

async def marcar_notificacao_lida(id: str):
    await db.notificacoes.update_one({"_id": ObjectId(id)}, {"$set": {"lida": True}})
    return await db.notificacoes.find_one({"_id": ObjectId(id)})

# ===================== CARRINHO ===================== #
async def adicionar_item(item: dict):
    result = await db.carrinho.insert_one(item)
    return await db.carrinho.find_one({"_id": result.inserted_id})

async def listar_carrinho():
    return await db.carrinho.find().to_list(1000)

async def atualizar_item(id: str, item: dict):
    await db.carrinho.update_one({"_id": ObjectId(id)}, {"$set": item})
    return await db.carrinho.find_one({"_id": ObjectId(id)})

async def remover_item(id: str):
    result = await db.carrinho.delete_one({"_id": ObjectId(id)})
    return result.deleted_count

# ===================== PESQUISA ===================== #
async def criar_pesquisa(pesquisa: dict):
    result = await db.pesquisas.insert_one(pesquisa)
    return await db.pesquisas.find_one({"_id": result.inserted_id})

async def listar_pesquisas():
    return await db.pesquisas.find().to_list(1000)

async def pesquisar(q: str):
    query = {"$or": [{"titulo": {"$regex": q, "$options": "i"}},
                      {"categoria": {"$regex": q, "$options": "i"}}]}
    return await db.pesquisas.find(query).to_list(1000)
