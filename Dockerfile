# ============================================================
# Etapa 1 — Build do Frontend (React)
# ============================================================
FROM node:20-alpine AS frontend-builder

# Define diretório de trabalho
WORKDIR /front

# Copia apenas arquivos necessários primeiro (melhora cache)
COPY front/package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código do frontend
COPY front/ ./

# Gera build de produção
RUN npm run build

# ============================================================
# Etapa 2 — Backend (FastAPI)
# ============================================================
FROM python:3.12-slim AS backend

# Define diretório de trabalho
WORKDIR /app

# Evita geração de pyc e melhora logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Atualiza sistema e instala dependências básicas
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    curl \
    git \
    pkg-config \
    default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*


    
# Copia arquivos do backend
COPY ./app ./app
COPY ./requirements.txt ./requirements.txt

# Instala dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia o build do frontend gerado na etapa anterior
COPY --from=frontend-builder /front/dist ./app/frontstatic

# Cria diretório de uploads
RUN mkdir -p /app/app/uploads

# Expõe porta do FastAPI
EXPOSE 8000

# Define comando padrão
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
