import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RecoveryVerifyEmail } from "../../API/UserAPIRequest";
import { ErrorToast, IsEmail } from "../../Helper/FormHelper";

const SendOTP = () => {
  let emailRef = useRef();
  let navigate = useNavigate();

  const VerifyEmail = async () => {
    let email = emailRef.value;
    if (IsEmail(email)) {
      ErrorToast("Valid email address required");
    } else {
      let result = await RecoveryVerifyEmail(email);
      if (result) {
        navigate("/VerifyOTPService");
      }
    }
  };
  return (
    <div>
      <div className="grid min-h-screen place-items-center bg-slate-100">
        <div className="w-11/12 p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            <span className="font-medium">Enter Your Email</span>
          </h1>
          <div className="mt-6">
            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              ref={(input) => (emailRef = input)}
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autocomplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <button
              onClick={VerifyEmail}
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none"
            >
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
