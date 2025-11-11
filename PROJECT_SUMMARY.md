# Pricilia Shop 專案摘要

## 專案概述

**Pricilia Shop** (原名 WeWork 電子憑證商店) 是一個功能完整的電子商務平台,專門用於銷售電子憑證、禮品卡和門票。該專案採用現代化的全端技術棧,包含前端、後端、資料庫和支付整合。

## 核心功能

專案已實現以下核心功能模組:

### 商店前台
- 產品展示首頁,支援分類瀏覽
- 產品詳情頁面,包含完整的產品資訊
- 購物車系統,支援多商品管理
- 結帳流程,整合 Stripe 支付
- 訂單查詢和憑證下載功能
- 多語言支援 (英文、法文)

### 管理後台
- 品牌管理 (新增、編輯、刪除)
- 產品分類管理
- 產品管理 (庫存、價格、描述)
- 憑證代碼批次匯入
- 訂單管理和查詢

### 資料庫設計
- **brands**: 品牌資料表
- **categories**: 產品分類表
- **products**: 產品資料表
- **vouchers**: 憑證代碼表
- **orders**: 訂單表
- **orderItems**: 訂單項目表

## 技術架構

### 前端技術
- **框架**: React 19 + Vite 7
- **語言**: TypeScript 5.9
- **路由**: Wouter 3.x
- **狀態管理**: TanStack Query (React Query)
- **UI 框架**: Tailwind CSS 4 + shadcn/ui
- **UI 元件**: Radix UI (完整的無障礙元件庫)
- **動畫**: Framer Motion
- **國際化**: i18next + react-i18next

### 後端技術
- **執行環境**: Node.js 20+
- **框架**: Express 4
- **API 層**: tRPC 11 (端到端型別安全)
- **資料庫**: MySQL 8
- **ORM**: Drizzle ORM
- **身份驗證**: JWT (jose)
- **支付**: Stripe
- **雲端儲存**: AWS S3 (用於圖片上傳)

### 開發工具
- **套件管理**: pnpm
- **建置工具**: Vite + esbuild
- **測試框架**: Vitest
- **程式碼格式化**: Prettier
- **型別檢查**: TypeScript

## 專案結構

根據 `tsconfig.json` 的配置,專案採用以下結構:

```
pricilia-shop/
├── client/              # 前端應用程式
│   ├── src/            # React 元件和頁面
│   └── public/         # 靜態資源
├── server/             # 後端 API 伺服器
│   └── _core/          # 伺服器核心程式碼
├── shared/             # 前後端共用程式碼
├── drizzle/            # 資料庫 schema 和遷移
├── attached_assets/    # 附加資源 (如 logo)
└── dist/               # 建置輸出目錄
```

## 環境需求

### 必要環境變數
- `DATABASE_URL`: MySQL 資料庫連線字串
- `JWT_SECRET`: JWT 簽章密鑰
- `STRIPE_SECRET_KEY`: Stripe 支付密鑰
- `STRIPE_WEBHOOK_SECRET`: Stripe Webhook 密鑰
- `APP_BASE_URL`: 應用程式基礎 URL

### 開發環境
- Node.js v20 或更高版本
- pnpm (套件管理器)
- MySQL 8 (或相容的資料庫)
- Docker (可選,用於快速啟動資料庫)

## 開發進度

根據 `todo.md`,專案已完成以下功能:

✅ **已完成**
- 資料庫設計和遷移
- 管理後台 API 和介面
- 前端商店功能 (首頁、產品列表、詳情、購物車、結帳)
- 訂單和憑證系統
- Stripe 支付整合
- 多語言支援 (英文、法文)
- 品牌更新為 Pricilia
- 響應式設計和 UX 優化

⏳ **待完成**
- Gift Cards 描述更新 (加入品牌範例)

## 部署建議

專案可部署到以下平台:

1. **Railway** (推薦): 支援全端應用,自動提供資料庫
2. **Vercel + PlanetScale**: 前端部署到 Vercel,資料庫使用 PlanetScale
3. **Docker + VPS**: 使用提供的 Dockerfile 部署到任何 VPS
4. **AWS/GCP/Azure**: 企業級雲端部署

## 關鍵依賴版本

| 套件 | 版本 |
| :--- | :--- |
| react | 19.1.1 |
| vite | 7.1.7 |
| typescript | 5.9.3 |
| @trpc/server | 11.6.0 |
| drizzle-orm | 0.44.5 |
| express | 4.21.2 |
| stripe | 19.3.0 |
| tailwindcss | 4.1.14 |

## 移除 Manus 依賴

專案中包含一個 Manus 平台相關的套件:
- `vite-plugin-manus-runtime` (v0.0.56)

如果您要完全獨立運行,可以移除此套件並調整 `vite.config.ts` 中的相關配置。

## 後續開發建議

1. **完善測試**: 目前專案已配置 Vitest,但測試覆蓋率可以進一步提升
2. **API 文件**: 可以使用 tRPC 的文件生成工具建立 API 文件
3. **效能優化**: 實作圖片懶載入、程式碼分割等優化
4. **SEO 優化**: 加入 meta tags、sitemap 等 SEO 功能
5. **監控和日誌**: 整合 Sentry 或其他監控工具
6. **CI/CD**: 設定 GitHub Actions 進行自動化測試和部署

## 授權

專案採用 MIT 授權,您可以自由使用、修改和分發。
