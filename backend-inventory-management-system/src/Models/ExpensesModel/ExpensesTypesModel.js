const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    cusName: { type: String, required: true, index: true, unique: true },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ExpensesTypeModel = mongoose.model("expensesTypes", DataSchema);

module.exports = ExpensesTypeModel;
