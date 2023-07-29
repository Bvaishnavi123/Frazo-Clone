const mongoose = require("mongoose");

const vegitableSchema = new mongoose.Schema(
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
const vegitabledata = mongoose.model("vegitable", vegitableSchema);
module.exports = vegitabledata;
