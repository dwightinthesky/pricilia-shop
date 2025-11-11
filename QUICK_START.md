# 快速開始指南

這份指南將幫助您在 5 分鐘內啟動 Pricilia Shop 專案。

## 前置需求

確保您已安裝:
- Node.js (v20 或更高)
- pnpm (`npm install -g pnpm`)
- Docker Desktop (用於資料庫)

## 快速啟動步驟

### 1. 啟動資料庫

```bash
docker run --name pricilia-mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=password123 \
  -e MYSQL_DATABASE=pricilia_shop \
  -d mysql:8
```

### 2. 設定環境變數

```bash
cp .env.example .env
```

編輯 `.env`,確保 `DATABASE_URL` 正確:

```env
DATABASE_URL="mysql://root:password123@localhost:3306/pricilia_shop"
```

### 3. 安裝依賴

```bash
pnpm install
```

### 4. 執行資料庫遷移

```bash
pnpm run db:push
node seed-data.mjs
```

### 5. 啟動開發伺服器

```bash
pnpm run dev
```

開啟瀏覽器,前往 `http://localhost:3000`

## 常用指令

```bash
# 開發模式
pnpm run dev

# 建置生產版本
pnpm run build

# 執行生產版本
pnpm run start

# 執行測試
pnpm run test

# 資料庫遷移
pnpm run db:push
```

## 下一步

- 閱讀 `README.md` 了解專案結構
- 閱讀 `MIGRATION_GUIDE.md` 了解如何部署到生產環境
- 查看 `todo.md` 了解專案開發進度
