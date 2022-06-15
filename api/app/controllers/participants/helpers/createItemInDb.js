const uuid = require('uuid')
const Participants = require('../../../models/participants')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = ({
  userId = '',
  eventId = ''
}) => {
  return new Promise((resolve, reject) => {
    const participants = new Participants({
      userId,
      eventId,
      verification: uuid.v4()
    })
    participants.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }

      item = JSON.parse(JSON.stringify(item))

      delete item.password
      delete item.blockExpires
      delete item.loginAttempts

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
