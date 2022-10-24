import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ResetPasswordService } from "../../API/UserAPIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../Helper/FormHelper";
import { getEmail, getOTP } from "../../Helper/SessionHelper";

const CreatePassword = () => {
  let passwordRef,
    confirmPasswordRef = useRef();

  let navigate = useNavigate();

  const ResetPassword = async () => {
    let password = passwordRef.value;
    let confirmPassword = confirmPasswordRef.value;
    if (IsEmpty(password)) {
      ErrorToast("Password Required");
    } else if (IsEmpty(confirmPassword)) {
      ErrorToast("Confirm Password Required");
    } else if (password !== confirmPassword) {
      ErrorToast("Passwords do not match");
    } else {
      let result = await ResetPasswordService(getEmail(), password, getOTP());
      if (result) {
        navigate("/Login");
      }
    }
  };
  return (
    <div>
      <div className="grid min-h-screen place-items-center bg-slate-100">
        <div className="w-11/12 p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            <span className="font-medium">
              Please Fill In Your Information To Continue
            </span>
          </h1>
          <div className="mt-6">
            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={getEmail()}
              autocomplete="email"
              className="block cursor-not-allowed	 w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              disabled
            />
            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              ref={(input) => (passwordRef = input)}
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="confirmPassword"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirm Password
            </label>
            <input
              ref={(input) => (confirmPasswordRef = input)}
              id="confirmPassword"
              type="password"
              name="password"
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              onClick={ResetPassword}
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
