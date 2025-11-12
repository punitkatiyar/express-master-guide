# Express Session

*A session is a way to store data about a user on the server side between multiple HTTP requests.
Since HTTP is stateless, the server doesn’t automatically remember who sent each request.
Sessions solve that by assigning each client a unique Session ID, stored in a cookie in the browser.*

## Setup Session On Express App

> npm install express-session

```
const session = require('express-session');

// Configure session middleware
app.use(session({
  secret: 'mySecretKey',             // 🔐 Used to sign the session ID cookie
  resave: false,                     // 🔁 Don't save session if unmodified
  saveUninitialized: true,           // 💾 Save new sessions
  cookie: { maxAge: 60000 }          // ⏰ Cookie lifetime (1 min)
}));

```

# Express Route

```
// Route to set session data
app.get('/set-session', (req, res) => {
  req.session.username = 'Punit';
  res.send('Session data set! 🧑‍💻');
});

// Route to access session data
app.get('/get-session', (req, res) => {
  if (req.session.username) {
    res.send(`Welcome back, ${req.session.username}!`);
  } else {
    res.send('No session found 😕');
  }
});

// Route to destroy session
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.send('Error logging out');
    } else {
      res.clearCookie('connect.sid'); // clear cookie
      res.send('Logged out successfully!');
    }
  });
});

```




