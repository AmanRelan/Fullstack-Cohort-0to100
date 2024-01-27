# WEEK 7.4

## Repository created for this week

Visit the Repository to get the code for this week -> [Recoil-Deep-Dive](https://github.com/AmanRelan/Recoil-Deep-Dive)

### Things we will cover in this week

- Recoil State Management Deep Dive
  ~ Basic
- Atoms
- Selectors
- Asynchronous Data Queries
- useRecoilState
- useRecoilValue
- useSetRecoilState
  ~ Advance
- atomFamily
- selectorFamily
- useRecoilStateLoadable
- useRecoilValueLoadable

### Episode Theory

#### Recoil

##### Atom

- Most smallest unit of state you can store, just like useState
- An atom can be defined as

```
export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})
```

- But when you try to use this atom, you need to make sure to use the `RecoilRoot` and your app should be wrapped inside the root.
- Or else you run into this error - `Uncaught Error: This component must be used inside a <RecoilRoot> component.`

##### RecoilRoot

- In order to resolve the error that you get, what you will do is to wrap the APP component inside RecoilRoot component.
- Something like this -

```
function App() {
  return (
    <RecoilRoot>
      <Notification />
    </RecoilRoot>
  );
}
```

where App is the main App component.

- Read more about RecoilRoot and what it does on [Official Recoil Docs](https://recoiljs.org/docs/api-reference/core/RecoilRoot/)

##### useRecoilState Hook

- Suppose, there is a case where we want to use the value of the atom and sometime have to update the atoms value, that is when we use the `useRecoilState` hook
- For Example-

```
const [notificationAtomCount, setNotificationAtomCount] = useRecoilState(notificationAtom);
```

##### useSetRecoilState hook

- When you want to just update the atom value but do not want to use the value of the atom somewhere.
- That is when you will want to use this hook
- Read more about it on the official [docs](https://recoiljs.org/docs/api-reference/core/useSetRecoilState/)
- Imagine, we have a button that updates the atom and just does that but it does not display the value of the atom
- So, we will do something like this:-

```
import { useSetRecoilState } from "recoil";
import { notificationAtom } from "./atoms";

const ButtonUpdater = () => {
  const setNotificationAtomCount = useSetRecoilState(notificationAtom);
  return (
    <button
      onClick={() => {
        setNotificationAtomCount((c) => c + 1);
      }}
    >
      Click to increase Notification Count
    </button>
  );
};

export default ButtonUpdater;

```

- If you see this, we have something like a button updater and we just have to pass the setter function for updating the state

##### Selectors

- Suppose, you want to perform an operation like getting the sum of all the atoms, we would use something like a selector
- Selectors represent a function, or derived state in Recoil
- Our use case is, we will want to show the sum of all the notifications from all the atoms above our ME button
- We can define a selector as :-

```
export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationAtom);

        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount;
    }
})
```

And then we can use the value of this as `const totalNotificationNumber = useRecoilValue(totalNotificationSelector);`

##### Async Data Queries

You can read about async data queries on official [docs](https://recoiljs.org/docs/guides/asynchronous-data-queries)

- It basically states that Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph.
- If you know that your default values in the code for an atom will be asynchronous and be coming from say some API calls/Database queries, etc. You will write code something like this -

```
const UserInfoState = atom({
  key: 'UserInfo',
  default: selector({
    key: 'UserInfo/Default',
    get: ({get}) => myFetchUserInfo(get(currentUserIDState)),
  }),
});
```

- default is a selector.
- Following similar pattern, our code can look something like this-

This previous selector with default values:-

```
export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0
    }
})
```

will now look like -

```
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: 'networkAtomSelector',
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data
        }
    })
})
```

- The get works as async function and thus waits for the data to load

##### Atom Family

Read about Atom Family on Official [docs](https://recoiljs.org/docs/api-reference/utils/atomFamily)

- Sometimes you need more than one atom for a use case
- Example-> you need to create a todo application
- Example Question -> Take a todo ID as input and renders the TODO
- And you need to store the todo in the atom

**How will you solve for the case?**

- Have a single atom?
- Have one atom per todo?
- create(and delete) todos dynamically?

###### Explanation

- Atoms work when you know something is present only once on the screen.
- But if you have a bunch of todos, each will need its own atom, so you will want to dynamically want to create an atom.
- Another approach can be creating a single atom as an Array where I can store the list of the todos
- It has some downfalls
- So, we have to create a dynamic atom.
- If two todos have the same id, they have to hit the same atom.

- This is where Atom Family comes in
- So rather than subscribing to an atom one by one, you will subscribe to the atom family
- Whenever you know you have to create one atom per item, you can create an atom family
- Here we can be like whoever is calling, send the input of the id you want, I will give you back the atom.

- What this looks like in code ->

```
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id => {
        return TODOS.find(x => x.id === id)
    },
});
```

which can simply be used as :-

```
function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  );
}
```

##### selectorFamily

Read about selector Family on offical [docs](https://recoiljs.org/docs/api-reference/utils/selectorFamily)

- In our above Todo App, what if we want the todos to come from a server?
- This is where we use a selectorFamily
- Our previous atomFamily :-

```
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id => {
        return TODOS.find(x => x.id === id)
    },
});
```

will now look to leverage selectorFamily:-

```
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamily',
        get: (id) => async () => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo
        }
    })
})
```

- Make sure to use selectorFamily with atomFamily as atomFamily is creating multiple atoms and selector will just give one selector, while we want multiple selectors as well.
- **Need to keep the syntax in mind here - ` get: (id) => async () => {}`, very very important**

##### Loadables

- What happens when the values aren't loaded immediately?
- Example, the todos coming from the server
- How can we show a loader on the screen when that happens rather than an empty server?

- There are a few ways

1. Can be to use the Suspense API
2. To use the following hooks

###### useRecoilStateLoadable

- This can be used instead of `useRecoilState`.
- Important to understand that when you use this hook instead of the `useRecoilState`
- The state variable is now not the state variable, but is an object which has a couple of things

1. Contents
2. State

Where State can be anything between -> loading, hasValue, hasError
Contents contain the state variable value that it should hold
Example Usage:- Earlier our code which looked like this

```
function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}
```

will now look like this :-

```
function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );
  }
}
```

which puts the code in the loading state when the values for the todos are not fetched from the server.

###### useRecoilValueLoadable

- Similar to `useRecoilStateLoadable`
- Just used for value.
- So, our todos code which earlier looked like

```

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  );
}
```

will now simply look like this:-

```
function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );
  }
}

```
