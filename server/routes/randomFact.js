const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.get('/', (req, res) => {
  db.getRandomFact()
    .then((fact) => {
      return res.json(fact)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
