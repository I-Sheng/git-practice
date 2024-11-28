# Task
[Task Description](https://lightda-tw.notion.site/20241128-W12-8-14b2ceabc70c80c1879df943e4fa7d0a#14b2ceabc70c811493b4feac697542de)

## Docker Container
### 觀察以下指令的執行過程與結果
```bash
docker container run --name {your name} alpine echo "hello world"
```
* --name [name]: name the container (啟動時指定名字)
* alpine: [image]
* echo "hello world" 是啟動這個 container 的 process
    * In the host environment it is a normal process, but in container environment it is the process PID 1. Therefore, while "hello world" is printed, the container is closed.

### 練習基本指令
```bash
# Check the containers
docker container ls
docker container ls -a

# Stop container
docker container stop {container id or id}

# Remove container
docker container rm {container name or id}
```
### 觀察以下兩個指令執行後的差異
```bash
docker container run alpine echo "hello world"  # Container exist after echoing
docker container run --rm alpine echo "hello world" # Container removed after echoing
```
