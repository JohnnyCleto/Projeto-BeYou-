# ===============================
# Backend — FastAPI + MongoDB
# ===============================
FROM python:3.12-slim

WORKDIR /app

# Instala dependências do sistema (certificados, build tools)
RUN apt-get update && apt-get install -y \
    build-essential \
    ca-certificates \
    curl \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copia os arquivos da aplicação
COPY ./app /app/app

# Instala dependências Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Porta padrão FastAPI
EXPOSE 8000

# Comando para rodar o app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
