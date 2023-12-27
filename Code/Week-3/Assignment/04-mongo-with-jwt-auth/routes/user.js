const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const zod = require('zod')
const { User, Course } = require('../db')
const jwt = require('jsonwebtoken')

const jwtPassword = 'UserPassword'
const schema = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
})
function signJwt(username, password) {
  const userParsing = schema.safeParse({ username, password })
  if (userParsing.success === true) {
    return jwt.sign({ username, password }, jwtPassword)
  }
  return null
}

// User Routes
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    })
    res.json({ message: 'User created successfully', user: newUser })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
router.post('/signin', (req, res) => {
  const { username, password } = req.body

  User.findOne({ username: username })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json({ message: 'User not found' })
      }
      const userToken = signJwt(username, password)
      console.log(userToken)
      foundUser.token = `Bearer ${userToken}`
      console.log(foundUser)
      foundUser
        .save()
        .then(() => {
          res.json({
            message: 'User signed in successfully',
            token: `Bearer ${userToken}`,
          })
        })
        .catch((err) => {
          res
            .status(500)
            .json({ message: 'Error updating user with token', error: err })
        })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error finding user' })
    })
})

router.get('/courses', userMiddleware, async (req, res) => {
  try {
    const courses = await Course.find()
    res.json({ courses })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  try {
    const { courseId } = req.params
    const user = req.user

    const course = await Course.findById(courseId)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ message: 'Course already purchased' })
    }
    user.purchasedCourses.push(courseId)
    await user.save()
    res.json({ message: 'Course purchased successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  try {
    const user = req.user
    const purchasedCourses = user.purchasedCourses
    res.json({ purchasedCourses })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
module.exports = router
