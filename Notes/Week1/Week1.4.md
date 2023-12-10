# WEEK 1.4

## Loops, Functions and Callbacks in JS

### Things we will cover in this week

- loops
- functions
- Callback functions

### Episode Theory

**This week's theory is already covered in the notes for Week 1.2, so Please refer to the document for the notes named `Week1.2`**

#### Functions

- Function declaration

Here we have just declared a function, but we are not calling the function yet. So, that means that function knows what to do but it has not been instructed to do the task it has been asked to do yet.

```
function findSum(n){
    let ans = 0;
    for(let i=0; i < n; i++ ){
        ans = ans + i;
    }
    return ans;
}
```

- Function calling

Here we call the function and instruct it to perform it's task. `findSum(100)` is the syntax used to call the function.
Whatever the function returns, the sum in this case gets stored in `ans` variable.

```
let ans = findSum(100);
console.log(ans);
```

So, Function declaration -> Function Calling -> Storing the result of the returned value.

- `DRY` -> DON'T Repeat Yourself

#### Callback Functions

- Call one function inside another function

Code Example-

```
function square(n){
    return n * n;
}
function sumOfSquares(a,b){
    let value1 = square(a);
    let value2 = square(b);
    return value1 + value2;
}

console.log(sumOfSquares(1,2)); => OUTPUT: 5
```

Here, we are calling the `square` function in `sumOfSquares(a,b)` but this is not a callback yet, this is just how javascript works. However, let's introduce a cube function

```
function square(n){
    return n * n;
}
function cube(n){
    return n * n * n;
}
function sumOfSquares(a,b){
    let value1 = square(a);
    let value2 = square(b);
    return value1 + value2;
}

function sumOfCubes(a,b){
    let value1 = cube(a);
    let value2 = cube(b);
    return value1 + value2;
}
console.log(sumOfSquares(1,2)); => OUTPUT: 5
console.log(sumOfCubes(1,2)); => OUTPUT: 9
```

However, there is a flaw in this approach. The Flow is DRY being Violated here.How?
-> The logic of both the cube and square is where we are repeating ourselves, we are using value1, value2, and then returning their sum, just the function they are calling is changing. So, we can change it to use something else?

```
function square(n){
    return n * n;
}
function cube(n){
    return n * n * n;
}
function sumOfSomething(a,b,fn){
    let value1 = fn(a);
    let value2 = fn(b);
    return value1 + value2;
}
console.log(sumOfSomething(1,2, square)); => OUTPUT: 5
console.log(sumOfSomething(1,2, cube)); => OUTPUT: 9
```

- The best definition for callback function now is the third argument we are sending right now is called the callback function because one function is calling back the other function.
- When you can pass one function to another function, that's what is called a Callback function.

#### Anonymous Function

- A function who does not have a name.
- Question is, how do we call a function if it doesn't have a name?
- We can simply define the function in as a functional argument and that will still work, and we don't really need a name for that function.

Example-

```
function sumOfSomething(a,b,fn){
    let value1 = fn(a);
    let value2 = fn(b);
    return value1 + value2;
}
const ans = sumOfSomething(1,2, function(n){
    return n * n;
});
console.log(ans);
```

- Can we put a function name as a third argument? YES
- But why should we not? -> Because we will probably not call that function anywhere else due to the reason of scoping of the function for that particular case.
