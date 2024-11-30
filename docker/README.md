# Task
[Task Description](https://lightda-tw.notion.site/20241128-W12-8-14b2ceabc70c80c1879df943e4fa7d0a#14b2ceabc70c811493b4feac697542de)

## Docker Container
### Container 的建立、列表與移除，指定名字與查看
#### 觀察以下指令的執行過程與結果
```bash
docker container run --name {your name} alpine echo "hello world"
```
* --name [name]: name the container (啟動時指定名字)
* alpine: [image]
* echo "hello world" 是啟動這個 container 的 process
    * In the host environment it is a normal process, but in container environment it is the process PID 1. Therefore, while "hello world" is printed, the container is closed.
![fig1](https://github.com/user-attachments/assets/3c6be8fa-5c4d-4acf-9695-a4e33c0b2136)

##### Note
```bash
docker start -a alpine
# -a: link the output to the host terminal
```

#### 練習基本指令
```bash
# Check the containers
docker container ls
docker container ls -a

# Stop container
docker container stop {container id or id}

# Remove container
docker container rm {container name or id}
```
#### 觀察以下兩個指令執行後的差異
```bash
docker container run alpine echo "hello world"  # Container exist after echoing
docker container run --rm alpine echo "hello world" # Container removed after echoing
```

### 前景與背景模式
#### 前景執行
```bash
docker container run -it nginx bash
```
* run 的時候沒有指定 COMMAND (CMD)，那就是用預設的 COMMAND
* -i interactive 啟動互動模式，保持標準輸入的開放
* -t tty 讓 Docker 分配一個虛擬終端機(pseudo-TTY)，並且綁定到容器的標準輸出上。
* 此時會建立一個虛擬終端機，並且啟動互動模式，也就是你現在「在 container 裡」
* 離開的話，使用指令 `exit`
![fig2](https://github.com/user-attachments/assets/a9b4465e-1dc1-4d8e-a2af-0a9aae91f2be)

#### Detach mode (背景執行模式)
```bash
docker container run -d nginx
# Check the result
docker container ls
```
* -d: Run in detach mode
![fig3](https://github.com/user-attachments/assets/dc0111d2-8698-481b-8402-d5a31f871ad3)

#### detach 模式看不到程式輸出的結果？
##### 觀察 container 裡 processes 的 stdout 與 stderr
```bash
docker container logs {container id or name}
```
![fig4](https://github.com/user-attachments/assets/1e20c0e3-6d94-4cac-adf7-08ac17cc2eed)

##### 「進入」這個 container
```bash
docker container exec -it {container id or name} bash
```
![fig5](https://github.com/user-attachments/assets/f62f387f-1705-4198-bd7a-2f2f8b4aae87)

#### 實驗
##### ubuntu 這個 image 如果用 detach 模式啟動會怎麼樣？
```bash
docker container run -d ubuntu
```
![fig6](https://github.com/user-attachments/assets/f6b151fd-ea17-4ae6-9576-f2c5afbee11d)

##### 你觀察到什麼？container 有被成功啟動嗎？為什麼?
* `ubuntu` that don’t have a long-running process specified
```bash
# Solution
docker container run -it --name ubuntu1 ubuntu /bin/bash
```
###### Start the container again
```bash
docker container start -ai ubuntu
```
* -a, --attach :Attach STDOUT/STDERR and forward signals
* -i, --interactive :Attach container's STDIN

![fig7](https://github.com/user-attachments/assets/d6ac124a-45dd-4165-87a3-1f217a216dc7)

### 環境變數
#### 透過參數 -e 在啟動 container 時，注入環境變數
```bash
docker container run -it --rm -e DB_HOST=1.2.3.4 -e DB_USERNAME=tester -e DB_PASSWORD=1234 alpine

# env 可以印出目前有哪些環境變數，觀察看看是否有 DB_HOST, DB_USERNAME 跟 DB_PASSWORD
> env
```
![fig8](https://github.com/user-attachments/assets/63a4b5ab-8d06-423e-9f0e-201ab07f00bc)

## Docker Image
### image 的列表與刪除
#### 基礎建立及刪除
```bash
# 列出 image
docker image ls
## 舊版指令 docker images
# 刪除 image
docker image rm [image name]
## 舊版指令 docker rmi
```
<!--![fig9](https://github.com/user-attachments/assets/0a3ec505-7151-4a84-b136-6ad3e7bae7dc)-->
<img src="https://github.com/user-attachments/assets/0a3ec505-7151-4a84-b136-6ad3e7bae7dc" alt="fig9" style="width:800px;" />

#### image tag
* image name: 完整的格式為 `Host:PortNumber:namespace/repository:tag`
```bash
# docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
docker image tag nginx mytest
docker image tag nginx nginx:v1234
## Observation:
docker image ls
## Although repository or tag is not the same， ID is the same
```

<img src="https://github.com/user-attachments/assets/806c1848-77d2-4e2e-abec-ed8db8b80429" alt="fig10" style="width:500px;" /><br>


* docker image tag: Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

### image 與 container 的關係
* 來自同個 image 的 container 互相獨立
* 實驗: 在一個 container 新增檔案，不會出現在另一個 container
```bash
docker container run -it alpine ash
> touch a.txt
# Another terminal
docker container run -it alpine ash
> ls
```
![fig11](https://github.com/user-attachments/assets/f29ec8ca-f96f-49b1-8a41-7b44a73ace0e)

### commit to image
#### 把 container commit 回 image
```bash
docker container commit {container hash id} {new image name}
```
<!--![fig12](https://github.com/user-attachments/assets/ce013f59-70e1-492c-89fa-2fb521be76f6)-->
<img src="https://github.com/user-attachments/assets/ce013f59-70e1-492c-89fa-2fb521be76f6" alt="fig12" style="width:80%;" /><br>
#### 觀察 image 的「歷史紀錄」
```bash
docker image history {image id}
```
<!--![fig13](https://github.com/user-attachments/assets/042ea940-ee66-4495-bc00-0e2ed8a0c0bc)-->
<img src="https://github.com/user-attachments/assets/042ea940-ee66-4495-bc00-0e2ed8a0c0bc" alt="fig10" style="width:80%;" /><br>
#### 把 image 存成檔案
```bash
docker image save alpine -o alpine.tar
docker image rm alpine
docker image load -i alpine.tar
```
<!--![fig14](https://github.com/user-attachments/assets/4bc71740-53c6-4d2c-a312-6d94ddfbf555)-->
<img src="https://github.com/user-attachments/assets/4bc71740-53c6-4d2c-a312-6d94ddfbf555" alt="fig10" style="width:60%;" /><br>

### pull image 的觀察 - image layers
* 兩次執行的結果有何差異?
```bash
docker image rm nginx
docker container run --rm nginx echo "hello world"
docker container run --rm nginx echo "hello world"
```
* docker container run --rm: 是當這個 container stop 時，自動移除 (rm: remove)
![fig15](https://github.com/user-attachments/assets/f22e89ab-f3e9-4c7a-bc62-ac3f9070d133)

#### 小結
* 第一次沒有 image 時，docker 會先 pull image (有多個 layers)
* 第二次直接載入

### 試著刪除 container 仍存在的 image
```bash
docker container run -dit --name lab alpine
docker image rm alpine
docker container stop lab
docker image rm alpine
docker container rm lab
docker image rm apline
```
![fig16](https://github.com/user-attachments/assets/95bdc82b-4bfc-4dfd-81c9-b3ccab09cc26)

#### 小結
* 仍有使用 Image 的 Container 時， Image 無法刪除

## Docker Network
* 基本有三種類型: none, bridge, host

### mapping port number
```bash
docker container run -d -p 3000:80 {custom image name}
docker container run -d -p 3001:80 {custom image name}

# Test from host
curl localhost:3000
curl localhost:3001
```
<!--![fig17](https://github.com/user-attachments/assets/c45097e9-9993-45f2-bda9-3507d8cd7830)-->
<img src="https://github.com/user-attachments/assets/c45097e9-9993-45f2-bda9-3507d8cd7830" alt="fig17" style="width:50%;" /><br>

#### 小結
* -p [Host Port Number]:[Container Port Number]: 把 container port number map 到 host port number

### 觀察網路的變化
#### 在 host 觀察一下
```bash
ip addr
```
![fig18](https://github.com/user-attachments/assets/b01029a6-492d-4262-80ee-53b646f331a1)

#### 列出目前的 docker network
```bash
docker network list
docker network inspect bridge
```
![fig19](https://github.com/user-attachments/assets/80f65cc6-1d65-49c1-a8d3-5131843853d5)

#### 開啟兩個 Container 後觀察 Host 與 Containers 中的網路變化
```bash
docker container run -dit --name alpine1 alpine ash
docker container run -dit --name alpine2 alpine ash
ip addr

# Enter alpine1
docker container exec -it alpine1 ash
# Check ip in container
> ip addr
# ping another container to check the connection in the network
> ping 172.17.0.3
```
![fig20](https://github.com/user-attachments/assets/d2fb3821-4133-4a32-96c9-344c19c9149d)
![fig21](https://github.com/user-attachments/assets/b2ec78b3-a222-48cb-9ed4-2bec7fd3ae11)
![fig22](https://github.com/user-attachments/assets/928ebe7b-2a91-4a29-8eb2-6d1a1fca6811)


