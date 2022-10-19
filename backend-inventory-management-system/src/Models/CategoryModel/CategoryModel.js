const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    Name: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CategoryModel = mongoose.model("categories", DataSchema);

module.exports = CategoryModel;
