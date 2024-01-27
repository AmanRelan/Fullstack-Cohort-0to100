# WEEK 7.1

## Repository created for this week

Visit the REPOSITORY to check the code here - [WEEK-7](https://github.com/AmanRelan/Week-7-Cohort-2.0)

## Notes From Cohort by TAs

You can find the notes for this week created by TAs that covers `Context API, prop drilling` can be found [here](https://quickest-juniper-f9c.notion.site/Week-7-1-13722d2a0eb04a119d08d8488a176970)

### Things we will cover in this week

- Routing
- prop drilling
- Context API

### Episode Theory

#### Jargons

- Single page application
- Client side bundle
- Client side routing

##### Routing

- What are routes?
  Routing is the mechanism by which requests (as specified by a URL and HTTP method) are routed to the code that handles them.
- Routing in React?
  Can be done is using react-router-dom
- We install the react-router-dom with `npm i react-router-dom`.
- Then we define the components that we need.
- After defining, we will create the routes on the APP component, which looks something like this-

```
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
```

- This defines the routes but how do we navigate from one page to another.
- We use the `useNavigate()` hook provided by `react-router-dom`.

- Another Key concept for optimisation is by using `Lazy Loading`.
- Very important concept for Interviews and performance Optimization.

###### Lazy Loading

- Lazy loading means waiting to render content on a webpage until the user or the browser needs it.
- We just need to update the import of the code as such and then that content will render only when we need it.
- The small change can look something like this `const Dashboard = React.lazy(() => import("./components/Dashboard"));`
- But when you make this change, we need to also add the Suspense API.
- We just need to wrap the lazily loading element within the suspense API as - `<Suspense><Dashboard/></Suspense>`
- This lets you to display a fallback until its children have finished loading.

#### Prop Drilling

- Usually, you will pass information from a parent component to a child component via props.
- But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information.
- And The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.
- Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.
- Anti Pattern, makes code unmanageable.

#### Context API

- Helps you to "teleport" data to the components in the tree that need it without passing props
- If you use the context api, you’re pushing your state management outside the core react components.
- For the example of seeing how it is used, please visit the following URL of the repository code I have created for week-7
  `https://github.com/AmanRelan/Week-7-Cohort-2.0/blob/main/src/App.jsx`
