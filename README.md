# express master guide

## Express.js Learning Prerequisites

Before diving into Express.js, you should have a basic understanding of:

✅ JavaScript (ES6+ features)

✅ Node.js and npm (Node Package Manager)

✅ Asynchronous programming (Promises, async/await)

## Install Express Js

> npm init -y

> Entry File Index.js

> npm install express

## create app.js  

## Express app

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

## RUN The App

> node app
