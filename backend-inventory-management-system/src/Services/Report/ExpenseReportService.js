const ExpenseModel = require("../../Models/ExpensesModel/ExpensesModel");

const ExpenseReportServiceData = async (request) => {
  try {
    let userEmail = request.headers["email"];
    let FormDate = request.body["FormDate"];
    let ToDate = request.body["ToDate"];

    let data = await ExpenseModel.aggregate([
      {
        $match: {
          userEmail: userEmail,
          CreatedDate: { $gte: new Date(FormDate), $lte: new Date(ToDate) },
        },
      },
      {
        $facet: {
          Total: [
            {
              $group: {
                _id: 0,
                TotalAmount: { $sum: "$Amount" },
              },
            },
          ],

          Rows: [
            {
              $lookup: {
                from: "expensestypes",
                localField: "TypeID",
                foreignField: "_id",
                as: "Type",
              },
            },
          ],
        },
      },
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

module.exports = ExpenseReportServiceData;
