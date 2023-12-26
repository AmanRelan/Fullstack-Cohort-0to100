const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const router = Router()
const { Admin, Course } = require('../db/index')

// Admin Routes
router.post('/signup', (req, res) => {
  console.log('here')
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  })
  res.json({
    message: 'Admin created successfully',
  })
})

router.post('/courses', adminMiddleware, (req, res) => {
  const { title, description, price, imageLink } = req.body
  Course.create({
    title,
    description,
    price,
    imageLink,
  })
  res.json({
    message: 'Course created successfully',
  })
})

router.get('/courses', adminMiddleware, (req, res) => {
  Course.find().then((courses) => {
    res.json(courses)
  })
})

module.exports = router
