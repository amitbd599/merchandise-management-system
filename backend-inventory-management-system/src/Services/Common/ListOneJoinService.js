const ListOneJoinService = async (
  request,
  DataModel,
  SearchArray,
  JoinStage
) => {
  try {
    let pageNo = Number(request.params.pageNo); 
    let perPage = Number(request.params.perPage);
    let searchValue = request.params.searchValue;
    let UserEmail = request.headers["email"];
    let skipRow = (pageNo - 1) * perPage;

    let data;
    console.log(searchValue);
    if (searchValue !== "0") {
      data = await DataModel.aggregate([
        { $match: { UserEmail: UserEmail } },
        JoinStage,
        { $match: { $or: SearchArray } },
        {
          $facet: {
            Total: [{ $count: "Count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await DataModel.aggregate([
        { $match: { UserEmail: UserEmail } },
        JoinStage,
        {
          $facet: {
            Total: [{ $count: "Count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }
    return res.status(200).json(data);
  } catch (e) {
    return { status: "Fail/", data: e.toString() };
  }
};

module.exports = ListOneJoinService;
