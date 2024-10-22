1. 網址: [www.isheng.xyz](https://www.isheng.xyz)
2. godaddy 購買網域
3. DNS 的 **A record**（Address Record）是 DNS 中的記錄類型，用於將網域解析為對應的IPv4位址
4. DNS 的 **NS record**（Name Server Record）是用來管理網域的 nave server
5. DNS 的 **CNAME record** (canonical name recode) 是一種用於將一個網域名稱指向另一個網域名稱的 DNS（域名系統）記錄。CNAME  記錄是將一個網域名稱指向另一個網域名稱，讓後者負責解析實際的 IP 地址
6. Domain Name vs FQDN vs URL 這三者分別為何？
    * Domain Name 是人類可讀的網站名稱，例如 `example.com`
    * FQDN(Fully qualified domain name): put subdomain with the domain is known as FQDN
    * URL(Uniform Resource Locator): protocal + FQDN + directory + webpage -> point to a resource
7. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
    1. **加密資料傳輸：**HTTP 是不加密的協議，所有的數據在網路上傳輸時都以明文形式進行，這意味著任何人在傳輸過程中攔截這些數據都可以輕易讀取。HTTPS 則通過加密連線來保護資料，保障用戶的資料。
    2. **身份驗證：**SSL/TLS 憑證還可以用來驗證網站的真實性，保證用戶訪問的網站是合法的，而不是一個試圖進行釣魚攻擊或其他惡意行為的偽造網站。
    3. **符合現代網路標準：**許多現代網路功能（如 HTTP/2 和最新的瀏覽器 API）要求網站使用 HTTPS 才能啟用，這些功能可以提高網站的性能和安全性。
