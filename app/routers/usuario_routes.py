# app/routers/usuario_routes.py
import os
from fastapi import (
    APIRouter, HTTPException, Query,
    Depends, UploadFile, File
)
from fastapi.responses import FileResponse
from typing import List
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.db_mysql import get_db
from app.models.models import (
    UsuarioIn, UsuarioOut,
    AgendamentoIn, AgendamentoOut,
    NotificacaoIn, NotificacaoOut,
    CarrinhoIn, CarrinhoOut,
    PesquisaIn, PesquisaOut,
    Usuario
)
from app.crud import crud_mongo

# -------------------------------
# CONFIGURAÇÃO DO ROUTER
# -------------------------------
router = APIRouter(prefix="/api", tags=["API"])

# -------------------------------
# CONFIGURAÇÃO DE UPLOAD
# -------------------------------
UPLOAD_DIR = "app/static/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# -------------------------------
# ROTA RAIZ
# -------------------------------
@router.get("/")
async def api_root():
    return {"message": "🚀 API FastAPI funcionando em /api/"}

# -------------------------------
# USUÁRIOS
# -------------------------------

@router.get("/usuarios", response_model=List[UsuarioOut])
async def listar_usuarios_route():
    return await crud_mongo.listar_usuarios()


@router.get("/usuarios/{id}", response_model=UsuarioOut)
async def buscar_usuario_route(id: str):
    usuario = await crud_mongo.buscar_usuario(id)
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
# PERFIL DO USUÁRIO
# -------------------------------
@router.get("/usuarios/meu_perfil", response_model=UsuarioOut)
async def meu_perfil():
    """
    Retorna o perfil do usuário logado (mockado como 'id_teste' por enquanto)
    Inclui o nome e a imagem, se existir.
    """
    usuario = await crud_mongo.buscar_usuario("id_teste")
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    # Monta o caminho da imagem se houver
    imagem_path = os.path.join(UPLOAD_DIR, f"{usuario.get('id')}.jpg")
    if os.path.exists(imagem_path):
        usuario["imagem_url"] = f"/api/usuarios/imagem/{usuario.get('id')}"
    else:
        usuario["imagem_url"] = None

    return usuario


@router.post("/usuarios/{id}/upload_imagem")
async def upload_imagem_perfil(id: str, file: UploadFile = File(...)):
    """
    Faz upload da imagem de perfil do usuário e salva no diretório /app/static/uploads.
    O arquivo é nomeado pelo ID do usuário.
    """
    usuario = await crud_mongo.buscar_usuario(id)
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    filename = f"{id}.jpg"
    filepath = os.path.join(UPLOAD_DIR, filename)

    with open(filepath, "wb") as buffer:
        buffer.write(await file.read())

    return {"message": "Imagem de perfil enviada com sucesso", "filename": filename}


@router.get("/usuarios/imagem/{id}")
async def obter_imagem_perfil(id: str):
    """
    Retorna a imagem de perfil armazenada do usuário.
    """
    filepath = os.path.join(UPLOAD_DIR, f"{id}.jpg")
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="Imagem não encontrada")
    return FileResponse(filepath)

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
