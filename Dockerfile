# ==============================
# Backend (FastAPI)
# ==============================
FROM python:3.11-slim AS backend

# Instalar certificados e dependências SSL
RUN apt-get update && apt-get install -y \
    ca-certificates \
    openssl \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Define o diretório da aplicação backend
WORKDIR /app

# Copia e instala as dependências do Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copia o código-fonte do backend
COPY app/ ./app

# Expõe a porta padrão do FastAPI
EXPOSE 8000

# Comando para iniciar a aplicação FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
