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

## Example 

```
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json()); // Parse JSON bodies

const users = [
  { id: 1, username: 'test', password: 'pass123' } // Mock data for demo
];

// Generate JWT Token
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
}

// User login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check hardcoded credentials for simplicity
  const user = users.find(
    user => user.username === username && user.password === password
  );
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user);
  res.json({ token });
});

// Middleware to authenticate token for protected routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // 'Bearer TOKEN'
  if (!token) return res.status(401).json({ message: 'Token missing' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token is invalid' });
    req.user = user;
    next();
  });
}

// Protected route example
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Profile data', user: req.user });
});

app.listen(3000, () => console.log('Server running on port 3000'));

```






1. **Generate Token**

```
const jwt=require('jsonwebtoken')

const token=jwt.sign({key:value},SECRET_KEY,{expiresin:'1h'});

```
