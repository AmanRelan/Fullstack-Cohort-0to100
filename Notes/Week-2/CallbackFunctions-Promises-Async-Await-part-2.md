### Creating a Promises, consume a promise

`const cart = ['shoes', 'pants', 'perfume'];`

#### First Task - Create an Order API

`const promise = createOrder(cart); // Order ID`

```
promise.then(function(){
    proceedToPayment(orderId);
});
```

This above is the consumer part but as a developer we will have to also produce this result. So, we will create a promise for createOrder.
This can be done as the following code-

- To Create a promise, we use a new constructor keyword `Promise`.
- This can be done using `const pr = new Promise(function(resolve, reject){});`
- This is a Promise Constructor, that takes a function which has resolve, reject functions which are given by Javascript to build promises by design of Promise APIs.
- Then we can return this Promise
- Inside the promise, we will handle the logic of handling whatever we need to do.
- Resolve and reject are used to give some success or failure, resolve is used for success, reject is for failure.

##### Producer end of code

```
const cart = ["shoes", "pants", "perfume"];
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder Logic
    // Can be calls to database
    // Example - validate cart
    // API Call to create order which returns orderID, which will be returned as a success
    // Failure would be to throw the error

    //Validate Cart failed
    if (!validateCart(cart)) {
      const err = new Error("Validation of cart Failed");
      reject(err);
    }
    //Logic for Create Order
    const orderId = "dummy-order-12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function validateCart(cart) {
  return true;
}
const promise = createOrder(cart);
promise.then(function (orderId) {
  console.log(orderId); //Prints dummy-order-12345 in 5s
});

```

This is a dummy promise that can be done for creating an Order.

To simply reject the promise, we can reject the promise with the following call-

```
const cart = ["shoes", "pants", "perfume"];
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder Logic
    // Can be calls to database
    // Example - validate cart
    // API Call to create order which returns orderID, which will be returned as a success
    // Failure would be to throw the error

    //Validate Cart failed
    if (!validateCart(cart)) {
      const err = new Error("Validation of cart Failed");
      reject(err);
    }
    //Logic for Create Order
    const orderId = "dummy-order-12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function validateCart(cart) {
  return false;
}
const promise = createOrder(cart);
promise.then(function (orderId) {
  console.log(orderId); //Prints dummy-order-12345 in 5s
});

```

This silently fails the promise, and we get an error but this is an error in the browser but we have not handled the error. And we should not do this, so we should write code to handle error.
To handle this error-
WE have written just the success part(.then()), so what do we do when it fails?
We use the `.catch()` function to which we can attach the failure callback.

- Now the producer code with the catch will look like-

```
const cart = ["shoes", "pants", "perfume"];
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder Logic
    // Can be calls to database
    // Example - validate cart
    // API Call to create order which returns orderID, which will be returned as a success
    // Failure would be to throw the error

    //Validate Cart failed
    if (!validateCart(cart)) {
      const err = new Error("Validation of cart Failed");
      reject(err);
    }
    //Logic for Create Order
    const orderId = "dummy-order-12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function validateCart(cart) {
  return false;
}
const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log(orderId); //Prints dummy-order-12345
  })
  .catch(function (err) {
    console.error(err.message);
  });

```

which will log in the console as - `Validation of cart Failed`

##### Promise chaining

Now, let's consider making the `proceedToPayment()` method and then chaining it with the `createOrder()` the way you will do it in some production level code.

So, what we do is introduce the proceedToPayment method

```
const cart = ["shoes", "pants", "perfume"];
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder Logic
        // Can be calls to database
        // Example - validate cart
        // API Call to create order which returns orderID, which will be returned as a success
        // Failure would be to throw the error

        //Validate Cart failed
        if (!validateCart(cart)) {
            const err = new Error("Validation of cart Failed");
            reject(err);
        }
        //Logic for Create Order
        const orderId = "dummy-order-12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}
function validateCart(cart) {
    return true;
}
function proceedToPayment(receivedOrderId){
    //Payment logic
    return new Promise(function(resolve, reject){
        resolve("payment_id");
    });
};
createOrder(cart)
    .then(function (orderId) {
      console.log(orderId);
        return orderId; //Prints dummy-order-12345
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentId){
      console.log(paymentId);
    })
    .catch(function (err) {
        console.error(err.message);
    });
```

NOTE:-

1. We Return the promise and handle it in the next level of the Chain, which is a good way to write the code.
   Passing things down the chain.
2. And the catch at the end will handle the error at any level of the chain.

- What if one of the step fails but we wanted to proceed/ if one of the API Fails but you want all the others to work as it is?
  Ans. We just put the catch block below the chain where we specifically want to handle the API Failure, otherwise we can just proceed with the single catch block.
  Code Example -

  ```
  const cart = ["shoes", "pants", "perfume"];
  function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Validation of cart Failed");
            reject(err);
        }
        const orderId = "dummy-order-12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
  }
  function validateCart(cart) {
    return false;
  }
  function proceedToPayment(receivedOrderId) {
    //Payment logic
    return new Promise(function (resolve, reject) {
        if (receivedOrderId) {
            resolve("payment_id");
        }
        const err = new Error("Payment failed");
        reject(err);
    });
  }
  function showOrderSummary(paymentId) {
    return new Promise(function (resolve, reject) {
        if (paymentId === "payment_id") {
            resolve("Should Show order Summary");
        }
        const error = new Error("Order summary should not be shown");
        reject(error);
    });
  }
  function updateWalletBalance(summaryShown) {
    return new Promise(function (resolve, reject) {
        if (summaryShown === "Should Show order Summary") {
            resolve("Balance Updated");
        }
        const error = new Error("Failed to update balance");
        reject(error);
    });
  }
  createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId; //Prints dummy-order-12345
    })
    .catch(function (err) {
        console.error(err.message);
    })
    .then(function (orderId) {
        console.log(proceedToPayment(orderId));
        return proceedToPayment(orderId);
    })
    .then(function (paymentId) {
        console.log(showOrderSummary(paymentId));
        return showOrderSummary(paymentId);
    })
    .then(function (summaryShown) {
        console.log(updateWalletBalance(summaryShown));
        return updateWalletBalance(summaryShown);
    })
    .catch(function (err) {
        console.error(err.message);
    })

  ```

  - In the above code the validateCart will fail but the other APIs will work as it is and when we continue down the chain we will see 'Payment_id' printed in the console
