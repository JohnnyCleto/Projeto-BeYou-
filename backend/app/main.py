# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import usuario_routes
from app import db as db_module

app = FastAPI(title="BeYou - FastAPI + MongoDB")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(usuario_routes.router, prefix="/api", tags=["API"])

@app.get("/")
async def root():
    return {"message": "🚀 API FastAPI + MongoDB funcionando!"}

@app.on_event("startup")
async def startup_event():
    # conecta ao MongoDB (com retries)
    await db_module.connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    await db_module.close_mongo_connection()
