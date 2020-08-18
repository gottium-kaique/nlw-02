import Knex from "knex"

function up(knex: Knex) {
  return knex.schema.createTable("classes", table => {
    table.increments()
    table.string("subject").notNullable()
    table.decimal("cost").notNullable()

    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
}

function down(knex: Knex) {
  return knex.schema.dropTable("classes")
}

export { up, down }