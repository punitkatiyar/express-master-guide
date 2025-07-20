# Setup JWT Token Authentication 

**JSON Web Token (JWT) is a compact, URL-safe token widely used for securely transmitting information between parties. Its main use case is authentication—where the server creates, signs, and issues a token to a client, which then presents this token to access protected routes or resources.**

## A JWT typically has three parts:

> **Header:** Specifies signature algorithm and type.

> **Payload:** Contains claims (user-related data).

> **Signature:** Ensures the token isn’t tampered with

## Setting Up JWT Authentication in Express.js

> express (web framework)

> jsonwebtoken (to generate/verify JWTs)

> dotenv (manage secret keys)

> Optionally, bcryptjs for password hashing.

```
npm install express jsonwebtoken dotenv

```






1. **Generate Token**

```
const jwt=require('jsonwebtoken')

const token=jwt.sign({key:value},SECRET_KEY,{expiresin:'1h'});

```
