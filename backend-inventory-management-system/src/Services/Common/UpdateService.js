const UpdateService = async (request, Model) => {
  try {
    let postBody = request.body;
    let UserEmail = request.headers["email"];
    let id = request.params.id;
    let data = await Model.updateOne(
      { _id: id, UserEmail: UserEmail },
      postBody
    );
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = UpdateService;
