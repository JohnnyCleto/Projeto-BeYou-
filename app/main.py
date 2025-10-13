# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routes import auth, carrinho, pedidos, usuario_routes
from app import db as db_module
import os

app = FastAPI(title="BeYou - FastAPI + MongoDB")

# =========================
# Middleware CORS
# =========================
origins = [
    "http://localhost:3000",  # Frontend React Dev
    "http://localhost:8888",  # Frontend Nginx Prod
    "*" # Permissão ampla se necessário no ambiente dev/teste
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
# =========================
# 2. Rotas da API
# =========================
# Incluindo a rota 'auth' que criamos
app.include_router(auth.router, prefix="/api", tags=["Autenticação"])

# Incluindo as rotas placeholders (Remova-as quando tiver os arquivos reais)
app.include_router(usuario_routes, prefix="/api", tags=["Usuários"])
app.include_router(carrinho, prefix="/api", tags=["Carrinho"])
app.include_router(pedidos, prefix="/api", tags=["Pedidos"])


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

# rota health
# health check/info
@app.get("/")
async def root():
    return {"status": "ok", "service": "backend"}

# Se o diretório de build existir, monta as rotas estáticas e SPA fallback
if os.path.isdir(FRONTEND_BUILD_DIR):
    print(f"INFO: Montando arquivos estáticos do frontend em: {FRONTEND_BUILD_DIR}")
    
    # Monta os arquivos estáticos (js, css, imagens)
    app.mount("/static", StaticFiles(directory=os.path.join(FRONTEND_BUILD_DIR, "static")), name="static")
    
    # Monta arquivos na raiz (logo, manifest, etc.)
    app.mount("/", StaticFiles(directory=FRONTEND_BUILD_DIR), name="frontend_root")
    
    # Rota de fallback para SPA (Single Page Application)
    @app.get("/{full_path:path}")
    async def serve_react_spa(full_path: str):
        index_file = os.path.join(FRONTEND_BUILD_DIR, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"detail": "Frontend index.html não encontrado."}
else:
    print("WARNING: Diretório 'frontstatic' não encontrado. Servindo apenas a API.")
