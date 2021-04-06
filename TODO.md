Priority:

1. figure out our access pattern for booking app and dashboard app first

push couple hundreds of users to db with API_BatchWriteItem
modify (or create) API so that it searches list of users by either “pet type” or “pet type AND service type”.

https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html

S3 presigned Url security and app general security considerations:

1. attackers cannot upload more than 20 items into the s3 bucket
2. attackers cannot upload more than 10mb of file per upload
3. attackers cannot know any secretes including but not limited(use secrets store to counter):
   a. api url for each route
   b.
4. unauthorized customers has no access to these api gateways

video upload on s3

finish all routes for dashboard PATCH

initial access pattern defined and initiated

<!-- PATCH routes for:
address
contact: email, phone
 -->
<!-- User profile image upload to S3 and download

DDB design that make sense -->

ERRORS FIXED:

<!-- https://stackoverflow.com/questions/40117972/method-put-is-not-allowed-by-access-control-allow-methods-in-preflight-response -->

PATCH METHOD PREFLIGHT CORS ERROR WITH API GATEWAY IS STUPID
THIS TOOK ME HOURS

solution:

<!-- https://stackoverflow.com/questions/42938365/cors-issue-with-serverless-and-put-command -->

1. we could do a OPTION preflight in the event
2. just say forget it and use post for everything

<!-- CORS and 502 BAD GATEWAY, ValidationException: The provided key element does not match the schema at Request.extractError -->

<!-- THIS IS THE PROBLEM -->

      UpdateExpression: `set dateAndTime_${subTab} = :dateAndTime_${subTab}`,
      ExpressionAttributeValues: {
        [`:dateAndTime_${subTab}`]: input,
      },

<!-- CAN ONLY DDO THIS INSTEADD -->

      UpdateExpression: `set ${attribute} = :${attribute}`,
      ExpressionAttributeValues: {
        [`:${attribute}`]: input,
      },
