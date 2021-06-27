const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.get('/', (req, res) => {
  db.getFacts()
    .then((facts) => {
      res.json(facts)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
