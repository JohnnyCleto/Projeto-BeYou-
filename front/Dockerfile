# Dockerfile-frontend
# ==============================
# Etapa 1 — Build do Frontend (React + Vite)
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copia package.json e package-lock.json
COPY static/package*.json ./

# Instala dependências
RUN npm install

# Copia todo o conteúdo do frontend
COPY static/ .

# Gera o build de produção do Vite
RUN npm run build

# ==============================
# Etapa 2 — Servir frontend via Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove configuração default do Nginx
RUN rm -f /etc/nginx/conf.d/default.conf

# Copia build do Vite para Nginx
COPY --from=frontend-builder /app/dist .

# Copia configuração customizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
