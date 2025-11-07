# app/crus/geral_crud.py
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.mysql_models import Agendamento, Carrinho, Pedido, PedidoItem, Pesquisa
from datetime import datetime

# ==========================================
# AGENDAMENTOS
# ==========================================
async def criar_agendamento(db: AsyncSession, dados: dict):
    ag = Agendamento(**dados)
    db.add(ag)
    await db.commit()
    await db.refresh(ag)
    return ag

async def listar_agendamentos(db: AsyncSession):
    result = await db.execute(select(Agendamento))
    return result.scalars().all()

async def buscar_agendamento(db: AsyncSession, id: int):
    result = await db.execute(select(Agendamento).filter(Agendamento.id == id))
    return result.scalar_one_or_none()

async def atualizar_agendamento(db: AsyncSession, id: int, dados: dict):
    ag = await buscar_agendamento(db, id)
    if not ag:
        return None
    for key, value in dados.items():
        setattr(ag, key, value)
    await db.commit()
    await db.refresh(ag)
    return ag

async def deletar_agendamento(db: AsyncSession, id: int):
    ag = await buscar_agendamento(db, id)
    if not ag:
        return 0
    await db.delete(ag)
    await db.commit()
    return 1

# ==========================================
# CARRINHO
# ==========================================
async def adicionar_item(db: AsyncSession, dados: dict):
    item = Carrinho(**dados)
    db.add(item)
    await db.commit()
    await db.refresh(item)
    return item

async def listar_carrinho(db: AsyncSession):
    result = await db.execute(select(Carrinho))
    return result.scalars().all()

async def atualizar_item(db: AsyncSession, id: int, dados: dict):
    item = await db.get(Carrinho, id)
    if not item:
        return None
    for k, v in dados.items():
        setattr(item, k, v)
    await db.commit()
    await db.refresh(item)
    return item

async def remover_item(db: AsyncSession, id: int):
    item = await db.get(Carrinho, id)
    if not item:
        return 0
    await db.delete(item)
    await db.commit()
    return 1

# ==========================================
# PEDIDOS
# ==========================================
async def criar_pedido(db: AsyncSession, dados: dict):
    itens_data = dados.pop("itens", [])
    pedido = Pedido(**dados)
    db.add(pedido)
    await db.flush()

    for item_data in itens_data:
        item = PedidoItem(pedido_id=pedido.id, **item_data)
        db.add(item)

    await db.commit()
    await db.refresh(pedido)
    return pedido

async def listar_pedidos(db: AsyncSession):
    result = await db.execute(select(Pedido))
    return result.scalars().all()

async def buscar_pedido(db: AsyncSession, id: int):
    result = await db.execute(select(Pedido).filter(Pedido.id == id))
    return result.scalar_one_or_none()

async def deletar_pedido(db: AsyncSession, id: int):
    pedido = await buscar_pedido(db, id)
    if not pedido:
        return 0
    await db.delete(pedido)
    await db.commit()
    return 1

# ==========================================
# PESQUISAS
# ==========================================
async def criar_pesquisa(db: AsyncSession, dados: dict):
    pesquisa = Pesquisa(**dados)
    db.add(pesquisa)
    await db.commit()
    await db.refresh(pesquisa)
    return pesquisa

async def listar_pesquisas(db: AsyncSession):
    result = await db.execute(select(Pesquisa))
    return result.scalars().all()

async def pesquisar(db: AsyncSession, termo: str):
    result = await db.execute(
        select(Pesquisa).filter(Pesquisa.titulo.like(f"%{termo}%"))
    )
    return result.scalars().all()
