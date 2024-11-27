# AWS CloudWatch Metrics & Alarm

This project demonstrates how to monitor CPU utilization using AWS CloudWatch and set alarms to trigger notifications, including integration with Discord using AWS Lambda.

## Basics for Setting Alarm with CloudWatch Metrics

1. **Install [stress-ng](https://github.com/ColinIanKing/stress-ng)**
   - stress-ng is a stress workload generator tool designed to load and stress various system components.

2. **Trigger `stress-ng` and Monitor CPU Utilization**
   - Run the following command to generate CPU stress:
     ```bash
     stress-ng --matrix 0 -t 5m --times
     ```
   - Observe the impact on CPU utilization in AWS CloudWatch.

3. **Create a CloudWatch Alarm**
   - Set up an alarm for CPU utilization:
     - Metric: `Average CPUUtilization`
     - Condition: `Greater than 60`

4. **Confirm Email for SNS Topics**
   - Subscribe to the SNS topic to receive notifications. Ensure you confirm the subscription through the verification email.

5. **Trigger `stress-ng` Again and Test the Alarm**
   - Run the stress-ng command again to exceed the threshold and verify that the alarm triggers a notification.

## Integration with AWS Lambda to Send Notifications to Discord

1. **Set Up Discord Webhooks**
   - Create a Webhook in the desired channel:
     - Navigate to **Edit Channel** > **Integrations** > **Create Webhook**.
   - Copy the Webhook URL for use in AWS Lambda.


2. **Configure AWS Lambda**
   - Use AWS Lambda to send notifications to Discord using the Webhook URL.
   - Implement the logic to format and forward the CloudWatch alarm details to your Discord channel.

    * I am stock here, trying to figure out how to use AWS lambda to send alarm to discord!
---
