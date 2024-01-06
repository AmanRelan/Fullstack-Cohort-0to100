# WEEK 3.2

## Notes From Cohort by TAs
You can find the notes for this week created by TAs that covers `Authentication & Databases` can be found [here](https://quickest-juniper-f9c.notion.site/Week-3-2-Authentication-Databases-1687613863384e9792097c8d5cb5340e)

## Prerequisites for this week

- Week 3.0.7/3.0.8 video and DB strings for connection

### Things we will cover in this week

- Fetch
- Authentication
- Databases

### Episode Theory

#### Fetch

Read more about Fetch from [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- Exposed by Browser
- Helps fetch data by Hitting Backend APIs

##### To-DO for this week

- Create HTML that hits a backend server
- Gets the data
- Add it to the frontend
- Check index.html in `Code\Week-3\Class\index.html`

#### Authentication

##### Assignment

Let people sign up to your website, only allowed sign up
Have 2 endpoints -

1. Post /signin
   Body- {
   username:string,
   password: string
   }
   Returns a JSON web token with username encrypted
2. Get /users
   Takes Authorization Header
   Returns an array of all users if user is signed in()
   Returns 403 if user is not signed in

   Gist of the explanation of the assignment-
   [User Signed in Assignment](https://gist.github.com/hkirat/1618d30e03dc2c276b1cd4b351028d14)

- What is Authentication?

- Some CS Concepts that help in Authentication

1. Hashing -> Used mostly for conversion of passwords. Convert password in such a way that it is some long string which is then stored in the DB. It helps in storing passwords in a secure way. A particular string should always use an algorithm that converts it into some long string that no one knows how to decrypt but one string always converts the same string to the same hash. This is 1-Way.

2. Encryption -> This is similar to Hashing but it is 2 way, you can convert a password to long string and vice versa provided you have a key which helps in decryption of the data. Whoever has the password/key, can convert this live string to your password back.

3. JSON web tokens ->

- JSON -> Takes json as input and gives you a long string, but is different from Hashing and encryption.
- Web -> Use this on the web?
- token -> Takes the JSON Object as input and generate a token.

  1. Whoever has this token can convert it back to the object.
  2. This can be done using jwt.io where you can paste the token and get back the input
  3. Has three parts.
  4. Conversion everyone can do but Verification only the website can do.
  5. High Level understanding of the Working

     INPUT -> JWT.ENCODE + password -> Long String -> JWT.Verify + need to pass the password in step 2 -> This will give them back the data -> which they verify and then figure out that this was the expected user.

  6. So, it is basically a digital signature, can be verified only by using the password.

4. Local Storage -> A place in your browser

- Sends request to backend post sign up
- Verify from the BE and returns a JWT
- This JWT is stored in the browser until the user logs out.
- Any request post this, developer sends the token with each request, the backend verifies the JWT and if it is correct, then the user is allowed access to the resource.
- Usually store things like:

1. Authentication Tokens
2. User Language preference
3. User theme preference

##### Disadvantages of In Memory DB-

1. Data can't be dynamic, updates are lost if the process restarts.
2. There are multiple servers in the real world.

#### Databases

In REAL world, a basic architecture looks like

1. User hits the backend
2. Backend Hits the DB
3. User does not have access to the DB.

- Type of DBs

1. Graph DBs
2. Vector
3. SQL
4. NoSQL DBs

##### NoSQL Database- MongoDB

- Lets you create a db
- In Each DB, lets you create tables(collections)
- In Each Table, it lets you dump JSON Data
- It is Schemaless -> No structure, big/small JSON, can change schema easily.
- Scales well and is decent choice for most use cases.

###### How To Start?

- Create a mongodb free instance.
- Get your Mongodb Connection URL
- Download MongoDB Compass and try to explore DB

###### How can Node connect to MongoDB database?

- Using Libraries
- Will use Mongoose.
- mongoose helps write MongoDB validation.
- Takes a defined model for things you will be adding to the DB.
- Mongoose expects you to first define how the model looks like
- this helps create a user

```
const user = new User({
    name: 'Aman Relan',
    email: 'amanrelan.09@gmail.com',
    password: '123456'
})
user.save();
```
