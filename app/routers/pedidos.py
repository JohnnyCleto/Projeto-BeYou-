# app/routes/pedidos.py
from fastapi import APIRouter, HTTPException, Depends, status
from app import crud
from app.models import PedidoIn, PedidoOut
from app.auth import get_current_user, require_roles
from bson import ObjectId

router = APIRouter(prefix="/pedidos", tags=["Pedidos"])


@router.post("/", response_model=PedidoOut)
async def criar_pedido(pedido: PedidoIn, current_user: dict = Depends(get_current_user)):
    # Verifica que o usuário que cria o pedido corresponde ao token (ou admin)
    if str(current_user.get("_id")) != pedido.usuarioId and current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Você só pode criar pedidos para seu próprio usuário")
    novo = await crud.criar_pedido(pedido.dict())
    novo["_id"] = str(novo["_id"])
    return novo


@router.get("/{usuarioId}", response_model=list[PedidoOut])
async def listar_pedidos(usuarioId: str, current_user: dict = Depends(get_current_user)):
    # usuário só pode listar seus pedidos; lojas podem listar pedidos da sua loja; admin pode listar tudo
    if current_user.get("role") == "admin":
        pedidos = await crud.listar_pedidos_por_usuario(usuarioId)
        return pedidos
    if current_user.get("role") == "loja":
        # se role loja, deve passar lojaId igual ao id da loja — depende de como você modela lojas
        # aqui vamos permitir listar pedidos por loja se o token pertence à loja
        if str(current_user.get("_id")) != usuarioId:
            raise HTTPException(status_code=403, detail="Lojas só podem ver pedidos da própria loja")
        pedidos = await crud.listar_pedidos_por_loja(usuarioId)
        return pedidos
    # role user: só pode ver próprios pedidos
    if str(current_user.get("_id")) != usuarioId:
        raise HTTPException(status_code=403, detail="Só é possível ver seus próprios pedidos")
    pedidos = await crud.listar_pedidos_por_usuario(usuarioId)
    return pedidos


@router.get("/detalhe/{pedidoId}", response_model=PedidoOut)
async def buscar_pedido(pedidoId: str, current_user: dict = Depends(get_current_user)):
    if not ObjectId.is_valid(pedidoId):
        raise HTTPException(status_code=400, detail="ID inválido")
    pedido = await crud.buscar_pedido(pedidoId)
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    # restrição: somente dono do pedido, loja responsável ou admin
    if current_user.get("role") == "admin":
        return pedido
    if current_user.get("role") == "loja":
        if str(current_user.get("_id")) != pedido.get("lojaId"):
            raise HTTPException(status_code=403, detail="Lojas só podem ver pedidos da própria loja")
        return pedido
    # usuário normal
    if str(current_user.get("_id")) != pedido.get("usuarioId"):
        raise HTTPException(status_code=403, detail="Acesso negado ao pedido")
    return pedido
