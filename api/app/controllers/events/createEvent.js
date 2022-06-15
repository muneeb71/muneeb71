const Event = require('../../models/event')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createEvent = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(201).json(await createItem(req, Event))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createEvent }
