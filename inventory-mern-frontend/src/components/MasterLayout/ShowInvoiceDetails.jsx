import React from 'react'

import logo from "../../assets/images/Logo.svg"
import moment from 'moment/moment';
import { ToWords } from 'to-words';
const ShowInvoiceDetails = ({ data }) => {

    const toWords = new ToWords({
        localeCode: 'en-IN',
        converterOptions: {
            currency: true,
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
            doNotAddOnly: false,
            currencyOptions: {
                // can be used to override defaults for the selected locale
                name: 'Taka',
                plural: 'Takas',
                symbol: '৳',
                fractionalUnit: {
                    name: 'Paisa',
                    plural: 'Paise',
                    symbol: '',
                },
            },
        },
    });

    console.log(data);

    return (
        <section className='invoice__inner'>
            <div className=" invoice-container">
                {/* Main Content */}
                <main>
                    <div className="table-responsive">
                        <table className="table table-bordered border border-secondary mb-0">
                            <tbody>
                                <tr>
                                    <td colSpan={2} className="bg-light text-center">
                                        <div className="mb-0">
                                            <img src={logo} alt="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="text-center text-uppercase">
                                        Hathazari, Chittagong, Bangladesh
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="py-1">
                                        <div className="row">
                                            <div className="col">Email:  {data?.UserEmail}</div>
                                            <div className="col text-center fw-600 text-3 text-uppercase">
                                                Purchase Invoice
                                            </div>
                                            <div className="col text-end">GrandTotal: <strong>{data?.GrandTotal}৳</strong></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-7">
                                        <div className="row gx-2 gy-2">
                                            <div className="col-auto">
                                                <strong>M/s. :</strong>
                                            </div>
                                            <div className="col">
                                                <address>
                                                    <strong>{data?.suppliers?.[0]?.Name}</strong>
                                                    <br />
                                                    {data?.suppliers?.[0]?.Email}
                                                    <br />
                                                    {data?.suppliers?.[0]?.Phone}
                                                    <br />
                                                    {data?.suppliers?.[0]?.Address}
                                                    <br />

                                                </address>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-5 bg-light">
                                        <div className="row gx-2 gy-1 fw-600">
                                            <div className="col-4">
                                                Invoice No <span className="float-end">:</span>
                                            </div>
                                            <div className="col-8">{data?._id}</div>
                                            <div className="col-4">
                                                Date <span className="float-end">:</span>
                                            </div>
                                            <div className="col-8">{moment(data?.CreatedDate).format('MMMM Do YYYY')}</div>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="p-0">
                                        <table className="table table-sm mb-0">
                                            <thead>
                                                <tr className="bg-light">
                                                    <td className="col-1 text-center">
                                                        <strong>SrNo</strong>
                                                    </td>
                                                    <td className="col-6 ">
                                                        <strong>Product ID</strong>
                                                    </td>
                                                    <td className="col-1 text-center">
                                                        <strong>Qty</strong>
                                                    </td>
                                                    <td className="col-2 text-end">
                                                        <strong>UnitCost</strong>
                                                    </td>
                                                    <td className="col-2 text-end">
                                                        <strong>Amount</strong>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data?.Products?.map((item, index) =>
                                                        <tr key={index}>
                                                            <td className="col-1 text-center">{index + 1}</td>
                                                            <td className="col-6">{item?.ProductID}</td>
                                                            <td className="col-1 text-center">{item?.Qty}</td>
                                                            <td className="col-2 text-end">{item?.UnitCost}</td>
                                                            <td className="col-2 text-end">{item?.Total}</td>
                                                        </tr>
                                                    )
                                                }


                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="bg-light fw-600">
                                    <td className="col-7 py-1">Purchase ID: {data?.Products?.[0]?.PurchaseID}</td>
                                    <td className="col-5 py-1 pe-1">
                                        Sub Total: <span className="float-end">{data?.GrandTotal - data?.VatTax - data?.OtherCost - data?.ShippingCost + data?.Discount}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-7 text-1">
                                        <span className="fw-600">Bill Amount:</span>{" "}
                                        <i>{toWords.convert(data?.GrandTotal)}</i>
                                    </td>
                                    <td className="col-5 pe-1">
                                        Vat Tax:
                                        <span className="float-end">+ {data?.VatTax}</span>
                                        <br />
                                        Shipping Cost:
                                        <span className="float-end">+ {data?.ShippingCost}</span>
                                        <br />
                                        Other Cost:
                                        <span className="float-end">+ {data?.OtherCost}</span>
                                        <br />
                                        Discount:
                                        <span className="float-end">- {data?.Discount}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-7 text-1">Note : {data?.Note}</td>
                                    <td className="col-5 pe-1 bg-light fw-600">
                                        Grand Total:<span className="float-end">{data?.GrandTotal} ৳</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-7 text-1">
                                        <div className="fw-600">Terms &amp; Condition :</div>
                                        <ol>
                                            <li>Goods once sold will not be taken back.</li>
                                            <li>Our risk and responsibility ceases as soon</li>
                                        </ol>
                                    </td>
                                    <td className="col-5 pe-1 text-end">
                                        For, Merchandise Shop
                                        <div className="text-1 fst-italic mt-5">
                                            (Authorised Signatory)
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
                <footer className="text-center mt-4">
                    <div className="btn-group btn-group-sm d-print-none">
                        {" "}
                        <a
                            href="javascript:window.print()"
                            className="btn btn-light border text-black-50 shadow-none"
                        >
                            <i className="fa fa-print" /> Print &amp; Download
                        </a>{" "}
                    </div>
                </footer>
            </div>
        </section>



    )
}

export default ShowInvoiceDetails