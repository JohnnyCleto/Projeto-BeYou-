# app/db.py
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "beyou")

client: AsyncIOMotorClient | None = None
db = None  # will be set to database

async def connect_to_mongo(max_retries: int = 30, delay: float = 1.0):
    global client, db
    for attempt in range(1, max_retries + 1):
        try:
            client = AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=2000)
            # ping to ensure connection
            await client.admin.command("ping")
            db = client[MONGO_DB]
            # create useful indices if missing (email unique for usuarios)
            try:
                await db.usuarios.create_index("email", unique=True)
            except Exception:
                pass
            return
        except Exception as e:
            if attempt == max_retries:
                raise
            await asyncio.sleep(delay)

async def close_mongo_connection():
    global client
    if client:
        client.close()
