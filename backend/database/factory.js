'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/ProfessionalType', (faker) => {
  return {
    description: faker.profession(),
    status: faker.bool(),
  }
})

Factory.blueprint('App/Models/Professional', (faker, i, data) => {
  return {
    name: faker.name(),
    professional_type_id: data.professional_type_id,
    phone: faker.phone({ formatted: false }),
    email: faker.email(),
    status: faker.bool(),
  }
})
