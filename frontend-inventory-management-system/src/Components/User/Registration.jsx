import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="grid min-h-screen place-items-center bg-slate-100">
        <div className="w-11/12 p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            <span className="font-medium">
              For Registration Please Fill In Your Information
            </span>
          </h1>
          <form className="mt-6">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  for="firstname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Firstname
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="John"
                  autocomplete="given-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label
                  for="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Lastname
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                  autocomplete="family-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
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
              placeholder="john.doe@company.com"
              autocomplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="mobile"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              type="text"
              name="mobile"
              placeholder="01814123456"
              autocomplete="mobile"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none"
            >
              Sign up
            </button>
            <div className="mt-3">
              <Link to={"/Login"}>
                <span className=" text-xs mr-2 text-gray-500 cursor-pointer hover:text-black">
                  Already Have An Account?
                </span>
              </Link>
              ||
              <Link to={"/VerifyEmailService"}>
                <span className="   text-xs ml-2 text-gray-500 cursor-pointer hover:text-black">
                  Forget Password?
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
