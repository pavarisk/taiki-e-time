const config = require('./knexfile').development
const database = require('knex')(config)

function getFacts (db = database) {
  return db('Facts').select()
}

function getFactById (id, db = database) {
  return db('Facts')
    .where('id', id)
    .select()
    .first()
}

module.exports = {
  getFacts,
  getFactById
}
