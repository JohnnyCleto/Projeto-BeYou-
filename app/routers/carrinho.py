from fastapi import APIRouter, HTTPException
from app import crud
from app.models import CarrinhoIn, CarrinhoOut
from bson import ObjectId

router = APIRouter(prefix="/carrinho", tags=["Carrinho"])


@router.get("/{usuarioId}", response_model=list[CarrinhoOut])
async def get_carrinho(usuarioId: str):
    """Lista todos os itens do carrinho de um usuário"""
    carrinho = await crud.db.carrinho.find({"usuarioId": usuarioId}).to_list(100)
    if not carrinho:
        raise HTTPException(status_code=404, detail="Carrinho não encontrado para este usuário")
    return carrinho


@router.post("/adicionar", response_model=CarrinhoOut)
async def adicionar_item_carrinho(item: CarrinhoIn):
    """Adiciona um item ao carrinho"""
    novo_item = await crud.adicionar_item(item.dict())
    return novo_item


@router.put("/atualizar/{itemId}", response_model=CarrinhoOut)
async def atualizar_item_carrinho(itemId: str, item: CarrinhoIn):
    """Atualiza um item do carrinho"""
    if not ObjectId.is_valid(itemId):
        raise HTTPException(status_code=400, detail="ID inválido")
    atualizado = await crud.atualizar_item(itemId, item.dict())
    if not atualizado:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    return atualizado


@router.delete("/remover/{itemId}")
async def remover_item_carrinho(itemId: str):
    """Remove um item do carrinho"""
    if not ObjectId.is_valid(itemId):
        raise HTTPException(status_code=400, detail="ID inválido")
    deletado = await crud.remover_item(itemId)
    if deletado == 0:
        raise HTTPException(status_code=404, detail="Item não encontrado")
    return {"mensagem": "Item removido com sucesso"}
