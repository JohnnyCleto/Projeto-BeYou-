# app/db.py
import asyncio
import os
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pymongo.errors import ServerSelectionTimeoutError, PyMongoError

load_dotenv()

logger = logging.getLogger("uvicorn.error")

MONGO_URI = os.getenv(
    "MONGO_URI",
    "MONGO_URI=mongodb+srv://joaovitorcleto129_db_user:26052010o@cluster0.rb0y6ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
MONGO_DB = os.getenv("MONGO_DB", "beyou")

client: AsyncIOMotorClient | None = None
db = None

async def connect_to_mongo(max_retries: int = 10, delay: float = 3.0):
    global client, db
    for attempt in range(1, max_retries + 1):
        try:
            logger.info(f"🔌 Conectando ao MongoDB Atlas (tentativa {attempt})...")
            client = AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=5000)
            await client.admin.command("ping")
            db = client[MONGO_DB]
            # índice único email
            await db.usuarios.create_index("email", unique=True)
            logger.info(f"✅ Conectado ao MongoDB Atlas: {MONGO_DB}")
            return
        except (ServerSelectionTimeoutError, PyMongoError) as e:
            logger.warning(f"⚠️ Falha na conexão: {e}")
            if attempt == max_retries:
                raise Exception("❌ Não foi possível conectar ao MongoDB Atlas.") from e
            await asyncio.sleep(delay)

async def close_mongo_connection():
    global client
    if client:
        client.close()
        logger.info("🔒 Conexão com MongoDB Atlas encerrada.")

def get_db():
    if db is None:
        raise Exception("MongoDB Atlas não conectado! Use 'connect_to_mongo()' no startup do FastAPI.")
    return db
