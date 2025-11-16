# ============================== 
# Etapa 1 — Build do Frontend (React + Vite)
# ==============================
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# 🔹 Copia apenas dependências primeiro
COPY package.json ./ 
COPY package-lock.json ./ 

# Instala dependências
RUN npm install

# Copia todos os arquivos do frontend
COPY public ./public
COPY src ./src
COPY index.html ./index.html
COPY vite.config.* ./

# Build de produção do Vite
RUN npm run build

# ============================== 
# Etapa 2 — Servindo com Nginx
# ==============================
FROM nginx:alpine

# Remove configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia build da etapa anterior
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

# Copia configuração customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe porta do Nginx
EXPOSE 8080

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
