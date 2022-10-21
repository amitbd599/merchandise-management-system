const ExpensesTypesModel = require("../../Models/ExpensesModel/ExpensesTypesModel");
const CreateService = require("../../Services/Common/CreateService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateExpensesTypesService = async (req, res) => {
  let result = await CreateService(req, ExpensesTypesModel); 
  return res.status(200).json(result);
};

exports.UpdateExpensesTypes = async (req, res) => {
  let result = await UpdateService(req, ExpensesTypesModel);
  res.status(200).json(result);
};
exports.ExpensesTypesList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ Name: SearchRGX }];
  let result = await ListService(req, ExpensesTypesModel, searchArray);
  return res.status(200).json(result);
};
exports.ExpensesTypesDropdown = async (req, res) => {
  let result = await Dropdown(req, ExpensesTypesModel, { _id: 1, Name: 1 });
  return res.status(200).json(result);
};
