const { User } = require('../db')

function userMiddleware(req, res, next) {
  const user = req.headers['username']
  User.findOne({ username: user })
    .then((user) => {
      next()
    })
    .catch((error) => {
      res.status(404).send({
        message:
          'No User Found with this username, try adding a new Admin user',
      })
    })
}

module.exports = userMiddleware
