const OPTModel = require("../../Models/Users/OTPModel");
const UserResetPasswordService = async (request, UsersModel) => {
  let email = request.body["email"];
  let OTPCode = request.body["otp"];
  let NewPass = request.body["password"];
  let statusUpdate = 1;
  try {
    // Database first Process
    let OTPUseCount = await OPTModel.aggregate([
      { $match: { email: email, otp: OTPCode, status: statusUpdate } },
      { $count: "total" },
    ]);
    if (OTPUseCount.length > 0) {
      // Database second Process
      let passwordUpdate = await UsersModel.updateOne(
        { email: email },
        { password: NewPass }
      );
      return { status: "Success", data: passwordUpdate };
    } else {
      return { status: "Fail", data: "Invalid request" };
    }
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = UserResetPasswordService;
