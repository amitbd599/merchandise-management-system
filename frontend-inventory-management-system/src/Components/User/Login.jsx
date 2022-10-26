import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../API/UserAPIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../Helper/FormHelper";

const Login = () => {
  let passwordRef,
    emailRef = useRef();

  const submitLogin = async () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmail(email)) {
      ErrorToast("Invalid email address");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
    } else {
      let result = await LoginRequest(email, password);
      if (result === true) {
        window.location.href = "/";
      }
    }
  };
  return (
    <div>
      <div className='grid min-h-screen place-items-center bg-slate-100'>
        <div className='w-11/12 p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-5/12'>
          <h1 className='text-xl font-semibold'>
            <span className='font-medium'>
              Please Fill In Your Information To Continue
            </span>
          </h1>
          <div className='mt-6'>
            <label
              for='email'
              className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
            >
              E-mail
            </label>
            <input
              ref={(input) => (emailRef = input)}
              id='email'
              type='email'
              name='email'
              placeholder='john.doe@company.com'
              autocomplete='email'
              className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
              required
            />
            <label
              for='password'
              className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
            >
              Password
            </label>
            <input
              ref={(input) => (passwordRef = input)}
              id='password'
              type='password'
              name='password'
              placeholder='********'
              autocomplete='new-password'
              className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
              required
            />
            <button
              onClick={submitLogin}
              type='submit'
              className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none'
            >
              Sign in
            </button>
            <div className='mt-3'>
              <Link to={"/Registration"}>
                <span className=' text-xs mr-2 text-gray-500 cursor-pointer hover:text-black'>
                  Create New Account?
                </span>
              </Link>
              ||
              <Link to={"/VerifyEmailService"}>
                <span className='   text-xs ml-2 text-gray-500 cursor-pointer hover:text-black'>
                  Forget Password?
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
