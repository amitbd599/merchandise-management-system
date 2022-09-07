const mongoose = require("mongoose");
const DataSchema =new mongoose.Schema(
  {
    UserEmail: { type: String },
    Name: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const BrandModel = mongoose.model("brands", DataSchema);
module.exports = BrandModel;
