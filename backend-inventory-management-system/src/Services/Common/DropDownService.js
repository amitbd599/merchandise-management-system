const Dropdown = async (request, Model, Projection) => {
  try {
    let UserEmail = request.headers["email"];
    let data = await Model.aggregate([
      { $match: { UserEmail: UserEmail } },
      { $project: Projection },
    ]);
// 
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = Dropdown;
