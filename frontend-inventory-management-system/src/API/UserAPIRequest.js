import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import {
  getToken,
  setEmail,
  setOTP,
  setToken,
  setUserDetails,
} from "../Helper/SessionHelper";
import { setProfile } from "../Redux/State-slice/Profile-Slice";
import { HideLoader, ShowLoader } from "../Redux/State-slice/Setting-Slice";
import store from "../Redux/Store/Store";

const TokenData = { headers: { token: getToken() } };

//! Login Request API
export const LoginRequest = async (email, password) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/Login";
    let PostBody = { email: email, password: password };
    let res = await axios.post(URL, PostBody);

    if (res.status === 200 && res.data["status"] === "Success") {
      setToken(res.data["Token"]);
      setUserDetails(res.data["data"]);
      SuccessToast("Login successful");
      store.dispatch(HideLoader());
      return true;
    } else {
      ErrorToast("Invalid Email or Password");
      store.dispatch(HideLoader());
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong, please try again");
    return false;
  }
};

//! Registration Request API
export const RegisterRequest = async (
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/Registration";
    let PostBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      password: password,
      photo: photo,
    };
    let res = await axios.post(URL, PostBody);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      if (res.data["status"] === "Fail") {
        if (res.data["data"]["keyPattern"]["email"] === 1) {
          debugger;
          ErrorToast("Email already exists");
          return false;
        } else {
          ErrorToast("Something went wrong");
          return false;
        }
      } else {
        SuccessToast("Registration successful");
        return true;
      }
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};

//! Get Profile Information API
export const GetProfileRequest = async () => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/ProfileData";
    let res = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      store.dispatch(setProfile(res.data["data"][0]));
    } else {
      ErrorToast("Something went wrong");
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
  }
};

//! Profile Update Request API
export const ProfileUpdateRequest = async (
  email,
  firstName,
  lastName,
  mobile,
  photo
) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/ProfileUpdate";
    let PostBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      photo: photo,
    };

    let res = await axios.post(URL, PostBody, TokenData);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      SuccessToast("Profile Updated Successfully");

      setUserDetails(); //! ****
      return true;
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};

// ========= Recover Password ===========

//! Step One Recovery Verify Email
export const RecoveryVerifyEmail = async (email) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/VerifyEmailService/" + email;
    let res = await axios.post(URL);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      if (res.data["status"] === "fail") {
        ErrorToast("No User Found");
        return false;
      } else {
        setEmail(email);
        SuccessToast(
          "A 6 Digit verification code has been sent to your email address. "
        );
        return true;
      }
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};

//! Step Two Send OTP Code
export const VerifyOTPService = async (email, otp) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/VerifyOTPService/" + email + "/" + otp;
    let res = await axios.post(URL);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      if (res.data["status"] === "fail") {
        ErrorToast("Code Verification Fail");
        return false;
      } else {
        setOTP(otp);
        SuccessToast("Code Verification Success");
        return true;
      }
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};

//! Step three Reset Password Service
export const ResetPasswordService = async (email, password, otp) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/ResetPasswordService";
    let PostBody = {
      email: email,
      password: password,
      otp: otp,
    };
    let res = await axios.post(URL, PostBody);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      if (res.data["status"] === "fail") {
        ErrorToast("Password Reset Failed");
        return false;
      } else {
        setOTP(otp);
        SuccessToast("Password Reset Success");
        return true;
      }
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};
