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




