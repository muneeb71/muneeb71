const Event = require('../../../models/event')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a city already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const eventExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    Event.findOne(
      {
        name,
        _id: {
          $ne: id
        }
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

module.exports = { eventExistsExcludingItself }
