'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessionalTypeSchema extends Schema {
  up () {
    this.create('professional_types', (table) => {
      table.increments().primary();
      table.string("description", 200).notNullable();
      table.timestamps(true, true);
      table
        .boolean("status")
        .notNullable()
        .defaultTo(true);
    })
  }

  down () {
    this.drop('professional_types')
  }
}

module.exports = ProfessionalTypeSchema
