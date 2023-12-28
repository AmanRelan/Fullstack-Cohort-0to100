const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/simple-interest', (req, res) => {
  const interestRate = req.query.interestRate
  const principalAmount = req.query.principalAmount
  const timeInYears = req.query.timeInYears

  const simpleInterest = (interestRate * principalAmount * timeInYears) / 100
  const finalAmount = parseInt(principalAmount) + parseInt(simpleInterest)

  res.send({ total: finalAmount, interestAmount: simpleInterest })
})
app.listen(3000)
