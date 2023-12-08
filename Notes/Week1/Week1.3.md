# WEEK 1.3

## Basic JS APIs(Beginners)

### Things we will cover in this week

- String API Methods
- Number API Methods
- Array and its methods
- Classes
- Date Class and its methods
- Understand JSON
- Learn about Math class and it's available methods
- Object and its methods

### Episode Theory

#### Strings

Read About Strings and all of its available APIs at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- String Related Functions -> Common functions given by JS for String Manipulation
- `length`- Gets the Length of the string. Example- If string is `Aman`, so length should respond with 4.

```
function getLength(str) {
  console.log("Original String:", str); //Output: Aman
  console.log("Length:", str.length); //Output: 4
}
getLength("Aman");
```

- `indexOf` - index of the word/character/letter you are searching for, what point is this present in the string
- `lastIndexOf`- Gives you the last index of the searched Word.

Example Code-

```
function findIndexOf(str, target) {
  console.log("Original String:", str); //Output: Hello World
  console.log("Index:", str.indexOf(target)); //Output: 6
  // Suppose we modify the target Manually
  console.log("Index:", str.indexOf("Hello")); //Output: 0
  console.log("Index:", str.indexOf("asdasd")); //Output: -1, means not present in the string
  //What if there is multiple worlds
  console.log("Index:", "Hello World World".indexOf("World")); //Output: 6
  // What if we want the last index of this World
  console.log("Index:", "Hello World World World".lastIndexOf("World")); //Output: 18
}
findIndexOf("Hello World", "World");
```

- `slice`- Three arguments are given(string, startingIndex, endingIndex)- So from the string give me everything between startingIndex to endingIndex -> It includes starting from `startingIndex` until `endingIndex`

Code Example-

```
function getSlice(str, start, end) {
  console.log("Original String:", str); //Output: Hello World
  console.log("After slice:", str.slice(start, end)); //Output:
}
getSlice("Hello World", 0, 5);
```

- `substr`- Deprecated. Use Slice instead. Start from startingIndex, but will give you the number of characters mentioned.

```
function getSubstring(str, start, end) {
  console.log("Original String:", str);//OUTPUT: AMANRELAN
  console.log("After substring:", str.substr(start, end));// Output:  ANREL
  // Doing the same with slice
  console.log("After substring:", str.slice(start, end));// Output:  ANR
}
getSubstring("AMANRELAN", 2, 5);
```

- `replace`- Replaces a word/character/letter with another word/character/letter

```
function replaceString(str, target, replacement) {
  console.log("Original String:", str); // Hello World
  console.log("After replace:", str.replace(target, replacement)); // Hello Javascript
}
replaceString("Hello World", "World", "JavaScript");
```

- `split`- The split() method of String values takes a pattern/delimiter and divides this string into an array

```
function splitString(str, separator) {
  console.log("Original String:", str); //Output: Hello World
  console.log("After split:", str.split(separator)); //Output: ['Hello', 'World']
}
splitString("Hello World", " ");

```

- `trim`- The trim method trims the spaces in the beginning or ending of the string but does not remove the space in the middle of the string.

```
function trimString(str) {
  console.log("Original String:", str); // Output: ' Hello World '
  console.log("After trim:", str.trim());// Output: 'Hello World'
}
trimString(" Hello World ");
```

`toUpperCase`- Converts the string to Upper case

```
function toUpper(str) {
  console.log("Original String:", str); //Output: Hello World
  console.log("After toUpperCase:", str.toUpperCase()); // Output: HELLO WORLD
}
toUpper("Hello World");
```

`toLowerCase`- Converts the string to Lower case

```
function toLower(str) {
  console.log("Original String:", str); //Output: Hello World
  console.log("After toLowerCase:", str.toLowerCase()); //Output: hello world
}
toLower("Hello World");
```

#### Numbers

Read more about Numbers and it's available methods at [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

- `parseInt` - parses a string argument and returns an integer. Global Function, can be called anywhere in String. Adjusts the quotes and gives the number between the quotes, trims any gibberish after the number but doesnt do anything if there is a number between the gibberish `parseInt(avhsdj21asdk)` -> Returns NaN. Cannot have a decimal number, converts it to integer

```
function explainParseInt(value) {
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42"); //OUTPUT: 42
explainParseInt("42px"); //OUTPUT: 42
explainParseInt("3.14"); //OUTPUT: 3
```

- `parseFloat`- Similar to parseInt, but return a decimal number.

```
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14"); //OUTPUT:  3.14
explainParseFloat("42"); //OUTPUT: 42
explainParseFloat("42px"); //OUTPUT: 42
```

#### Array

Read More about Arrays and it's methods at [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

- `push`- Adds the specified elements to the end of an array

Code Example-

```
function pushExample(arr, element) {
  arr.push(element);
  console.log("After push:", arr); //OUTPUT: [1,2,3,4]
}
pushExample([1, 2, 3], 4);
```

- `pop`- Removes the specified elements from the end of an array

