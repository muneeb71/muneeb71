const Child = require('../../models/child')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { childExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateChild = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesChildExists = await childExistsExcludingItself(id, req.name)
    if (!doesCjildExists) {
      res.status(200).json(await updateItem(id, Child, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateChild }
