# WEEK 3.1

## Notes From Cohort by TAs
You can find the notes for this week created by TAs that covers `Middlewares, Global Catches & Zod` can be found [here](https://quickest-juniper-f9c.notion.site/Week-3-1-Middlewares-Global-Catches-Zod-07fd5c5d55184ce3a6f3b4b1fc7c4aec)

## Prerequisites for this week

- Week 2.7 video
- Week 3.0.7/3.0.8 video and DB strings for connection

### Things we will cover in this week

- Middlewares
- Authentication
- Global Catches
- ZOD

### Episode Theory

#### Middlewares

Real World Scenarios for a website before user can access anything-

- Authentication
- Input Validation

How do we do this?

- Middlewares

> Do Checks based on the conditionals and return if a check fails. Also known as Early Return

- Doing these check in the API and doing early return is a dumb way.
- Example of this is the [gist here](https://gist.github.com/hkirat/16f1480481596856e8ed911508a01638)

- In express, we can define any number of callback functions in a request.
  For example-

```
app.get('/health-checkup', function(req, res){
    console.log("Hi from req1");
}, function(req,res){
    console.log("hi from req2);
});
```

And to a callback function there are 3 inputs and not 2(req,res). The third one is `next`.
How does this make the control go to the second cb function?
That's the beauty of express.
Code Example-

```
app.get('/health-checkup', function(req, res, next){
    console.log("Hi from req1");
    next();
}, function(req,res){
    console.log("hi from req2);
});
```

- How do you define middlewares?
  It is just a JS function that takes req,res and next as arguments, where next is the new argument where next is the middleware where we do something before the actual logic is called.

- Another thing in Middleware?
  IT is `app.use(express.json()).`. This use means, this middleware is going to be called everywhere/in every route. Anything that comes after this line, will have this middleware added.

- Use cases of Middlewares?

1. Calculate the number of requests
2. Input Validation

- Assignment

1. Find the average time your server is taking to handle requests.
2. Count the number of requests.

#### Input Validation

- Suppose you have a code as follows:-

```
const express = require('express');
const app = express();

// kidneys = [1,2];
app.use(express.json());
app.post('/health-checkup', function(req,res){
    const kidneys = req.body.kidneys;
    const kidneysLenght = kidneys.length;

    res.send("Your Kidney Length is :- ", kidneysLenght)

})

app.listen(3000);
```

- When you run the above code, with a wrong input value, as the user can send anything as an input but our code handles just some specific format. This helps protect the app from breaking.
- That's why we need Input Validation.
- There are two ways we can do input validation.

1. Input validation middleware - Global catches.
2. ZOD

- We put the global catches at the end, if there is an exception

Code Example-

```
const express = require('express');
const app = express();

// kidneys = [1,2];
app.use(express.json());
app.post('/health-checkup', function(req,res){
    const kidneys = req.body.kidneys;
    const kidneysLenght = kidneys.length;

    res.send("Your Kidney Length is :- ", kidneysLenght)

})
// Global Catches
let errCount = 0;
errCount++;
app.use(function(err, req,res,next){
    res.json({
        msg: "Sorry, something is wrong!"
    })
})
app.listen(3000);
```

- This takes 4 inputs, and then this handles all the exception and where the code is wrong.
- Global Catches help you give the user a better error message.
- Error handling Middleware: Special type of middleware. Express recognizes it because it has 4 arguments.

#### ZOD

- Helps you do better input validation
- Install by `npm install zod`.
- What we are doing? Parsing the input given by the user.
- So, in our above example, kidneys is an array of Number
- which we can define using zod as -> `const schema = zod.array(zod.number())`. It helps define the structure of our input.
  Code example-

```
const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json(
            { msg: "Input is invalid" }
        )
    } else {
        res.send({
            response
        })
    }
});
app.listen(3000);
```

- How do we write zod Schema for something like this:-

```
{
    email: string => email
    password: atleast 8 letters
    country: "IN", "US"
}
which can be given like this
const scehma = zod.object({
    email: zod.string(),
    password: zod.string();
    country: zod.literal("IN").or(Zod.literal("US)),
    kidneys: zod.array(zod.number())
})
```

> Assignment- If this is an array of strings with atleast 1 input, return true, else return false
>
> Do it with ZOD

Ans:

```
const zod = require("zod");
function validateInput(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
}

```

#### Authentication

How do you ensure that any user has access to certain resource?

- Dumb way: Ask user to send username and password in header!
- Slightly Better way:

1. Give the user back a token on signup/login.
2. This token is stored in a localStorage
3. Ask the user to send the token in every request.
