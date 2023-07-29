const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String },
    quantity: { type: String },
    price: { type: String },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);
const fruitdata = mongoose.model("fruit", fruitSchema);
module.exports = fruitdata;
