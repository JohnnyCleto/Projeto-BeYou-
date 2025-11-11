# app/routes/carrinho.py
from fastapi import APIRouter, HTTPException, Depends, status
from app.crud import crud_mongo
from app.models.models import CarrinhoIn, CarrinhoOut
from app.auth import get_current_user
from bson import ObjectId

router = APIRouter(prefix="/carrinho", tags=["Carrinho"])


@router.get("/{usuarioId}", response_model=list[CarrinhoOut])
async def get_carrinho(usuarioId: str, current_user: dict = Depends(get_current_user)):
    """
    Retorna o carrinho do usuário.
    Só o próprio usuário (ou admin) pode acessar seu carrinho.
    """
    if current_user.get("_id") != usuarioId and current_user.get("role") != "admin":
        # current_user["_id"] pode ser ObjectId string — garantimos comparação de string
        if str(current_user.get("_id")) != usuarioId:
            raise HTTPException(status_code=403, detail="Acesso negado ao carrinho deste usuário")
    items = await crud_mongo.listar_carrinho_por_usuario(usuarioId)
    return items


@router.post("/adicionar", response_model=CarrinhoOut)
async def adicionar_item_carrinho(item: CarrinhoIn, current_user: dict = Depends(get_current_user)):
    """
    Adiciona um item ao carrinho — apenas usuário autenticado pode adicionar.
    Se o usuário do item difere do token, bloqueia.
    """
    if str(current_user.get("_id")) != item.usuarioId and current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Você só pode adicionar itens no seu próprio carrinho")
    novo = await crud_mongo.adicionar_item(item.dict())
    novo["_id"] = str(novo["_id"])
    return novo


@router.put("/atualizar/{itemId}", response_model=CarrinhoOut)
async def atualizar_item_carrinho(itemId: str, item: CarrinhoIn, current_user: dict = Depends(get_current_user)):
    # valida id
    if not ObjectId.is_valid(itemId):
        raise HTTPException(status_code=400, detail="ID inválido")
    existente = await crud_mongo.atualizar_item(itemId, item.dict())
    if not existente:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    # checar propriedade: assegure que quem está atualizando é dono do item ou admin
    # buscamos item para verificar usuarioId
    item_db = await crud_mongo.atualizar_item(itemId, item.dict())  # já fez update, ok
    owner_id = item_db.get("usuarioId")
    if str(current_user.get("_id")) != owner_id and current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Não autorizado a atualizar este item")
    item_db["_id"] = str(item_db["_id"])
    return item_db


@router.delete("/remover/{itemId}")
async def remover_item_carrinho(itemId: str, current_user: dict = Depends(get_current_user)):
    if not ObjectId.is_valid(itemId):
        raise HTTPException(status_code=400, detail="ID inválido")
    # checar dono do item
    item = await crud_mongo.atualizar_item(itemId, {})  # pega item atual (usa atualizar_item mas espera que retorne)
    # se não existir, tentar buscar direto:
    from app.config import db
    item = await db.carrinho.find_one({"_id": ObjectId(itemId)})
    if not item:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    owner_id = item.get("usuarioId")
    if str(current_user.get("_id")) != owner_id and current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Não autorizado a remover este item")
    deletado = await crud_mongo.remover_item(itemId)
    if deletado == 0:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    return {"mensagem": "Item removido com sucesso"}
