# WEEK 1.4

## Async, Await and Promises

### Things we will cover in this week

- Async functions vs sync functions
- Real world use of callbacks
- JS Browser Architecture
- Promises
- Async await

### Episode Theory

#### Async vs Sync functions

- Sync Functions - something that runs one after the other, sequentially. One thing happens at a time.
- Async Functions - Opposite of Sync, things are happening parallely. Multiple things are context switching with each other. Eg- Read a file while processing of some variables is going on in the background.

- JS is single threaded but it can also context switch and delegate tasks to other processes.
- Example of ASYNC Function provided by JavaScript => `setTimeout(fn(){}, 1000);`

```
function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill1000() {
  console.log(findSum(1000));
}

setTimeout(findSumTill1000, 1000);
console.log("hello world!");
```

- In the above code example, even though setTimeout is above console log, but it will say that I am async and will ask the JS Main thread to continue working & thus it will come and print the hello world first and then after 1s when the timeout will be over, `findSumTill1000` will return it's result.

- Common Async Functions

1. setTimeout
2. fs.readFile- to read a file from filesystem
3. fetch- to fetch some data from an API endpoint

- To understand how the code works in Async nature, follow this code example-

```
const fs = require("fs");

console.log("Control before read file");
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Control after read file");
let a = 0;
for (let i = 1; i < 1000000000; i++) {
  a++;
}
console.log("At the bottom after the loop");

```

The output of the above function will be like :-

```
Control before read file
Control after read file
At the bottom after the loop
Hello world from a.txt
```

> This confirms that the readfile is an **async** function and the control reaches to it when JS does all it's other mentioned operations, even though the time can be more than 1s and then when the call stack is empty post processing all the data is when the result of the async method is returned.

- You can check how JS executes async functions by Visualisation at [Latent Flip](http://latentflip.com/loupe/)

#### JS Browser Architecture

There are 4 things in a JS browser architecture on a very high level

1. Call Stack - What is being put on to the stack to run. Every line of JS files that is to be executed, comes into the call stack.
2. Web APIs - An Async task is delegated to the web API section. 2 things are happening at the same time, not a part of JS but is present in the Web browser.
3. Callback Queue- When the async function is done, it waits in the callback queue stating that I have finished executing. It waits there till the thread is busy, and when the thread is free, that's when this function is sent to the call stack to be executed/display result by the event loop.
4. Event Loop - After the thread is free, check the callback queue, if there is an Async code that has finished executing and is present in the callback queue, push that from the callback queue to the call stack.

For Synchronous Code, the only thing that is needed is the call stack.
But when there is asynchronous code, we need the Callback queue, event loop, web APIs.

- Read about Event Loop on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
- A youtube Video where I learned about Queues, Event loop[Youtube Video](https://www.youtube.com/watch?v=8zKuNo4ay8E&t=2233s)

#### Promises

Read about Promise at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- Syntactical sugar that makes the code slightly more readable.

##### Create our own Async function

We have been using already defines async function in JS. What if we have to make our own async function?
We can create one like:-

```
const fs = require("fs");
function readFileCb(cb){
  fs.readFile("a.txt", "utf-8", function(err,data){
      cb(data);
  })
}
// Callback function to call
function onDone(data){
  console.log(data);
}
readFileCb(onDone);
```

This is just a wrapper function around `fs.readFile` which when called, passed a cb function and this callback gets called with the data of the file.
This, though, is an ugly way to use our own call.

- There is no cb when we use Promise
- This is due to the reason called `Callback Hell`.

Cleaner way to use promises will change the above example-

```
function readFileCb(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err,data){
            resolve(data);
        })
    })
}
function onDone(data){
    console.log(data);
}
readFileCb().then(onDone);
```

What happens in this case?

- This synchronously returns a promise
- The promise may or may not have been resolved but we get a synchronous return.
- So, we get a synchornous return but the data in the promise is fetched asynchornously.
- To get the data/when you need the data, we need to put a `.then()`.
- Promise then does its work, reads the file and calls resolve.
- When resolve gets called with the data, is when `.then(onDone)` the control reaches to the `onDone` function.
- onDone gets called and does what it is asked to do.

To Define a promise, we need to make sure we pass in a function with an initial argument(to resolve the promise)

`let pinkyPromise = new Promise(function(resolve){});`

Not doing so, will give an error as - `Uncaught TypeError: Promise resolver undefined is not a function`

When you define a promise and console it as-

```
let pinkyPromise = new Promise(function(resolve){});
console.log(pinkyPromise);
```

you will receive an instance of the Promise class as `Promise { <pending> }`

- What is <pending>?
  It is one of the states which means the resolve function has not been called yet
- What are the possible states of a Promise?
  A promise at a high level can have three states- pending, resolved, rejected.

Everything Done above can be done using a simple function, why really need a Promise?
But what if we have to create a function that resolves after 5 seconds?
or Create an asynchronous function to wait for 2 seconds and then resolve?

That is when
A simple function will look like this:-

```
function asyncWaitFunction(callback){
    setTimeout(callback,2000);
};
asyncWaitFunction(function(){
    console.log("Hello");
});
```

While the promisified function:-

```
function asyncWaitPromiseFunction(){
    let p = new Promise(function(resolve){
        setTimeout(resolve, 2000);
    })
    return p;
}
const value = asyncWaitPromiseFunction();
value.then(function(){
    console.log("Hello");
})
```

This is just a wrapper on top of setTimeout.

#### Async/Await

Read more about them on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

- Again, just syntactical sugar
- Still uses callbacks/Promises under the hood

Example of Promisified Function:-

```
function asyncWaitPromiseFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    })
    return p;
}
function main(){
    asyncWaitPromiseFunction().then(function(value){
        console.log(value);
    })
}
main();
```

Vs Example of Async Function:-

```
function asyncWaitPromiseFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there");
        },1000);
    })
    return p;
}
async function main(){
    let value = await asyncWaitPromiseFunction();
    console.log(value);
}
main();
console.log("Helloooooooooooo");
```

In this above example, the thread will not get stuck but will wait at the await keyword but all the logic inside that block will be blocked but not the actual thread.

**Important Notes**

- Any function to use await, needs to be async
- Rather than using the .then() syntax, we add the await keyword and get the value in the variable.
- Under the hood, all three(Callbacks, promises, await/async) do the same thing.
- The only thing is that the async/await is the cleanest.

##### This will also be covered in WEEK 2.1. So there is a possibility that we use the same examples or refer to this file in that week.
