const PurchaseModel = require("../../Models/PurchaseModel/PurchaseModel");
const PurchaseProductsModel = require("../../Models/PurchaseModel/PurchaseProductsModel");

const CreateParentChildsService = require("../../Services/Common/CreateParentChildsService");
const DeleteParentChildsService = require("../../Services/Common/DeleteParentChildsService");
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");
const ListOneJoinService = require("../../Services/Common/ListOneJoinService");

exports.CreatePurchase = async (req, res) => {
  let result = await CreateParentChildsService(
    req,
    PurchaseModel,
    PurchaseProductsModel,
    "PurchaseID"
  );
  res.status(200).json(result);
};

exports.PurchaseList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let JoinStage = {
    $lookup: {
      from: "suppliers",
      localField: "SupplierID",
      foreignField: "_id",
      as: "Suppliers",
    },
  };

  let SearchArray = [
    { Note: SearchRGX },
    { "suppliers.Name": SearchRGX },
    { "suppliers.Address": SearchRGX },
  ];

  let result = await ListOneJoinService(
    req,
    PurchaseModel,
    SearchArray,
    JoinStage
  );
  res.status(200).json(result);
};

exports.PurchaseDetailsByID = async (req, res) => {
  let result = await DetailsByIDService(req, PurchaseModel);
  return res.status(200).json(result);
};

exports.PurchaseDelete = async (req, res) => {
  let result = await DeleteParentChildsService(
    req,
    PurchaseModel,
    PurchaseProductsModel,
    "PurchaseID"
  );
  res.status(200).json(result);
};
