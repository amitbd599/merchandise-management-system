const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    ExpenseName: { type: String, unique: true },
    Image: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ExpensesTypeModel = mongoose.model("expensestypes", DataSchema);

module.exports = ExpensesTypeModel;
