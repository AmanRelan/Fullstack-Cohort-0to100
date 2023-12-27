# WEEK 3.3

### Things we will cover in this week

- Middlewares with real life examples

### Episode Theory

#### Middlewares

Functions that have access to
- Request Object
- Response Object
- Next Function
in the application request-response cycle.

Middlewares can: 
- Execute any code
- Make changes to the request response cycle
- End the request response cycle
- Call the next middleware function in the stack.

###### Middlewares can be re-used

- Calling the next function, makes the control of flow move from one middleware to another middleware.

###### Important Note
- When defining an app.use, make sure to use it above all the routes for which you want to include the middleware.
- It works only for routes that are defined below it.
- The other way you can use the middlewares is to define it as a series of functions in a call.
- So, the order of the middlewares definition matters.

##### Error Handling middlewares
Read about them at [Express Documents](https://expressjs.com/en/guide/error-handling.html)

- Always defined at the end of the file
- Takes 4 Arguments
- Sends back the status code which a user can define in this middleware