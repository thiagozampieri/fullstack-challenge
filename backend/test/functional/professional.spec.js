'use strict'

const { test, trait } = use('Test/Suite')('Professional')
const Professional = use('App/Models/Professional')
const ProfessionalType = use('App/Models/ProfessionalType')

trait('Test/ApiClient')

test('get list of professional', async ({ client }) => {
  const professionalType = await ProfessionalType.create({
    description: 'Engenheiro',
    status: true
  })

  await Professional.truncate();
  await Professional.create({
    name: 'Thiago Zampieri',
    phone: '43999884430',
    email: 'thiago.zampieri@gmail.com',
    professional_type_id: professionalType.id,
    status: true
  })

  const response = await client.get('/api/professional').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    name: 'Thiago Zampieri',
    phone: '43999884430',
    email: 'thiago.zampieri@gmail.com',
    professional_type_id: professionalType.id,
    status: true
  }])
})
