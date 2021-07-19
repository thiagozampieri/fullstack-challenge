'use strict'
const Professional = use("App/Models/Professional");

class ProfessionalController {

  /**
  * @swagger
  * /api/professional:
  *   get:
  *     tags:
  *       - Test
  *     summary: Professional API
  *     responses:
  *       200:
  *         description: List of professionals
  */
  index({ }) {
    return Professional.query().with('professionalType').fetch();
  }

  /**
  * @swagger
  * /api/professional/{professionalId}:
  *   get:
  *     tags:
  *       - Test
  *     summary: Professional API
  *     parameters:
  *       - in: path
  *         name: professionalId
  *         schema:
  *           type: integer
  *         required: true
  *         description: professional ID
  *     responses:
  *       200:
  *         description: get data of professionalId
  *       430:
  *         description: bad request
  */
  show ({ params, response }) {
    const { id } = params;
    if (!id) return response.status(430).json({ error: 'error.bad.request' });

    return Professional.query().where({ id }).with('professionalType').first();
  }

  /**
  * @swagger
  * /api/professional/{professionalId}:
  *   delete:
  *     tags:
  *       - Test
  *     summary: Professional API
  *     parameters:
  *       - in: path
  *         name: professionalId
  *         schema:
  *           type: integer
  *         required: true
  *         description: professional ID
  *     responses:
  *       200:
  *         description: remove data of professionalId
  *       430:
  *         description: bad request
  */
  destroy ({ params, response }) {
    const { id } = params;
    if (!id) return response.status(430).json({ error: 'error.bad.request' });

    return Professional.query().where({ id }).delete();
  }

  /**
  * @swagger
  * /api/professional/{professionalId}:
  *   put:
  *     tags:
  *       - Test
  *     summary: Professional API
  *     parameters:
  *       - name: body
  *         description: Body in post
  *         in: body
  *         required: true
  *         schema:
  *           type: object
  *           required:
  *             - name
  *             - phone
  *             - email
  *             - professional_type_id
  *           properties:
  *             name:
  *               type: string
  *               required: true
  *             phone:
  *               type: string
  *               required: true
  *             email:
  *               type: string
  *               required: true
  *             professional_type_id:
  *               schema:
  *                 type: integer
  *               required: true
  *     responses:
  *       200:
  *         description: update data of professionalId
  *       430:
  *         description: bad request
  */
  update ({ request, params, response }) {
    const { id } = params;
    if (!id) return response.status(430).json({ error: 'error.bad.request' });

    const body = request.only(['name', 'phone', 'email', 'professional_type_id', 'status']);
    return Professional.query().where({ id }).update(body);
  }

  /**
  * @swagger
  * /api/professional/{professionalId}:
  *   post:
  *     tags:
  *       - Test
  *     summary: Professional API
  *     parameters:
  *       - name: body
  *         description: Body in post
  *         in: body
  *         required: true
  *         schema:
  *           type: object
  *           required:
  *             - name
  *             - phone
  *             - email
  *             - professional_type_id
  *           properties:
  *             name:
  *               type: string
  *               required: true
  *             phone:
  *               type: string
  *               required: true
  *             email:
  *               type: string
  *               required: true
  *             professional_type_id:
  *               schema:
  *                 type: integer
  *               required: true
  *     responses:
  *       200:
  *         description: create a new professional
  */
  create ({ request }) {
    const body = request.only(['name', 'phone', 'email', 'professional_type_id', 'status']);
    return Professional.create(body);
  }
}

module.exports = ProfessionalController
