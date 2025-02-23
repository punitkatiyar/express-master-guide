const express = require('express');

// router object

const router = express.Router();

// routes

router.get('/', (req, res) => {
    res.send('<h1>Hello World To</h1>')
})



// exports routes
module.exports = router;