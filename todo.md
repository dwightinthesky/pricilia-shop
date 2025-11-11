# WeWork 電子憑證商店 - 開發清單

## 資料庫設計
- [x] 設計品牌表（brands）
- [x] 設計產品分類表（categories）
- [x] 設計產品表（products）
- [x] 設計憑證代碼表（vouchers）
- [x] 設計訂單表（orders）
- [x] 設計訂單項目表（orderItems）
- [x] 執行資料庫遷移

## 管理後台功能
- [x] 品牌管理 API（新增、編輯、刪除品牌）
- [x] 產品分類管理 API
- [x] 產品管理 API（新增、編輯、刪除產品）
- [x] 憑證代碼批次匯入 API
- [x] 訂單管理和查詢 API
- [x] 商店公開 API
- [x] 管理後台介面

## 前端商店功能
- [x] 首頁設計和產品展示
- [x] 產品列表頁（支援分類篩選）
- [x] 產品詳情頁
- [x] 購物車功能
- [x] 結帳流程頁面

## 訂單和憑證系統
- [x] 訂單建立 API
- [x] 訂單狀態管理
- [x] 憑證自動分配邏輯
- [x] 用戶訂單查詢頁面
- [x] 憑證顯示和下載功能

## 支付整合
- [x] 整合 Stripe 支付（支援 Apple Pay、Visa 等）
- [x] Stripe Checkout Session 建立
- [x] Stripe Webhook 處理
- [x] 訂單建立和完成流程
- [x] 憑證自動分配

## 用戶體驗優化
- [x] 響應式設計調整
- [x] 載入狀態和錯誤處理
- [x] 空狀態設計
- [x] 成功提示和通知

## 測試和部署
- [x] 功能測試
- [x] 建立初始檢查點

## 多語言支援
- [x] 安裝 i18next 和相關套件
- [x] 配置 i18n 框架
- [x] 建立英文翻譯檔案
- [x] 建立法文翻譯檔案
- [x] 添加語言切換器組件
- [x] 更新首頁使用翻譯
- [x] 更新產品頁面使用翻譯
- [x] 更新購物車和結帳頁面使用翻譯
- [x] 更新訂單頁面使用翻譯
- [x] 更新管理後台使用翻譯
- [x] 測試語言切換功能

## 品牌更新
- [x] 上傳 Pricilia logo 到專案
- [x] 更新 APP_LOGO 設定
- [x] 更新網站名稱為 Pricilia
- [x] 更新翻譯檔案中的品牌名稱
- [x] 測試品牌顯示

## Logo 尺寸調整
- [x] 調整首頁 logo 尺寸
- [x] 測試 logo 顯示效果

## 產品類別更新
- [x] 更新英文翻譯：WeWork Gift Card → Tickets
- [x] 更新法文翻譯：Carte-cadeau WeWork → Billets
- [x] 更新資料庫中的產品分類名稱
- [x] 測試產品分類顯示

## Logo 更新
- [x] 替換為新的 Pricilia Shop logo
- [x] 測試 logo 顯示效果

## 產品名稱簡化
- [x] 更新英文翻譯：Other Brand Gift Cards → Gift Cards
- [x] 更新法文翻譯：Autres cartes-cadeaux → Cartes-cadeaux
- [x] 測試產品分類顯示

## Gift Cards 描述更新
- [ ] 更新英文描述加入品牌範例
- [ ] 更新法文描述加入品牌範例
- [ ] 測試描述顯示
