const Participants = require('../../models/participants')
const { createItem } = require('../../middleware/db')
const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const {
  emailExists,
  sendRegistrationEmailMessage
} = require('../../middleware/emailer')
const { createItemInDb } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createParticipants = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(201).json(await createItem(req, Participants))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createParticipants }
