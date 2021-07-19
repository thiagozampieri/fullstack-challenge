'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessionalSchema extends Schema {
  up () {
    this.create('professionals', (table) => {
      table.increments().primary();
      table.string("name", 200).notNullable();
      table.string("phone", 30).notNullable();
      table.string("email", 250).notNullable();
      table
        .integer("professional_type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("professional_types")
        .index();
      table.timestamps(true, true);
      table
        .boolean("status")
        .notNullable()
        .defaultTo(true);
    })
  }

  down () {
    this.drop('professionals')
  }
}

module.exports = ProfessionalSchema
