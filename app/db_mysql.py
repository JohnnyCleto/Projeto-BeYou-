# app/db_mysql.py
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base

# ============================================================
# Configurações MySQL
# ============================================================
MYSQL_USER = os.getenv("MYSQL_USER", "root")
MYSQL_PASSWORD = os.getenv("MYSQL_ROOT_PASSWORD", "Jo@26052010")  # password com @
MYSQL_HOST = os.getenv("MYSQL_HOST", "beyou-mysql")
MYSQL_PORT = os.getenv("MYSQL_PORT", "3306")
MYSQL_DB = os.getenv("MYSQL_DB", "beyou")

# ============================================================
# Conexão com MySQL via SQLAlchemy + aiomysql
# ============================================================
DATABASE_URL = os.getenv(
    "MYSQL_URI",
    f"mysql+aiomysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DB}"
)

engine = create_async_engine(DATABASE_URL, echo=False, future=True)
AsyncSessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)
Base = declarative_base()

# ============================================================
# Conectar ao MySQL e criar tabelas (se necessário)
# ============================================================
async def connect_to_mysql():
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        print("✅ Conectado ao MySQL")
    except Exception as e:
        print(f"❌ Erro MySQL: {e}")

# ============================================================
# Fechar conexão com MySQL
# ============================================================
async def close_mysql_connection():
    await engine.dispose()
    print("🔌 MySQL desconectado")

# ============================================================
# Fornecer sessão do banco para rotas/CRUD
# ============================================================
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
