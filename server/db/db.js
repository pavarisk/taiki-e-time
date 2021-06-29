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

function getRandomFact (db = database) {
  return getFacts(db)
    .then(facts => {
      const idx = Math.floor(Math.random() * facts.length)
      return facts[idx]
    })
}

module.exports = {
  getFacts,
  getFactById,
  getRandomFact
}
