const Mongoose = require("mongoose");
const CategoryModel = require("../../Models/CategoryModel/CategoryModel");
const ProductModel = require("../../Models/ProductModel/ProductModel");
const CheckAssociateService = require("../../Services/Common/CheckAssociateService");
const CreateService = require("../../Services/Common/CreateService");
const DeleteService = require("../../Services/Common/DeleteService");
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");
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

exports.CategoryDetailsByID = async (req, res) => {
  let result = await DetailsByIDService(req, CategoryModel);
  return res.status(200).json(result);
};

exports.DeleteCategory = async (req, res) => {
  let DeleteID = req.params.id;
  let ObjectID = Mongoose.Types.ObjectId;
  let CheckAssociate = await CheckAssociateService(
    { CategoryID: ObjectID(DeleteID) },
    ProductModel
  );

  if (CheckAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else {
    let result = await DeleteService(req, CategoryModel);
    res.status(200).json(result);
  }
};
