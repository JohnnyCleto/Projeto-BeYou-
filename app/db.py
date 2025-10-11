# app/db.py
import asyncio
import os
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pymongo.errors import PyMongoError, ServerSelectionTimeoutError

# Carregar variáveis do .env
load_dotenv()

# Configurações do Mongo
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "beyou")

# Inicialização dos objetos globais
client: AsyncIOMotorClient | None = None
db = None

# Logger simples para depuração
logger = logging.getLogger("uvicorn.error")

async def connect_to_mongo(max_retries: int = 30, delay: float = 2.0):
    """
    Conecta-se ao MongoDB com tentativas automáticas de reconexão.
    Cria índices úteis, como o e-mail único na coleção 'usuarios'.
    """
    global client, db

    for attempt in range(1, max_retries + 1):
        try:
            logger.info(f"Tentando conectar ao MongoDB (tentativa {attempt}/{max_retries})...")
            client = AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=3000)

            # Testar a conexão com ping
            await client.admin.command("ping")

            db = client[MONGO_DB]
            logger.info(f"Conectado ao MongoDB — Database: {MONGO_DB}")

            # Criar índice único para e-mail em 'usuarios', se ainda não existir
            try:
                await db.usuarios.create_index("email", unique=True)
                logger.info("Índice 'email' criado/confirmado na coleção 'usuarios'.")
            except PyMongoError as idx_err:
                logger.warning(f" Falha ao criar índice em 'usuarios': {idx_err}")

            return  # sucesso, sai da função

        except (ServerSelectionTimeoutError, PyMongoError) as e:
            logger.warning(f" Erro ao conectar ao MongoDB: {e}")
            if attempt == max_retries:
                logger.error(" Número máximo de tentativas atingido. Falha ao conectar ao MongoDB.")
                raise
            await asyncio.sleep(delay)

async def close_mongo_connection():
    """Fecha a conexão com o MongoDB quando a aplicação for encerrada."""
    global client
    if client:
        client.close()
        logger.info(" Conexão com MongoDB encerrada.")
