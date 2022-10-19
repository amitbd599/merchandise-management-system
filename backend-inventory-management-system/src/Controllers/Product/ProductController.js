const ProductModel = require("../../Models/ProductModel/ProductModel");
const CreateService = require("../../Services/Common/CreateService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListTwoJoinService = require("../../Services/Common/ListTwoJoinService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateProduct = async (req, res) => {
  let result = await CreateService(req, ProductModel);
  res.status(200).json(result);
};

exports.UpdateProduct = async (req, res) => {
  let result = await UpdateService(req, ProductModel);
  res.status(200).json(result);
};

exports.ProductList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let JoinStage1 = {
    $lookup: {
      from: "brands",
      localField: "BrandID",
      foreignField: "_id",
      as: "brands",
    },
  };
  let JoinStage2 = {
    $lookup: {
      from: "categories",
      localField: "CategoryID",
      foreignField: "_id",
      as: "categories",
    },
  };

  let SearchArray = [
    { Note: SearchRGX },
    { Unit: SearchRGX },
    { Details: SearchRGX },
    { "brands.Name": SearchRGX },
    { "categories.Name": SearchRGX },
  ];

  let result = await ListTwoJoinService(
    req,
    ProductModel,
    SearchArray,
    JoinStage1,
    JoinStage2
  );
  res.status(200).json(result);
};
