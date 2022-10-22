const ExpenseSummaryService = require("../../Services/Summary/ExpenseSummaryService");
const PurchaseSummaryService = require("../../Services/Summary/PurchaseSummaryService");
const ReturnSummaryService = require("../../Services/Summary/ReturnSummaryService");
const SalesSummaryService = require("../../Services/Summary/SalesSummaryService");

exports.ExpenseSummary = async (req, res) => {
  let result = await ExpenseSummaryService(req);
  res.status(200).json(result);
};
exports.PurchaseSummary = async (req, res) => {
  let result = await PurchaseSummaryService(req);
  res.status(200).json(result);
};
exports.ReturnSummary = async (req, res) => {
  let result = await ReturnSummaryService(req);
  res.status(200).json(result);
};
exports.SalesSummary = async (req, res) => {
  let result = await SalesSummaryService(req);
  res.status(200).json(result);
};
