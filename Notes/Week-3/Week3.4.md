# WEEK 3.4

### Things we will cover in this week.

- Authentication
- JWT
- Try/Catch

### Episode Theory

#### Authentication in Real World

- Send Email/password
- App responds back with JWT
- Any following request will be sent with the JWT
- The backend will first verify the JWT
- If Verified, it will do some work it is intended to do.

#### JWT

Three Steps
- Generate a JWT
- Decoding a JWT
- Verifying a JWT

##### Difference b/w Decoding and Verifying
- Decoding -> Other people can look at the code and get the data what was sent in the token but cannot verify it
- Verifying -> Can verify that the JWT is valid.

#### Try/Catch

Read about Try/Catch on [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

- Used where a certain code base can throw error so you wrap it inside try catch
- The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed