import Knex from "knex"

function up(knex: Knex) {
  return knex.schema.createTable("connections", table => {
    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    table.timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable()
  })
}

function down(knex: Knex) {
  return knex.schema.dropTable("connections")
}

export { up, down }