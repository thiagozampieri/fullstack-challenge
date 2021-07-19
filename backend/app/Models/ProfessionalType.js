'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


/**
*  @swagger
*  definitions:
*    ProfessionalType:
*      type: object
*      properties:
*        id:
*          type: integer
*        description:
*          type: string
*        status:
*          type: bool
*      required:
*        - username
*        - email
*        - phone
*/

class ProfessionalType extends Model {

  professionals () {
    return this.hasMany('App/Models/Professional')
  }
}

module.exports = ProfessionalType
