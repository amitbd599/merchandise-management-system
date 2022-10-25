const CreateService = async (request, Model) => {
  try {
    let PostBody = request.body;
    PostBody.userEmail = request.headers["email"];
    let data = await Model.create(PostBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateService;
