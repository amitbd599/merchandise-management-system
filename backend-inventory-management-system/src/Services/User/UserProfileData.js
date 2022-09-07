const UserProfileData = async (request, UsersModel) => {
  try {
    let data = await UsersModel.aggregate([
      { $match: { email: request.headers["email"] } },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = UserProfileData;
