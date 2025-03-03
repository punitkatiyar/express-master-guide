# Middleware in Express:

Middleware in Express.js is a function that executes during the request-response cycle. It has access to the request (req) and response (res) objects and the next() function, which passes control to the next middleware.

## type of middleware

- Middleware Type	Description & Use Case

- Application-Level	Applies globally using app.use() (e.g., logging, authentication).

- Router-Level	Used for specific routes using router.use() (e.g., route-specific authentication).

- Built-in Middleware	Includes express.json(), express.urlencoded(), and express.static().

- Error-Handling	Handles errors with (err, req, res, next).

- Third-Party	External middleware like cors, helmet, morgan.

- Custom Middleware	Developer-defined functions for custom logic.





