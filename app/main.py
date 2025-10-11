from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routers import usuario_routes
from app import db as db_module
import os

app = FastAPI(title="BeYou - FastAPI + MongoDB")

# =========================
# Middleware CORS
# =========================
origins = [
    "http://localhost:3000",  # React Dev
    "http://localhost:3001",  # alternativa
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
app.include_router(usuario_routes.router, prefix="/api", tags=["API"])

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

# Caminho absoluto para a pasta de build do React
# frontend_build_path = os.path.join(os.path.dirname(__file__), "frontstatic")

# Serve os arquivos estáticos (JS, CSS, imagens, etc.)
# app.mount("/frontstatic", StaticFiles(directory=frontend_build_path), name="frontstatic")

# Serve index.html na raiz
""" @app.get("/")
async def serve_react_index():
    index_file = os.path.join(frontend_build_path, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"detail": "index.html não encontrado — certifique-se de que o React foi buildado corretamente."}

# Serve index.html para qualquer rota não encontrada (SPA fallback)
@app.get("/{full_path:path}")
async def serve_react_spa(full_path: str):
    index_file = os.path.join(frontend_build_path, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"detail": "index.html não encontrado — certifique-se de que o React foi buildado corretamente."} """

# =========================
# React Dev Mode Info (opcional)
# =========================
@app.get("/frontend")
async def react_dev_info():
    return {
        "message": "Modo de desenvolvimento: acesse http://localhost:3000 para o frontend React (dev server)."
    }
