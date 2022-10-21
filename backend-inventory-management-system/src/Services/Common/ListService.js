const ListService = async (request, Model, SearchArray) => {
  try {
    let pageNo = Number(request.params.pageNo);
    let perPage = Number(request.params.perPage);
    let searchValue = request.params.searchKeyword;
    let userEmail = request.headers["email"];
    let skipRow = (pageNo - 1) * perPage;
    let data;
    if (searchValue !== "0") {
      let searchQuery = { $or: SearchArray };
      data = await Model.aggregate([
        { $match: { userEmail: userEmail } },
        { $match: searchQuery },

        {
          $facet: {
            Total: [{ $count: "Count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await Model.aggregate([
        { $match: { userEmail: userEmail } },
        {
          $facet: {
            Total: [{ $count: "Count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", error: e.toString() };
  }
};

module.exports = ListService;
