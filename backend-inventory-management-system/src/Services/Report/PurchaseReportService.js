const PurchaseProductsModel = require("../../Models/PurchaseModel/PurchaseProductsModel");

const PurchaseReportService = async (request) => {
  try {
    let userEmail = request.headers["email"];
    let FormDate = request.body["FormDate"];
    let ToDate = request.body["ToDate"];

    let data = await PurchaseProductsModel.aggregate([
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
                TotalAmount: { $sum: "$Total" },
              },
            },
          ],

          Rows: [
            {
              $lookup: {
                from: "products",
                localField: "ProductID",
                foreignField: "_id",
                as: "products",
              },
            },
            { $unwind: "$products" },
            {
              $lookup: {
                from: "brands",
                localField: "products.BrandID",
                foreignField: "_id",
                as: "brands",
              },
            },
            {
              $lookup: {
                from: "categories",
                localField: "products.CategoryID",
                foreignField: "_id",
                as: "categories",
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

module.exports = PurchaseReportService;
