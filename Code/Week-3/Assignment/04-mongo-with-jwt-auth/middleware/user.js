const { User } = require('../db')
const jwt = require('jsonwebtoken')

const jwtPassword = 'UserPassword'
function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword)
    return true
  } catch (error) {
    return false
  }
}
function userMiddleware(req, res, next) {
  const authToken = req.headers['authorization']
  if (!authToken || !authToken.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'No token provided' })
  }
  User.findOne({ token: authToken })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'No User Found with this token, try adding a new user',
        })
      }
      const isVerified = verifyJwt(authToken.split(' ')[1].trim())
      if (isVerified) {
        req.user = user
        next()
      } else {
        res.status(403).send({ message: 'Invalid token' })
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: 'There was some problem authenticating the user',
      })
    })
}

module.exports = userMiddleware
