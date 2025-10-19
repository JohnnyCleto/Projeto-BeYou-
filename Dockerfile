# Dockerfile-backend
# ==============================
FROM python:3.12-alpine

# Diretório de trabalho do backend
WORKDIR /app

# Copia requirements.txt e instala dependências Python
COPY app/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o backend
COPY app/ ./app

# Expõe porta do FastAPI
EXPOSE 8000

# Comando padrão do backend
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
