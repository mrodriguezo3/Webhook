const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  /*activitiesInvolved: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", //TODO
      }*/
  participants: {
    type: Number
  },
  status: {
    type: String
  }
})

module.exports = Item = mongoose.model("Item", itemSchema)
