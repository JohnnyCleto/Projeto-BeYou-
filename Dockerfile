# ===============================
# Backend — FastAPI + MongoDB + MySQL
# ===============================
FROM python:3.12-slim

# Define diretório de trabalho
WORKDIR /app

# -------------------------------------------------------
# Instala dependências do sistema (MySQL + SSL + build)
# -------------------------------------------------------
RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    gcc \
    pkg-config \
    ca-certificates \
    curl \
    dnsutils \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# -------------------------------------------------------
# Copia dependências e instala pacotes Python
# -------------------------------------------------------
COPY requirements.txt .

# Instala dependências (inclui drivers MongoDB e MySQL)
RUN pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir \
        aiomysql \
        pymysql \
        mysqlclient

# -------------------------------------------------------
# Copia o restante da aplicação
# -------------------------------------------------------
COPY ./app /app/app

# -------------------------------------------------------
# Define a variável de ambiente do MongoDB
# (recomendado sobrescrever no docker-compose ou .env)
# -------------------------------------------------------
ENV MONGO_URI="mongodb+srv://joaovitorcleto129_db_user:26052010o@cluster0.rb0y6ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
ENV MONGO_DB="beyou"

# -------------------------------------------------------
# Expõe a porta padrão do FastAPI
# -------------------------------------------------------
EXPOSE 8000

# -------------------------------------------------------
# Comando para iniciar o servidor
# -------------------------------------------------------
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
