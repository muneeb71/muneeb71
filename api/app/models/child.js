const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ChildSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ChildSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Child', ChildSchema)
