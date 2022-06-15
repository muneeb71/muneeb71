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
  createParticipants,
  getParticipant,
  getParticipantByUserId,
} = require('../controllers/participants')

const {
    validateCreateParticipants,
    validateGetParticipants,
} = require('../controllers/participants/validators')

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
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateCreateParticipants,
  createParticipants
)

/*
 * Get item route
 */
router.post(
  '/check',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  getParticipant
)

/*
 * Get item route
 */
// router.get(
//   '/isUserParticipated/:id',
//   requireAuth,
//   roleAuthorization(['user']),
//   trimRequest.all,
//   getParticipantByUserId
// )

/*
 * Update item route
 */
 

module.exports = router
