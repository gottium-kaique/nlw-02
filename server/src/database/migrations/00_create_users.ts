import Knex from "knex"

function up (knex: Knex) {
  return knex.schema.createTable("users", table => {
    table.increments()
    table.string("name").notNullable()
    table.string("avatar").notNullable()
    table.string("whatsapp").notNullable()
    table.string("bio").notNullable()
  })
}

function down (knex: Knex) {
  return knex.schema.dropTable("users")
}

export { up, down }