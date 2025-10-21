# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import db as db_module
import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routers import auth, carrinho, pedidos, usuario_routes
from app import db as db_module

app = FastAPI(title="BeYou - FastAPI + MongoDB Atlas")

# ------------------------
# Middleware CORS
# ------------------------
origins = ["http://localhost:3000", "http://localhost:8000", "*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------
# Rotas de API
# ------------------------
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(usuario_routes.router, prefix="/api", tags=["Usuários"])
app.include_router(carrinho.router, prefix="/api", tags=["Carrinho"])
app.include_router(pedidos.router, prefix="/api", tags=["Pedidos"])

# ------------------------
# Conexão com MongoDB Atlas
# ------------------------
@app.on_event("startup")
async def startup_event():
    await db_module.connect_to_mongo()
    if db_module.db is None:
        raise Exception("Falha na conexão com MongoDB Atlas")

@app.on_event("shutdown")
async def shutdown_event():
    await db_module.close_mongo_connection()

# ------------------------
# Frontend React opcional
# ------------------------
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
    print("⚠️ Diretório frontstatic não encontrado. Servindo apenas a API.")

# ------------------------
# Health check
# ------------------------
@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "backend"}
