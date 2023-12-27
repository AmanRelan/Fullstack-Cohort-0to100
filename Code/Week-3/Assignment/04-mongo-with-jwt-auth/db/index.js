const mongoose = require('mongoose')

mongoose
  .connect('<mongo-url>')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
})

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
})

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
  Admin,
  User,
  Course,
}
