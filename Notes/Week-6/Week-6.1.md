# WEEK 6.1

# React Deeper Dive

**Created a new Repository that covers the React week-6.1**
Repository Link to follow for [week-6](https://github.com/AmanRelan/Week-6-cohort-2.0)

## Notes From Cohort by TAs

You can find the notes for this week created by TAs that covers `React Deeper Dive` can be found [here](https://quickest-juniper-f9c.notion.site/Week-6-1-React-Deeper-Dive-9e3f522c7e12492da3b27b611ca5c4c4)

### Things we will cover in this week

- React returns
- re-rendering
- key
- Wrapper components
- useEffect
- useMemo
- useCallback
- useRef
- Prop Drilling

### Episode Theory

#### React returns

- A component can only return a single top level xml

Why?

1. Makes it easy to do reconciliation
2. In JSX, there is a rule that states that it must always return a single element.
   This rule applies to React, which means that every component can only return a single root element.
   This is because when you render a component, React creates a virtual DOM tree corresponding to the HTML that is ultimately rendered to the page. If there are multiple root elements in the JSX, React doesn’t know how to handle them.

There are 2 ways in which you can do a return.

- One is to return with a div

```
 function Component(){
  return (
    <div>
    {title}
    </div>
  )
 }
```

- `React Fragment (<></>)`. Read more about Fragments here [React Fragment Docs](https://react.dev/reference/react/Fragment)

```
 function Component(){
  return (
    <>
    {title}
    </>
  )
 }
```

The advantage of React Fragment is that it doesn’t introduce an extra DOM element, which in case of returning the top level div does.

#### React re-render

##### What is Re-rendering in React?

- In React, re-rendering is the process of updating the User Interface (UI) whenever there's a change in the state or props of a component. React's primary job is to display your UI and keep it in sync with your data (state and props).

##### Why is Re-rendering Important?

- Imagine a scoreboard at a sports game. Every time the score changes, the display needs to update to show the new score. Similarly, in a React application, whenever the data changes, the UI needs to reflect these changes. This is what re-rendering achieves.

##### What Triggers a Re-render?

- State Changes: When the state of a component changes, React re-renders the component to reflect the new state.
  Example: A counter button. Each time you click it, the count state increases, and the display updates to show the new count.

- Props Changes: When a component receives new props from its parent, it re-renders to show updated data.
  Example: A user profile component that displays information passed as props. If the user's name changes, the component re-renders to display the new name.

- Forcing a Re-render: Using forceUpdate() method, though it's not recommended as it goes against the natural flow of data in React.

##### How Does React Optimize Re-rendering?

- React uses a virtual DOM to optimize re-rendering. When state or props change, React first updates the virtual DOM. Then, it compares the virtual DOM with the actual DOM (a process called diffing) and updates only the parts of the actual DOM that have changed. This makes re-rendering efficient.

##### IMPORTANT NOTE

- You want to minimise the number of re-renders to make a highly optimal react app
  The more the components that are getting re-rendered, the worse the performance of the app is.

##### Optimisations in Re render

- Can be done by pushing the state down
- Can be done by using memo

##### What is Memo?

- memo lets you skip re-rendering a component when its props are unchanged.
- Read more about memo at the [React Dev Docs](https://react.dev/reference/react/memo)

#### key

- The key prop is a special attribute you need to include when creating lists of elements in React.
- It's a unique identifier that helps React understand which items have changed, been added, or removed.

##### Why are keys Important?

- keys help React optimize rendering by identifying which elements have changed.
- Without keys, React would have a harder time determining which elements need to be re-rendered, potentially leading to inefficient updates and issues with the component state.

##### Rules for Using keys

1. Uniqueness: Each key must be unique among siblings. However, globally unique keys are not necessary.
2. Stability: keys should be stable, i.e., they should not change over time.
3. Not for Style: keys are not meant for styling; they serve a purely technical purpose.

##### When to Use keys?

- You should use keys whenever you create a list of elements in React, like rendering an array of data.

##### Common Scenarios for keys

- Rendering a list of items fetched from an API.
- Displaying a set of similar components, like a list of messages in a chat app.

##### What Happens Without keys?

- If keys are not used, React would not be able to track each element individually.
- As a result, any change to the list (like adding or removing an item) would lead to unnecessary re-renders, affecting performance and potentially leading to state-related bugs.

#### Wrapper Components

- A Wrapper Component in React is a pattern where a component is used to "wrap" around other components or elements.
- It's like a container that groups elements or components together and often manages common functionalities, such as styling, layout, or state logic.

##### Why Use Wrapper Components?

1. Reusability: They allow you to reuse common functionalities and styles across different parts of your application.
2. Separation of Concerns: They help in separating logic or styling from the main component, making your code cleaner and more maintainable.
3. Composition: React is all about composing components. Wrappers enhance this by allowing you to build complex UIs from simpler, smaller components.

##### Things to Keep in Mind

1. Avoid Over-Wrapping: Too many nested wrappers can make your component tree complex and harder to maintain.
2. Props Passing: If your wrapper needs to pass props to its children, you'll need to handle this explicitly.

#### Hooks

- Anything that starts with the keyword `use` is mostly a hook.
- Functions that allow you to `hook into` React state and Lifecycle features from function Components
- Earlier, React was written in an older style k/a `Class Components`, while the modern way is to use `Functional Components`.
- When you used to write earlier i.e `class components`, there used to be lifecycle functions, i.e it can be components is mounted/unmounted etc there used to be functions that would do these events.
- In functional components, hooks were introduced that lets you do similar behaviour in `Functional components`, like `componentDidMount()` lifecycle method.,etc.
- `Mount` means the first time the component is rendered on the screen.

##### useEffect Hook

- Syntax - `useEffect(() => {}, [])`
- Two parts ->

1. Function that runs the logic,
2. Dependency Array which represents when should the above function logic run!
