const Event = require('../../models/event')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { eventExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateEvent = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesEventExists = await eventExistsExcludingItself(id, req.name)
    if (!doesEventExists) {
      res.status(200).json(await updateItem(id, Event, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateEvent }
