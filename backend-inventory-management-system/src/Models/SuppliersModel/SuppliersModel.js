const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    UseEmail: { type: String },
    CustomerName: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },
    Address: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SuppliersModel = mongoose.model("suppliers", DataSchema);

module.exports = SuppliersModel;
