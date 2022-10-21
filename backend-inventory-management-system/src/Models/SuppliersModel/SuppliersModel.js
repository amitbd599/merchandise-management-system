const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    Name: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },
    Address: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SuppliersModel = mongoose.model("suppliers", DataSchema);

module.exports = SuppliersModel;
