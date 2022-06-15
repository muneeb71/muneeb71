const Child = require('../../../models/child')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a city already exists in database
 * @param {string} name - name of item
 */
const childExists = (title = '') => {
  return new Promise((resolve, reject) => {
    Child.findOne(
      {
        title
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'CHILD_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { childExists }
