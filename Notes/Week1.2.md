# WEEK 1.2

## JS Foundational Knowledge

### Prerequisites

1. Node installed -> [Install Node](https://nodejs.org/)
2. IDE Configured -> [Install Visual Studio Code](https://code.visualstudio.com/)
3. Basic HTML/CSS wrap up

> Offline Video Content posted on - https://app.100xdevs.com/courses/3/1

### Things we will cover in this week

- Why Languages?
- Scripting/Interpreted vs Compiled languages?
- Why JS >> Other Languages in some use cases
- Strict vs Dynamic Languages
- Single threaded nature of JS
- Simple Primitives in JS(number, strings, booleans)
- Complex Primitives in JS(arrays, objects)
- Functions in Javascript
- Practice Problem Solving
- Callback Functions, event loop, callback queue
- Callback hell and Promises

### Episode Theory

#### Why Languages?

- Languages are used to write applications. This is basically to instruct the computer what should it do when a specific program is executed.
- A program is present in the computer memory/storage(SSD/HDD) with a set of instructions that are executed when we execute that program and when that program is being executed it is done in RAM and is done in a binary format because that is what computer understands. A binary format is a collection of zeroes and ones(010101001) which is the language that computer peripherals understand. This was done as there is on/off what a chip can understand.

#### Scripting/Interpreted vs Compiled Languages?

##### Compiler/Compiled Language

- When a program is written by a developer in a high level language, there is a compiler that converts this code
  into 01 for computer to understand.
- There are three steps that take place in the execution of a compiled Language(for example- C++ code).
- Stages are :-

1. Write Code
2. Compile Code
3. Run the code(put it in the RAM).

##### Interpreted Language

- Javascript is an example of Interpreted Language.
- It is different from the compiled language and usually go line by line.
- It runs partially until an error comes.
- This just takes 2 stages for the execution of the code
- Stages are:-

1. Write Code
2. Run code

##### Static vs Dynamically Typed Languages

- Statically typed languages
  A language is statically typed if the type of a variable is known at compile time. For some languages this means that you as the programmer must specify what type each variable is. The main advantage here is that all kinds of checking can be done by the compiler, and therefore a lot of trivial bugs are caught at a very early stage.

- Dynamically typed languages
  A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc. This means that you as a programmer can write a little quicker because you do not have to specify types every time

##### Single threaded Nature of JS

- JS is a single threaded which means only one statement is executed at a time.
- IN JS, the program is executed line by line, one line at a time.Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.
- So, at a time it just uses one core of the system which makes it tough to handle some time consuming tasks.
- That is why it is considered to be a bad language for scalable systems.
- There is a way to make it use all the cores of your machine(Cluster Module)
- Read more about Cluster Module at [Nodejs.org](https://nodejs.org/api/cluster.html)

#### Simple Primitives

- var, let, const
- let - variable whose value keeps changing
- const- variable who have a constant value and it does not change

Read More About Primitive Data Types in Javascript at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

Code example-

```
let firstName = 'aman'; //String Type Variable
let age = 18; //Number Type Variable
let isMarried = false // Boolean Type Variable

// Prints a long string to show the result of the above
console.log('This persons name is ' + firstName + 'aged ' + age + ' years and isMarried is ' + isMarried);
```

#### Conditional Statements

##### `if/else` - Runs certain part of code based on certain conditions

Assignment- Print above user is married or not

```
let firstName = 'aman';
let age = 18;
let isMarried = false;
if(isMarried){
    console.log(firstName + 'is Married');
} else {
    console.log(firstName + 'is Not Married');
}

// Can be solved using a single condition as below:-
if(isMarried == true){
    console.log(firstName + " is married");
}

if(isMarried == false){
    console.log(firstName + " is not married");
}
```

#### Loops

##### `for Loop` =>

- Let's say you are asked to print every digit from 0 to 5
  You would do something like this-

```
let answer = 0;

answer = answer + 1 + 2 + 3 + 4 + 5;
console.log(answer);
```

or

```
let answer = 0;
answer = answer + 1;
answer = answer + 2;
answer = answer + 3;
answer = answer + 4;
answer = answer + 5;
```

But this is a cumbersome way and then let's say if we have to print a number till 100 or more say 1000,
it will be very difficult to do this one by one.
So to overcome this problem every language has something called as loops.
Loops offer a quick and easy way to do something repeatedly.
In JavaScipt, there is something like a `for loop` which can help achieve the result as above in very efficient way.
Code Example-

```
let answer = 0;
for (let i = 0; i <= 100; i++) {
    answer = answer + i;
};
console.log(answer);
```

So, every time this loop runs it takes a value from the `i` variable in each iteration and adds it to the answer.
And then when you run it can be used for a very big number and the correct answer will be received once this program is executed.

##### Complex Primitives

`Arrays`

Read more about Arrays on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

Arrays are a neat way of storing a list of data items under a single variable name.

Let say in big companies they wont have different variables for every person.
For example-

```
let person1 = "Aman";
let age1 = 18;

let person2 = "Harkirat";
let age2 = 19;

let person3 = "Ankit";
let age3 = 20;
```

But if a company has to do it for say 1m+ users and then define all of it in such a way
this will be a very bad practice and would require effort and time.

So a better way to approach this is to use an Array where we can simply define it as this:-

```
let personArray = ["Aman", "Harkirat", "Ankit"];
let ageArray = [18,19,20];
```

This way, a person can be easily defined and then we can access anything based on indexes of the arrays.

Code Example-

```
let personArray = ["Aman", "Harkirat", "Ankit"];
let ageArray = [18, 19, 20];

for (let i = 0; i < ageArray.length; i++) {
    console.log(`${personArray[i]} is ${ageArray[i]} years old`);
}
```

`Objects`

Read more about Objects on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

Syntax of Objects - Objects are represented within curly braces `{}`.
From the above example we can create an object of a user with all it's related data together.
For example-

```
const users1 = {
    firstName: 'Aman',
    gender: 'male'
};
```

And now to be able to access a key of an object is simply by doing something like this:-

`console.log(users1['firstName']);`
`console.log(users1['gender']);`

> We need to note this that `users1['firstName'] is equal as writing users1.firstName` but `users1['firstName'] is different from users1[firstName]`. In `users1[firstName]`, firstName is considered as a variable. So, we need to make sure that you refer the key to be accessed within quotes('' or "").

From Previous Examples, you can create array of Objects, to improve the quality of code and readability and to understand objects.

We can write an array of objects as follows:-

```
const allUsers = [{
    firstName: 'Aman',
    gender: 'male'
}, {
    firstName: 'Harkirat',
    gender: 'male'
},
{
    firstName: 'Priya',
    gender: 'female'
}];
```

And then to access the object keys and value, say for example we have to display the firstName of all the males, we can do something like this:-

```
for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] === 'male') {
        console.log(allUsers[i]["firstName"]);
    }
}
```

This is better because- we put similar content within a single Variable and logic remains the same.

> This object can become even more nested and then this will be extracted in a similar way depending on the nesting of the object.

#### Functions in JavaScript

`Functions`

Read more about Functions on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

- Abstract out Logic in your program
- Take arguments as an input
- Return a value as an output
- You can think of them as an independent program that is supposed to do something
- Functions can also take other functions as input.

- A function definition consists of the function keyword, followed by:
- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly braces, { }.

A very simple example can be to write a function which tells us the result of the sum of two numbers
Code Example-

```
function sum(a, b) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);

```

What does this function do?

- a,b are arguments which means input to the function
- Do some logic on the arguments(addition in this case)
- Returns the final output(`return`)

`Callback Functions`

Read more about Callback Functions on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

A callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete some kind of task.

- Function can take other functions as inputs. A gist of code shared in the live session to

```
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("result of the sum is: ", data);
}

function displayResultPassive(data) {
    console.log("Sum's Result is:- ", data);
}

- You are only allowed to call one function after this
- How will you display Result of a sum?

const ans = sum(1, 2);
```

To do this we will send another argument to a function. So, sum becomes:-

```
function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    return fnToCall(result);
}

function displayResult(data) {
    return `result of the sum is: ${data}`;
}

function displayResultPassive(data) {
    return `Sum's Result is: ${data}`;
}

const ans = sum(1, 2, displayResult);
console.log(ans);
```

Another Example to understand callback function is:-

```
function calculateArithmetic(a, b, type) {
    if (type = "sum") {
        return a + b;
    }
    if (type = "minus") {
        return a - b;
    }
}
const value = calculateArithmetic(1, 2, "minus");
console.log(value);
```

which can be written as a separate sum and subtraction function as:-

```
function calculateArithmetic(a, b, type) {
    if (type = "sum") {
        const value = sum(a, b);
        return value;
    }
    if (type = "minus") {
        const value = sub(a, b);
        return value;
    }
}
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b
}
const value = calculateArithmetic(1, 2, sum);
console.log(value);
```

- Now change this thing a little bit and change the type of the calculateArithmetic as we pass the function to the argument

```
function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b);
    return ans;
};
function sum(a, b) {
    return a + b;
};
function sub(a, b) {
    return a - b
};

const value = calculateArithmetic(1, 2, sum);
console.log(value);
```

The above three shared functions help us to explain what are callback functions. How they are helpful and helps makes our code more modular. All these changes help achieve separation of concerns and makes each function perform a specific task, enhancing code organization.

**NOTE** - `There are a couple of sections that were not covered in the live lecture as mentioned above for which there might be offline classes/maybe to be covered in the next week's live classes. So, will keep updating this as soon as the content is posted further!`
