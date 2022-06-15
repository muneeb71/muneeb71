const Event = require('../../../models/event')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a city already exists in database
 * @param {string} name - name of item
 */
const eventExists = (title = '') => {
  return new Promise((resolve, reject) => {
    Event.findOne(
      {
        title
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'EVENT_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { eventExists }
