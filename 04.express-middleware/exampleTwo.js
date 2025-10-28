const express = require('express');
const app = express()
const port = 3000;

// Middleware 
app.use((req, res, next) => {
    console.log(`${req.method} :: ${req.url}`);
    next();
})


app.get('/', (req, res) => {
    res.send(`<h1>App Home</h1>`)
})

app.get('/page', (req, res) => {
    res.send(`<h1>App Page</h1>`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>App About</h1>`)
})

app.listen(port, () => {
    console.log(`server is live : http://localhost:${port}`);
})