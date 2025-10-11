# ==============================
# Etapa 2 — Build do Frontend
# ==============================
FROM node:20-alpine AS frontend-builder

# Diretório exclusivo para o build do frontend
WORKDIR /app

# Copia os arquivos de dependência do React
COPY static/package.json ./
COPY static/package-lock.json ./

# Instala as dependências do frontend
RUN npm install --legacy-peer-deps

# Copia os arquivos do frontend (src e public)
COPY static/public ./public
COPY static/src ./src

# Gera o build de produção do React
RUN npm run build

# ==============================
# Etapa 3 — Servindo com Nginx
# ==============================
# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia os arquivos de build da etapa anterior para o diretório de serviço do Nginx
# O Nginx por padrão serve arquivos de /usr/share/nginx/html
COPY --from=frontend-builder /app/build /usr/share/nginx/html

# Copia um arquivo de configuração customizado do Nginx
# OBS: Você deve criar o arquivo 'nginx.conf' na mesma pasta do Dockerfile
# para que essa linha funcione corretamente.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta padrão do Nginx
EXPOSE 8080

# Comando padrão do Nginx para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]