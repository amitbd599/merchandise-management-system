const { default: mongoose } = require("mongoose");
const ProductModel = require("../../Models/ProductModel/ProductModel");
const PurchaseProductsModel = require("../../Models/PurchaseModel/PurchaseProductsModel");
const ReturnModel = require("../../Models/ReturnModel/ReturnModel");
const ReturnProductsModel = require("../../Models/ReturnModel/ReturnProductsModel");
const SalesProductsModel = require("../../Models/SalesModel/SalesProductsModel");
const CheckAssociateService = require("../../Services/Common/CheckAssociateService");
const CreateService = require("../../Services/Common/CreateService");
const DeleteService = require("../../Services/Common/DeleteService");
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");
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

exports.ProductDetailsByID = async (req, res) => {
  let result = await DetailsByIDService(req, ProductModel);
  return res.status(200).json(result);
};

exports.DeleteProduct = async (req, res) => {
  let DeleteID = req.params.id;
  let ObjectID = mongoose.Types.ObjectId;

  let CheckReturnAssociate = await CheckAssociateService(
    { ProductID: ObjectID(DeleteID) },
    ReturnProductsModel
  );

  let CheckPurchaseAssociate = await CheckAssociateService(
    { ProductID: ObjectID(DeleteID) },
    PurchaseProductsModel
  );

  let CheckSaleAssociate = await CheckAssociateService(
    { ProductID: ObjectID(DeleteID) },
    SalesProductsModel
  );

  if (CheckReturnAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else if (CheckPurchaseAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else if (CheckSaleAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else {
    let result = await DeleteService(req, ProductModel);
    res.status(200).json(result);
  }
};
