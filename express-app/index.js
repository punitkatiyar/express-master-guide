const express = require('express')
const colors = require('colors')
const app = express()

const port = 3000

// middelwares
app.use(express.json());

// api route endpoint
app.get('/', (req, res) => {

    res.send('<h1>Hello World</h1>')
})

// routes


app.use('/user', require('./routes/userRoutes'))




app.post('/page', (req, res) => {

    const { inputData1, course } = req.body;
    res.json({
        success: true,
        message: `Hello ${inputData1} ${course}`
    })
})

app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`.red)
    console.log(`Example app listening on port ${port}`.bgGreen)
})




