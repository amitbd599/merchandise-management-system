import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CustomerListRequestAPI } from "../../API/CustomerAPIRequest";
import Moment from "react-moment";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import { options } from "../../Helper/itemOption";
import error from "../../Asset/Img/error.png";
import { Link } from "react-router-dom";
const CustomerList = () => {
  let [searchKeyword, setSearchKeyword] = useState("0");
  let [perPage, setPerPage] = useState({ value: "10", label: "10 Per Page" });
  console.log(searchKeyword);
  useEffect(() => {
    CustomerListRequestAPI(1, perPage?.value, searchKeyword);
  }, []);

  let DataList = useSelector((state) => state.customer.list);
  let Total = useSelector((state) => state.customer.listTotal);

  const handelPageClick = async (event) => {
    CustomerListRequestAPI(event.selected + 1, perPage?.value, searchKeyword);
  };
  const perPageOnChange = async (e) => {
    setPerPage({ value: parseInt(e.value), label: e.label });
    await CustomerListRequestAPI(1, e.value, searchKeyword);
  };

  const searchKeywordOnChange = async (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value.length === 0) {
      setSearchKeyword("0");
      await CustomerListRequestAPI(1, perPage?.value, "0");
    } else {
      await CustomerListRequestAPI(1, perPage?.value, e.target.value);
    }
  };

  return (
    <div>
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">Customer List</h2>
            <span class="text-xs">All customer item</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-100 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                onChange={searchKeywordOnChange}
                class="bg-gray-100 outline-none ml-1 block"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div class="lg:ml-40 ml-10 space-x-8 flex">
              <span className="inline">
                <Select
                  className="select__color"
                  defaultValue={options[0]}
                  options={options}
                  onChange={perPageOnChange}
                  styles={{
                    option: (provided, state) => ({
                      ...provided,
                      borderBottom: "1px solid #ddd",
                      color: state.isSelected ? "#fff" : "#666",
                      background: state.isSelected ? "#A855F7" : "#fff",
                      cursor: "pointer",
                      margin: "0px",
                      fontSize: "12px",
                      ":active": {
                        backgroundColor: "#fff",
                        cursor: "pointer",
                      },
                    }),
                    singleValue: (provided, state) => ({
                      ...provided,
                      color: "#666",

                      fontSize: "12px",
                    }),
                    control: (styles) => ({
                      ...styles,
                      backgroundColor: "#ffffff",
                      padding: "0px 0px",
                      margin: "0px 0px",
                      cursor: "pointer",
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
              </span>
              <button class="bg-purple-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {Total !== 0 ? (
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        No
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Create Date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Image
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Phone
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataList.map((item, index) => (
                      <tr key={index}>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-600 text-sm whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </td>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {/* <Moment date={item?.CreatedDate} /> */}
                            <Moment format="DD/MM/YYYY">
                              {item?.CreatedDate}
                            </Moment>
                          </p>
                        </td>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item?.CustomerName}
                          </p>
                        </td>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item?.Phone}
                          </p>
                        </td>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item?.Email}
                          </p>
                        </td>
                        <td class="px-4 py-3 border-b border-gray-200 bg-white text-xs">
                          <div className="flex gap-2">
                            <Link to={`/CustomerCreateUpdate?id=${item?._id}`}>
                              {" "}
                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">Edit</span>
                              </span>
                            </Link>

                            <span class="relative inline-block px-3 py-1 font-semibold text-purple-900 leading-tight cursor-pointer">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-purple-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Show</span>
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex justify-center">
                  <img className="w-[400px]" src={error} alt="" />
                </div>
              )}

              {Total > 9 && (
                <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <ReactPaginate
                    className="flex gap-2"
                    previousLabel="<"
                    nextLabel=">"
                    pageClassName="border  hover:bg-[#A855F7] hover:text-white text-slate-700 w-[35px] h-[35px] flex justify-center items-center rounded-full"
                    previousLinkClassName="border  hover:bg-[#A855F7] hover:text-white text-slate-700 w-[35px] h-[35px] flex justify-center items-center rounded-full"
                    nextLinkClassName="border  hover:bg-[#A855F7] hover:text-white text-slate-700 w-[35px] h-[35px] flex justify-center items-center rounded-full"
                    breakLabel=". . ."
                    pageCount={Total / perPage?.value}
                    pageRangeDisplayed={3}
                    activeClassName="active   bg-[#A855F7] rounded-full"
                    onPageChange={handelPageClick}
                    type="button"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
