# app/config.py
from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "beyou_db")

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB_NAME]   # <- aqui você define explicitamente o nome do banco

