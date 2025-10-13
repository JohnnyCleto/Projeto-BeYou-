# app/config.py
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "beyou")

SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey_change_me")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]

def create_access_token_data(data: dict, expires_delta: timedelta | None = None):
    from jose import jwt
    to_encode = data.copy()
    if expires_delta:
        expire = __import__("datetime").datetime.utcnow() + expires_delta
    else:
        expire = __import__("datetime").datetime.utcnow() + __import__("datetime").timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
