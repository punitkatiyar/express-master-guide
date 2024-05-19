# express-master-guide

## Install Express Js

> npm init -y

> Entry File Index.js

> npm install express

## create app.js  

## node app

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
