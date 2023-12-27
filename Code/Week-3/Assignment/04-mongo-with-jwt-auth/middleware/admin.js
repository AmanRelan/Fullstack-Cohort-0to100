const { Admin } = require('../db')
const jwt = require('jsonwebtoken')

const jwtPassword = 'AdminPassword'
function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword)
    return true
  } catch (error) {
    return false
  }
}

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const authToken = req.headers['authorization']
  if (!authToken || !authToken.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'No token provided' })
  }

  Admin.findOne({ token: authToken })
    .then((admin) => {
      if (!admin) {
        return res.status(404).send({
          message:
            'No Admin Found with this token, try adding a new Admin user',
        })
      }
      const isVerified = verifyJwt(authToken.split(' ')[1].trim())
      if (isVerified) {
        next()
      } else {
        res.status(403).send({ message: 'Invalid token' })
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Cannot Authenticate the USER',
      })
    })
}

module.exports = adminMiddleware
