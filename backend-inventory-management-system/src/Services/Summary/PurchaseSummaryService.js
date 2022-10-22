const PurchaseModel = require("../../Models/PurchaseModel/PurchaseModel");

const PurchaseSummaryService = async (request) => {
  try {
    let userEmail = request.headers["email"];
    let data = await PurchaseModel.aggregate([
      { $match: { userEmail: userEmail } },
      {
        $facet: {
          Total: [
            {
              $group: {
                _id: 0,
                TotalAmount: { $sum: "$GrandTotal" },
              },
            },
          ],

          Last30Day: [
            {
              $group: {
                _id: {
                  $dateToString: { format: "%Y-%m-%d", date: "$CreatedDate" },
                },
                TotalAmount: { $sum: "$GrandTotal" },
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

module.exports = PurchaseSummaryService;
