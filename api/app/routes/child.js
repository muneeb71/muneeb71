const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
  createChild,
  getChild,
  // getParticipantByUserId,
} = require('../controllers/child')

const {
  validateCreateChild,
    validateGetChild,
} = require('../controllers/child/validators')

/*
 * Cities routes
 */

/*
 * Get all items route
 */

/*
 * Get items route
 */

/*
 * Create new item route
 */
router.post(
  '/',
  trimRequest.all,
  validateCreateChild,
  createChild
)

/*
 * Get item route
 */
// router.post(
//   '/check',
//   requireAuth,
//   roleAuthorization(['user']),
//   trimRequest.all,
//   getParticipant
// )

/*
 * Get item route
 */
router.get(
  '/all',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateGetChild,
 getChild
)

/*
 * Update item route
 */
 

module.exports = router
