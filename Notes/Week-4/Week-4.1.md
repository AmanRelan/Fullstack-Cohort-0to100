# WEEK 4.1

### Things we will cover in this week

- DOM
- Dynamic frontends
- Connecting FE to BE
- Chrome Developer tools
- Why Frontend Frameworks

### Episode Theory

#### DOM

Read more about DOM on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- Document Object Model
- Represents the page so that programs can change the document structure,style and content
- Tree like structure(Tree of Object)

#### Dynamic frontends
- `Dynamic?` => Changing the elements on the website once the website is loaded.

##### Classes and IDs in HTML

- Read about classes- [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- Read about IDs - [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- Can have various use cases, like applying same style to two different div's in HTML
- Ids though are supposed to be unique, are used to uniquely identify a div/span

```
  <div class="container" id="unique-1"></div>
  <div class="container" id="unique-2"></div>
```

- What is the use of IDs? When we can remove code repition using classes?
-> IDs let you access the elements via the DOM APIs
To Understand check the code written at `./Code/Week-4/Class/index.html`

- document -> Global variable using which we can manipulate the DOM.
- getElementById
- getElementsByClassName
- getElementsByName
- querySelector('div')
- querySelectorAll('div')

#### Connecting FE to BE

As shared in the example above at `./Code/Week-4/Class/index.html`, let's suppose we do not have the sum function logic at the Frontend and to access the calculation logic you need to call a certain API at some backend server, say an ExpressJS backend.
So, we will update the JS from this:- 

```
  function populateDiv(){
    // Global Document API
    const a = document.getElementById('firstNumber').value; // String
    const b = document.getElementById('secondNumber').value; // String

    const element = document.getElementById('finalSum');
    // console.log(element); -> This gives you a DOM object and not a HTML, but an object reference to the HTML
    //Convert String to Number
    element.innerHTML = parseInt(a) + parseInt(b);
  }
```

but now we have to hit the backend server here at 
[SUM Server](https://sum-server.100xdevs.com/sum?a=1&b=2)

- So, we will use fetch and then hit the Above Sum Server to get the SUM.
- We have to silently hit the backend.
- Update would look something like - 
```
  async function populateDiv2(){
    const a = document.getElementById('firstNumber').value; // String
    const b = document.getElementById('secondNumber').value; // String

    const response = await fetch('https://sum-server.100xdevs.com/sum?a='+ a + '&b=' + b)
    const ans = await response.text();
    document.getElementById('finalSum').innerHTML = ans;
  }
```

This is a backend API call and essentially makes our APP a fullstack APP.

##### EDIT- THE SUM SERVER IS NOT WORKING POST THE CLASS, you should be able to write a sum server logic on your own to get the FE working

#### Class Assignment
- Calculate the interest given a principal amount, rate and time in no of years that you are holding the amount for
- There should be a server call which returns the total amount after adding the interest and then the interest we received post that total time.

- 3 Inputs:
1. Principal Amount
2. Interest Rate
3. Time you invest for (in years)

#### Debouncing and Throttling

There are certain questions that come up when answering what these concepts are and when do we use one and when the other
- Why debouncing over throttling?
- When will you use one over the other?

##### Debouncing
Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.

Can Read more about it's implementation on this [Doc](https://blog.bitsrc.io/what-is-debounce-in-javascript-a2b8e6157a5a)
or this [Youtube Video](https://www.youtube.com/watch?v=Zo-6_qx8uxg)
- Used for performance optimisation
- Used for rate limiting of certain function calls
- Usually used in famous websites like Amazon/Flipkart Search suggestions.
- 

###### Implement Debouncing

- This is a sample 
```
  // wait for 100ms before each call/ delay the call to populateDiv for 100ms
  let timeout;
  function debouncedPopulateDiv(){
    // Cancel a clock
    clearTimeout(timeout);

    // Start a clock
    timeout = setTimeout(function(){populateDiv2()},1000)
  }
```