exports.up = function (knex) {
  return knex.schema.createTable('Facts', (table) => {
    table.increments('id').primary()
    table.string('factType')
    table.text('factDetails')
    table.string('image')
    table.text('reference')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Facts')
}
