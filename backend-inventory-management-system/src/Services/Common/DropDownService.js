const Dropdown = async (request, Model, Projection) => {
  try {
    let userEmail = request.headers["email"];
    let data = await Model.aggregate([
      { $match: { userEmail: userEmail } },
      { $project: Projection },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = Dropdown;
