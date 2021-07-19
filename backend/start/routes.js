'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Professional
Route.group(() => {
  Route.get('/', 'ProfessionalController.index')
  Route.get('/:id', 'ProfessionalController.show')
  Route.post('/create', 'ProfessionalController.create')
  Route.put('/:id', 'ProfessionalController.update')
  Route.delete('/:id', 'ProfessionalController.destroy')
}).prefix('api/professional')

// Professional Type
Route.group(() => {
  Route.get('/', 'ProfessionalTypeController.index')
  Route.get('/:id', 'ProfessionalTypeController.show')
  Route.post('/create', 'ProfessionalTypeController.create')
  Route.put('/:id', 'ProfessionalTypeController.update')
  Route.delete('/:id', 'ProfessionalTypeController.destroy')
}).prefix('api/professional-type')
