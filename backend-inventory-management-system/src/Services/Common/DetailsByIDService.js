const mongoose = require("mongoose");
const DetailsByIDService = async (request, Model) => {
  try {
    let DetailsID = request.params.id;
    let userEmail = request.headers["email"];

    const ObjectID = mongoose.Types.ObjectId;
    let QueryObject = {};
    QueryObject["_id"] = ObjectID(DetailsID);
    QueryObject["userEmail"] = userEmail;

    let data = await Model.aggregate([{ $match: QueryObject }]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = DetailsByIDService;
