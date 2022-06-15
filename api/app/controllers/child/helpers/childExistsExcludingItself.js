const Child = require('../../../models/child')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a city already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const childExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    Child.findOne(
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
          return reject(buildErrObject(422, 'CHILD_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { childExistsExcludingItself }
