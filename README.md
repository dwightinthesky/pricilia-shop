# Pricilia Shop (原 WeWork 電子憑證商店)

這是一個功能完整的電子商務網站,用於銷售電子憑證和禮品卡。專案前端使用 React (Vite) 和 TypeScript 構建,後端使用 Node.js、Express 和 tRPC,資料庫為 MySQL,並採用 Drizzle ORM 進行操作。

## 專案特色

- **現代化技術棧**: 使用 Vite、React、TypeScript、Tailwind CSS 等最新前端技術。
- **全端 tRPC**: 提供端到端型別安全的 API 層。
- **資料庫 ORM**: 使用 Drizzle ORM 進行資料庫操作和遷移。
- **UI 元件庫**: 基於 shadcn/ui 和 Radix UI,提供高品質、可訪問的 UI 元件。
- **支付整合**: 已整合 Stripe 進行線上支付。
- **多語言支援**: 使用 i18next 實現多語言功能。

## 技術棧

| 類別 | 技術 |
| :--- | :--- |
| **前端** | React, Vite, TypeScript, Tailwind CSS, Wouter |
| **後端** | Node.js, Express, tRPC, tsx |
| **資料庫** | MySQL, Drizzle ORM |
| **UI** | shadcn/ui, Radix UI, Tailwind CSS |
| **測試** | Vitest |
| **部署** | Docker (建議) |
| **套件管理**| pnpm |

## 環境準備

在開始之前,請確保您的開發環境已安裝以下軟體:

- **Node.js**: v20.x 或更高版本
- **pnpm**: `npm install -g pnpm`
- **Git**
- **Docker**: (推薦) 用於快速啟動 MySQL 資料庫

## 專案設定指南

### 1. 取得程式碼

您可以將此專案包解壓縮後,使用 Git 初始化並上傳到您自己的 GitHub 儲存庫。

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# git remote add origin <您的 GitHub 儲存庫 URL>
# git push -u origin main
```

### 2. 安裝依賴

在專案根目錄下,使用 `pnpm` 安裝所有依賴項。

```bash
pnpm install
```

### 3. 設定環境變數

專案需要一個 `.env` 檔案來配置資料庫連線和其他密鑰。請在根目錄建立一個 `.env` 檔案,並參考 `.env.example` 的內容填寫。

```bash
cp .env.example .env
```

接著,編輯 `.env` 檔案,填入您的實際配置,特別是 `DATABASE_URL`、`STRIPE_SECRET_KEY` 等。

### 4. 啟動資料庫

推薦使用 Docker 快速啟動一個 MySQL 服務。

```bash
docker run --name mysql-dev -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your_password -e MYSQL_DATABASE=pricilia_shop -d mysql:8
```

請確保您的 `DATABASE_URL` 與 Docker 的設定一致。

### 5. 資料庫遷移與填充

執行以下指令來建立資料庫結構和填充初始資料。

```bash
# 產生並執行資料庫遷移
pnpm run db:push

# 填充種子資料 (可選)
node seed-data.mjs
```

### 6. 啟動開發伺服器

一切就緒後,您可以啟動開發伺服器。

```bash
pnpm run dev
```

伺服器將在 `http://localhost:3000` (或您指定的埠號) 上運行。

## 主要指令

| 指令 | 描述 |
| :--- | :--- |
| `pnpm run dev` | 啟動開發伺服器,支援熱重載。 |
| `pnpm run build` | 建置前端和後端程式碼,用於生產環境。 |
| `pnpm run start` | 在生產模式下啟動已建置的應用程式。 |
| `pnpm run test` | 執行單元測試和整合測試。 |
| `pnpm run db:push`| 根據 Drizzle schema 產生並執行資料庫遷移。 |

## 專案結構

```
.
├── client/         # 前端 React 應用程式
│   ├── public/
│   └── src/
├── server/         # 後端 Express 和 tRPC 伺服器
├── shared/         # 前後端共用的程式碼 (例如: 型別定義)
├── drizzle/        # Drizzle ORM 遷移檔案
├── package.json    # 專案依賴與指令
├── tsconfig.json   # TypeScript 設定
├── vite.config.ts  # Vite 設定
└── README.md       # 專案說明文件
```

## 部署指南

您可以將此專案部署到任何支援 Node.js 的雲端平台。

- **後端**: 可以打包成 Docker image,部署到 Railway、Heroku 或 AWS 等平台。
- **前端**: `pnpm run build` 會將靜態檔案輸出到 `dist/public` 目錄,您可以將其部署到 Vercel、Netlify 或任何靜態網站託管服務。

建議將前後端一起部署,以避免處理 API 路由和 CORS 問題。
