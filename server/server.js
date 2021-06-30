const path = require('path')
const express = require('express')
const cors = require('cors')
const facts = require('./routes/facts.js')
const randomFact = require('./routes/randomFact.js')
const factByName = require('./routes/factByName')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/v1/facts', facts)
server.use('/v1/randomFact/', randomFact)
server.use('/v1/getFactByName/', factByName)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
