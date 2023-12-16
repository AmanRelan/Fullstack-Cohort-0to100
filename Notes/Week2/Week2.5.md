# Week 2.5

### Things you will cover in this week

- Express js with examples
- Postman

#### Episode Theory

##### Basic Express

- Express is a library that lets you create an HTTP server, encapsulates the complexity of creating an HTTP server.
- Call functions from express and expose your functionality to the world.
- `const app = express();` -> Create an instance of express, where we can implement logic for HTTP server
- `app.listen`-> Address of the exposed function
- `req, res` -> Request and Response
- Request Methods:

1. GET
2. POST
3. PUT
4. DELETE

- Status Codes:
  Read more about Status Code at [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Backend should do a lot of validations, should handle edge cases, user should see errors.
