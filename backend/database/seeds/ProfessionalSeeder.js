'use strict'

/*
|--------------------------------------------------------------------------
| ProfessionalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProfessionalSeeder {
  async run () {
    const professionalType = await Factory.model('App/Models/ProfessionalType').create()
    const professionals = await Factory.model('App/Models/Professional').makeMany(3)

    for await (let professional of professionals) {
      await professionalType.professionals().save(professional)
    }
  }
}

module.exports = ProfessionalSeeder
