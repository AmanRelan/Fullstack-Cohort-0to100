# WEEK 4.2

## Notes From Cohort by TAs
You can find the notes for this week created by TAs that covers `Reconcilers & Intro to React` can be found [here](https://quickest-juniper-f9c.notion.site/Week-4-2-Reconcilers-Intro-to-React-1674c2371f7c477e80ca42a0c673c11f)

### Prerequisites
- DOM manipulation
- Debouncing

### Things we will cover in this week

- Why Frontend Frameworks
- Reconcilers
- Intro to React

### Episode Theory

#### Why Frontend Frameworks

- DOM Manipulation is very hard to write as a developer, making dynamic websites, with the primitives that DOM provides you is very hard.
- To append to DOM, we can use document's primitives
1. createElement or 
2. appendChild or
3. setAttribute or 
4. element.children

**We created a todo application located at - './Code/Week-4/Class/Week-4.2/index.html'**

- Problems with creating a todo Application

1. Very hard to add and remove elements.
2. No central **State**.
3. What if there is a server and other functions like update/remove/add/ get a new list of todos.

##### Class Assignment(index-with-state.html)
- We have a list of Todos(array).
- We have a function that takes array as input
- Renders the todos from the array on the screen.

- These todos can come from server, which can be a varying length of todos.
- This replicate a real server type where we can have a list of todos and we need to update the todos based on the number of todos that are coming from the server.

##### Better Solution

- If you see the class-assignment, we are clearing the elements, then we create and update the child.
- The better approach is, don't clear the DOM upfront, just update the changes(diff).
- WHy better? -> What if we get the same state, we are still clearing and then creating a child, which is expensive.
- So, we keep a track of the changes and just update only what has changed.
- So, you keep a track of old state and then when the new data comes, just calculate the diff and based on the diff just update the DOM(known as DIFF)
- Can do by remembering the old todos in a variable(Virtual DOM).

How can this solution be done? 
- Update a state variable
- Delegate the task of Figuring out diff to a hefty function
- Tell the hefty function how to add, update and remove elements.

#### Basic React APP

- Create using VITE.
- Can be done by the command `npm create vite@latest`.
- Follow the instructions on the screen.
- Start dev server.