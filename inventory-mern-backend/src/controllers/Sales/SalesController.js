const ParentModel = require("../../models/Sales/SalesModel");
const ChildsModel = require("../../models/Sales/SaleProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const DeleteParentChildsService = require("../../services/common/DeleteParentChildsService");

exports.CreateSales = async (req, res) => {
    let Result = await CreateParentChildsService(req, ParentModel, ChildsModel, 'SaleID');
    res.status(200).json(Result)
}

exports.SalesList = async (req, res) => {
    let SearchRgx = { "$regex": req.params.searchKeyword, "$options": "i" }
    let JoinStage = { $lookup: { from: "customers", localField: "CustomerID", foreignField: "_id", as: "customers" } };
    let JoinStage_2 = { $lookup: { from: "saleproducts", localField: "_id", foreignField: "SaleID", as: "Sales" } };
    let SearchArray = [{ Note: SearchRgx }, { 'customers.CustomerName': SearchRgx }, { 'customers.Address': SearchRgx }, { 'customers.Phone': SearchRgx }, { 'customers.Email': SearchRgx }]
    let Result = await ListOneJoinService(req, ParentModel, SearchArray, JoinStage, JoinStage_2);
    res.status(200).json(Result)
}


exports.SaleDelete = async (req, res) => {
    let Result = await DeleteParentChildsService(req, ParentModel, ChildsModel, 'SaleID')
    res.status(200).json(Result)
}
