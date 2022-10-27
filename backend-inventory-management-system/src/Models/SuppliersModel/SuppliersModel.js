const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    SupplierName: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },
    Address: { type: String },
    Image: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SuppliersModel = mongoose.model("suppliers", DataSchema);

module.exports = SuppliersModel;
