const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// middleware
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())

app.get('*', (req, res) => {
  res.set('Content-Type', 'application/json')
  const data = {
    message: 'Hello modafoca'
  }
  res.status(200).send(
    JSON.stringify({
      data
    })
  )
})

module.exports = app
