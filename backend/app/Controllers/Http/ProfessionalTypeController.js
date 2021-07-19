'use strict'
const ProfessionalType = use("App/Models/ProfessionalType");

class ProfessionalTypeController {
  /**
  * @swagger
  * /api/professional-type:
  *   get:
  *     tags:
  *       - Test
  *     summary: ProfessionalType API
  *     responses:
  *       200:
  *         description: List of professional types
  */
  index({ }) {
    return ProfessionalType.all();
  }

  /**
  * @swagger
  * /api/professional-type/{professionalTypeId}:
  *   get:
  *     tags:
  *       - Test
  *     summary: ProfessionalType API
  *     parameters:
  *       - in: path
  *         name: professionalTypeId
  *         required: true
  *         description: professional type ID
  *         schema:
  *           type: integer
  *     responses:
  *       200:
  *         description: get data of professionalTypeId
  *       430:
  *         description: bad request
  */
  show ({ params, response }) {
    const { id } = params;
    if (!id) return response.status(430).json({ error: 'error.bad.request' });

    return ProfessionalType.query().where({ id }).first();
  }

  /**
  * @swagger
  * /api/professional-type/{professionalTypeId}:
  *   delete:
  *     tags:
  *       - Test
  *     summary: ProfessionalType API
  *     parameters:
  *       - in: path
  *         name: professionalTypeId
  *         schema:
  *           type: integer
  *         required: true
  *         description: professional type ID
  *     responses:
  *       200:
  *         description: remove data of professionalTypeId
  *       430:
  *         description: bad request
  */
  destroy ({ params, response }) {
    const { id } = params;
    if (!id) return response.status(430).json({ error: 'error.bad.request' });

    return ProfessionalType.query().where({ id }).delete();
  }

  /**
  * @swagger
  * /api/professional-type/{professionalTypeId}:
  *   put:
  *     tags:
  *       - Test
  *     summary: ProfessionalType API
  *     parameters:
  *       - name: body
  *         description: Body in post
  *         in: body
  *         schema:
  *           type: object
  *         required:
  *           - description
  *           - status
  *         properties:
  *           description:
  *             type: string
  *             required: true
  *           status:
  *             type: bool
  *             required: true
  *     responses:
  *       200:
  *         description: update data of professionalTypeId
  *       430:
  *         description: bad request
  */
  update ({ request, params, response }) {
    const { id } = params;
    if (!id) return response.status(430).json({ error: 'error.bad.request' });

    const body = request.only(['description', 'status']);
    return ProfessionalType.query().where({ id }).update(body);
  }

  /**
  * @swagger
  * /api/professional-type/{professionalTypeId}:
  *   post:
  *     tags:
  *       - Test
  *     summary: ProfessionalType API
  *     parameters:
  *       - name: body
  *         description: Body in post
  *         in: body
  *         required: true
  *         schema:
  *           type: object
  *           required:
  *             - description
  *             - status
  *           properties:
  *             description:
  *               type: string
  *               required: true
  *             status:
  *               type: bool
  *               required: true
  *     responses:
  *       200:
  *         description: create a new professional
  */
  create ({ request }) {
    const body = request.only(['description', 'status']);
    return ProfessionalType.create(body);
  }
}

module.exports = ProfessionalTypeController