Code Example-

```
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr); // [1,2]
}
popExample([1, 2, 3]);
```

- `shift`- Remove Something from the Front of the array.

```
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr); // OUTPUT: [2,3]
}
shiftExample([1, 2, 3]);
```

- `unshift`- Puts something in the front of the array.

```
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr); //OUTPUT: [0,1,2,3]
}
unshiftExample([1, 2, 3], 0);
```

- Concat - used to merge two or more arrays

```
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3); //OUTPUT: [1,2,3,4,5,6]
}
concatExample([1, 2, 3], [4, 5, 6]);
```

- `forEach()`- Can help you iterate over each element and perform some function

```
function forEachExample(arr) {
  console.log("Original Array:", arr);

  // Callback Function used in the forEach
  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
//OUTPUT:
1 0
2 1
3 2
```

- `map()`, `filter()`, `sort()`, `find()` to be covered in a later video, will be updated then

#### Classes

Read more about classes at [MDN Web DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Let's you put a bunch of properties of certain type together.
- This helps you avoid writing repeated logic.

A good example is an Animal-

```
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  describe() {
    return `${this.name} has ${this.legCount} legs and it ${this.speaks}.`
  }
}
```

So, simply we can create a new Animal with common attributes like:-

`let dog = new Animal("dog", 4, "bark");` -> Create an Object
`let cat = new Animal("cat", 4, "meow");`

So, you have created a blueprint explaining what a class can do.
SO, it will have attributes like `name`, `legCount`, `speaks` in class `Animal`.
And have functions like `describe()`.

`cat.describe();` -> `cat has 4 legs and it meow.` -> Call Function on a object

`Static`:- Static Functions on a class, and are associated to a class itself and not the object.
So, in Animal class we can have something like this

```
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  myType(){
    console.log("I am an Animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs and it ${this.speaks}.`
  }
}
```

and when you `console.log(Animal.myType())` -> `I am an Animal`
This method is not associated to an object(dog/cat), it is associated to the class itself(Animal).

What if we call `Animal.speak()`? -> TypeError: Animal.speak is not a function

- `speak` can be called on an object of the class, cannot be called directly on the class.
- If you want to call something directly on the class, you make the method as `static`

#### Date

Read more about Dates on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

- Global Class, can be called directly, present to be used outside the box.
- Create new object and then do a bunch of things.
- Create a new Date Object

```
const currentDate = new Date();
console.log(currentDate.getDate()); //Output: 8
console.log(currentDate.getDate()); //Output: Fri Dec 08 2023 19:21:49 GMT+0530 (India Standard Time)
console.log(currentDate.getFullYear()); // Output: 2023
console.log(currentDate.getHours()); // 19
console.log(currentDate.getMinutes()); // 22
console.log(currentDate.getSeconds()); // 41
console.log(currentDate.setFullYear()); // 41
console.log(currentDate.setFullYear(2022));
console.log(currentDate.setMonth(5));
console.log(currentDate.getTime());
```

`currentDate.getTime()` -> Gives the time in milliseconds since 1970(Epoch)

#### JSON

Read more about JSON at [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Example-

```
const user = {
    name: "Aman",
    age: 24,
    gender: 'male'
};
```

console.log(user["name"]);

> **Suppose you want to send it to a user on some other**

- We can do it by sending it as a string.
- To be able to share data back and forth, we have to interchange the data to a string and back to JSON object.
- JS gives you inbuilt methods

1. JSON.parse()
2. JSON.stringify()

`const stringifiedUser = JSON.stringify(user);` -> Converts JSON to string
`console.log(stringifiedUser) -> '{"name":"Aman","age":24,"gender":"male"}'`

And now to convert the string back to JSON.

`const userObject = JSON.parse(stringifiedUser);` -> Converts String to JSON
`console.log(userObject) -> {name: 'Aman', age: 24, gender: 'male'}`

#### Math

Read more about Math and all the available methods at [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- `Math.random` - Random Number between 0 and 1
- `Math.floor`- Floor of a number
- `Math.Ceil`- Biggest Integer greater than this number
- `Math.max`- Gives Maximum of the arguments you pass
- `Math.min`- Gives Minimum of the arguments you pass

#### Objects

Read more about Objects and all it's available methods at [MDN WEB Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- `Object.keys(obj)` -> Class Object and a static method keys which returns an array of the keys in the Object
- `Object.values(obj)` -> Class Object and a static method values which returns an array of the values in the Object
- `Object.entries(obj)` -> Class Object and a static method entries which returns key value pair in an array
- `obj.hasOwnProperty('propertyName')` -> Returns true/false
- `Object.assign({}, obj, {newProperty: "newValue" })` -> Helps you merge two objects

Code Example for Assign:-

```
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
let newObj = Object.assign({}, obj, { newProperty: "newValue" });
console.log("After Object.assign():", newObj);
```

This outputs a merged object as :-

```
{
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "newProperty": "newValue"
}
```
