const CategoryModel = require("../../Models/CategoryModel/CategoryModel");
const CreateService = require("../../Services/Common/CreateService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateCategoryService = async (req, res) => {
  let result = await CreateService(req, CategoryModel);
  res.status(200).json(result);
};

exports.UpdateCategory = async (req, res) => {
  let result = await UpdateService(req, CategoryModel);
  res.status(200).json(result);
};
exports.CategoryList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ Name: SearchRGX }];
  let result = await ListService(req, CategoryModel, searchArray);
  return res.status(200).json(result);
};
exports.CategoryDropdown = async (req, res) => {
  let result = await Dropdown(req, CategoryModel, { _id: 1, Name: 1 });
  return res.status(200).json(result);
};
