const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
  userId: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  items: [
    {
      productId: {
        type: String
      },
      name: {
        type: String
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."]
      },
      price: {
        type: Number
      }
    }
  ],
  bill: {
    type: Number,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})

module.exports = Order = mongoose.model("Order", orderSchema)
