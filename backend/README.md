## dependencies 與 devDependencies 區別
* 當使用"npm install"時套件放在dependencies 與 devDependencies都會被下載
* dependencies: 當這個套件被build成產品後，仍需要被使用
* devDependencies: 主要用於方便開發與測試過程 (ex. typescript，build成產品後就不需要)
## package.json 中的 scripts 這個區塊使用方式
* scripts 是在定義腳本，可以使用npm run __ 來執行，舉例如下:
* package.json如下:
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
* 使用方式 : 透過以下的使用方式，即可執行寫在scripts (JS object) 中對應 `test` key 值得指令
```bash
npm test
```
或
```bash
npm run test
```

## Port number 以環境變數來設定
1. 更改app.js
```javascript
const port = process.env.PORT || 3000;
```
2. 設定環境變數
```package.json
export PORT=4000
```
3. 重新啟動app.js
```bash
node app.js
```
## GitHub Repository上傳
### 應該上傳的檔案
1. package.json 和 package-lock.json
    * 包含專案相關dependencies及其他相關資訊，別人需要這些檔案來使用你的專案
2. 應用程式程式碼
    * 應用程式主要內容，必須上傳
3. 配置檔（非敏感資訊）
    * 例如 `.env.example` ，通常是一個範例環境變數檔，包含環境變數的鍵值名稱，但不包含實際的敏感值。
4. 靜態資源
    * 例如 `/assets` 通常用來存放各種靜態資源
### 不應該上傳的檔案
* 通常使用 `.gitignore` 來排除它們
1. 敏感資訊檔案
    * 例如 `.env` 存放專案相關API key
2. `node_mudules` 資料夾
    * dependencies 會記錄在 package.json，因此無須上傳 node_mudules
3. 日誌文件
    * 例如 `/logs` 資料夾中產生的伺服器運行日誌，通常包含開發過程中的運行資訊，應避免上傳，對專案使用者並沒有用處
4. 開發過程中的暫存檔
    * 例如編譯過程中的中間檔案、IDE 產生的配置檔（例如 .`vscode/` `.idea/`） macOS 產生的 `.DS_Store` 或 linux 產生的 `*.swp` 等暫時性或系統檔案

### 決策要素
* 敏感資訊保護：避免將包含敏感數據的檔案上傳，保護專案安全。
* 專案的可重現性：確保其他開發者能夠在不需要額外配置的情況下，在不同環境中重現並運行專案。
* 儲存空間及版本控制管理：避免將大型的二進制文件或自動生成的檔案上傳，減少 Git 儲存庫的體積，讓版本控制更加簡潔。
## require (CJS) vs. import/export(ESM)

| Feature                           | CommonJS (CJS)                    | ECMAScript Modules (ESM)                 |
|-----------------------------------|-----------------------------------|------------------------------------------|
| **Synchronous Loading**           | Yes (Modules are loaded synchronously) | No (Modules are loaded asynchronously) |
| **Tree Shaking Support**          | No (Whole module is bundled)      | Yes (Unused exports can be excluded)    |
| **Dynamic Imports**               | Yes (Supports dynamic `require()`) | Limited (`import()` for dynamic import, but primarily static) |
| **Browser Compatibility**         | Not directly compatible without a bundler | Natively supported in modern browsers and Node.js (with `.mjs` extension or `"type": "module"`) |
| **Syntax Style**                  | Verbose with `require()` and `module.exports` | Concise with `import` and `export` keywords |
| **Scope**                         | Modules have their own scope       | Modules are scoped and have strict mode by default |
| **Compile-Time Resolution**       | No (Dynamic and runtime evaluation) | Yes (Imports are resolved at compile time) |

### 主要區別
1. CJS synchronous vs. ESM asynchronous 
    * 在瀏覽器中ESM在import時可以做別的事，例如網頁中載入圖片、文字等資源，而CJS則必須等待
2. CJS dynamic import vs. ESM static import 
    * CJS 是在 runtime 運行，而 ESM 則大多用於 static import 代表可以在compile time 載入，節省 runtime 運行時間
## localhost
* localhost 是當自己的電腦在當 server 時， client 端輸入的 address name
* localhost 就是 127.0.0.1 (透過DNS轉換)
## curl
* curl 是被設計來對 server 端的資料進行存取的 CLI 工具
### curl測試網路連線
* 因為穩定性，使用 google 的網站進行測試
```bash
curl -I https://www.google.com/
```
```output
HTTP/2 200
content-type: text/html; charset=ISO-8859-1
content-security-policy-report-only: object-src 'none';
...etc
```
* 200 代表連線成功
### 參數有哪些
* 使用 `man curl` 發現他的參數真的非常多，這邊選擇幾個與HTTP相關的介紹
1. `curl -I` : 只取得 HTTP header
2. `curl -H` : 附帶額外的 header 在 request 中，格式是 `-H, --header <header/@file>`
3. `curl -i` : 將 HTTP response 也放入 output 中
4. `curl -u` : 以一個 user 的身分對資源進行請求， 格式是 `-u, --user <user:password>`
5. `curl --http2` : 指定 HTTP 版本 2


## 參考資料
* [Package JSON Demystified - Dependencies and DevDependencies](https://www.youtube.com/watch?v=fbcMoP8C3tc)
* [What is CommonJS and ESM format?](https://www.linkedin.com/pulse/what-commonjs-esm-format-manoj-shrestha/)
* [What is Localhost? Local Host IP Address Explained](https://www.freecodecamp.org/news/what-is-localhost/)
