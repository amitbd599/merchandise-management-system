const expensesModel = require("../../Models/ExpensesModel/ExpensesModel");
const CreateService = require("../../Services/Common/CreateService");
const ListOneJoinService = require("../../Services/Common/ListOneJoinService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.createExpenses = async (req, res) => {
  let result = await CreateService(req, expensesModel);
  res.status(200).json(result);
};

exports.UpdateExpenses = async (req, res) => {
  let result = await UpdateService(req, expensesModel);
  res.status(200).json(result);
};

exports.ExpensesList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [
    { Note: SearchRGX },
    { Amount: SearchRGX },
    { "Type.Name": SearchRGX },
  ];

  let JoinStage = {
    $lookup: {
      from: "expensestypes",
      localField: "TypeID",
      foreignField: "_id",
      as: "Type",
    },
  };
  let result = await ListOneJoinService(
    req,
    expensesModel,
    SearchArray,
    JoinStage
  );
  res.status(200).json(result);
};
