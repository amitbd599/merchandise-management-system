const CheckAssociateService = async (QueryObject, AssociateModel) => {
  try {
    let data = await AssociateModel.aggregate([{ $match: QueryObject }]);

    return data.length > 0;
  } catch (e) {
    return false;
  }
};

module.exports = CheckAssociateService;
