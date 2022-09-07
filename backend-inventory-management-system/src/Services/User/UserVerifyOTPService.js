const OTPModel = require("../../Models/Users/OTPModel");

const UserVerifyOTPService = async (request, UsersModel) => {
  try {
    let email = request.params.email;
    let OTPCode = request.params.otp;
    let status = 0;
    let statusUpdate = 1;
    // First Process
    let OTPCount = await OTPModel.aggregate([
      { $match: { email: email, otp: OTPCode, status: status } },
    ]);
    if (OTPCount.length > 0) {
      // Second Process
      let OTPUpdate = await UsersModel.updateOne(
        {
          email: email,
          otp: OTPCode,
          status: status,
        },
        { email: email, otp: OTPCode, status: statusUpdate }
      );
      return { status: "Success", data: OTPUpdate };
    } else {
      return { status: "Fail", data: "Invalid Pin Code or Used Code." };
    }
  } catch (e) {
    return { status: "Fail", data: "Invalid Pin Code" };
  }
};

module.exports = UserVerifyOTPService;
