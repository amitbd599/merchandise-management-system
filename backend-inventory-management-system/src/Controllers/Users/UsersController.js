const UsersModel = require("../../Models/Users/UsersModel");
const OTPModel = require("../../Models/Users/OTPModel");
const UserCreateService = require("../../Services/User/UserCreateService");
const UserLoginService = require("../../Services/User/UserLoginService");
const UserProfileUpdate = require("../../Services/User/UserProfileUpdate");
const UserProfileData = require("../../Services/User/UserProfileData");
const UserResetPasswordService = require("../../Services/User/UserResetPasswordService");
const UserVerifyEmailService = require("../../Services/User/UserVerifyEmailService");
const UserVerifyOTPService = require("../../Services/User/UserVerifyOTPService");

//! Registration Function
exports.Registration = async (req, res) => {
  let result = await UserCreateService(req, UsersModel);
  res.status(200).json(result);
};

//! Login Function
exports.Login = async (req, res) => {
  let result = await UserLoginService(req, UsersModel);
  res.status(200).json(result);
};

//! Profile Update Function
exports.ProfileUpdate = async (req, res) => {
  let result = await UserProfileUpdate(req, UsersModel);
  res.status(200).json(result);
};

//! Profile Data Function
exports.ProfileData = async (req, res) => {
  let result = await UserProfileData(req, UsersModel);
  res.status(200).json(result);
};

//! User Verify Email Service Data Function
exports.VerifyEmailService = async (req, res) => {
  let result = await UserVerifyEmailService(req, UsersModel);
  res.status(200).json(result);
};
//! User Verify OTP  Service Data Function
exports.VerifyOTPService = async (req, res) => {
  let result = await UserVerifyOTPService(req, OTPModel);
  res.status(200).json(result);
};
//! User Reset Password Service Data Function
exports.ResetPasswordService = async (req, res) => {
  let result = await UserResetPasswordService(req, UsersModel);
  res.status(200).json(result);
};
