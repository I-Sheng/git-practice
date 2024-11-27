# AWS CloudWatch Metrics & Alarm
[task description](https://lightda-tw.notion.site/20241114-W10-7-13d2ceabc70c803da13ac08df1178009)
This project demonstrates how to monitor CPU utilization using AWS CloudWatch and set alarms to trigger notifications, including integration with Discord using AWS Lambda.

## Basics for Setting Alarm with CloudWatch Metrics

1. **Install [stress-ng](https://github.com/ColinIanKing/stress-ng)**
   - stress-ng is a stress workload generator tool designed to load and stress various system components.

2. **Trigger `stress-ng` and Monitor CPU Utilization**
   - Run the following command to generate CPU stress:
     ```bash
     stress-ng --matrix 0 -t 5m --times
     ```
![螢幕擷取畫面 2024-11-27 192201](https://github.com/user-attachments/assets/c816f9e2-b9d3-4685-b60f-91c2486f96bf)

     
   - Observe the impact on CPU utilization in AWS CloudWatch.
![螢幕擷取畫面 2024-11-27 193830](https://github.com/user-attachments/assets/21659cf3-1f2e-4c8b-aefe-db4c1c055bb9)

3. **Create a CloudWatch Alarm**
   - Set up an alarm for CPU utilization:
     - Metric: `Average CPUUtilization`
     - Condition: `Greater than 60`
![螢幕擷取畫面 2024-11-27 191516](https://github.com/user-attachments/assets/cceb9bb7-fa70-48b1-a0e1-03f69a02626c)

4. **Confirm Email for SNS Topics**
   - Subscribe to the SNS topic to receive notifications. Ensure you confirm the subscription through the verification email.

5. **Trigger `stress-ng` Again and Test the Alarm**
   - Run the stress-ng command again to exceed the threshold and verify that the alarm triggers a notification.
![螢幕擷取畫面 2024-11-27 192253](https://github.com/user-attachments/assets/056cc7c3-d624-4ef7-8b70-4d6b29f30a66)

## Integration with AWS Lambda to Send Notifications to Discord

1. **Set Up Discord Webhooks**
   - Create a Webhook in the desired channel:
     - Navigate to **Edit Channel** > **Integrations** > **Create Webhook**.
   - Copy the Webhook URL for use in AWS Lambda.
![螢幕擷取畫面 2024-11-27 195114](https://github.com/user-attachments/assets/73b7056f-4ba4-4615-bfd5-814b5145b432)


2. **Configure AWS Lambda**
   - Use AWS Lambda to send notifications to Discord using the Webhook URL.
   - Implement the logic to format and forward the CloudWatch alarm details to your Discord channel.

    * I am stuck here, trying to figure out how to use AWS lambda to send alarm to discord!
---
