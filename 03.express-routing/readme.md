# Express Router

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

## Type of Route in express

- **Home page Route** :: http://localhost:3000
- **Sub Page Route** :: http://localhost:3000/blog
- **Nested Page Route** :: http://localhost:3000/blog/tech
- **Route Parameter** :: http://localhost:3000/blog/1
- **Query Parameters** :: http://localhost:3000/search?name=tech

## Testing tools

- Thunder Client
- Postman

## Route Methods

- get
- post
- put
- delete

## Define the Route

```
app.get('/',(req,res)=>{
  res.send("<h1>Welcome to Home Page</h1>")
})

app.get('/blog',(req,res)=>{
  res.send("<h1>Welcome to Blog Page</h1>")
})

app.get('/blog/:id',(req,res)=>{
  res.send(req.params)
})

app.get('/blog/:blogid/post/:postid',(req,res)=>{
  res.send(req.params.blogid)
})

app.get('/search',(req,res)=>{
  res.send(req.query)
})

```


## Example 1
```
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
```
