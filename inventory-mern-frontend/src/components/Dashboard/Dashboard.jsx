import React, { useEffect } from 'react';
import { ExpensesSummary, PurchaseSummary, ReturnSummary, SaleSummary } from "../../APIRequest/SummaryAPIRequest";
import { useSelector } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import ReactApexChart from 'react-apexcharts';
const Dashboard = () => {

    useEffect(() => {
        (async () => {
            await ExpensesSummary()
            await SaleSummary()
            await ReturnSummary()
            await PurchaseSummary()
        })();
    }, [])

    let ExpenseChart = useSelector((state) => state.dashboard.ExpenseChart);
    let ExpenseTotal = useSelector((state) => state.dashboard.ExpenseTotal);

    let SaleChart = useSelector((state) => state.dashboard.SaleChart);
    let SaleTotal = useSelector((state) => state.dashboard.SaleTotal);

    let ReturnChart = useSelector((state) => state.dashboard.ReturnChart);
    let ReturnTotal = useSelector((state) => state.dashboard.ReturnTotal);


    let PurchaseChart = useSelector((state) => state.dashboard.PurchaseChart);
    let PurchaseTotal = useSelector((state) => state.dashboard.PurchaseTotal);


    let data = SaleChart.map((item) => item.TotalAmount)
    console.log(data);





    return (
        <div className="container-fluid">
            <div className="row top_card">
                <div className="col-xl-3 col-md-6 p-2">
                    <div className="card">
                        <div className="card-body one">
                            <div>
                                <span className="text">
                                    <CurrencyFormat value={ExpenseTotal} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                </span>
                                <p>Calculate total expense</p>
                            </div>
                            <div className='icon_img'>
                                <img className='img-fluid' src="/img/Expense.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 p-2">
                    <div className="card ">
                        <div className="card-body two">
                            <div>
                                <span className="text">
                                    <CurrencyFormat value={SaleTotal} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                </span>
                                <p>Calculate total sale</p>
                            </div>
                            <div className='icon_img'>
                                <img className='img-fluid' src="/img/Sale.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 p-2">
                    <div className="card">
                        <div className="card-body three">
                            <div>
                                <span className="text">
                                    <CurrencyFormat value={PurchaseTotal} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                </span>
                                <p>Total Purchase</p>
                            </div>
                            <div className='icon_img'>
                                <img className='img-fluid' src="/img/Purchase.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 p-2">
                    <div className="card">
                        <div className="card-body four">
                            <div>
                                <span className="text">
                                    <CurrencyFormat value={ReturnTotal} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                                </span>
                                <p>Total Return</p>
                            </div>
                            <div className='icon_img'>
                                <img className='img-fluid' src="/img/Return.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 p-2">
                    <div className="card">
                        <div className="card-body">

                            <ReactApexChart
                                options={{
                                    chart: {
                                        type: 'area',
                                        height: 350,
                                        zoom: {
                                            enabled: false
                                        }
                                    },
                                    dataLabels: {
                                        enabled: true
                                    },
                                    stroke: {
                                        curve: 'straight'
                                    },

                                    labels: ExpenseChart.map((item) => item._id),
                                    title: {
                                        text: 'Fundamental Analysis of Expense Last 30 Days',
                                        align: 'left'
                                    },
                                    subtitle: {
                                        text: 'Price Movements',
                                        align: 'left'
                                    },
                                    legend: {
                                        horizontalAlign: 'left'
                                    }
                                }}
                                series={[{
                                    name: "Expense Cost",
                                    data: ExpenseChart.map((item) => item.TotalAmount)
                                }]}
                                type="area"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 p-2">
                    <div className="card">
                        <div className="card-body">

                            <ReactApexChart
                                options={{
                                    chart: {
                                        type: 'area',
                                        height: 350,
                                        zoom: {
                                            enabled: false
                                        }
                                    },
                                    dataLabels: {
                                        enabled: true
                                    },
                                    stroke: {
                                        curve: 'straight'
                                    },

                                    labels: SaleChart.map((item) => item._id),
                                    title: {
                                        text: 'Fundamental Analysis of Sales Last 30 Days',
                                        align: 'left'
                                    },
                                    subtitle: {
                                        text: 'Price Movements',
                                        align: 'left'
                                    },
                                    legend: {
                                        horizontalAlign: 'left'
                                    }
                                }}
                                series={[{
                                    name: "Sales",
                                    data: SaleChart.map((item) => item.TotalAmount)
                                }]}
                                type="line"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 p-2">
                    <div className="card">
                        <div className="card-body">

                            <ReactApexChart
                                options={{
                                    chart: {
                                        type: 'area',
                                        height: 350,
                                        zoom: {
                                            enabled: false
                                        }
                                    },
                                    dataLabels: {
                                        enabled: true
                                    },
                                    stroke: {
                                        curve: 'straight'
                                    },

                                    labels: PurchaseChart.map((item) => item._id),
                                    title: {
                                        text: 'Fundamental Analysis of Purchase Last 30 Days',
                                        align: 'left'
                                    },
                                    subtitle: {
                                        text: 'Price Movements',
                                        align: 'left'
                                    },
                                    legend: {
                                        horizontalAlign: 'left'
                                    }
                                }}
                                series={[{
                                    name: "Purchase",
                                    data: PurchaseChart.map((item) => item.TotalAmount)
                                }]}
                                type="bar"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 p-2">
                    <div className="card">
                        <div className="card-body">

                            <ReactApexChart
                                options={{
                                    chart: {
                                        type: 'area',
                                        height: 350,
                                        zoom: {
                                            enabled: false
                                        }
                                    },
                                    dataLabels: {
                                        enabled: true
                                    },
                                    stroke: {
                                        curve: 'smooth'
                                    },

                                    labels: ReturnChart.map((item) => item._id),
                                    title: {
                                        text: 'Fundamental Analysis of Return Last 30 Days',
                                        align: 'left'
                                    },
                                    subtitle: {
                                        text: 'Price Movements',
                                        align: 'left'
                                    },
                                    legend: {
                                        horizontalAlign: 'left'
                                    }
                                }}
                                series={[{
                                    name: "Return",
                                    data: ReturnChart.map((item) => item.TotalAmount)
                                }]}
                                type="area"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;