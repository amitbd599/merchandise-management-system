const SalesModel = require("../../Models/SalesModel/SalesModel");
const SalesProductsModel = require("../../Models/SalesModel/SalesProductsModel");

const CreateParentChildsService = require("../../Services/Common/CreateParentChildsService");
const DeleteParentChildsService = require("../../Services/Common/DeleteParentChildsService");
const ListOneJoinService = require("../../Services/Common/ListOneJoinService");

exports.CreateSales = async (req, res) => {
  let result = await CreateParentChildsService(
    req,
    SalesModel,
    SalesProductsModel,
    "SaleID"
  );
  res.status(200).json(result);
};

exports.SalesList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let JoinStage = {
    $lookup: {
      from: "customers",
      localField: "CustomerID",
      foreignField: "_id",
      as: "customers",
    },
  };

  let SearchArray = [
    { Note: SearchRGX },
    { "customers.CustomersName": SearchRGX },
    { "customers.Address": SearchRGX },
  ];

  let result = await ListOneJoinService(
    req,
    SalesModel,
    SearchArray,
    JoinStage
  );
  res.status(200).json(result);
};

exports.SaleDelete = async (req, res) => {
  let result = await DeleteParentChildsService(
    req,
    SalesModel,
    SalesProductsModel,
    "SaleID"
  );
  res.status(200).json(result);
};
