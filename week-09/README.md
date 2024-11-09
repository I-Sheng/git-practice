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

### Step 4: Re-testing with `curl`
- **Command**: `curl localhost`
- **Observation**: The client could not connect to the server, indicating a potential issue with the web server configuration.

### Step 5: Checking and Reloading Nginx Configuration
- **Action**: Attempted to reload `nginx.conf`.
- **Outcome**: Encountered an error in the `nginx.conf` file, preventing successful configuration.

### Step 6: Fixing the `nginx.conf` File
- **Action**: Corrected the error in `nginx.conf`.
- **Outcome**: Successfully reloaded the nginx service.

### Step 7: Testing Connection Again with `curl`
- **Command**: `curl localhost`
- **Observation**: Received a "403 Forbidden" error, indicating an authorization issue.

### Step 8: Inspecting Traffic Rules with iptables
- **Command**: `iptables -L`
- **Outcome**: Discovered a `REJECT` rule for the TCP protocol on port 80. This rule was likely blocking access to the server.
- **Action**: Deleted the `REJECT` rule to allow traffic on port 80.

### Step 9: Re-checking Connection Authorization
- **Observation**: The "403 Forbidden" error persisted.
- **Action**: Located the website files in `/var/myweb` and used `chmod` to update file permissions to ensure the server had proper access.

### Step 10: Final Verification
- **Command**: `curl localhost`
- **Outcome**: The connection was successful, confirming that the issues were resolved.

## Intermediate Steps: Ensuring Persistence After Reboot

### Problem: Connectivity Issue Reoccurs After Reboot
1. **Inspecting iptables Rules**:
   - Located the iptables configuration in `/etc/iptables` and manually edited rules to persist desired settings across reboots.

2. **Managing Services**:
   - Disabled the fake server service to prevent it from occupying port 80.
   - Enabled nginx to ensure it starts on reboot.

## Advanced Steps: Releasing Disk Space by Deleting Dummy Files

- **Challenge**: Locate and delete large, unnecessary files to free up disk space.
- **Command**:
  ```bash
  sudo du -h --max-depth=1
