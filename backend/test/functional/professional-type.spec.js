'use strict'

const { test, trait } = use('Test/Suite')('Professional Type')
const ProfessionalType = use('App/Models/ProfessionalType')

trait('Test/ApiClient')

test('get list of professional types', async ({ client }) => {
  await ProfessionalType.create({
    description: 'Engenheiro',
    status: true
  })

  const response = await client.get('/api/professional-type').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    description: 'Engenheiro',
    status: true
  }])
})
