# WEEK 8.3

## Notes From Cohort by TAs

You can find the notes for this week created by TAs that covers `Fetch vs Axios` can be found [here](https://quickest-juniper-f9c.notion.site/Week-8-3-f19100f2828845528fe8e6e604cc87a7)

### Things we will cover in this week

- Fetch vs Axios

#### Episode Theory

- Popular ways to hit the backend server and get the response back.

##### Fetch

- Fetch is provided natively by JS and Browser
- The fetch() is a modern API that allows you to make network requests, typically to retrieve data from a server
- Used for Asynchronous Data Retrieval
- Promise Based
- Flexible and Powerful than earlier methods
- Code example

```
function fetchData() {
    fetch('https://sum-server.100xdevs.com/todos')
        .then(async(response) => {
            const todos = await response.json();
            console.log(todos)
        })
        .catch((error) => {})
}

fetchData();
```

This can be cleaned up a bit by writing the code this way-

```
async function fetchData(){
    const response = await fetch('https://sum-server.100xdevs.com/todos')
    const json = await response.json()
    console.log(json)
}
fetchData()
```

##### Axios

- External library
- Popular way
- Axios also returns a Promise, providing a consistent interface for handling asynchronous operations.
- Axios allows the use of interceptors, enabling the modification of requests or responses globally before they are handled by then or catch.
- Similar code written above as fetch can be written in axios as -

```
async function fetchData(){
    const response = await axios.get('https://sum-server.100xdevs.com/todos')
    console.log(response.data);
}
fetchData()
```

- Helps us stay away from an extra await

##### POST Request

- **AXIOS VS FETCH**

- Axios Code Example

```
async function fetchData(){
    const response = await axios.post('https://sum-server.100xdevs.com/todos')
    console.log(response.data);
}
fetchData()
```

- Fetch Code Example

```
async function fetchData(){
    const response = await fetch('https://sum-server.100xdevs.com/todos', {method: "POST"})
    const json = await response.json()
    console.log(json)
}
fetchData()
```

Now when we did this the data as response was coming as a text so the problem is that it errorerd out saying it returns text but we are expecting json. So Our code will change like this

```
async function fetchData(){
    const response = await fetch('https://sum-server.100xdevs.com/todos', {method: "POST"})
    const json = await response.text()
    console.log(json)
}
fetchData()
```

while nothing of this sort happens in axios and we get the data back in `response.data`

- And in post request sometimes you want to send the data to the server which can happen in fetch as :-

```
async function fetchData(){
    const response = await fetch('https://sum-server.100xdevs.com/todos', {method: "POST", body: {something: "something"}})
    const json = await response.text()
    console.log(json)
}
fetchData()
```

while in axios it is simply the second argument

```
async function fetchData(){
    const response = await axios.post('https://sum-server.100xdevs.com/todos', {something: "something"})
    console.log(response.data);
}
fetchData()
```

- Similarly sending headers can be something like this in fetch:-

```
async function fetchData(){
    const response = await fetch('https://sum-server.100xdevs.com/todos', {method: "POST", body: {something: "something"}, headers: {authorization : "some-auth-headers"}})
    const json = await response.text()
    console.log(json)
}
fetchData()
```

while in axios it can be sent as a third argument:-

```
async function fetchData(){
    const response = await axios.post('https://sum-server.100xdevs.com/todos', {something: "something"}, {headers: {authorization:"some-auth-headers" }})
    console.log(response.data);
}
fetchData()
```

- In GET Request, second argument is the header while in other types of requests second argument is the body while third is the header
