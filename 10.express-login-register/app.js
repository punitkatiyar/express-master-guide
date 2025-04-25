const express = require('express');
const mongoose = require('mongoose');

const session = require('express-session');

const User = require('./models/User');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}));
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crud');


app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.send('Invalid email or password');
    }
});

app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    res.render('dashboard', { user: req.session.user });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});







