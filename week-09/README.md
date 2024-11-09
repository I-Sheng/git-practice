# Lab step and results
## Basic
1. Use `curl` to check localhost connection
    * Appear a fake web server, which is not expected. Therefore execute step2
2. Use `lsof` to check who is using port http protocol(port 80)
3. After figure out there is a process occupying port 80, kill it manually.

[[]]

4. Use `curl` again and find that the client couldn't connect to server
    * According to the informed knowledge, I reasonably suspect that something when wrong on the nginx, so go check nginx service.
5. Try to reload the `nginx.conf`, found that there is an error
[[]]

6. Fix the error in `nginx.conf`
7. Start and reload nginx service successfully
    * However, the fail connection still exist while try to `curl`
[[]]
8. Assume that something went wrong with the traffic, use iptables to checkt the traffic for IPV4 & IPV6
    * There is a REJECT for tcp protocol for port 80, delete it
9. Use `curl` again, find there is a 403 Forbidden
 * There is an error in authorization, check where is the file for the webpage

[[]]
10. File is in `/var/myweb`, use `chmod` to change the authorization, then everything fixed.
[[]]

## Intermidiate
* The problem still exist after rebooting
1. Find the rules for iptables where `etc/iptables`, and change the rules manually
[[]]
2. Disable the service for fake server and enable nginx service
[[]]

## Advance
* There is a challege to find the huge dummy file and delete it to release the disk space.
* Use the command below to find the target
```bash
sudo du -h --max-depth=1
```
* Finish the work, well done!
