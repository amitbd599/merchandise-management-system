const mongoose = require("mongoose");

const CreateParentChildsService = async (
  request,
  ParentModel,
  ChildModel,
  JoinPropertyName
) => {
  // Create Transaction Session
  const session = await mongoose.startSession();

  try {
    // Begin Transaction
    await session.startTransaction();

    // First Database Process
    let Parent = request.body["Parent"];
    Parent.userEmail = request.headers["email"];

    let ParentCreation = await ParentModel.create([Parent], { session });

    // Second Database Process
    let Childs = request.body["Childs"];
    await Childs.forEach((element) => {
      element[JoinPropertyName] = ParentCreation[0]["_id"];
      element["userEmail"] = request.headers["email"];
    });
    let ChildCreation = await ChildModel.insertMany(Childs, { session });

    // Transaction Success
    await session.commitTransaction();
    session.endSession();
    return { status: "success", Parent: ParentCreation, Childs: ChildCreation }; 
  } catch (error) {
    // Roll Back Transaction if Fail
    await session.abortTransaction();
    session.endSession();
    return { status: "fail", data: error };
  }
};

module.exports = CreateParentChildsService;
