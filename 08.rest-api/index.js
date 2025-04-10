const express = require('express');
const fs = require('fs');
const users = require("./MOCK_DATA.json")
const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send("<h1>User REST API</h1>");
})

app.get('/users', (req, res) => {
    const html = `
    <ol>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ol>
    `;
    res.send(html);
})

app.get('/api/users', (req, res) => {
    res.json(users)
})


app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id);
    res.json(user)
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    // console.log(body)
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        res.json({ status: "pending" })
    })
})













app.listen(port, () => console.log(`users server on http://localhost:${port}`));