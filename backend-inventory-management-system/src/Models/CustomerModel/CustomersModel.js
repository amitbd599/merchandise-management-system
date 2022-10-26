const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    CustomerName: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },
    Address: { type: String },
    Image: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CustomersModel = mongoose.model("customers", DataSchema);

module.exports = CustomersModel;
