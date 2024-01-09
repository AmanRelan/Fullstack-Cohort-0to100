# WEEK 5.1

## Notes From Cohort by TAs

You can find the notes for this week created by TAs that covers `Diving into React` can be found [here](https://quickest-juniper-f9c.notion.site/Week-6-1-React-Deeper-Dive-9e3f522c7e12492da3b27b611ca5c4c4)

### Things we will cover in this week

- React deep dive
- Jsx
- class vs className
- static vs dynamic websites
- State
- components re-rendering

### Episode Theory

#### React Deep Dive

##### Why do you need React?

- Web Development is all about creating websites and applications using languages like HTML, CSS, and JavaScript.
- JavaScript, in particular, is essential for making websites interactive and dynamic.
- However, as websites get more complex, managing JavaScript code becomes quite tricky.
- People realised it’s harder to do DOM manipulation the conventional way.
- That's where React comes in.
- React is a JavaScript library - think of it as a collection of JavaScript code that others have written, which you can use to build web applications more efficiently.
- Under the hood, the react compiler convert your code to HTML/CSS/JS.
- One of the coolest things about React is its use of components.
- React also helps in managing the 'state' of your application. The state is like the app's memory. It remembers things like whether a user is logged in, what’s in their shopping cart, or if a button was clicked. React keeps this information consistent as the user interacts with the app.
- Components and states are the two parts in which all websites can be divided into.

#### State

- In the world of web development, particularly when using libraries like React, the state is a critical concept to understand. It's like the short-term memory of your application.
- the state refers to the dynamic information that the application needs to remember as it interacts with the user.
- This might include:
  1. User Inputs
  2. User Actions
  3. Data Responses
  4. UI Changes
- When the state changes, React updates the user interface to reflect these changes.
- For example, if you add an item to your shopping cart, the cart icon might update to show a new item count. This update happens because the state of the application - the count of items in your cart - has changed.

#### Components

- A component is a self-contained unit of a user interface (UI).
- A component can be a button, a header, a form, a dialog box, or even a more complex structure like a navigation bar or a data table.

##### Why Use Components?

- Reusability => Once you create a component, you can reuse it throughout your application.
  For example, if you design a button component with specific styles and behaviors, you can use it in multiple places in your app, ensuring consistency and reducing the amount of code you have to write and maintain.
- Modularity => Components help in breaking down the user interface into smaller, manageable pieces.
  This makes your code more organized and easier to understand.
  Instead of having a single, large file with all your code, you can have multiple smaller components.
- Maintainability => When each piece of your UI is a separate component, fixing bugs and updating your app becomes much easier.
  You can update one component without necessarily affecting others.
- Efficiency => With components, it's easier to manage the way your app renders and re-renders content.
  For instance, if only one component needs to be updated, React can just re-render that component without touching the rest of the UI.

##### How Components Work in React

- In React, each component is typically a JavaScript function or class.
- It outputs a piece of UI, which React then renders to the web page.
- Components can have their own state (like a toggle button that knows if it's on or off) and can be passed data, known as 'props', to display or use (like passing a user's information to the ProfileCard).
- Components can also be nested within other components, allowing you to build complex UIs from simple, reusable pieces.
  This hierarchical structure makes it easy to manage and scale your application.

#### JSX

- JSX stands for JavaScript XML.
- It's a syntax extension for JavaScript, commonly used with React to describe what the UI should look like.
- JSX combines the power of JavaScript with the simplicity of HTML-like syntax, making it easier to write the structure of your user interface.
- JSX looks like HTML in your JavaScript code.
  For example, in plain JavaScript, you might create a button like this:
  ```
  const button = document.createElement('button');
  button.textContent = 'Click me';
  ```
  But with JSX, you can write it more intuitively, like this:
  ```
  const button = <button>Click me</button>;
  ```
- This makes your code more readable and similar to the HTML templates you might already be familiar with, but with the full power of JavaScript behind it.

##### We will now create a counter-app
