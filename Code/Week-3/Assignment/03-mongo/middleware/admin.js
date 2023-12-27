const { Admin } = require('../db')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const adminUser = req.headers['username']
  Admin.findOne({ username: adminUser })
    .then((admin) => {
      next()
    })
    .catch((error) => {
      res.status(404).send({
        message:
          'No Admin Found with this username, try adding a new Admin user',
      })
    })
}

module.exports = adminMiddleware
