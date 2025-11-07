# app/routers/usuario_routes.py
from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List
from app.crud import crud_mongo
from app.models.models import (
    UsuarioIn, UsuarioOut,
    AgendamentoIn, AgendamentoOut,
    NotificacaoIn, NotificacaoOut,
    CarrinhoIn, CarrinhoOut,
    PesquisaIn, PesquisaOut, Usuario
)
# app/routers/usuario_routes.py
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.db_mysql import get_db
from app.models.models import Usuario

router = APIRouter()

@router.get("/usuarios")
async def listar_usuarios(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Usuario))
    usuarios = result.scalars().all()
    return usuarios


router = APIRouter(prefix="/api", tags=["API"])

# -------------------------------
# ROTA RAIZ
# -------------------------------
@router.get("/")
async def api_root():
    return {"message": "🚀 API FastAPI funcionando em /api/"}

# -------------------------------
# USUÁRIOS
# -------------------------------
@router.get("/usuarios/meu_perfil", response_model=UsuarioOut)
async def meu_perfil():
    usuario = await crud_mongo.buscar_usuario("id_teste")  # Substituir lógica real
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    return usuario

@router.post("/usuarios", response_model=UsuarioOut, status_code=201)
async def criar_usuario_route(usuario: UsuarioIn):
    try:
        created = await crud_mongo.criar_usuario(usuario.dict())
        return created
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/usuarios", response_model=List[UsuarioOut])
async def listar_usuarios_route():
    return await crud_mongo.listar_usuarios()

@router.get("/usuarios/{id}", response_model=UsuarioOut)
async def buscar_usuario_route(id: str):
    usuario = await crud_mongo.buscar_usuario(id)
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    return usuario

@router.put("/usuarios/{id}", response_model=UsuarioOut)
async def atualizar_usuario_route(id: str, usuario: UsuarioIn):
    updated = await crud_mongo.atualizar_usuario(id, usuario.dict())
    if not updated:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    return updated

@router.delete("/usuarios/{id}")
async def deletar_usuario_route(id: str):
    deleted = await crud_mongo.deletar_usuario(id)
    if deleted == 0:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    return {"message": "Usuário deletado com sucesso"}

# -------------------------------
# AGENDAMENTOS
# -------------------------------
@router.post("/agendamentos", response_model=AgendamentoOut, status_code=201)
async def criar_agendamento_route(agendamento: AgendamentoIn):
    return await crud_mongo.criar_agendamento(agendamento.dict())

@router.get("/agendamentos", response_model=List[AgendamentoOut])
async def listar_agendamentos_route():
    return await crud_mongo.listar_agendamentos()

@router.get("/agendamentos/{id}", response_model=AgendamentoOut)
async def buscar_agendamento_route(id: str):
    ag = await crud_mongo.buscar_agendamento(id)
    if not ag:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado")
    return ag

@router.put("/agendamentos/{id}", response_model=AgendamentoOut)
async def atualizar_agendamento_route(id: str, agendamento: AgendamentoIn):
    updated = await crud_mongo.atualizar_agendamento(id, agendamento.dict())
    if not updated:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado")
    return updated

@router.delete("/agendamentos/{id}")
async def deletar_agendamento_route(id: str):
    deleted = await crud_mongo.deletar_agendamento(id)
    if deleted == 0:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado")
    return {"message": "Agendamento deletado com sucesso"}

# -------------------------------
# NOTIFICAÇÕES
# -------------------------------
@router.post("/notificacoes", response_model=NotificacaoOut, status_code=201)
async def criar_notificacao_route(notificacao: NotificacaoIn):
    return await crud_mongo.criar_notificacao(notificacao.dict())

@router.get("/notificacoes", response_model=List[NotificacaoOut])
async def listar_notificacoes_route():
    return await crud_mongo.listar_notificacoes()

@router.put("/notificacoes/{id}/lida", response_model=NotificacaoOut)
async def marcar_notificacao_lida_route(id: str):
    updated = await crud_mongo.marcar_notificacao_lida(id)
    if not updated:
        raise HTTPException(status_code=404, detail="Notificação não encontrada")
    return updated

# -------------------------------
# CARRINHO
# -------------------------------
@router.post("/carrinho", response_model=CarrinhoOut, status_code=201)
async def adicionar_item_route(item: CarrinhoIn):
    return await crud_mongo.adicionar_item(item.dict())

@router.get("/carrinho", response_model=List[CarrinhoOut])
async def listar_carrinho_route():
    return await crud_mongo.listar_carrinho()

@router.put("/carrinho/{id}", response_model=CarrinhoOut)
async def atualizar_item_route(id: str, item: CarrinhoIn):
    updated = await crud_mongo.atualizar_item(id, item.dict())
    if not updated:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    return updated

@router.delete("/carrinho/{id}")
async def remover_item_route(id: str):
    deleted = await crud_mongo.remover_item(id)
    if deleted == 0:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    return {"message": "Item removido do carrinho"}

# -------------------------------
# PESQUISAS
# -------------------------------
@router.post("/pesquisas", response_model=PesquisaOut, status_code=201)
async def criar_pesquisa_route(item: PesquisaIn):
    return await crud_mongo.criar_pesquisa(item.dict())

@router.get("/pesquisas", response_model=List[PesquisaOut])
async def listar_pesquisas_route():
    return await crud_mongo.listar_pesquisas()

@router.get("/pesquisas/buscar", response_model=List[PesquisaOut])
async def pesquisar_route(q: str = Query(..., min_length=1)):
    return await crud_mongo.pesquisar(q)
