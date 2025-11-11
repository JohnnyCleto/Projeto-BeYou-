# app/config.py
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import timedelta
from dotenv import load_dotenv

# ================================
# Carrega variáveis de ambiente
# ================================
load_dotenv()

# ================================
# MongoDB
# ================================
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://joaovitorcleto129_db_user:26052010o@cluster0.rb0y6ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
DB_NAME = os.getenv("MONGO_DB", "beyou")

# ================================
# MySQL (usando SQLAlchemy Async)
# ================================
MYSQL_USER = os.getenv("MYSQL_USER", "root")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD", "Jo@26052010")
MYSQL_HOST = os.getenv("MYSQL_HOST", "beyou-mysql")
MYSQL_PORT = os.getenv("MYSQL_PORT", "3306")
MYSQL_DB = os.getenv("MYSQL_DB", "beyou")
MYSQL_URI = os.getenv("MYSQL_URI", "mysql+aiomysql://root:Jo@26052010@beyou-mysql:3306/beyou?ssl_disabled=true")


# ⚠️ A senha deve estar codificada (ex: '@' → '%40')
# ⚙️ Adiciona ssl_disabled=true para evitar erro de SSL dentro do Docker
MYSQL_URI = os.getenv(
    "MYSQL_URI",
    f"mysql+aiomysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DB}?ssl_disabled=true"
)

# ================================
# Segurança JWT
# ================================
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey_change_me")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

# ================================
# Conexão MongoDB
# ================================
try:
    client = AsyncIOMotorClient(MONGO_URI)
    db = client[DB_NAME]
except Exception as e:
    print(f"❌ Erro ao conectar ao MongoDB: {e}")
    db = None

# ================================
# Função para gerar token JWT
# ================================
def create_access_token_data(data: dict, expires_delta: timedelta | None = None):
    from jose import jwt
    import datetime

    to_encode = data.copy()
    if expires_delta:
        expire = datetime.datetime.utcnow() + expires_delta
    else:
        expire = datetime.datetime.utcnow() + datetime.timedelta(
            minutes=ACCESS_TOKEN_EXPIRE_MINUTES
        )

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
