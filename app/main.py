# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import usuario_routes
from app import db as db_module
import os

app = FastAPI(title="BeYou - FastAPI + MongoDB")

# =========================
# Middleware CORS
# =========================
origins = [
    "http://localhost:3000",  # porta do React Dev
    "http://localhost:3001",  # caso use outra porta
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

@app.get("/")
async def root():
    return {"message": "🚀 API FastAPI + MongoDB funcionando!"}

# =========================
# React Dev Mode (sem build)
# =========================
# Não é necessário servir index.html ou static files
# Apenas um aviso se alguém acessar a raiz via navegador
@app.get("/frontend")
async def react_dev_info():
    return {
        "message": "React Dev Mode: abra http://localhost:3000 para acessar o frontend."
    }

# =========================
# Eventos FastAPI (MongoDB)
# =========================
@app.on_event("startup")
async def startup_event():
    await db_module.connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    await db_module.close_mongo_connection()
