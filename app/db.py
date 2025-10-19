# app/db.py
import asyncio
import os
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pymongo.errors import PyMongoError, ServerSelectionTimeoutError

load_dotenv()

# -------------------------------
# Configurações do MongoDB
# -------------------------------
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb://beyou:beyou123@mongo:27017"  # default para Docker local
)
MONGO_DB = os.getenv("MONGO_DB", "beyou")

client: AsyncIOMotorClient | None = None
db = None

logger = logging.getLogger("uvicorn.error")


# -------------------------------
# Conexão com o MongoDB
# -------------------------------
async def connect_to_mongo(max_retries: int = 30, delay: float = 2.0):
    """
    Conecta-se ao MongoDB com tentativas de reconexão.
    Cria índice único para email.
    """
    global client, db
    for attempt in range(1, max_retries + 1):
        try:
            logger.info(f"Tentando conectar ao MongoDB ({attempt}/{max_retries})...")
            client = AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=5000)
            await client.admin.command("ping")  # Testa a conexão
            db = client[MONGO_DB]
            logger.info(f"Conectado ao MongoDB — Banco: {MONGO_DB}")

            # Cria índice único no email do usuário
            await db.usuarios.create_index("email", unique=True)
            return
        except (ServerSelectionTimeoutError, PyMongoError) as e:
            logger.warning(f"Erro ao conectar: {e}")
            if attempt == max_retries:
                raise Exception("Não foi possível conectar ao MongoDB") from e
            await asyncio.sleep(delay)


# -------------------------------
# Fechamento da conexão
# -------------------------------
async def close_mongo_connection():
    global client
    if client:
        client.close()
        logger.info("Conexão com MongoDB encerrada.")


# -------------------------------
# Validação do DB antes de usar
# -------------------------------
def check_db():
    """
    Garante que o MongoDB esteja conectado antes de usar.
    """
    global db
    if db is None:
        raise Exception("MongoDB não conectado!")
