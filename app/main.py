# app/main.py
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routers import auth, carrinho, pedidos, usuario_routes
from app import db as db_module

# =========================
# Inicialização da aplicação
# =========================
app = FastAPI(title="BeYou - FastAPI + MongoDB")

# =========================
# Middleware CORS
# =========================
origins = [
    "http://localhost:3000",
    "http://localhost:8888",
    "http://localhost:8000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# Rotas de API
# =========================
# Ajustado prefixo para "/api/auth" para coincidir com frontend
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(usuario_routes.router, prefix="/api", tags=["Usuários"])
app.include_router(carrinho.router, prefix="/api", tags=["Carrinho"])
app.include_router(pedidos.router, prefix="/api", tags=["Pedidos"])

# =========================
# Conexão com MongoDB
# =========================
@app.on_event("startup")
async def startup_event():
    """
    Conecta ao MongoDB quando o backend inicia.
    """
    await db_module.connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    """
    Fecha a conexão com o MongoDB quando o backend encerra.
    """
    await db_module.close_mongo_connection()

# =========================
# Frontend React (build)
# =========================
FRONTEND_BUILD_DIR = os.path.join(os.path.dirname(__file__), "frontstatic")

if os.path.isdir(FRONTEND_BUILD_DIR):
    # Monta arquivos estáticos do React
    app.mount(
        "/static",
        StaticFiles(directory=os.path.join(FRONTEND_BUILD_DIR, "static")),
        name="static"
    )
    app.mount(
        "/",
        StaticFiles(directory=FRONTEND_BUILD_DIR, html=True),
        name="frontend"
    )

    @app.get("/{full_path:path}")
    async def serve_react_spa(full_path: str):
        """
        Serve o arquivo index.html do React para qualquer rota desconhecida,
        permitindo o funcionamento do React Router no frontend.
        """
        index_file = os.path.join(FRONTEND_BUILD_DIR, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"detail": "index.html não encontrado"}

else:
    # Apenas backend ativo; frontend não encontrado
    print("⚠️ Diretório frontstatic não encontrado. Servindo apenas a API.")

# =========================
# Rota raiz para teste rápido
# =========================
@app.get("/health")
async def health_check():
    """
    Endpoint simples para verificar se o backend está rodando.
    """
    return {"status": "ok", "service": "backend"}
