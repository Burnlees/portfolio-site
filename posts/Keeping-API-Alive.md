---
title: Keeping API Server Alive
date: '2024-07-19'
---

## Introduction

During the backend portion of my Northcoders bootcamp, I created an API server using Render's free service. While this service is cost-effective, it has a downside: if the server remains unused for a while, it goes to sleep. This can lead to excessive or infinite load times when showcasing the project on a portfolio, which is not ideal for a good user experience. To solve this issue, I devised a method to keep the server alive, ensuring quick response times. I thought I'd share this solution for anyone facing a similar problem.

## Solution Steps

1. **Create an AWS Account**:
    
    - Sign up for an account on [AWS (Amazon Web Services)](https://aws.amazon.com/). You will need to provide card details, but you won't be charged as long as you stay within the free tier limits. Check AWS pricing to confirm, or consider alternative services if needed.
2. **Navigate to AWS Lambda**:
    
    - Use the search bar to find and select "Lambda" from the AWS services.
3. **Create a Lambda Function**:
    
    - **Name**: Choose a name for your function (e.g., `keepAlivePing`).
    - **Runtime**: Select Node.js (choose the latest version available).
    - **Role**: Create a new role with basic Lambda permissions.
    - Click on "Create function" to deploy.
4. **Write the Lambda Function**:
    
    - You can write your own function or use the one I have provided in this [GitHub repository](https://github.com/Burnlees/server-pinger/blob/main/apiServerPing.js). Copy and paste the code, replacing the placeholder URL with your API endpoint.
5. **Navigate to Amazon EventBridge Scheduler**:
    
    - Search for "EventBridge Scheduler" using the AWS search bar.
6. **Create a Schedule**:
    
    - Click on "Create schedule".
    - **Name**: Give your schedule a descriptive name.
    - **Occurrence**: Choose "Recurring Schedule".
    - **Schedule Type**: Select "Rate-based Schedule".
    - **Rate Expression**: I recommend using a 1-minute interval, though less frequent intervals may also work.
    - **Flexible Timeframe**: Set this to 5 minutes.
7. **Configure the Schedule**:
    
    - Click "Next".
    - On the following page, select "Lambda Invoke".
    - Choose your Lambda function from the dropdown menu.
8. **Finalize the Schedule**:
    
    - Click "Next" and then "Create schedule" to finalize.

## Monitoring

You can monitor the execution of your Lambda function by checking the logs in the CloudWatch section of AWS. Allow some time for the function to run before reviewing the logs.

By following these steps, you can keep your API server active, ensuring it remains responsive for portfolio viewers.