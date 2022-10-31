import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateExpenseRequestAPI } from "../../API/ExpenseAPIRequest";
import { ErrorToast, IsEmpty, IsNumber } from "../../Helper/FormHelper";
import Select from "react-select";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ExpenseUpdateRequestAPI,
  ExpenseDetailsByID,
} from "../../API/ExpenseAPIRequest";
import { ExpenseTypeDropdownRequestAPI } from "../../API/ExpenseTypeAPIRequest";
const ExpenseUpdate = () => {
  let params = useParams();
  let { amountRef, noteRef } = useRef();
  let navigate = useNavigate();

  const saveChange = async () => {
    let TypeID = {
      label: `${selectedOption?.label}`,
      value: `${selectedOption?.value}`,
    };
    let Note = noteRef?.value;
    let Amount = parseInt(amountRef?.value);
    if (IsEmpty(TypeID?.value)) {
      ErrorToast("Expense Type is required");
    } else if (!IsNumber(Amount)) {
      ErrorToast("Amount is required");
    } else if (IsEmpty(Note)) {
      ErrorToast("Note is required");
    } else {
      debugger;
      await ExpenseUpdateRequestAPI(
        {
          TypeID,
          Amount,
          Note,
        },
        params?.id
      ).then((result) => {
        if (result === true) {
          navigate("/ExpenseList");
        }
      });
    }
  };

  useEffect(() => {
    (async () => {
      await ExpenseDetailsByID(params?.id);
    })();
    (async () => {
      await ExpenseTypeDropdownRequestAPI();
    })();
  }, []);

  const ExpenseTypeDropdown = useSelector(
    (state) => state.expenseType.expenseTypeDropdown
  );
  const singleExpenseData = useSelector((state) => state.expense.singleExpense);

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption({
      value: `${singleExpenseData.TypeID?.value}`,
      label: `${singleExpenseData.TypeID?.label}`,
    });
  }, [singleExpenseData]);

  const size = [];
  ExpenseTypeDropdown.forEach((items, index) => {
    size.push({ value: `${items?._id}`, label: `${items?.ExpenseName}` });
  });
  console.log(singleExpenseData?.Amount);
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto '>
        <div className='grid min-h-[calc(100vh-50px)] place-items-center bg-slate-100 px-1 lg:px-6'>
          <div className='w-11/12 p-6 lg:p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-full'>
            <h1 className='text-xl font-semibold'>
              <span className='font-medium'>Edit Expense</span>
            </h1>
            <div className='mt-6'>
              <div className='block lg:flex gap-6'>
                <div className='w-full'>
                  <label
                    for='email'
                    className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
                  >
                    Expense Type:
                  </label>
                  <Select
                    className='block rounded-md w-full  py-2 mt-0 text-gray-700  appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                    value={selectedOption}
                    options={size}
                    onChange={(item) => setSelectedOption(item)}
                    styles={{
                      option: (provided, state) => ({
                        ...provided,
                        borderBottom: "1px solid #ddd",
                        color: state.isSelected ? "#fff" : "#666",
                        background: state.isSelected ? "#9333EA" : "#fff",
                        cursor: "pointer",
                        margin: "0px",
                        ":active": {
                          backgroundColor: "#ddd",
                          cursor: "pointer",
                        },
                      }),
                      singleValue: (provided, state) => ({
                        ...provided,
                        color: "#666",

                        fontSize: "15px",
                      }),
                      control: (styles) => ({
                        ...styles,
                        backgroundColor: "#ffffff",
                        padding: "0px 0px",
                        margin: "0px 0px",

                        ":focus-within": {
                          ...styles[":focus-within"],
                          border: "1px solid #ddd",
                          boxShadow: "none",
                        },
                      }),
                      menuList: (styles) => ({
                        ...styles,
                        margin: "0px",
                        padding: "0px",
                      }),
                      noOptionsMessage: (styles) => ({
                        ...styles,
                        background: "red",
                        color: "#fff",
                      }),
                    }}
                  />
                </div>
                <div className='w-full'>
                  <label
                    for='email'
                    className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
                  >
                    Expense Amount:
                  </label>

                  <input
                    defaultValue={singleExpenseData?.Amount || ""}
                    key={singleExpenseData?.Amount}
                    ref={(input) => (amountRef = input)}
                    type='text'
                    className='block px-3 py-2 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none  focus:shadow-inner  '
                  />
                </div>
              </div>
              <div className='block lg:flex gap-6 mt-2'>
                <div className='w-full'>
                  <label
                    for='email'
                    className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
                  >
                    Expense Note:
                  </label>
                  <textarea
                    defaultValue={singleExpenseData?.Note}
                    key={singleExpenseData?.Note}
                    ref={(input) => (noteRef = input)}
                    id='message'
                    rows='4'
                    className='block px-3 py-2 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none  focus:shadow-inner'
                    placeholder='Your message...'
                  ></textarea>
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

export default ExpenseUpdate;
