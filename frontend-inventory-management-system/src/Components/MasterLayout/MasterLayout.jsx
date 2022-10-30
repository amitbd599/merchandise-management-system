import React, { Fragment } from "react";
import {
  MdAnalytics,
  MdDashboardCustomize,
  MdFormatListBulleted,
  MdForum,
  MdFullscreen,
  MdInsights,
  MdIntegrationInstructions,
  MdOutlineLabelImportant,
  MdLocalAtm,
  MdLoop,
  MdNotificationsActive,
  MdOutlineControlCamera,
  MdOutlineDashboardCustomize,
  MdOutlineDepartureBoard,
  MdOutlineManageAccounts,
  MdOutlineMonetizationOn,
  MdOutlinePeople,
  MdPeople,
  MdSearch,
  MdShoppingBasket,
  MdShoppingCart,
  MdGraphicEq,
  MdHowToReg,
  MdOutlineFormatListBulleted,
  MdOutlineSupport,
  MdOutlineStreetview,
  MdChecklist,
  MdInsertChart,
  MdQueryStats,
  MdOutlinePlaylistAddCheck,
  MdOutlineStackedBarChart,
  MdOutlineCompare,
  MdAddShoppingCart,
  MdOutlineAddShoppingCart,
  MdOutlineDynamicForm,
  MdOutlineAnalytics,
  MdOutlineBugReport,
  MdOutlineDonutSmall,
  MdOutlineGavel,
  MdViewHeadline,
  MdPerson,
  MdOutlineSettings,
} from "react-icons/md";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link, NavLink, useParams } from "react-router-dom";
import logo from "../../Asset/Img/logo.svg";
import "../../Asset/CSS/fancy-example.css";
import { useEffect } from "react";
import { useState } from "react";
const MasterLayout = (props) => {
  const [active, setActive] = useState(false);
  const handelSideNav = () => {
    setActive(!active);
  };
  const isSidebarAccordionActive = () => {
    let data = window.location.pathname;
    let split = data.split("/");
    let urlList = [];
    NavItems.map((item) => {
      urlList.push(
        item.subMenu.map((subItem) => {
          return subItem?.url;
        })
      );
    });
    console.log("/" + split[1]);
    return urlList.findIndex(
      (items) => items.includes("/" + split[1])
      // items.includes("/" + split[1])
    );
  };

  const NavItems = [
    {
      title: "Dashboard",
      icon: <MdDashboardCustomize className='inline' />,
      url: "/",
      subMenu: [
        {
          title: "Dashboard",
          icon: <MdGraphicEq size={16} className='inline' />,
          url: "/Dashboard",
        },
        {
          title: "Analytics",
          icon: <MdAnalytics size={16} className='inline' />,
          url: "/Analytics",
        },
      ],
    },
    {
      title: "Customer",
      icon: <MdPeople className='inline' />,
      url: "/CustomerCreate",
      subMenu: [
        {
          title: "New Customer",
          icon: <MdHowToReg size={16} className='inline' />,
          url: "/CustomerCreate",
        },
        {
          title: "Customer List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/CustomerList",
        },
      ],
    },
    {
      title: "Supplier",
      icon: <MdOutlineDepartureBoard className='inline' />,
      url: "/SupplierCreate",
      subMenu: [
        {
          title: "New Supplier",
          icon: <MdOutlineSupport size={16} className='inline' />,
          url: "/SupplierCreate",
        },
        {
          title: "Supplier List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/SupplierList",
        },
      ],
    },
    {
      title: "Expense",
      icon: <MdLocalAtm className='inline' />,
      url: "/Expense",
      subMenu: [
        {
          title: "New Expense Type",
          icon: <MdOutlineStreetview size={16} className='inline' />,
          url: "/ExpenseTypeCreate",
        },
        {
          title: "Expense Type List",
          icon: <MdChecklist size={16} className='inline' />,
          url: "/ExpenseTypeList",
        },
        {
          title: "New Expense",
          icon: <MdInsertChart size={16} className='inline' />,
          url: "/ExpenseCreate",
        },
        {
          title: "Expense List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/ExpenseList",
        },
      ],
    },
    {
      title: "Product",
      icon: <MdIntegrationInstructions className='inline' />,
      url: "/Product",
      subMenu: [
        {
          title: "New Brand",
          icon: <MdQueryStats size={16} className='inline' />,
          url: "/BrandCreateUpdate",
        },
        {
          title: "Brand List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/BrandList",
        },
        {
          title: "New Category",
          icon: <MdOutlineStackedBarChart size={16} className='inline' />,
          url: "/CategoryCreateUpdate",
        },
        {
          title: "Category List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/CategoryList",
        },
        {
          title: "New Product",
          icon: <MdOutlineCompare size={16} className='inline' />,
          url: "/ProductCreateUpdate",
        },
        {
          title: "Product List",
          icon: <MdOutlinePlaylistAddCheck size={16} className='inline' />,
          url: "/ProductList",
        },
      ],
    },
    {
      title: "Purchase",
      icon: <MdShoppingCart className='inline' />,
      url: "/Purchase",
      subMenu: [
        {
          title: "New Purchase",
          icon: <MdOutlineAddShoppingCart size={16} className='inline' />,
          url: "/PurchaseCreateUpdate",
        },
        {
          title: "Purchase List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/PurchaseList",
        },
      ],
    },
    {
      title: "Sale",
      icon: <MdShoppingBasket className='inline' />,
      url: "/Sale",
      subMenu: [
        {
          title: "New Sale",
          icon: <MdOutlineDynamicForm size={16} className='inline' />,
          url: "/SalesCreateUpdate",
        },
        {
          title: "Sale List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/SalesList",
        },
      ],
    },
    {
      title: "Return",
      icon: <MdLoop className='inline' />,
      url: "/Return",
      subMenu: [
        {
          title: "New Return",
          icon: <MdLoop size={16} className='inline' />,
          url: "/ReturnCreateUpdate",
        },
        {
          title: "Return List",
          icon: <MdOutlineFormatListBulleted size={16} className='inline' />,
          url: "/ReturnList",
        },
      ],
    },
    {
      title: "Report",
      icon: <MdInsights className='inline' />,
      url: "/Report",
      subMenu: [
        {
          title: "Sale Report",
          icon: <MdOutlineAnalytics size={16} className='inline' />,
          url: "/SaleReport",
        },
        {
          title: "Return Report",
          icon: <MdOutlineBugReport size={16} className='inline' />,
          url: "/ReturnReport",
        },
        {
          title: "Purchase Report",
          icon: <MdOutlineDonutSmall size={16} className='inline' />,
          url: "/PurchaseReport",
        },
        {
          title: "Expense Report",
          icon: <MdOutlineGavel size={16} className='inline' />,
          url: "/ExpenseReport",
        },
      ],
    },
  ];
  useEffect(() => {
    isSidebarAccordionActive();
  }, []);
  return (
    <Fragment>
      {/* Top Navbar Start */}
      <div className={active ? "topNavbar active" : "topNavbar"}>
        <nav className=' bg-[#fff] drop-shadow-md h-[50px] flex items-center'>
          <div className=' container mx-auto px-5'>
            <div className='item flex justify-between'>
              <div className='leftItems'>
                <MdViewHeadline
                  className='text-[30px] text-slate-600 cursor-pointer'
                  onClick={handelSideNav}
                />
              </div>
              <div className='rightItems flex gap-2'>
                <MdSearch className='text-[25px] text-slate-600' />
                <MdForum className='text-[25px] text-slate-600' />
                <MdFullscreen className='text-[25px] text-slate-600' />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Top Navbar End */}

      {/* Sidebar Start */}
      <div className={active ? "sidebar active" : "sidebar"}>
        <div className='sidebarBody bg-[#0F172A]  fixed top-0 h-screen overflow-auto'>
          <div className='topSection flex justify-between items-center px-6 mt-5 relative'>
            <Link to={"/"} className='logo cursor-pointer block'>
              <img src={logo} alt='' />
            </Link>
            <div className='flex gap-3'>
              <span>
                <MdNotificationsActive className='text-[25px] text-slate-200 cursor-pointer' />
              </span>
              <span className='profileIcon cursor-pointer'>
                <MdOutlineManageAccounts className='text-[25px] text-slate-200  ' />
                <div className='profile__intro absolute pt-[20px] top-[20px] right-[20px]'>
                  <div className='   bg-[#FFFFFF]  py-6 rounded-md w-[200px]   overflow-hidden'>
                    <div className='px-5'>
                      <span className='text-sm text-slate-600 font-semibold'>
                        Sign in As
                      </span>{" "}
                      <span className='text-xs block mt-0 text-slate-600'>
                        amitbd599@gmail.com
                      </span>
                    </div>
                    <hr />
                    <div>
                      <NavLink
                        to={"/"}
                        end
                        className='flex items-center hover:bg-slate-100 px-5 py-3'
                      >
                        <MdPerson className='inline text-[25px] text-slate-600' />{" "}
                        <span className='text-[14px] mt-1 ml-1 text-slate-600'>
                          Profile
                        </span>
                      </NavLink>
                      <NavLink
                        to={"/"}
                        end
                        className='flex items-center hover:bg-slate-100 px-5 py-3'
                      >
                        <MdOutlineSettings className='inline text-[25px] text-slate-600' />{" "}
                        <span className='text-[14px] mt-1 ml-1 text-slate-600'>
                          Setting
                        </span>
                      </NavLink>
                      <hr />
                      <div className=' block cursor-pointer mt-2'>
                        <div className='block items-center hover:bg-slate-100 px-5 py-3 '>
                          <MdPerson className='inline text-[25px] text-slate-600' />{" "}
                          <span className='text-[14px] mt-1 ml-1 text-slate-600'>
                            Sign Out
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className='profileSection mt-10'>
            <div className='profileImg flex justify-center'>
              <img
                className='rounded-full w-[100px]'
                src='https://angular-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg'
                alt=''
              />
            </div>
            <div className='flex justify-center mt-3'>
              <div className='text-center'>
                <span className='block text-slate-300 text-base'>
                  Brian Hughes
                </span>
                <span className='block text-slate-300 text-xs'>
                  hughes.brian@company.com
                </span>
              </div>
            </div>
          </div>

          <div className='dashboardData mt-8 mb-5 px-4'>
            <div>
              <span className='text-[#c084fc] font-medium text-sm block'>
                DASHBOARD
              </span>
              <span className='text-slate-300 text-xs mt-1 block'>
                Unique Design Dashboard.
              </span>
            </div>
            {/* Nav Items */}
            <div className='navItems mt-5'>
              <Accordion preExpanded={`${isSidebarAccordionActive()}`}>
                {NavItems.map((item, index) => (
                  <AccordionItem key={index} uuid={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className='flex items-baseline'>
                          <span className='block text-[16px] mr-2'>
                            {item?.icon}
                          </span>
                          <span className='block text-[13px]'>
                            {item?.title}
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {item?.subMenu?.map((subItem, index) => (
                        <NavLink
                          to={subItem?.url}
                          // end
                          // activeClassName='active'
                          // className='block'
                          className={(navData) =>
                            navData.isActive ? "block active " : "block"
                          }
                          key={index}
                        >
                          <div className='flex items-baseline'>
                            <span className='block text-[16px] mr-2'>
                              {subItem?.icon}
                            </span>
                            <span className='block text-[13px]'>
                              {subItem?.title}
                            </span>
                          </div>
                        </NavLink>
                      ))}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Start */}

      <div className={active ? "content active" : "content"}>
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default MasterLayout;
