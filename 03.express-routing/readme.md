# Express Router

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

- **Home page URL** :: http://localhost:3000
- **Sub Page URL** :: http://localhost:3000/blog
- **Nested Page URL** :: http://localhost:3000/blog/tech





## Example 1
```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```
