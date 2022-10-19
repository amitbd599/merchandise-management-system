const CreateParentChildsService = async (
  request,
  ParentModel,
  ChildModel,
  JoinPropertyName
) => {
  try {
    // Parent Creation
    let Parent = request.body["Parent"];
    Parent.userEmail = request.headers["email"];

    let ParentCreation = await ParentModel.create(Parent);

    // Child Creation
    if (ParentCreation["_id"]) {
      try {
        let Childs = request.body["Childs"];
        await Childs.forEach((element) => {
          element[JoinPropertyName] = ParentCreation["_id"];
          element["userEmail"] = request.headers["email"];
        });
        let ChildCreation = await ChildModel.insertMany(Childs);
        return {
          status: "Success",
          Parent: ParentCreation,
          Childs: ChildCreation,
        };
      } catch (e) {
        await ParentModel.remove({_id:ParentCreation["_id"]})
      }
    }
  } catch (e) {
    console.log(e);
  }
};
