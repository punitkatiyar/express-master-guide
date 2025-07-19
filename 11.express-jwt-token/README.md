# Setup JWT Token Authentication 

> npm init -y

> npm i express

> npm i mongoose

> npm i bcriptjs

> npm i jsonwebtoken

```
const jwt=require('jsonwebtoken')

const token=jwt.sign({key:value},SECRET_KEY,{expiresin:'1h'});
```
