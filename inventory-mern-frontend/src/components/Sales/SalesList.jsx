import React, { Fragment, useEffect, useState } from 'react';
import { DeleteSaleRequest, SaleListRequest } from "../../APIRequest/SaleAPIRequest";
import { useSelector } from "react-redux";

import ReactPaginate from "react-paginate";
import CurrencyFormat from "react-currency-format";
import moment from "moment/moment";
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { BsFillTrashFill } from "react-icons/bs";
import ShowInvoiceDetails from '../MasterLayout/ShowInvoiceDetails';
import { DeleteAlert } from '../../helper/DeleteAlert';
import { DeleteSupplierRequest } from '../../APIRequest/SupplierAPIRequest';

const SalesList = () => {
    let [searchKeyword, setSearchKeyword] = useState("0");
    let [perPage, setPerPage] = useState(20);
    let [index, setIndex] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        (async () => {
            await SaleListRequest(1, perPage, searchKeyword);
        })();
    }, [])

    let DataList = useSelector((state) => (state.sale.List));
    let Total = useSelector((state) => (state.sale.ListTotal))

    const handlePageClick = async (event) => {
        await SaleListRequest(event.selected + 1, perPage, searchKeyword)
    };
    const searchData = async () => {
        await SaleListRequest(1, perPage, searchKeyword)
    }
    const perPageOnChange = async (e) => {
        setPerPage(parseInt(e.target.value))
        await SaleListRequest(1, e.target.value, searchKeyword)
    }
    const searchKeywordOnChange = async (e) => {
        setSearchKeyword(e.target.value)
        if ((e.target.value).length === 0) {
            setSearchKeyword("0")
            await SaleListRequest(1, perPage, "0")
        }
    }

    const TextSearch = (e) => {
        const rows = document.querySelectorAll('tbody tr')
        rows.forEach(row => {
            row.style.display = (row.innerText.includes(e.target.value)) ? '' : 'none'
        })
    }

    const DeleteItem = async (id) => {
        let Result = await DeleteAlert();
        if (Result.isConfirmed) {
            let DeleteResult = await DeleteSaleRequest(id)
            if (DeleteResult) {
                await SaleListRequest(1, perPage, searchKeyword);
            }
        }
    }


    return (
        <Fragment>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6 mb-3 mb-xl-0">
                                            <h5>Sales List</h5>
                                        </div>

                                        <div className="col-xl-2 col-lg-6 mb-3 mb-xl-0">
                                            <input onKeyUp={TextSearch} placeholder="Text Filter" className="form-control form-control-sm" />
                                        </div>

                                        <div className="col-xl-2 col-lg-6 mb-3 mb-xl-0">
                                            <select onChange={perPageOnChange} className="form-control mx-xl-2 form-select-sm form-select form-control-sm" >
                                                <option value="20">20 Per Page</option>
                                                <option value="30">30 Per Page</option>
                                                <option value="50">50 Per Page</option>
                                                <option value="100">100 Per Page</option>
                                                <option value="100">200 Per Page</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 mb-3 mb-xl-0">
                                            <div className="input-group mb-3">
                                                <input onChange={searchKeywordOnChange} type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button onClick={searchData} className="btn  btn-success btn-sm mb-0" type="button">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive table-section">
                                                <table className="table ">
                                                    <thead className="sticky-top bg-white">
                                                        <tr>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Grand Total</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Shipping Cost</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Vat/Tax</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Other Cost</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Discount</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</td>
                                                            <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            DataList.map((item, index) =>
                                                                <tr>
                                                                    <td>
                                                                        <p className="text-xs text-start">{item.customers[0]['CustomerName']}</p>
                                                                    </td>

                                                                    <td>
                                                                        <p className="text-xs text-start">
                                                                            <CurrencyFormat value={item.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                                                        </p>
                                                                    </td>

                                                                    <td>
                                                                        <p className="text-xs text-start">
                                                                            <CurrencyFormat value={item.ShippingCost} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                                                        </p>
                                                                    </td>

                                                                    <td>
                                                                        <p className="text-xs text-start">
                                                                            <CurrencyFormat value={item.VatTax} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                                                        </p>
                                                                    </td>

                                                                    <td>
                                                                        <p className="text-xs text-start">
                                                                            <CurrencyFormat value={item.OtherCost} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                                                        </p>
                                                                    </td>

                                                                    <td>
                                                                        <p className="text-xs text-start">
                                                                            <CurrencyFormat value={item.Discount} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                                                        </p>
                                                                    </td>


                                                                    <td>
                                                                        <p className="text-xs text-start">{moment(item.CreatedDate).format('MMMM Do YYYY')}</p>
                                                                    </td>

                                                                    <td>
                                                                        <button onClick={() => { handleShow(); setIndex(index) }} className="btn btn-outline-light text-success p-2 mb-0 btn-sm ms-2">
                                                                            <AiOutlineEye size={15} />
                                                                        </button>
                                                                        <button onClick={() => DeleteItem(item._id)} className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2">
                                                                            <AiOutlineDelete size={15} />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <nav aria-label="Page navigation example">
                                                <ReactPaginate
                                                    previousLabel="<"
                                                    nextLabel=">"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount={Total / perPage}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageClick}
                                                    containerClassName="pagination"
                                                    activeClassName="active"
                                                />
                                            </nav>
                                        </div>

                                        {/* Show */}
                                        {showModal && (
                                            <div
                                                className="modal show"
                                                tabIndex="-1"
                                                role="dialog"
                                                style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                            >
                                                <button className='invoice__close_btn' onClick={handleClose}>Close</button>
                                                <ShowInvoiceDetails data={DataList[index]} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SalesList;