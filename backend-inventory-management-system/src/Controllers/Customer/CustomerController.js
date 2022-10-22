const { default: mongoose } = require("mongoose");
const CustomersModel = require("../../Models/CustomerModel/CustomersModel");
const SalesModel = require("../../Models/SalesModel/SalesModel");
const CheckAssociateService = require("../../Services/Common/CheckAssociateService");
const CreateService = require("../../Services/Common/CreateService");
const DeleteService = require("../../Services/Common/DeleteService");
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");
const Dropdown = require("../../Services/Common/DropDownService");
const ListService = require("../../Services/Common/ListService");
const UpdateService = require("../../Services/Common/UpdateService");

exports.CreateCustomerService = async (req, res) => {
  let result = await CreateService(req, CustomersModel);
  res.status(200).json(result);
};

exports.UpdateCustomer = async (req, res) => {
  let result = await UpdateService(req, CustomersModel);
  res.status(200).json(result);
};
exports.CustomerList = async (req, res) => {
  let SearchRGX = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [
    { CustomerName: SearchRGX },
    { Phone: SearchRGX },
    { Email: SearchRGX },
    { Address: SearchRGX },
  ];
  let result = await ListService(req, CustomersModel, searchArray);
  res.status(200).json(result);
};
exports.CustomerDropdown = async (req, res) => {
  let result = await Dropdown(req, CustomersModel, { _id: 1, CustomerName: 1 });
  return res.status(200).json(result);
};

exports.CustomerDetailsByID = async (req, res) => {
  let result = await DetailsByIDService(req, CustomersModel);
  return res.status(200).json(result);
};

exports.DeleteCustomer = async (req, res) => {
  let DeleteID = req.params.id;
  let ObjectID = mongoose.Types.ObjectId;
  let CheckAssociate = await CheckAssociateService(
    { CustomerID: ObjectID(DeleteID) },
    SalesModel
  );

  if (CheckAssociate) {
    res
      .status(200)
      .json({ status: "Associate", data: "Associate With Product." });
  } else {
    let result = await DeleteService(req, CustomersModel);
    res.status(200).json(result);
  }
};
