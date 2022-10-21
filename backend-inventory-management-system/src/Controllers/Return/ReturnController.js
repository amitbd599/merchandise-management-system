const ReturnModel = require("../../Models/ReturnModel/ReturnModel");
const ReturnProductsModel = require("../../Models/ReturnModel/ReturnProductsModel");

const CreateParentChildsService = require("../../Services/Common/CreateParentChildsService");
const DeleteParentChildsService = require("../../Services/Common/DeleteParentChildsService");
const ListOneJoinService = require("../../Services/Common/ListOneJoinService");

exports.CreateReturns = async (req, res) => {
  let result = await CreateParentChildsService(
    req,
    ReturnModel,
    ReturnProductsModel,
    "ReturnID"
  );
  res.status(200).json(result);
};

exports.ReturnList = async (req, res) => {
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
    { "suppliers.Name": SearchRGX },
    { "Type.Address": SearchRGX },
  ];

  let result = await ListOneJoinService(
    req,
    ReturnModel,
    SearchArray,
    JoinStage
  );
  res.status(200).json(result);
};

exports.ReturnDelete = async (req, res) => {
  let result = await DeleteParentChildsService(
    req,
    ReturnModel,
    ReturnProductsModel,
    "ReturnID"
  );
  res.status(200).json(result);
};
