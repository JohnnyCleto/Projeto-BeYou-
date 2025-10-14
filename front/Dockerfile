# ==============================
# Etapa 1 — Build do Frontend (React + Vite)
# ==============================
FROM node:20-alpine AS frontend-builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (para cache eficiente)
COPY static/package.json static/package-lock.json ./

# Instala dependências do frontend
RUN npm ci

# Copia todo o conteúdo do frontend (src, public, index.html, etc)
COPY static/ .

# Gera o build de produção do Vite
RUN npm run build

# ==============================
# Etapa 2 — Servindo com Nginx
# ==============================
FROM nginx:alpine

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o build gerado para o diretório padrão do Nginx
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

# Copia o arquivo customizado de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta padrão do Nginx
EXPOSE 8080

# Comando padrão do Nginx para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
