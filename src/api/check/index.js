import { Router } from 'express'

const router = new Router()

/**
 * @api {get} /health Retrieve checks
 * @apiName RetrieveChecks
 * @apiGroup Check
 * @apiUse listParams
 * @apiSuccess {Object[]} checks List of checks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', function (req, res) {
  res.send('hello')
})

export default router
