# Express Router

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

- **Home page Route** :: http://localhost:3000
- **Sub Page Route** :: http://localhost:3000/blog
- **Nested Page Route** :: http://localhost:3000/blog/tech
- **Route Parameter** :: http://localhost:3000/blog/1
- **Query Parameters** :: http://localhost:3000/search?name=tech





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
