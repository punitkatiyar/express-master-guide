# Multer

> npm i multer


```
const express = require('express')
const multer = require('multer')
const app = express();
const port = 5000;
// const upload = multer({ dest: 'public/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage })

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('homePage')

})

app.post('/upload', upload.single('fileData'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/');

})

app.listen(port, () => {
    console.log(`Express app live now ${port}`);
})
```
