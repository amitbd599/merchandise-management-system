const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    TypeID: {
      value: { type: mongoose.Schema.Types.ObjectId },
      label: { type: String },
    },
    Amount: { type: Number },
    Note: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ExpensesModel = mongoose.model("expenses", DataSchema);
module.exports = ExpensesModel;
