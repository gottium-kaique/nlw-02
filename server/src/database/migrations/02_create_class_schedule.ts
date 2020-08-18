import Knex from "knex"

function up(knex: Knex) {
  return knex.schema.createTable("class_schedule", table => {
    table.increments()
    table.integer("week_day").notNullable()
    table.integer("from").notNullable()
    table.integer("to").notNullable()

    table.integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

function down(knex: Knex) {
  return knex.schema.dropTable("class_schedule")
}

export { up, down }