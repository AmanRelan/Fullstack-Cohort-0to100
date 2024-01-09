# WEEK 6.1

# React Hooks

**React week-6 Repository**
Repository Link to follow for [week-6](https://github.com/AmanRelan/Week-6-cohort-2.0)

## Notes From Cohort by TAs

You can find the notes for this week created by TAs that covers `React Deeper Dive` can be found [here](https://quickest-juniper-f9c.notion.site/Week-6-1-React-Deeper-Dive-9e3f522c7e12492da3b27b611ca5c4c4)

### Things we will cover in this week

- useCallback
- useMemo
- useEffect
- custom hooks
- prop drilling

### Episode Theory

#### Jargons for learning React

1. **Hooks**

   - Introduced in React 16.8
   - Allows you to use state and other React features without writing a class.
   - They enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in Class Based Components.
   - Led to more concise & readable way of writing components in React.
   - Common Hooks Examples

   1. useState
   2. useEffect
   3. useCallback
   4. useMemo
   5. use Ref
   6. useContext

2. **Side effects**
   Anything/ any operation that reach outside the functional scope of a React Component.
   These operations can affect other components, interact with the browser, or perform asynchronous data fetching.
   Example-
   - setTimeout
   - fetch
   - setInterval
   - document.getElementById("").innerHTML = ""

##### Why we need Side Effects?

- There are other set of things need to happen that are to be separate from rendering cycle.
- They should not collude with rendering cycle

#### useState Hook

- Describe the state of the application
- Simple Object that contains `what` your frontend should look like
- Whenever state updates, it triggers a re-render- Updates the DOM.

#### useEffect Hook

- Allows user to perform side effects in functional components.
- Serves the same purpose as `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` in React Class Components, but unified in a single API.
- Let's you put some conditions under which you want to make some particular operation.
- `[]`-> Empty Dependency Array, renders the code/ runs the use Effect condition only the first time when the component renders and will never run it ever again.
- What should happen in the useEffect is defined in the first function(callback function) passed to the useEffect.
- Usually, inside dependency Array we put in a state variable.
- useEffect() => Will run twice if it is inside `React.strictMode`

Code Example-

```
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
      .then(function (response) {
        setTodo(response.data.todo);
      });
  }, [todoId]);
```

#### useMemo

- We need to understand what `memoization` means
- Remembering some output given an input and not computing it again.
- Across Renders, to remember the value.

Problem Statement:-
Assume we have this following code:-

```
import { useState } from "react";

const MemoizedCounter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for (let i = 0; i <= inputValue; i++) {
    count += i;
  }

  return (
    <div>
      <input
        type="text"
        name="sum-counter"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>
        Sum from 1 to {inputValue} is {count}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};

export default MemoizedCounter;
```

If you execute the code, we see that there is a problem in this code. The problem is when you click on the Counter button, the state variable changes and then there is a re-render even though there is no change in the previous input value, the for loop and the sum function runs again. So, we use memoization, which helps us remember the value across renders.

- There is another method that can optimise this, it can be by using the `useEffect` hook, which can solve the problem as:-
- This is an optimal solution which will make the code do less renders and will look like this-

```
import { useEffect, useState } from "react";

const MemoizedCounter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i <= inputValue; i++) {
      count += i;
    }
    setFinalValue(count);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        name="sum-counter"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>
        Sum from 1 to {inputValue} is {finalValue}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};

export default MemoizedCounter;
```

- But there is only one problem with this approach, we are causing a re-render.
  Firstly, inputValue is changing, render happens.
  Then, because inputValue is changing, that is causing finalValue is changing.
  So, it will cause 2 re-renders, which makes it slightly optimal than our previous state variable solution.

- Let's not have a state variable, but we only recompute count,only when inputValue, which is similar to useEffect but this code runs only when the inputValue changes, does not matter how many re renders are happening.
  So, the code looks like this -

```
import { useMemo, useState } from "react";

const MemoizedCounter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        name="sum-counter"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>
        Sum from 1 to {inputValue} is {count}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};

export default MemoizedCounter;
```

- This renders once and only when inputValue changes.
- This code also looks cleaner.
- The useEffect will introduce another state variable vs useMemo where we are updating the variable gets computed on the fly and then does render only once.

#### useCallback Hook

- Hook in React that helps memoization of functions, which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary renders.
- `useCallback` takes in 2 arguments, first is the function, which is your main function, and second is the dependency array.
- Example-

```
const a = useCallback(function(){
    console.log("Hi there");
},[])
```

#### Custom hooks

- Just like useState, useEffect, you can write your own custom hooks.
- It has to be a function, but it should start with a `use`(naming convention).
