const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    SupplierID: { type: mongoose.Schema.Types.ObjectId },
    VatTax: { type: String },
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

const PurchaseModel = mongoose.model("purchases", DataSchema);
module.exports = PurchaseModel;
