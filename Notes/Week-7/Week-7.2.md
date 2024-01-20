# WEEK 7.2

## Repository created for this week

Visit the REPOSITORY to check the code here - [WEEK-7](https://github.com/AmanRelan/Week-7-Cohort-2.0)

### Things we will cover in this week

- Context
- State Management
- Recoil

### Episode Theory

#### Context API

- To avoid prop drilling, passing props in a component chain, which is ugly way.
- So, we use the context API, introduced by React.
- We define the state variables outside the component tree
- Whatever components want to use state variable, they can directly use count without having to drill them into the components.
- Steps to introduce a context

1. Create a context/ Define the context(`const <ContextName> = createContext(<initial/default values>)`)
2. Provide the context throught the application(`<<ContextName>.Provider />`)
3. Use wherever you want to use the context using the useContext hook(`useContext(<ContextName>)`)

- Context lets you teleport values to a distant children, which helps you get rid of prop drilling.

- **POPULAR INTERVIEW QUESTION** => Why do you use the context API?
- To make rendering more performant?
  Answer is NO.
- To make syntax cleaner/ to get rid of prop drilling?
  Answer is YES.

##### Downsides of Context API

- Doesn't fix re-rendering, only fixes prop drilling.

#### State Management

- Cleaner way of storing the state of your APP.
- Helps you do separation of concerns.
- Lets you put state in a different place and components will be different from the state and defined in a different place.
- Doing state management can help resolve the problem of unnecessary re rendering.

#### Recoil

Read about Recoil at [Recoil Docs](https://recoiljs.org/)

- State Management library for React
- Some other popular ones are Zustand and redux
- Has the concept of an Atom to store the state.
- An atom can be defined outside the component.
- Can be teleported to any component.
- With Atom -> You can `update` or `get` the state variable.
- Atom is just like a state variable.

##### Functions/APIs we need to understand Recoil

- RecoilRoot
- atom
- useRecoilState
- useRecoilValue
- useSetRecoilStore
- selector

###### Updating our counter app to use Recoil

- Install recoil by `npm install recoil`.
- Fetch the state variable count and remove it
- Create a new atom.
- We will have a separation of concerns, so we create a new folder called `atoms` under `src/` directory
- Under atoms, we create a `count.jsx`.
- Inside count, we define an atom as following-

```
import { atom } from "recoil";
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

```

where we have an atom function imported from recoil, which accepts one object, which has 2 properties to be defined -

1. key - make sure to keep this different for every state variable you are defining an atom for, so that there is no conflict
2. default - the default value you want to set for the state.

###### Back to our Counter APP

- We define the count atom for recoil
- Clean the `App.jsx` to remove all state, context logic.
- We will use the count/setCount variable directly from the ATOM.
- Recoil provides us with three APIs

1. useRecoilState -> Exactly like useState, it has 2 things -> 1. Current Value, 2. how to update the current value
2. useRecoilValue -> Gives you just the current value of the state
3. useSetRecoilState -> Lets you just update the state variable and not let you just read the value

- In our countRenderer, we just need the value of the count and no where are we setting it.
  So, we will use the `useRecoilValue` hook
- In our Buttons for increasing and decreasing the counter, we will use both the count's value and the logic/function to set the state value.
  So, we will use the `useRecoilState` hook.
  But, when you use this, we do not really need `count`. We just need to update the state, it does not need to show the state.
  We are using this syntax right now -> `setCount(count+1)`, but we can use `setCount((c) => c + 1)`, get the current value and update it by not using the count. Pass in the function to setCount and the function will receive count as an argument and we can use it directly. Why is this beneficial?
  Because Buttons do not need to re-render. So, we will use `useSetRecoilState` and then update the count as follows :-
  `const setCount = useSetRecoilState(countAtom);`
- This should be enough for removing all the state and context logic. But, we missed one thing which is to be added.
  The thing we missed is `RecoilRoot` component.
  Just like the Context APIs Provider which needs to wrap everything that uses the state logic.
  So, in the App that uses the Recoil Logic, we need to wrap that app inside the `RecoilRoot`.

###### Question

**Do we use State Management tools like Recoil everytime instead of using the useState hook?**
Ans- No, there are cases where `useState` makes sense to be used. Specifically, defining the state inside a component and use it there itself. Usually, when you want to use global variables, that is when we use state management tools like Recoil.

###### selector

Read about selector at [Recoil Docs](https://recoiljs.org/docs/basic-tutorial/selectors)

- A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
- We can define a selector by importing selector from recoil and then defining the selector function.
- For example -

```
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0;
  },
});

```

- By default it is a derived state and depends on other thing.
