const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    CategoryID: { type: mongoose.Schema.Types.ObjectId },
    BrandID: { type: mongoose.Schema.Types.ObjectId },
    Name: { type: String },
    Unit: { type: String },
    Details: { type: String },
    CreteDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("products", DataSchema);
module.exports = ProductModel;
