const ExpensesModel = require("../../Models/ExpensesModel/ExpensesModel");

const ExpenseSummaryService = async (request) => {
  try {
    let userEmail = request.headers["email"];
    let data = await ExpensesModel.aggregate([
      { $match: { userEmail: userEmail } },
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

          Last30Day: [
            {
              $group: {
                _id: {
                  $dateToString: { format: "%Y-%m-%d", date: "$CreatedDate" },
                },
                TotalAmount: { $sum: "$Amount" },
              },
            },

            { $sort: { _id: -1 } },
            { $limit: 30 },
          ],
        },
      },
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = ExpenseSummaryService;
