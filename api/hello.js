async function hello(event, content) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello!",
      input: event,
    }),
  };
}

export const handler = hello;

// // index.js

// const serverless = require('serverless-http');
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// module.exports.handler = serverless(app);
