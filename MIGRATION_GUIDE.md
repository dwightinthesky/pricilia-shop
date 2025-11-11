# 從 Manus 遷移到獨立開發環境指南

本指南將協助您將 Pricilia Shop 專案從 Manus 平台遷移到您自己的開發環境,並能夠獨立管理和部署。

## 遷移步驟概覽

整個遷移過程包含以下幾個主要步驟:

1. **設定本地開發環境**
2. **上傳專案到 GitHub**
3. **配置資料庫**
4. **設定環境變數**
5. **測試專案運行**
6. **部署到生產環境**

## 步驟一:設定本地開發環境

### 安裝必要軟體

您需要在本地電腦上安裝以下軟體:

**Node.js 和 pnpm**

```bash
# 下載並安裝 Node.js v20 或更高版本
# 前往 https://nodejs.org/ 下載安裝

# 安裝 pnpm
npm install -g pnpm
```

**Git**

```bash
# macOS (使用 Homebrew)
brew install git

# Windows
# 前往 https://git-scm.com/download/win 下載安裝
```

**Docker Desktop** (推薦,用於快速啟動 MySQL)

前往 [Docker 官網](https://www.docker.com/products/docker-desktop/) 下載並安裝適合您作業系統的版本。

### 解壓縮專案檔案

將您下載的 `pricilia-shop-export.zip` 解壓縮到您想要的工作目錄。

```bash
cd ~/projects
unzip pricilia-shop-export.zip
cd pricilia-shop-export
```

## 步驟二:上傳專案到 GitHub

### 建立 GitHub 儲存庫

1. 登入您的 GitHub 帳號
2. 點擊右上角的 "+" 按鈕,選擇 "New repository"
3. 輸入儲存庫名稱,例如 `pricilia-shop`
4. 選擇 Private 或 Public (建議先選 Private)
5. **不要**勾選 "Initialize this repository with a README"
6. 點擊 "Create repository"

### 初始化 Git 並推送程式碼

在專案目錄下執行以下指令:

```bash
# 初始化 Git 儲存庫
git init

# 新增所有檔案
git add .

# 建立第一個 commit
git commit -m "Initial commit: Pricilia Shop project"

# 設定主分支名稱
git branch -M main

# 連結到您的 GitHub 儲存庫 (替換成您的實際 URL)
git remote add origin https://github.com/YOUR_USERNAME/pricilia-shop.git

# 推送到 GitHub
git push -u origin main
```

完成後,您的程式碼就會出現在 GitHub 上。

## 步驟三:配置資料庫

### 使用 Docker 啟動 MySQL

這是最簡單的方式,不需要在本機安裝 MySQL。

```bash
# 啟動 MySQL 容器
docker run --name pricilia-mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=your_secure_password \
  -e MYSQL_DATABASE=pricilia_shop \
  -d mysql:8

# 檢查容器是否正在運行
docker ps
```

### 或使用雲端資料庫服務

您也可以使用雲端 MySQL 服務,例如:

- **PlanetScale**: 提供免費的 MySQL 資料庫
- **Railway**: 提供簡單的資料庫部署
- **AWS RDS**: 企業級資料庫服務

## 步驟四:設定環境變數

### 建立 .env 檔案

在專案根目錄下,複製範例檔案並編輯:

```bash
cp .env.example .env
```

使用文字編輯器開啟 `.env` 檔案,填入您的實際配置:

```env
# 應用程式基本設定
APP_BASE_URL=http://localhost:3000

# 資料庫連線字串
DATABASE_URL="mysql://root:your_secure_password@localhost:3306/pricilia_shop"

# JWT 身份驗證金鑰 (請自行生成一個隨機字串)
JWT_SECRET="your-super-secret-jwt-key-that-is-at-least-32-characters-long"

# Stripe 支付金鑰 (從 Stripe 後台取得)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### 取得 Stripe API 金鑰

1. 前往 [Stripe Dashboard](https://dashboard.stripe.com/)
2. 登入或註冊帳號
3. 在開發者選項中找到 API keys
4. 複製 Secret key 和 Webhook secret

## 步驟五:安裝依賴並執行遷移

### 安裝專案依賴

```bash
pnpm install
```

### 執行資料庫遷移

```bash
# 產生並執行資料庫遷移
pnpm run db:push

# 填充種子資料 (可選)
node seed-data.mjs
```

### 啟動開發伺服器

```bash
pnpm run dev
```

如果一切順利,您應該會看到類似以下的訊息:

```
Server running on http://localhost:3000
```

在瀏覽器中開啟 `http://localhost:3000`,您應該能看到 Pricilia Shop 的首頁。

## 步驟六:部署到生產環境

### 選擇部署平台

您可以選擇以下任一平台進行部署:

**Railway** (推薦,最簡單)

Railway 可以直接從 GitHub 部署,並自動提供資料庫。

1. 前往 [Railway.app](https://railway.app/)
2. 使用 GitHub 帳號登入
3. 點擊 "New Project" → "Deploy from GitHub repo"
4. 選擇您的 `pricilia-shop` 儲存庫
5. Railway 會自動偵測並部署您的專案
6. 在設定中新增環境變數 (DATABASE_URL, JWT_SECRET, STRIPE_SECRET_KEY 等)
7. Railway 會提供一個公開 URL,您的網站就上線了

**Vercel + PlanetScale**

- 前端部署到 Vercel
- 資料庫使用 PlanetScale
- 後端 API 可以使用 Vercel Serverless Functions 或部署到 Railway

**Docker + VPS**

如果您有自己的伺服器,可以使用 Docker 部署:

```bash
# 建置 Docker image
docker build -t pricilia-shop .

# 執行容器
docker run -p 3000:3000 --env-file .env pricilia-shop
```

## 常見問題

### 如何更新程式碼?

在本地修改程式碼後:

```bash
git add .
git commit -m "描述您的修改"
git push
```

如果您使用 Railway 或 Vercel,推送到 GitHub 後會自動重新部署。

### 如何備份資料庫?

```bash
# 使用 Docker 備份
docker exec pricilia-mysql mysqldump -u root -p pricilia_shop > backup.sql

# 恢復備份
docker exec -i pricilia-mysql mysql -u root -p pricilia_shop < backup.sql
```

### 如何新增功能或修改程式碼?

1. 在本地修改程式碼
2. 使用 `pnpm run dev` 測試
3. 確認無誤後 commit 並 push 到 GitHub
4. 部署平台會自動更新

## 移除 Manus 相關依賴

專案中有一個 Manus 相關的套件 `vite-plugin-manus-runtime`,如果您不需要,可以移除:

```bash
pnpm remove vite-plugin-manus-runtime
```

然後編輯 `vite.config.ts`,移除相關的 import 和 plugin 配置。

## 下一步

現在您已經完全掌控了專案,可以:

- 自由修改程式碼和設計
- 新增新功能
- 整合其他第三方服務
- 自行管理部署和更新

如果遇到任何問題,可以參考專案中的 `README.md` 或查閱相關技術文件。
