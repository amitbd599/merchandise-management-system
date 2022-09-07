const SuppliersModel = require("../../Models/SuppliersModel/SuppliersModel");
const CreateService = require("../../Services/Common/CreateService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateBrandsService = async (req, res) => {
  let result = await CreateService(req, SuppliersModel);
  res.status(200).json(result);
};

exports.UpdateBrand = async (req, res) => {
  let result = await UpdateService(req, SuppliersModel);
  res.status(200).json(result);
};
exports.BrandList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [
    { CustomerName: SearchRGX },
    { Phone: SearchRGX },
    { Email: SearchRGX },
    { Address: SearchRGX },
  ];
  let result = await ListService(req, SuppliersModel, searchArray);
  return res.status(200).json(result);
};
exports.BrandDropdown = async (req, res) => {
  let result = await Dropdown(req, SuppliersModel, { _id: 1, Name: 1 });
  return res.status(200).json(result);
};
