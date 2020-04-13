import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /health Retrieve checks
 * @apiName RetrieveChecks
 * @apiGroup Check
 * @apiUse listParams
 * @apiSuccess {Object[]} checks List of checks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

export default router
