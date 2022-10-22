const mongoose = require("mongoose");
const PurchaseModel = require("../../Models/PurchaseModel/PurchaseModel");
const SuppliersModel = require("../../Models/SuppliersModel/SuppliersModel");
const CheckAssociateService = require("../../Services/Common/CheckAssociateService");
const CreateService = require("../../Services/Common/CreateService");
const DeleteService = require("../../Services/Common/DeleteService");
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateSupplier = async (req, res) => {
  let result = await CreateService(req, SuppliersModel);
  res.status(200).json(result);
};

exports.UpdateSupplier = async (req, res) => {
  let result = await UpdateService(req, SuppliersModel);
  res.status(200).json(result);
};

exports.SupplierList = async (req, res) => {
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

exports.SupplierDropdown = async (req, res) => {
  let result = await Dropdown(req, SuppliersModel, { _id: 1, Name: 1 });
  return res.status(200).json(result);
};
exports.SupplierDetailsByID = async (req, res) => {
  let result = await DetailsByIDService(req, SuppliersModel);
  return res.status(200).json(result);
};

exports.DeleteSupplier = async (req, res) => {
  let DeleteID = req.params.id;
  let ObjectID = mongoose.Types.ObjectId;
  let CheckAssociate = await CheckAssociateService(
    { SupplierID: ObjectID(DeleteID) },
    PurchaseModel
  );

  if (CheckAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else {
    let result = await DeleteService(req, SuppliersModel);
    res.status(200).json(result);
  }
};
