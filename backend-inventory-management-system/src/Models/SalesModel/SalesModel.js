const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    CustomerID: { type: mongoose.Schema.Types.ObjectId },
    VatTax: { type: String },
    Discount: { type: Number },
    OtherCost: { type: Number },
    ShippingCost: { type: Number },
    GrandTotal: { type: Number },
    Note: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SalesModel = mongoose.model("sales", DataSchema);
module.exports = SalesModel;
