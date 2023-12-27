const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const { User, Course } = require('../db')

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

router.get('/courses', userMiddleware, async (req, res) => {
  try {
    const courses = await Course.find()
    res.json({ courses })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Purchase a course
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  try {
    const { courseId } = req.params
    const username = req.headers.username

    const course = await Course.findById(courseId)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
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
    const username = req.headers.username
    const user = await User.findOne({ username }).populate('purchasedCourses')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const purchasedCourses = user.purchasedCourses
    res.json({ purchasedCourses })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
