import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MdClear } from "react-icons/md";
import {
  CustomerDeleteRequestAPI,
  CustomerDetailsByID,
  CustomerListRequestAPI,
} from "../../API/CustomerAPIRequest";
import Moment from "react-moment";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import { options } from "../../Helper/itemOption";
import error from "../../Asset/Img/error.png";
import { Link } from "react-router-dom";
import user from "../../Asset/Img/user.png";
import { DeleteItems } from "../../Helper/DeleteAlert";
const CustomerList = () => {
  let [searchKeyword, setSearchKeyword] = useState("0");
  let [active, setActive] = useState(false);
  let [perPage, setPerPage] = useState({ value: "10", label: "10 Per Page" });
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

  const deleteCustomer = async (id) => {
    let text =
      "Do you really want to delete this account? This process cannot be undone!";
    let deleteRequestAPI = CustomerDeleteRequestAPI;
    let refreshAPI = CustomerListRequestAPI;
    await DeleteItems(id, text, deleteRequestAPI, refreshAPI);
  };

  const handelClosePopup = () => {
    setActive(!active);
  };

  const showSingleCustomer = async (id) => {
    handelClosePopup();
    await CustomerDetailsByID(id);
  };

  const singleCustomerData = useSelector(
    (state) => state.customer.singleCustomer
  );

  return (
    <div className='bg-white relative'>
      <div className='container mx-auto bg-white  pt-5'>
        <div className='bg-white p-8 rounded-md w-full'>
          <div className='block lg:flex items-center justify-between pb-6'>
            <div>
              <h2 className='text-gray-600 font-semibold'>
                Total Customer: {Total}
              </h2>
              <span className='text-xs mb-3 md:mb-0 inline-block'>
                All customer item
              </span>
            </div>
            <div className='block lg:flex items-center justify-between'>
              <div className='flex bg-gray-100 items-center p-2 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  />
                </svg>
                <input
                  onChange={searchKeywordOnChange}
                  className='bg-gray-100 outline-none ml-1 block'
                  type='text'
                  name=''
                  id=''
                  placeholder='search...'
                />
              </div>
              <div className='lg:ml-40 mt-4 md:mt-0 space-x-8 lg:flex'>
                <span className='inline'>
                  <Select
                    className='select__color'
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
                <Link
                  to={"/CustomerCreate"}
                  className='hidden lg:inline bg-purple-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'
                >
                  Create New
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                {Total !== 0 ? (
                  <table className='min-w-full leading-normal'>
                    <thead>
                      <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          No
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Create Date
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Image
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Name
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Phone
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Email
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {DataList.map((item, index) => (
                        <tr key={index}>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <p className='text-gray-600 text-sm whitespace-no-wrap'>
                              {index + 1}
                            </p>
                          </td>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {/* <Moment date={item?.CreatedDate} /> */}
                              <Moment format='DD/MM/YYYY'>
                                {item?.CreatedDate}
                              </Moment>
                            </p>
                          </td>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <div className='flex items-center'>
                              <div className='flex-shrink-0 w-10 h-10'>
                                <img
                                  className='h-10 w-10 object-cover rounded-full'
                                  src={item?.Image === "" ? user : item?.Image}
                                  alt=''
                                />
                              </div>
                            </div>
                          </td>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {item?.CustomerName}
                            </p>
                          </td>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {item?.Phone}
                            </p>
                          </td>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {item?.Email}
                            </p>
                          </td>
                          <td className='px-4 py-3 border-b border-gray-200 bg-white text-xs'>
                            <div className='flex gap-2'>
                              <Link to={`/CustomerList/update/${item?._id}`}>
                                {" "}
                                <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer'>
                                  <span
                                    aria-hidden
                                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                  ></span>
                                  <span className='relative'>Edit</span>
                                </span>
                              </Link>

                              <span
                                className='relative inline-block px-3 py-1 font-semibold text-purple-900 leading-tight cursor-pointer'
                                onClick={() => showSingleCustomer(item?._id)}
                              >
                                <button
                                  aria-hidden
                                  className='absolute inset-0 bg-purple-200 opacity-50 rounded-full'
                                ></button>
                                <span className='relative'>Show</span>
                              </span>

                              <button
                                className='relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight cursor-pointer'
                                onClick={() => deleteCustomer(item?._id)}
                              >
                                <span
                                  aria-hidden
                                  className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                                ></span>
                                <span className='relative'>Delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className='flex justify-center'>
                    <img className='w-[400px]' src={error} alt='' />
                  </div>
                )}

                {Total > 9 && (
                  <div className='pagination px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
                    <ReactPaginate
                      className='flex gap-2'
                      previousLabel='<'
                      nextLabel='>'
                      pageClassName='border  hover:bg-[#A855F7] hover:text-white text-slate-700 w-[35px] h-[35px] flex justify-center items-center rounded-full'
                      previousLinkClassName='border  hover:bg-[#A855F7] hover:text-white text-slate-700 w-[35px] h-[35px] flex justify-center items-center rounded-full'
                      nextLinkClassName='border  hover:bg-[#A855F7] hover:text-white text-slate-700 w-[35px] h-[35px] flex justify-center items-center rounded-full'
                      breakLabel='. . .'
                      pageCount={Total / perPage?.value}
                      pageRangeDisplayed={3}
                      renderOnZeroPageCount={null}
                      activeClassName='active   bg-[#A855F7] rounded-full'
                      onPageChange={handelPageClick}
                      type='button'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Single Customer View Popup */}
        <div className={active ? "singleViewPopUp active" : "singleViewPopUp"}>
          <div className='absolute top-0 left-0 bg-[#0f172a5b] w-full min-h-screen h-full flex justify-center items-center'>
            <div className='fixed mx-2 md:w-[700px] md:h-[300px] top-[50%] translate-y-[-50%] rounded-lg flex justify-center items-center'>
              <div className='md:w-[700px] md:h-[300px] bg-[#fff] rounded-lg relative flex  items-center px-5'>
                <div className='relative md:flex  bg-white w-full gap-4'>
                  <div className='w-full mt-4 md:mt-0 md:w-1/3 bg-white grid place-items-center overflow-hidden'>
                    <img
                      src={singleCustomerData?.Image}
                      alt='tailwind logo'
                      className=' w-[80px] h-[80px] md:w-auto md:h-auto rounded-full sm:mx-0 sm:shrink-0 md:rounded-xl'
                    />
                  </div>
                  <div className='w-full md:w-2/3  bg-white flex flex-col space-y-2 p-3'>
                    <div className='flex justify-between item-center'>
                      <p className='text-gray-500 font-medium hidden md:block'>
                        Single Customer Data
                      </p>
                      <div>
                        <div className=' px-3 py-[1px] mr-5 rounded-full text-xs font-medium bg-amber-500 text-slate-700 hidden md:block'>
                          Create Date:{" "}
                          <Moment format='DD/MM/YYYY'>
                            {singleCustomerData?.CreatedDate}
                          </Moment>
                        </div>
                      </div>
                    </div>
                    <h3 className='font-black text-gray-800 md:text-xl text-xl'>
                      {singleCustomerData?.CustomerName}
                    </h3>
                    <ul>
                      <li>User Id: {singleCustomerData?._id}</li>
                      <li>Email: {singleCustomerData?.Email}</li>
                      <li>Phone: {singleCustomerData?.Phone}</li>
                      <li>Address: {singleCustomerData?.Address}</li>
                      <li>Type: {"Customer"}</li>
                    </ul>
                  </div>
                </div>

                <div className='absolute top-1 right-1 icons'>
                  <MdClear
                    className='text-[30px] hover:rotate-90 ease-in-out duration-300 text-[red] cursor-pointer'
                    onClick={handelClosePopup}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
