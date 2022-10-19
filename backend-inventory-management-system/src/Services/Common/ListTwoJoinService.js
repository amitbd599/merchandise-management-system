const ListTwoJoinService = async (
  request,
  DataModel,
  SearchArray,
  JoinStage1,
  JoinStage2
) => {
  try {
    let pageNo = Number(request.params.pageNo);
    let perPage = Number(request.params.perPage);
    let searchValue = request.params.searchKeyword;
    let userEmail = request.headers["email"];
    let skipRow = (pageNo - 1) * perPage;

    let data;

    if (searchValue !== "0") {
      data = await DataModel.aggregate([
        { $match: { userEmail: userEmail } },
        JoinStage1,
        JoinStage2,
        { $match: { $or: SearchArray } },
        {
          $facet: {
            Total: [{ $count: "count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await DataModel.aggregate([
        { $match: { userEmail: userEmail } },
        JoinStage1,
        JoinStage2,
        {
          $facet: {
            Total: [{ $count: "count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = ListTwoJoinService;
