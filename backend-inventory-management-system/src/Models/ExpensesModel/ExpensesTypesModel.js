const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    Name: { type: String, unique: true, required: true },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

DataSchema.plugin(uniqueValidator);

const ExpensesTypeModel = mongoose.model("expensestypes", DataSchema);

module.exports = ExpensesTypeModel;
