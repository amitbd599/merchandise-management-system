const mongoose = require("mongoose");
const DeleteParentChildsService = async (
  request,
  ParentModel,
  ChildModel,
  JoinPropertyName
) => {
  const session = await mongoose.startSession();
  try {
    // Begin Transaction
    await session.startTransaction();

    //Parent Transaction
    let DeleteID = request.params.id;
    let userEmail = request.headers["email"];

    let ChildQueryObject = {};
    ChildQueryObject[JoinPropertyName] = DeleteID;
    ChildQueryObject[userEmail] = userEmail;

    let ParentQueryObject = {};
    ParentQueryObject["_id"] = DeleteID;
    ParentQueryObject[userEmail] = userEmail;

    // Delete First Process
    let ChildsDelete = await ChildModel.remove(ChildQueryObject).session(
      session
    );

    // Delete Second Process
    let ParentDelete = await ParentModel.remove(ParentQueryObject).session(
      session
    );

    // Commit Transaction
    await session.commitTransaction();
    session.endSession();

    return { status: "Success", Parent: ParentDelete, Childs: ChildsDelete };
  } catch (e) {
    // Roll Back Transaction
    await session.abortTransaction();
    session.endSession();

    return { status: "fail", data: e.toString() };
  }
};

module.exports = DeleteParentChildsService;
