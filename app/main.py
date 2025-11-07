# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

# Routers
from app.routers import auth, usuario_routes, carrinho, pedidos

# Conexões com bancos
from app import db as db_mongo
from app import db_mysql

# ============================================================
# Inicialização da aplicação
# ============================================================
app = FastAPI(title="BeYou - FastAPI + MongoDB (usuários) + MySQL (dados relacionais)")

# ============================================================
# Configuração de CORS
# ============================================================
origins = ["http://localhost:3000", "http://localhost:8000", "*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================
# Eventos de inicialização e finalização
# ============================================================
@app.on_event("startup")
async def startup_event():
    """Conecta simultaneamente aos bancos MongoDB e MySQL."""
    # Conecta MongoDB (usuários)
    await db_mongo.connect_to_mongo()
    if db_mongo.db is None:
        raise Exception("❌ Falha na conexão com MongoDB Atlas (usuários).")

    # Conecta MySQL (dados relacionais)
    await db_mysql.connect_to_mysql()
    print("🚀 Sistema iniciado com MongoDB + MySQL")

@app.on_event("shutdown")
async def shutdown_event():
    """Fecha conexões com bancos."""
    await db_mongo.close_mongo_connection()
    await db_mysql.close_mysql_connection()
    print("🛑 Conexões com bancos encerradas.")

# ============================================================
# Rotas da API
# ============================================================
# MongoDB
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(usuario_routes.router, prefix="/api/usuarios", tags=["Usuários"])

# MySQL (dados relacionais)
app.include_router(carrinho.router, prefix="/api/carrinho", tags=["Carrinho"])
app.include_router(pedidos.router, prefix="/api/pedidos", tags=["Pedidos"])

# ============================================================
# Frontend React (SPA)
# ============================================================
FRONTEND_BUILD_DIR = os.path.join(os.path.dirname(__file__), "frontstatic")

if os.path.isdir(FRONTEND_BUILD_DIR):
    app.mount("/static", StaticFiles(directory=os.path.join(FRONTEND_BUILD_DIR, "static")), name="static")
    app.mount("/", StaticFiles(directory=FRONTEND_BUILD_DIR, html=True), name="frontend")

    @app.get("/{full_path:path}")
    async def serve_react_spa(full_path: str):
        index_file = os.path.join(FRONTEND_BUILD_DIR, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"detail": "index.html não encontrado"}
else:
    print("⚠️ Diretório 'frontstatic' não encontrado. Servindo apenas a API.")

# ============================================================
# Health check
# ============================================================
@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "backend",
        "databases": {
            "MongoDB": "usuários / auth",
            "MySQL": "dados relacionais",
        },
    }
