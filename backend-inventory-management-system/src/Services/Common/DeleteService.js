const DeleteService = async (request, Model) => {
  try {
    let DeleteID = request.params.id;
    let userEmail = request.headers["email"]; 
    let QueryObject = {};
    QueryObject["_id"] = DeleteID;
    QueryObject["userEmail"] = userEmail;

    let Delete = await Model.remove(QueryObject);
    return {
      status: "Success",
      data: Delete,
    };
  } catch (e) {
    console.log("Data");
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = DeleteService;
