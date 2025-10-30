const express = require('express');
const app = express();
const port = 3000;
///////////////////////////////////////////////////////////////////////////////////////////
let myToken = "12345";
let checkToken = (req, res, next) => {
    if (req.query.token == "" | req.query.token == undefined) {
        return res.send(
            {
                status: 0,
                msg: "Please Fill the token"
            }
        )
    }
    if (req.query.token != myToken) {
        return res.send({
            status: 0,
            msg: "fill the currect token"
        })
    }
    // console.log("Welcome");
    next();
}
app.use(checkToken);
///////////////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send("Hello Home Page");
})

app.listen(port, () => {
    console.log(`Start App http://localhost:${port}`)
})
