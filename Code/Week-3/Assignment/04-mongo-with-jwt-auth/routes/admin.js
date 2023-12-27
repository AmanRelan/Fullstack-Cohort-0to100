const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const router = Router()
const jwt = require('jsonwebtoken')
const { Admin, Course } = require('../db')
const zod = require('zod')

const jwtPassword = 'AdminPassword'
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

// Admin Routes
router.post('/signup', (req, res) => {
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  })
  res.json({
    message: 'Admin created successfully',
  })
})

router.post('/signin', (req, res) => {
  const { username, password } = req.body

  Admin.findOne({ username: username })
    .then((foundAdmin) => {
      if (!foundAdmin) {
        return res.status(404).json({ message: 'Admin not found' })
      }

      const adminToken = signJwt(username, password)

      foundAdmin.token = `Bearer ${adminToken}`
      foundAdmin
        .save()
        .then(() => {
          res.json({
            message: 'Admin signed in successfully',
            token: `Bearer ${adminToken}`,
          })
        })
        .catch((err) => {
          res
            .status(500)
            .json({ message: 'Error updating admin with token', error: err })
        })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error finding admin', error: err })
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
