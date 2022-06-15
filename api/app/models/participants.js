const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ParticipantSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    eventId: {
        type: String,
        required: true
      }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ParticipantSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Participants', ParticipantSchema)
