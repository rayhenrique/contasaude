FROM node:20-alpine

WORKDIR /app

# Instalar dependências de compilação necessárias
RUN apk add --no-cache python3 make g++

COPY package*.json ./

# Instalar todas as dependências com --legacy-peer-deps
RUN npm install --legacy-peer-deps

COPY . .

# Garantir que o build seja executado
RUN npm run build

EXPOSE 3000

# Usar o comando para desenvolvimento com hot-reload e MAX_OLD_SPACE_SIZE
ENV NODE_OPTIONS="--max-old-space-size=4096"
CMD ["npm", "run", "start:dev", "--", "--preserveWatchOutput"] 