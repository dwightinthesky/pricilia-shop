# 多階段建置 Dockerfile

# 階段 1: 建置前端
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# 階段 2: 建置後端
FROM node:20-alpine AS backend-builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --prod
COPY . .

# 階段 3: 生產環境
FROM node:20-alpine
WORKDIR /app

# 安裝 pnpm
RUN npm install -g pnpm

# 複製依賴和建置結果
COPY --from=backend-builder /app/node_modules ./node_modules
COPY --from=frontend-builder /app/dist ./dist
COPY package.json ./
COPY server ./server
COPY shared ./shared
COPY drizzle ./drizzle

# 暴露埠號
EXPOSE 3000

# 啟動應用程式
CMD ["pnpm", "run", "start"]
