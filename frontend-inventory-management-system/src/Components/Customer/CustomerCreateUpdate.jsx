import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../Redux/Store/Store";
import { onChangeCustomerInput } from "../../Redux/State-slice/Customer-Slice";
import { CreateCustomerRequestAPI, CustomerUpdateRequestAPI } from "../../API/CustomerAPIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../Helper/FormHelper";
import { useEffect } from "react";
const CustomerCreateUpdate = () => {
  let formValue = useSelector((state) => state.customer.FormValue);
  let navigate = useNavigate();
  let [itemId, setItemID] = useState(0);
  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    setItemID(id);

    (async()=>{await CustomerUpdateRequestAPI()})
  }, []);

  const saveChange = async () => {
    if (IsEmpty(formValue?.CustomerName)) {
      ErrorToast("Customer name is required");
    } else if (IsEmpty(formValue?.Phone)) {
      ErrorToast("Phone number is required");
    } else if (IsEmail(formValue?.Email)) {
      ErrorToast("Email is required");
    } else if (IsEmpty(formValue?.Address)) {
      ErrorToast("Address is required");
    } else {
      if (await CreateCustomerRequestAPI(formValue)) {
        navigate("/CustomerList");
      }
    }
  };

  return (
    <div className="">
      <div className="grid min-h-[calc(100vh-50px)] place-items-center bg-slate-100 px-6">
        <div className="w-11/12 p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-full">
          <h1 className="text-xl font-semibold">
            <span className="font-medium">Add A Customer</span>
            <span className="font-medium">{itemId}</span>
          </h1>
          <div className="mt-6">
            <div className="flex gap-6">
              <div className="w-full">
                <label
                  for="email"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Customer Name:
                </label>
                <input
                  // ref={(input) => (emailRef = input)}
                  onChange={(e) => {
                    store.dispatch(
                      onChangeCustomerInput({
                        Name: "CustomerName",
                        Value: e.target.value,
                      })
                    );
                  }}
                  value={formValue?.CustomerName}
                  type="text"
                  className="block rounded-md w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="email"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Mobile No:
                </label>
                <input
                  // ref={(input) => (emailRef = input)}
                  onChange={(e) => {
                    store.dispatch(
                      onChangeCustomerInput({
                        Name: "Phone",
                        Value: e.target.value,
                      })
                    );
                  }}
                  value={formValue?.Phone}
                  type="text"
                  className="block rounded-md w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6 mt-2">
              <div className="w-full">
                <label
                  for="email"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Email:
                </label>
                <input
                  // ref={(input) => (emailRef = input)}
                  onChange={(e) => {
                    store.dispatch(
                      onChangeCustomerInput({
                        Name: "Email",
                        Value: e.target.value,
                      })
                    );
                  }}
                  value={formValue?.Email}
                  type="email"
                  className="block rounded-md w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="email"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Address:
                </label>
                <input
                  // ref={(input) => (emailRef = input)}
                  onChange={(e) => {
                    store.dispatch(
                      onChangeCustomerInput({
                        Name: "Address",
                        Value: e.target.value,
                      })
                    );
                  }}
                  value={formValue?.Address}
                  type="text"
                  className="block rounded-md w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </div>
            </div>

            <button
              onClick={saveChange}
              type="submit"
              className="w-[180px] rounded-md py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none"
            >
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCreateUpdate;
