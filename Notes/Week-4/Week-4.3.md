# WEEK 4.3

### Prerequisites
- Mongo Set up done
- MongoDB Compass connecting to the DB

### Things we will cover in this week

- MongoDB deep dive
- CRUD
- Mongoose Library
- End to End Authenticated App

### Episode Theory

#### Database

- Place where data is stored persistently.

##### Why Databases?

- DBs were created using protocols that browsers don't understand.
- DBs don't have granualar access as a first class citizen.
- Some DBs like firestore that let you get rid of the http server and try their best to provide granola access.

#### CRUD

DBs allow access to 4 primitives
- Create Data (C)
- Read Data   (R)
- Update Data (U)
- Delete Data (D)

#### ORM
- Library to talk to the DB
- Prisma is the most popular one.

##### Mongoose
- First thing is we define a schema in Mongoose.
- Schema means structure of the data being put inside the DB.
- We though will use Mongoose
- Read more about Mongoose [here](https://mongoosejs.com/)

###### Define a Schema
Sample Schema creation looks like this:- 
```
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  purchasedCourses: [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }
  ],
})

```

- The benefit of mongo is that it helps create nested Objects within the DBs which is not possible in Relational DBs.
- ref: 'Course' -> Defines the relationship between a User Schema and Course Schema, so according to this there is a relationship between the users table and the course schema.

For relationship between a user and course schema, we just need to define the course Schema and the references will automatically pick the Course from the Course table

Course Schema can look something like this-
```
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
})
```

We have the schema defined now for User as above.
We can now perform CRUD operations on this User table, which can be done with the following ways:

1. Create can be done in code with something like this- 

```
User.create({
  username: 'something',
  password: 'something'
})
```

2. Read can be done in code like:- 

```
User.findById('1')
or it can be done like

// Returns the first user with username something
User.findOne({
  username: 'something'
})

// Can find all the users with username something
User.find({
  username: 'something'
})
```

3. Update can be done in code something like this:- 

```
User.updateOne(
  {"id": "1"},
  { $push: {purchasedCourses: courseId}}
)
```
This update One, updates the object with ID 1 and pushes to the purcahsedCourses the new courseID

Another Example is:- 
```
User.update({}, {
  premium: true
})
```

This Update updates a field premium and set it to true for every row in the Database.

4. Delete in code will look something like this:- 
```
User.deleteMany({})
```
This deletes all in the User table

```
User.deleteOne({
  "username" : "something"
})
```

###### 3 Jargons to Know in a database

1. Cluster -> A database cluster is a collection of databases that is managed by a single instance of a running database server
2. Database -> A database is an organized collection of structured information, or data, typically stored electronically in a computer system
3. Table -> A table is a collection of related data held in a table format within a database. It consists of columns and rows.

POST THIS The assignment for `week-3/03-mongo` and `week-3/04-mongo-with-jwt-auth` was solved. I have it implemented in the folder `Code/Week-3/Assignment/*` directory.