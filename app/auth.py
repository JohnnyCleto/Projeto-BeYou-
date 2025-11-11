from fastapi import APIRouter, Depends, HTTPException, status
from app.models.usuario import UsuarioIn, LoginModel
from app.crud import crud_mongo
from app.auth_bearer import JWTBearer
from app.core.auth_utils import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Auth"]
)

# ==========================================
# Rota: Retorna usuário logado (token decodificado)
# ==========================================
@router.get("/me", dependencies=[Depends(JWTBearer())])
async def get_logged_user(user=Depends(get_current_user)):
    """
    Retorna os dados do usuário autenticado com base no token JWT.
    """
    return user


# ==========================================
# Rota: Cadastro de Usuário
# ==========================================
@router.post("/cadastro")
async def cadastro(dados: UsuarioIn):
    """
    Cria um novo usuário no sistema, validando se o e-mail já existe.
    """
    user = await crud_mongo.buscar_usuario_por_email(dados.email)
    if user:
        raise HTTPException(
            status_code=409,
            detail="E-mail já cadastrado"
        )

    dados.senha = hash_password(dados.senha)
    novo_usuario = await crud_mongo.criar_usuario(dados.model_dump())

    return {
        "message": "Usuário criado",
        "id": str(novo_usuario["_id"])
    }


# ==========================================
# Rota: Login de Usuário
# ==========================================
@router.post("/login")
async def login(dados: LoginModel):
    """
    Autentica o usuário com e-mail e senha, retornando o token JWT.
    """
    usuario = await crud_mongo.buscar_usuario_por_email(dados.email)
    if not usuario or not verify_password(dados.senha, usuario["senha"]):
        raise HTTPException(
            status_code=401,
            detail="Credenciais inválidas"
        )

    token = create_access_token({
        "id": str(usuario["_id"]),
        "email": usuario["email"]
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }


# ==========================================
# Rota: Obter Usuário Logado (via token JWT)
# ==========================================
@router.get("/perfil")
async def obter_usuario_logado(user=Depends(get_current_user)):
    """
    Retorna as informações completas do usuário autenticado via token JWT.
    """
    return user


# ==========================================
# Decorator: Requer Permissão de Cargo
# ==========================================
def require_roles(*roles):
    """
    Verifica se o usuário autenticado possui um dos cargos permitidos.
    """
    def wrapper(current_user=Depends(get_current_user)):
        if current_user.get("role") not in roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Permissão negada"
            )
        return current_user

    return wrapper
# ==========================================
# Fim do arquivo app/auth.py
# ==========================================
