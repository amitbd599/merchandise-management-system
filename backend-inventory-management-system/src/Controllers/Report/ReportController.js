const ExpenseReportService = require("../../Services/Report/ExpenseReportService");
const PurchaseReportService = require("../../Services/Report/PurchaseReportService");
const ReturnReportService = require("../../Services/Report/ReturnReportService");
const SalesReportService = require("../../Services/Report/SalesReportService");

exports.ExpenseByDate = async (req, res) => {
  let result = await ExpenseReportService(req);
  res.status(200).json(result);
};

exports.PurchaseByDate = async (req, res) => {
  let result = await PurchaseReportService(req);
  res.status(200).json(result);
};

exports.ReturnByDate = async (req, res) => {
  let result = await ReturnReportService(req);
  res.status(200).json(result);
};
exports.SalesByDate = async (req, res) => {
  let result = await SalesReportService(req);
  res.status(200).json(result);
};
