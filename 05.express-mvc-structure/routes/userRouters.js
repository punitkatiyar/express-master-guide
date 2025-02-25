const express = require('express')
const { getUser } = require('../controllers/userControllers')

// Routes router object
const router = express.Router();

// routes
router.get('/', getUser);

// export routes
module.exports = router;