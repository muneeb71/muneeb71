const Participant = require('../../models/participants')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { getItem, checkQueryString, getItems } = require('../../middleware/db')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getParticipant = async (req, res) => {
  try {
    // req = matchedData(req)
   // const id = await isIDGood(req.id)
     const userId = req.body.userId;
     const eventId = req.body.eventId;
     // xconst user = await getItem({ userId, eventId }, Participant);
     const user = await Participant.findOne({ userId, eventId}).exec();
     res.status(200).json(user);
    // console.log(user);
  } catch (error) {
    handleError(res, error)
  }
}

const getParticipantByUserId = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await getItem(id, Participant))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getParticipant, getParticipantByUserId }
