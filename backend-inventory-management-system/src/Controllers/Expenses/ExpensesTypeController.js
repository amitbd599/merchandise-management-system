const { default: mongoose } = require("mongoose");
const ExpensesModel = require("../../Models/ExpensesModel/ExpensesModel");
const ExpensesTypesModel = require("../../Models/ExpensesModel/ExpensesTypesModel");
const CheckAssociateService = require("../../Services/Common/CheckAssociateService");
const CreateService = require("../../Services/Common/CreateService");
const DeleteService = require("../../Services/Common/DeleteService");
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateExpensesTypesService = async (req, res) => {
  let result = await CreateService(req, ExpensesTypesModel);
  return res.status(200).json(result);
};

exports.UpdateExpensesTypes = async (req, res) => {
  let result = await UpdateService(req, ExpensesTypesModel);
  res.status(200).json(result);
};
exports.ExpensesTypesList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ Name: SearchRGX }];
  let result = await ListService(req, ExpensesTypesModel, searchArray);
  return res.status(200).json(result);
};

exports.ExpensesTypesDetailsByID = async (req, res) => {
  let result = await DetailsByIDService(req, ExpensesTypesModel);
  return res.status(200).json(result);
};

exports.ExpensesTypesDropdown = async (req, res) => {
  let result = await Dropdown(req, ExpensesTypesModel, {
    _id: 1,
    ExpenseName: 1,
  });
  return res.status(200).json(result);
};

exports.DeleteExpensesTypes = async (req, res) => {
  let DeleteID = req.params.id;
  let ObjectID = mongoose.Types.ObjectId;
  let CheckAssociate = await CheckAssociateService(
    { TypeID: ObjectID(DeleteID) },
    ExpensesModel
  );

  if (CheckAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else {
    let result = await DeleteService(req, ExpensesTypesModel);
    res.status(200).json(result);
  }
};
