# WEEK 9.2

# Typescript Introduction

### Things we will cover in this week

- Typescript Introduction

#### Episode Theory

- Strongly Typed Languages vs Loosely Typed Languages
- This has been discussed in the first week as well.
- Production Level code needs more strict type checking
- Why?

1. Less Runtime Errors
2. Stricter Codebase
3. Easy to catch errors at compile time

- People realised Javascript is a powerful language but lacks the strictness provided by types
- Thus, Typescript was introduced as a new language to add types to Javascript

##### What is Typescript?

- TypeScript is a programming language developed and maintained by Microsoft.
- Strict syntactical superset of JavaScript and adds optional static typing to the language.

##### How does the Typescript code run?

- Never runs in the browser
- Javascript is the runtime language and browser understands Javascript
- Typescript is something that gets transpiled down to Javascript
- When transpiling is done, you get type checking. If there is an error, the conversion to JS file fails.

##### **TSC is the official typescript compiler that you can use to convert TS code to Javascript**

##### First TS Code

- Install Ts by `npm install -g typescript`
- Create a new node project(Refer Code/Week-9.2)
- Create a new TS file with `.ts` extension like `a.ts`.
- Write a js code something like this

```
const x: number = 1;
console.log(x);
```

- If you look at it, you can see that we added a `:number` after defining the `x` variable.
  This is basically the type checking done on the x variable.

- Now, browser does not understand `.ts` extension. It understands `JS`. So, we need to transpile it down to Javascript code which can be done by using the official typescript compiler - `tsc` and can be done using `tsc -b`.
- This `tsc -b` will convert the ts file to a js file if there are no type errors in the file.
- This new js file will be a more strict file with type checking

- Now lets say you want to assign the `x` variable a string as:-

```
const x: number = 'gibberish';
console.log(x);
```

- And when you transpile it down to js, the compiler will throw an error.
- It will throw the error saying -> `Type string is not assignable to type number`.

##### Types in Typescript

- number, string, boolean, null, undefined.

##### Things to Learn : How to give types to arguments of a function

- This can be understood via the code below ->

```
function greetUser(name: string) {
  console.log(`Hello ${name}`);
}
greetUser("Aman");
```

##### Things to Learn : How to assign a return type to a function

- This can be understood via the code below ->

```
function sum(a: number, b: number): number {
  return a + b;
}
```

- You can see that `function <function_name>(): number` sets the return type of the function

##### Things to Learn : Type Inference

- Lets say you have a code as following:-

```
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));
```

It defines that the function will take two arguments and return a number. Although, if we remove the number from the function return type as :-

```
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(2, 3));
```

You will see that typescript will show us that our defined function will return a type of number. It was able to automatically infer the type of return the function will be doing. This intelligence of the compiler is called as `Type Inference`.

##### Things to Learn : Defining a type to an input function

- This can be understood via the code below ->

```
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})
```

- Here you can see, in the `delayedCall` function we are passing in a function to which we are assigning a type to an input function as :- `() => void`
- Type `() => void` shows that the function returns nothing/void
- If the function would return, say a number, we would add a type as `() => number`

##### The tsconfig file

- target: specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
- rootDir: Where should the compiler look for .ts files.
- outDir: Where should the compiler look to spit out the .js files.

##### INTERFACE -> Very Important

- How can you assign types to Object?
- User Example ->

```
const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com".
	age: 21,
}
```

- To assign a type to the user object, you can use interfaces
- Code Example ->

```
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
```

- Let's say we go and look into this code -

```
const a: number = 21;
console.log(a);

function greetUser(user: {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}) {
  console.log(`Hello ${user.firstName} - ${user.lastName}`);
}
greetUser({
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
});

function isLegal2(user: {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal2({
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
});

```

- You will see how this violates the DRY rule.
- This is somewhere where the Interfaces can be helpful
- Updated code post the use of interface would look like this ->

```
const a: number = 21;
console.log(a);

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
const userJson = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};
function greetUser(user: User) {
  console.log(`Hello ${user.firstName} - ${user.lastName}`);
}
greetUser(userJson);

function isLegal2(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal2(userJson);

```

##### Implementing Interfaces

- Interfaces have a special property.
- You can implement interfaces as a class.
- Can look something similar like a language `Java`
- Code Example-

```
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
```

##### TYPES - ANOTHER IMPORTANT THING

- Interview question is - **What is the difference between types & interfaces?**
- very similar to interfaces , types let you aggregate data together.
- Code Example-

```
type User = {
	firstName: string;
	lastName: string;
	age: number
}

```

- When given a choice, we use interfaces over Types.
- But types lets you do some other functionalities like

1. Union

- Let’s say you want to print the id of a user, which can be a number or a string.
- This can be done using types as follows -

```
type GreetArg = number | string;

function greet(id: GreetArg){

}
greet(1)
greet('1')
```

2. Intersection

- What if you want to create a type that has every property of multiple types/ interfaces
- This can be done using code like this -

```
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
```

##### Arrays in TS

- As simple as adding `[]` annotation next to the type
- Question : Given an array of positive integers as input, return the maximum value in the array.
  Code Example -

```
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));
```

- Question 2 -> Given a list of users, filter out the users that are legal (greater than 18 years of age)

```
interface User {
	firstName: string;
	lastName: string;
	age: number;
}
function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));
```
