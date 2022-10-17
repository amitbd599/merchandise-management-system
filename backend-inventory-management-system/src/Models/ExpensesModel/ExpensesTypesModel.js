const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const DataSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    Name: { type: String, unique: true, required: true },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

DataSchema.plugin(uniqueValidator);

const ExpensesTypeModel = mongoose.model("expensesTypes", DataSchema);

module.exports = ExpensesTypeModel;
