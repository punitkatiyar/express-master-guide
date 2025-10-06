# Middleware in Express:

Middleware in Express.js is a function that executes during the request-response cycle. It has access to the request (req) and response (res) objects and the next() function, which passes control to the next middleware.

## Type Of Middleware

- Application-Level	Applies globally using app.use() (e.g., logging, authentication).

- Router-Level	Used for specific routes using router.use().

- Built-in Middleware	Includes express.json().

- Error-Handling	Handles errors with (err, req, res, next).

- Third-Party	External middleware like cors, helmet, morgan.

- Custom Middleware	Developer-defined functions for custom logic.


## Token Validation 

```
let myToken="12345";
//////////////////////////////////////////////////////
let checkToken=(req,res,next)=>{
    //////////////////////////////////////
    if(req.query.token=="" | req.query.token==undefined){
        return res.send(
            {
                status:0,
                msg:"Please Fill The token"
            }
        )
    }
    if(req.query.token!=myToken){
        return res.send({
            status:0,
            msg:"Fill The Currect Token"
        })
    }
    //////////////////////////////////////
    // console.log("welcome");
    next();
}
app.use(checkToken);
////////////////////////////////////////////////////////
```

<!--

- body-parser	Parse HTTP request body.

- compression	Compress HTTP responses.

- connect-rid	Generate unique request ID.

- cookie-parser	Parse cookie header and populate req.cookies. See also cookies.

- cookie-session	Establish cookie-based sessions.

- cors	Enable cross-origin resource sharing (CORS) with various options.

- errorhandler	Development error-handling/debugging.

- method-override	Override HTTP methods using header.

- morgan	HTTP request logger.

- multer	Handle multi-part form data.

- response-time	Record HTTP response time.

- serve-favicon	Serve a favicon.

- serve-index	Serve directory listing for a given path.

- serve-static	Serve static files.

- session	Establish server-based sessions (development only).

- timeout	Set a timeout perioHTTP request processing.

- vhost	Create virtual domains.
-->



