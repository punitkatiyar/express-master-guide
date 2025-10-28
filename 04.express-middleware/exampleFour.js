const express = require('express');
const app = express()
const port = 3000;

// Middleware Example  Four

const myMiddleware = ((req, res, next) => {
    const d = new Date();
    console.log(`${req.url} :: Hours : ${d.getHours()} :: ${d.getMinutes()}`);
    next();
})

// app.use(myMiddleware);


app.get('/', (req, res) => {
    res.send(`<h1>App Home</h1>`)
})

app.get('/page', myMiddleware, (req, res) => {
    res.send(`<h1>App Page</h1>`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>App About</h1>`)
})

app.listen(port, () => {
    console.log(`server is live : http://localhost:${port}`);
})