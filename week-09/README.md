# Lab Report: Troubleshooting Web Server Connectivity and Configuration Issues

## Basic Steps
### Step 1: Checking Localhost Connection
- **Command**: `curl localhost`
- **Observation**: Unexpectedly, a fake web server responded. This was not the expected outcome, indicating that another process may be occupying port 80.

### Step 2: Identifying Processes Using HTTP Protocol (Port 80)
- **Command**: `lsof -i :80`
- **Outcome**: Found a process occupying port 80, potentially causing conflicts with the expected web server.

### Step 3: Killing the Occupying Process
- **Action**: Terminated the identified process to free up port 80 for the intended server.

<img width="866" alt="螢幕擷取畫面 2024-11-09 230333" src="https://github.com/user-attachments/assets/b75f309f-3dbc-4bba-98d6-12bc8d2c260d">

### Step 4: Re-testing with `curl`
- **Command**: `curl localhost`
- **Observation**: The client could not connect to the server, indicating a potential issue with the web server configuration.

### Step 5: Checking and Reloading Nginx Configuration
- **Action**: Attempted to reload `nginx.conf`.
- **Outcome**: Encountered an error in the `nginx.conf` file, preventing successful configuration.

<img width="853" alt="螢幕擷取畫面 2024-11-09 230412" src="https://github.com/user-attachments/assets/b1d0933c-0fcc-4d2e-94a5-6aa596bc7653">

### Step 6: Fixing the `nginx.conf` File
- **Action**: Corrected the error in `nginx.conf`.
- **Outcome**: Successfully reloaded the nginx service.

<img width="856" alt="螢幕擷取畫面 2024-11-09 230443" src="https://github.com/user-attachments/assets/0dcd8982-1eda-4871-9fa9-fe3d92a8ec1c">

### Step 7: Testing Connection Again with `curl`
- **Command**: `curl localhost`
- **Observation**: Still the client could not connect to the server, indicating a potential issue with the web server configuration, try to inspect the traffic through `iptables`

### Step 8: Inspecting Traffic Rules with iptables
- **Command**: `iptables -L`
- **Outcome**: Discovered a `REJECT` rule for the TCP protocol on port 80. This rule was likely blocking access to the server.
- **Action**: Deleted the `REJECT` rule to allow traffic on port 80.

<img width="857" alt="螢幕擷取畫面 2024-11-09 230548" src="https://github.com/user-attachments/assets/cb55d158-305d-4bdd-ae5d-42b7cae5e095">

### Step 9: Re-checking Connection Authorization
- **Observation**: The "403 Forbidden" error persisted.
- **Action**: Located the website files in `/var/myweb` and used `chmod` to update file permissions to ensure the server had proper access.

<img width="853" alt="螢幕擷取畫面 2024-11-09 230609" src="https://github.com/user-attachments/assets/72404534-e272-4db8-8b0f-4e6a4d2f1dfe">
<img width="420" alt="螢幕擷取畫面 2024-11-09 230640" src="https://github.com/user-attachments/assets/b17b4547-9670-4cc9-8368-635922c030cb">
<img width="436" alt="螢幕擷取畫面 2024-11-09 230902" src="https://github.com/user-attachments/assets/2fe6febe-4e07-4aae-a287-b9533bcf39a1">

### Step 10: Final Verification
- **Command**: `curl localhost`
- **Outcome**: The connection was successful, confirming that the issues were resolved.
<img width="569" alt="螢幕擷取畫面 2024-11-09 230940" src="https://github.com/user-attachments/assets/08d00b8c-be4f-415d-9e19-d4aec6e1de58">

## Intermediate Steps: Ensuring Persistence After Reboot

### Problem: Connectivity Issue Reoccurs After Reboot

1. **Inspecting iptables Rules**:
   - Located the iptables configuration in `/etc/iptables` and manually edited rules to persist desired settings across reboots.

<img width="815" alt="螢幕擷取畫面 2024-11-09 231102" src="https://github.com/user-attachments/assets/ca54e585-ad6a-4a56-a2d3-54276c03bc6d">
<img width="798" alt="螢幕擷取畫面 2024-11-09 231120" src="https://github.com/user-attachments/assets/7577cdcf-30ff-451c-91ca-6551fee3bf48">

2. **Managing Services**:
   - Disabled the fake server service to prevent it from occupying port 80.
   - Enabled nginx to ensure it starts on reboot.

<img width="852" alt="螢幕擷取畫面 2024-11-09 231211" src="https://github.com/user-attachments/assets/4cff0b32-fbac-4bee-be06-71ba85f7cd64">

## Advanced Steps: Releasing Disk Space by Deleting Dummy Files

- **Challenge**: Locate and delete large, unnecessary files to free up disk space.
- **Command**:
```bash
sudo du -h --max-depth=1
# or
sudo du -h / | sort -n -r | head -n 15
```
* du -h, --human-readable
* sort -n, --numberic-sort: compare human readable numbers (e.g., 2K 1G)
* sort -r, --reverse: reverse the result of comparisons

<img width="530" alt="螢幕擷取畫面 2024-11-09 231242" src="https://github.com/user-attachments/assets/91bc5282-4fc9-456d-8520-cb2c30836a7a">
<img width="608" alt="螢幕擷取畫面 2024-11-09 231323" src="https://github.com/user-attachments/assets/fbd99bb6-f3f6-4b5f-a689-393bdfba48fb">
