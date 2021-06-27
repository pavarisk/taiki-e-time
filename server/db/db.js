const config = require('./knexfile').development
const database = require('knex')(config)

function getFacts (db = database) {
  return db('Facts').select()
}

module.exports = {
  getFacts
}
