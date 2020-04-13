import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Example, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /examples Create example
 * @apiName CreateExample
 * @apiGroup Example
 * @apiParam title Example's title.
 * @apiSuccess {Object} example Example's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Example not found.
 */
router.post('/',
  body({ title }),
  create)

/**
 * @api {get} /examples Retrieve examples
 * @apiName RetrieveExamples
 * @apiGroup Example
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of examples.
 * @apiSuccess {Object[]} rows List of examples.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /examples/:id Retrieve example
 * @apiName RetrieveExample
 * @apiGroup Example
 * @apiSuccess {Object} example Example's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Example not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /examples/:id Update example
 * @apiName UpdateExample
 * @apiGroup Example
 * @apiParam title Example's title.
 * @apiSuccess {Object} example Example's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Example not found.
 */
router.put('/:id',
  body({ title }),
  update)

/**
 * @api {delete} /examples/:id Delete example
 * @apiName DeleteExample
 * @apiGroup Example
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Example not found.
 */
router.delete('/:id',
  destroy)

export default router
