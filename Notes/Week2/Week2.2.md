# WEEK 2.2

### Things we will cover in this week

- Node.js Runtime
- HTTP
- Express Basics
- Routes
- Status Codes
- Write a HTTP Server in Node.js

### Episode Theory

- ECMAScript -> Scripting Language Specification on which Javascript is based
- Javascript -> Scripting Language that conforms to the ECMAScript specification.
- Node.js -> Javascript Runtime -> Something that can run/compile JS. Written in C/C++
- Bun -> Competitor of Node.js, JS Runtime, faster and written in Zig.

#### JS Compilers

Most Popular Ones are:

- Chrome's V8 ( Written in C)
- SpiderMonkey by Mozilla (Written in C + Rust)

#### Node.js

##### Usage

- Create CLIs
- Create Video Player
- Create a game
- Create an HTTP Server

##### HTTP Server

- HTTP(HyperText Transfer Protocol).
- A protocol that is defined for Machines to communicate.
- Specifically for a website, it is the most common way for your website's frontend to talk to it's backend.
- Some code that follows the HTTP Protocol, able to communicate with clients(browsers/mobile apps).
- Client throwing information at the server
- Server does something with the information
- Server responds back with the final result

#### HTTP PROTOCOL

Things to keep in mind for a client to send a request ->

- Protocol(HTTP/HTTPS)
- Address(UDP/IP/PORT)
- Route
- Headers
- Body
- Query Params
- Method

Things that the server needs to take care of ->

- Response Headers
- Response Body
- Status Codes

#### Working Behind the Scenes

Things that happen in the Browser when you try to get some data

- Browser parses the URL
- Does a DNS Lookup(URL is mapped to an IP, so searches for the IP and does a handshake to the IP k/a DNS Resolution)
- Establishes a Connection to the IP

Things that happen when your server receives the request

- You get the input(body, headers, route)
- Do logic on the input, calculate output
- Return the Output body

#### Common REQUEST METHODS

- GET
- POST
- PUT
- DELETE

#### Status Codes

- 200 -> Everything is OK
- 404 -> Page/Route not found
- 403 -> Authentication issue
- 500 -> Internal server error

#### Node Project startup

- Change Directory to Node Project Folder -(cd http-server-1)
- Run `npm init -y`
- Require Express (const express = require('express'))
- But we need it from the internet, so we will install it.
- Install express by `npm install express`.
- This installs express to our local system

#### Create HTTP Server

Very basic hello world http server in express/Node.js

```
const express = require('express');
const app = express();

const port = 3000;

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.listen(port, function () {
    console.log(`Application listening on port ${port}`)
});
```

###### POSTMAN

- TO go and make POST requests and test them locally, Postman helps create an environment that lets you test the POST request.
  Download from [POSTMAN WEBSITE](https://www.postman.com/downloads/)

##### Body-parser

- Helps Parse incoming request bodies.
- Install by `npm install body-parser`
