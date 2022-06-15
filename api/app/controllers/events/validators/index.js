const { validateCreateEvent } = require('./validateCreateEvent')
const { validateDeleteEvent } = require('./validateDeleteEvent')
const { validateGetEvent } = require('./validateGetEvent')
const { validateUpdateEvent } = require('./validateUpdateEvent')

module.exports = {
  validateCreateEvent,
  validateDeleteEvent,
  validateGetEvent,
  validateUpdateEvent
}
