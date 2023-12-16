# Week 2.6

### Things you will cover in this week

- MAP function
- Filter function
- Arrow Functions

#### Episode Theory

##### Arrow Functions

Read more about arrow functions on [MDN WEB Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Arrow Functions v/s normal Function

```
function sum(a,b){
    return a + b;
}

const sum = (a,b) => {
    return a + b;
}
```

- Arrow and normal function are almost exactly the same
- Whenever you are passing functions as cb, the meaning of normal function vs arrow functions can change
- Major difference is that the arrow functions is the way `this` gets binded in a function syntax vs not in arrow functions

##### Map function

Read more about Map function for Array at [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- Syntax => `array.map(callback function)`
- Given an initial array input
- A transformation function (callback function)
- Pass it to the map function
- Gives us the final output.
- Works when we want to do some transformation on every value of the array.
- Returns a new array.

##### Filter function

Read more about Filter Function for Array at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- Syntax `array.filter(callback function)`
- Given an initial array
- We need some particular conditional value(say even values of a number array).
- We pass it to the filter function
- Gives us the filtered value from the array.
