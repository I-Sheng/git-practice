1. Project public IP: 54.252.69.107
2. 什麼是 instance type?
    * Instance type 決定了 instance 的 CPU, memory, storage 等設定
3. 什麼是 Nginx？有哪些用途與特性？
    * 可以把 Nginx 當成一個 web server ，但其實他是在做 server side 的 reverse proxy
4. 我使用npm
    * npm(Node Package Manager) 是 Node.js 預設的套件管理工具。幫助使用者解決套件相依性的問題。
    * 選擇的原因是因為對 npm 比較熟悉
5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
    * proxy 是連線過程中的代理者。Nginx 是 Reverse proxy ，處理 Server side 的連線。
    * 主要目的是為了解決 load balance 問題
6. 在 readme 中提供步驟 9 的 Nginx 設定檔
7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
    * 是 AWS 的虛擬防火牆，控制連線的 Port, Prefix 等設定
8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
    * 使用 sudo 可以在暫時切換至 root 權限，有時候需要較高權限時使用，一般不用
9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
    * ssh -i firstKey.pem ubuntu@54.252.69.107 同樣指令，在我 `exit` 一次後就無法登入，尋找問題中。
11. 列出完成本作業時參考的資料
    1. [Fix for SSH Permission Denied (Public Key)](https://www.youtube.com/watch?v=A9CSSbten_s&t=7s)
    2. [Connect to AWS EC2 instance | SSH from Windows | .PEM Key](https://www.youtube.com/watch?v=jIxkbXB6-38&t=469s)
    3. [The NGINX Crash Course](https://www.youtube.com/watch?v=7VAI73roXaY&t=2641s)
    4. [Amazon EC2 Basics & Instances Tutorial](https://www.youtube.com/watch?v=iHX-jtKIVNA)
    5. [View status checks for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_status.html)
12. (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看