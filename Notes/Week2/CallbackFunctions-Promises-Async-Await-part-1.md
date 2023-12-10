#### Callback Functions

- Suppose we are building an e - commerce website.

- We need a cart
- So, we can have something in the cart.
- How an e - commerce site works ?
- First, we create order then we make payment!
- According to this, we might have 2 APIs `api.createOrder()` and then`api.proceedToPayment()`.
- This order is necessary, as there will be a dependency that first the order is created and only then the payment will be done ? - How do we manage that dependency ? - Here Callback can come into picture and help in this behaviour

```
const cart = ['shoes','pants', 'perfume'];
api.createOrder();
api.proceedToPayment();

```

So, we can wrap the`proceedToPayment() inside a  callback function`

```
api.createOrder(cart, function(){
    api.proceedToPayment();
})
```

Now, this becomes the responsibility of createOrder to create an order and call this `payment` function back.

What if now we have to show an order summary Page ?

- We now have to call the API, say - `api.showOrderSummary()`.
- We will create another function for showOrderSummary and since it has to be shown after the payment is successful, we will pass it to proceedPayment function.
- Our Code now looks like this -

```
api.createOrder(cart, function(){
  api.proceedToPayment(function(){
    api.showOrderSummary();
  });
})

```

This gives the proceedToPayment the responsibility to execute the order Summary.
What if now we have to Update the wallet.SO, it will be updated by another API,
which will change the code as follows -

```
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
})
```

But there is a problem in this flow.When we have a large codebase and the APIs are dependent on one after the another.So, we end up in a`callback hell`.
Our code starts to grow horizontally instead of vertically.This code style is tough to maintain.The structure as above is also called as `Pyramid of Doom`.
There is another problem while using callbacks - `Inversion OF Control`.

`Inversion of Control` - We lose control our code when we are using callbacks.
Complicated?Check the code example-

```
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
    });
});
```

When we gave the `proceedToPayment` to`createOrder`, we expect it will create an order and then call our function back, but this is very risky ?

- Risky because we gave the control to createOrder API.And then we are blindly trusting it but what if our callback function never gets called.

#### Promises

- Used to handle async operations in JS.

- How things worked before promises
  Code Example-

  ```
    const cart = ['shoes','pants', 'perfume'];
    createOrder(cart); // returns an orderId
    proceedToPayment(orderId);
  ```

- But these two APIs are asynchronous and we don't know how much time it will take and are dependent on each other, as once the order is created only then we proceed to Payment. WE have seen the same example above and it can be written as this inside a callback function

```
function createOrder(cart, function(){
    proceedToPayment(orderId);
})
```

But this has two problems:-

1. callback hell
2. Inversion of control

In order to overcome these problems, we would design our API in such a way, such that createOrder API won't take a callback function, but will just take card details and return us a promise.

```
const promise = createOrder(cart);
```

- Promise is nothing but just an object with data values {data: undefined}.
  But this is an async API call, so it will return us an empty object with property data which is undefined. Suppose, after 5-10s the createOrder and will return orderDetails, so we will fill the object with order details.
- What will we do if we receive this object and how will we use it in the proceedToPayment()?
- We will define a callback function `.then()` to the promise variable for `createOrder()`
  Example-

```
promise.then(function(orderId){
    proceedToPayment(orderId);
});
```

- `.then()` is a function available over promise object.
- When we have the orderId resolved from the createOrder in the above promise variable, then it will have details filled in an object in `{data: orderId}`
- When we have data inside this promise object, the callback function attached to the `.then()` will be automatically called.

- This looks more complicated than the original Callback function? What improvements did we make in the promise object?
  What we did earlier is that we passed a callback function to createOrder API and blindly trusting the createOrder API.
  While in this case, we are attaching the function to a promise object.
  In this case, the createOrder will do only it's job and fill the promise object whenever it wants to and as soon as this data is filled in the object, it will automatically call the callback function back and we will have the control of our code. And promises give us this guarantee that it will call this callback function whenever there is data inside the promise object.

##### REAL WORLD EXAMPLE

- use `fetch()` - API given by browsers to make external call.
- We will use this API to make an API call to github servers
- Returns us a Promise

```
const GITHUB_API =  'https://api.github.com/users/AmanRelan';
const resultFromGithub = fetch(GITHUB_API);
console.log(resultFromGithub); // OUTPUT: Promise { <pending> }
user.then(function(user) => {
    console.log(user);
})
```

- Right now this promise is in a pending state
- There are two things in a promise ->

1. Promise Result - Result will store the data returned by Promise.
2. Promise State - In what state currently the promise is. Initially, it is in a `<pending>` state. Post that, when the promise result is received, its state changes to `fulfilled`. So there can also be another state in case there is some error with the API Call, i.e `Rejected`.

So, a promise has 3 states-

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.

###### NOTE: Promise object is Immutable. This gives you control over the data.

A Promise is an object representing the eventual completion(success/failure) of an asynchronous operation.

##### Promise Chaining

- Helpful to avoid Callback Hell
- Callback Hell:

```
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfor){
        showOrderSummary(paymentInfor, function(){
            updateWalletBalance();
        })
    })
})
```

- Callback inside Callback inside Callback
- Promises help you resolve this callback hell by using the concept called Promise Chaining.
- Now this can be done using Chaining as:-

```
const promise = createOrder(cart);
promise
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo)
    })
    .then(function(){
        return updateWalletBalance();
    })

```

- This way our code becomes Lean
- But there's a caveat- whenever you are doing chaining, we want to pass the data from one promise to flow to the other chain, so we need to use the `return` keyword and return from all the promises,that's when we get the data into the promise chain.

Benefits Of Promise-

1. Gives Trust & Guarantee in our whole transaction because resolved only once
2. 3 States only - pending, fulfilled, rejected
3. Pass promises as it is immutable
