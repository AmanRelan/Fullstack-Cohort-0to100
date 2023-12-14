# WEEK 2.1

## Prerequisites for this week

- Functions
- var, const ,let
- data types in JS

### Things we will cover in this week

- Callbacks
- Async Functions
- Promises
- JS Functions(map, filter)
- Assignment

### 3 big humps in Full stack development

- Async Nature of JS
- React
- JS To TS

### What we need to know before we proceed to HTTP?

- Callback Functions - **DEFINITELY**
-

### Episode Theory

- Callbacks functions
- Functional Arguments

- Function it gets as an input

- Callback Hell
- Very good to know how to create async functions that use promises
- And call async functions that return promises.

Callback vs Promises

- Callback
  Define a function, takes cb as input and does not return anything
  This tells the caller by callback that something has been done
  This will send a cb as input.

- Promises
  Returns a promise, does not take cb as an input.
  Returned promise is the way how the caller will know that it has done it's async call.
  This will receive an output as a promise.
  Tell me what to do after what I am done doing my thing

##### Syntax of Promise

- Initialization of promise `const promise = new Promise(function(resolve){})`

##### Calling of a Promisified Function

- `const ans = promise();`
- `console.log(ans);` -> Promise <pending>
- Called by this syntax, by using `.then()` **VERY VERY IMPORTANT**

```
  ans.then(function{
      console.log("Resolved");
  })
```

##### Promise States

- Whenever you have a promise, you will see one of the three states here

1. <pending>
2. <fulfilled>
3. <rejected>
