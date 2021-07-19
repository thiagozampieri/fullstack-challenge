'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    Professional:
*      type: object
*      properties:
*        id:
*          type: integer
*        name:
*          type: string
*        email:
*          type: string
*        phone:
*          type: string
*        professional_type_id:
*          type: integer
*        status:
*          type: bool
*      required:
*        - username
*        - email
*        - phone
*        - professional_type_id
*/

class Professional extends Model {

  professionalType() {
    return this.belongsTo('App/Models/ProfessionalType');
  }
}

module.exports = Professional
