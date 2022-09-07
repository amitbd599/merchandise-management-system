const SendEmailUtility = require("../../Utility/SendEmailUtility");
const OTP = require("../../Models/Users/OTPModel");
const UserVerifyEmailService = async (request, dataModel) => {
  try {
    // Email Account Query
    let email = request.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);

    // Database First Process
    let UserCount = await dataModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (UserCount.length > 0) {
      // OTP Insert

      // Database Second Process
      await OTP.create({ email: email, otp: OTPCode });

      // Send Email
      let SendEmail = await SendEmailUtility(
        email,
        "Your PIN Code is = " + OTPCode,
        "Inventory PIN Verify"
      );
      return { status: "Success", data: UserCount, EmailSender: SendEmail };
    } else {
      return { status: "Fail", data: "No User Found" };
    }
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = UserVerifyEmailService;
