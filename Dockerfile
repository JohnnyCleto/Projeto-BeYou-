# ==============================
# Etapa 1 — Build do Frontend
# ==============================
FROM node:20-alpine AS frontend

# Diretório exclusivo para o build do frontend
WORKDIR /frontend

# Copia os arquivos de dependência do React
COPY app/static/package.json ./
COPY app/static/package-lock.json ./

# Instala as dependências do frontend
RUN npm install --legacy-peer-deps

# Copia os arquivos do frontend (src e public)
COPY app/static/public ./public
COPY app/static/src ./src

# Gera o build de produção do React
RUN npm run build


# ==============================
# Etapa 2 — Backend (FastAPI)
# ==============================
FROM python:3.11-slim AS backend

# Define o diretório da aplicação backend
WORKDIR /app

# Copia e instala as dependências do Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia o código-fonte do backend
COPY app/ ./app

# Copia o build do React (gerado na etapa 1) para a pasta que será servida pelo FastAPI
COPY --from=frontend /frontend/build /app/app/static

# Expõe a porta padrão do FastAPI
EXPOSE 8000

# Comando para iniciar a aplicação FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
