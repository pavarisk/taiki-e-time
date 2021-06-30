const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.post('/:name', (req, res) => {
  db.getFactByName(req.params.name)
    .then((fact) => {
      res.json(fact)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
