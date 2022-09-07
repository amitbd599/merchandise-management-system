const CreateService = async (request, Model) => {
  try {
    let PostBody = request.body;
    PostBody.UserEmail = request.headers["email"];
    let data = await Model.create(PostBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = CreateService;
