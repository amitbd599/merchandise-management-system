import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";

import { ErrorToast, IsEmpty } from "../../Helper/FormHelper";
import user from "../../Asset/Img/user.png";
import { useRef } from "react";

import { CreateExpenseTypeRequestAPI } from "../../API/ExpenseTypeAPIRequest";
const ExpenseTypeCreate = () => {
  let { expenseTypeRef } = useRef();
  let navigate = useNavigate();
  const saveChange = async () => {
    let ExpenseName = expenseTypeRef.value;
    let Image = img;

    if (IsEmpty(ExpenseName)) {
      ErrorToast("Customer name is required");
    } else {
      if (
        await CreateExpenseTypeRequestAPI({
          ExpenseName,
          Image,
        })
      ) {
        navigate("/ExpenseTypeList");
      }
    }
  };

  // ! File Change Image
  const [img, setImg] = useState("");
  const fileChangedHandler = (event) => {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          200,
          200,
          "JPEG",
          100,
          0,
          (uri) => {
            setImg(uri);
          },
          "base64",
          100,
          100
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto '>
        <div className='grid min-h-[calc(100vh-50px)] place-items-center bg-slate-100 px-1 lg:px-6'>
          <div className='w-11/12 p-6 lg:p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-full'>
            <h1 className='text-xl font-semibold'>
              <span className='font-medium'>Add New Expense Type</span>
            </h1>
            <div className='mt-6'>
              <div className='block lg:flex gap-6'>
                <div className='w-full'>
                  <label
                    for='email'
                    className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
                  >
                    Expense Type Name:
                  </label>
                  <input
                    ref={(input) => (expenseTypeRef = input)}
                    type='text'
                    className='block rounded-md w-full px-3 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                    required
                  />
                </div>
              </div>
              <div className='flex gap-6 mt-6 items-end'>
                <div className='App'>
                  <form class='flex items-center space-x-6'>
                    <div class='shrink-0'>
                      {img !== "" ? (
                        <img
                          className='h-16 w-16 object-cover rounded-full'
                          src={img}
                          alt=''
                        />
                      ) : (
                        <img
                          className='h-16 w-16 object-cover rounded-full'
                          src={user}
                          alt=''
                        />
                      )}
                    </div>
                    <label class='block'>
                      <span class='sr-only'>Choose profile photo</span>
                      <input
                        onChange={fileChangedHandler}
                        type='file'
                        class='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                      />
                    </label>
                  </form>
                </div>
              </div>

              <button
                onClick={saveChange}
                type='submit'
                className='w-[180px] rounded-md py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none'
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTypeCreate;
