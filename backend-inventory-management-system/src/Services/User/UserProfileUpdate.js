const UserProfileUpdate = async (request, UsersModel) => {
  try {
    let data = await UsersModel.updateOne(
      {
        email: request.headers["email"],
      },
      request.body
    );
    console.log(request.headers);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = UserProfileUpdate;
