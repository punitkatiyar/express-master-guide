const express = require('express')
const app = express()
const port = 8000

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//////////////////////////////////////////////////////////////////////////
app.get('/insert', (req, res) => {
    res.render('insertContact', { title: "Insert Page" });
})
app.post('/insert', async (req, res) => {
    await students.insertOne({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile: req.body.mobile,
        course: req.body.course,
    })
    // res.send(req.body)
    res.redirect("/")
})
///////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
