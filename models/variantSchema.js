const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantSchema = new Schema({
  storage: {
    type: String,
  },
  color: {
    type: String,
  },
  ram: {
    type: String,
  },
  size: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  quantity: {
    type: String,
    // required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  created: {
    type: Date,
    default: new Date(),
  },
  updated: {
    type: Date,
  },
});

module.exports = mongoose.model("Variant", variantSchema);
