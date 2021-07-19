'use strict'

/*
|--------------------------------------------------------------------------
| ProfessionalTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProfessionalTypeSeeder {
  async run () {
    await Factory
    .model('App/Models/ProfessionalType')
    .createMany(3)
  }
}

module.exports = ProfessionalTypeSeeder
