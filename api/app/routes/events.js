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
  getAllEvents,
  getEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')

const {
  validateCreateEvent,
  validateGetEvent,
  validateUpdateEvent,
  validateDeleteEvent
} = require('../controllers/events/validators')

/*
 * Cities routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllEvents)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  getEvents
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateCreateEvent,
  createEvent
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateGetEvent,
  getEvent
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateUpdateEvent,
  updateEvent
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateDeleteEvent,
  deleteEvent
)

module.exports = router
