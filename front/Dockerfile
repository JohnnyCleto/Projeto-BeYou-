# ==============================
# Etapa 2 — Build do Frontend
# ==============================
# Etapa 1 — Build do Frontend (React + Vite)
FROM node:20-alpine AS frontend-builder

# Diretório exclusivo para o build do frontend
WORKDIR /app

# Copia os arquivos de dependência do React/Vite
COPY static/package.json ./
COPY static/package-lock.json ./

# Instala as dependências do frontend
RUN npm install

# Copia todos os arquivos do frontend necessários para o build
# Inclui src/, public/, e o index.html exigido pelo Vite
COPY static/public ./public
COPY static/src ./src
COPY static/index.html ./index.html
COPY static/vite.config.* ./   

# Gera o build de produção do Vite (pasta /dist)
RUN npm run build

# ==============================
# Etapa 3 — Servindo com Nginx
# ==============================
# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia os arquivos de build da etapa anterior para o diretório padrão do Nginx
# O Nginx serve por padrão o conteúdo de /usr/share/nginx/html
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx
# OBS: Você deve criar o arquivo 'nginx.conf' na mesma pasta deste Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta padrão do Nginx
EXPOSE 8080

# Comando padrão do Nginx para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
