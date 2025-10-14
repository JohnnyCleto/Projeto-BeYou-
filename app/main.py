# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routers import auth, carrinho, pedidos, usuario_routes
from app import db as db_module
import os

app = FastAPI(title="BeYou - FastAPI + MongoDB")

# =========================
# Middleware CORS
# =========================
origins = [
    "http://localhost:3000",  # Frontend React Dev
    "http://localhost:8888",  # Frontend Docker/Prod
    "http://localhost:8000",  # Swagger UI / FastAPI Dev
    "*"                        # Permissão ampla para dev/teste
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# Rotas da API
# =========================
# Garantir que auth.router inclua o endpoint POST /cadastro
app.include_router(auth.router, prefix="/api", tags=["Autenticação"])
app.include_router(usuario_routes.router, prefix="/api", tags=["Usuários"])
app.include_router(carrinho.router, prefix="/api", tags=["Carrinho"])
app.include_router(pedidos.router, prefix="/api", tags=["Pedidos"])

# =========================
# MongoDB Startup/Shutdown
# =========================
@app.on_event("startup")
async def startup_event():
    await db_module.connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    await db_module.close_mongo_connection()

# =========================
# React Build (Produção)
# =========================
FRONTEND_BUILD_DIR = os.path.join(os.path.dirname(__file__), "frontstatic")

@app.get("/frontend")
async def react_dev_info():
    return {
        "message": "Modo de desenvolvimento: acesse http://localhost:3000 para o frontend React (dev server)."
    }

@app.get("/")
async def root():
    return {"status": "ok", "service": "backend"}

# Montagem de arquivos estáticos do frontend (se existir)
if os.path.isdir(FRONTEND_BUILD_DIR):
    print(f"INFO: Montando arquivos estáticos do frontend em: {FRONTEND_BUILD_DIR}")

    # Monta diretório de arquivos estáticos (JS, CSS, imagens, etc.)
    app.mount("/static", StaticFiles(directory=os.path.join(FRONTEND_BUILD_DIR, "static")), name="static")

    # Monta a raiz do frontend (index.html, favicon, etc.)
    app.mount("/", StaticFiles(directory=FRONTEND_BUILD_DIR, html=True), name="frontend_root")

    # Fallback para SPA (React)
    @app.get("/{full_path:path}")
    async def serve_react_spa(full_path: str):
        index_file = os.path.join(FRONTEND_BUILD_DIR, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"detail": "Frontend index.html não encontrado."}
else:
    print("WARNING: Diretório 'frontstatic' não encontrado. Servindo apenas a API.")
