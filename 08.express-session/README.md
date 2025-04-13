# Express Session 

```
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Configure session middleware
app.use(session({
  secret: 'mySecretKey',             // 🔐 Used to sign the session ID cookie
  resave: false,                     // 🔁 Don't save session if unmodified
  saveUninitialized: true,           // 💾 Save new sessions
  cookie: { maxAge: 60000 }          // ⏰ Cookie lifetime (1 min)
}));

// Route to set session data
app.get('/login', (req, res) => {
  req.session.username = 'john_doe'; // Set session variable
  res.send('User logged in and session created');
});

// Route to access session data
app.get('/profile', (req, res) => {
  if (req.session.username) {
    res.send(`Welcome back, ${req.session.username}`);
  } else {
    res.send('Please login first.');
  }
});

// Route to destroy session
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error logging out.');
    }
    res.send('Logged out successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

```
