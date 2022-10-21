const mongoose = require("mongoose");
const BrandModel = require("../../Models/BrandsModel/BrandsModel");
const ProductModel = require("../../Models/ProductModel/ProductModel");
const CheckAssociateService = require("../../Services/Common/CheckAssociateService");
const CreateService = require("../../Services/Common/CreateService");
const DeleteService = require("../../Services/Common/DeleteService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateBrandsService = async (req, res) => {
  let result = await CreateService(req, BrandModel);
  res.status(200).json(result);
};

exports.UpdateBrand = async (req, res) => {
  let result = await UpdateService(req, BrandModel);
  res.status(200).json(result);
};
exports.BrandList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ Name: SearchRGX }];
  let result = await ListService(req, BrandModel, searchArray);
  return res.status(200).json(result);
};
exports.BrandDropdown = async (req, res) => {
  let result = await Dropdown(req, BrandModel, { _id: 1, Name: 1 });
  return res.status(200).json(result);
};

exports.DeleteBrand = async (req, res) => {
  let DeleteID = req.params.id;
  let ObjectID = mongoose.Types.ObjectId;
  let CheckAssociate = await CheckAssociateService(
    { BrandID: ObjectID(DeleteID) },
    ProductModel
  );

  if (CheckAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else {
    let result = await DeleteService(req, BrandModel);
    res.status(200).json(result);
  }
};
