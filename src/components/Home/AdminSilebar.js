import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";
import './style.css'
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
// import "react-accessible-accordion/dist/fancy-example.css";
// import 'react-accessible-accordion/dist/minimal-example.css';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {

    },
}));


export default function AdminSidebar({ sidebarAdminOpen,
    setSidebarAdminOpen }) {

    const location = useLocation();
    const { pathname } = location;
    const page = pathname.split('/')[1];

    const trigger = useRef(null);
    const sidebar = useRef(null);
    const classes = useStyles();

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarAdminOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarAdminOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarAdminOpen || keyCode !== 27) return;
            setSidebarAdminOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "script/location.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <>
            <div className="lg:w-64 h-screen">
                {/* Sidebar backdrop (mobile only) */}
                <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarAdminOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

                {/* Sidebar */}
                <div
                    id="sidebar"
                    ref={sidebar}
                    className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll  lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-white pb-16 transition-transform duration-200 ease-in-out ${sidebarAdminOpen ? 'translate-x-0' : '-translate-x-64'}`}
                >

                    {/* Sidebar header */}
                    <div className="flex justify-between mb-10 pr-3 sm:px-2">
                        {/* Close button */}
                        <button
                            ref={trigger}
                            className="lg:hidden text-gray-500 hover:text-gray-400"
                            onClick={() => setSidebarAdminOpen(!sidebarAdminOpen)}
                            aria-controls="sidebar"
                            aria-expanded={sidebarAdminOpen}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                            </svg>
                        </button>
                        {/* Logo */}
                        <NavLink exact to="/" className="lg:hidden block">
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                                        <stop stopColor="#A5B4FC" offset="100%" />
                                    </linearGradient>
                                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                                        <stop stopColor="#38BDF8" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <rect fill="#6366F1" width="32" height="32" rx="16" />
                                <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                                <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                                <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                            </svg>
                        </NavLink>

                    </div>
                    {/* <div className="relative text-lg bg-transparent text-gray-800 my-5 block lg:hidden">
                        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                            <input className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div> */}






                    {/* Links */}
                    <nav className="">
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            {/* <div className="items-center ml-2 py-4  mb-1 text-sm font-medium text-gray-700">
                                Tổng Quan
                            </div> */}
                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                <div className="w-6">
                                    <i className="fas fa-tv text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Tổng Quan</span>
                            </div>
                        </Link>


                        {/* test */}




                        {/* <div className="tab py-3 px-4 hover:bg-blue-200 cursor-pointer">
                            <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
                            <label className="block leading-normal cursor-pointer" htmlFor="tab-single-one">
                                <div className="flex">
                                    <div className="w-6">
                                        <i className="fas fa-tv text-blue-700"></i>
                                    </div>
                                    <span className="text-gray-900 pl-3">Tổng Quan</span>
                                </div>
                            </label>
                            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                            </div>
                        </div> */}











                        <Link to="/admin/list-menu" style={{ textDecoration: "none" }}>
                            {/* <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                                Quản lí Menu
                            </div> */}
                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                <div className="w-6">
                                    <i className="fas fa-window-restore text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Quản lí Menu</span>
                            </div>
                        </Link>


                        {/* <Accordion preExpanded={[1, 2]} allowMultipleExpanded>
                            <AccordionItem uuid={1}>
                                <AccordionItemHeading>
                                    <AccordionItemButton >
                                        <div className="flex hover:bg-blue-200 justify-between transition duration-300 ">

                                            <div className="flex py-3 px-4  cursor-pointer">
                                                <div className="w-6">
                                                    <i className="fas fa-chart-line text-blue-700"></i>
                                                </div>
                                                <span className="text-gray-900 pl-3">Thông Kê</span>
                                            </div>
                                            <i class="fas fa-list-ul my-auto mr-3 opacity-50"></i>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className=" bg-gray-200 border-b-2 border-gray-600 border-opacity-50">
                                        <Link to="/admin/report-interactive" style={{ textDecoration: "none" }}>

                                            <div className=" py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                                <div className="flex ml-3">
                                                    <div className="w-6">
                                                        <i className="fas fa-circle text-blue-700"></i>
                                                    </div>
                                                    <span className="text-gray-900 pl-3">Thông Kê Tương tác</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/admin/report-menu" style={{ textDecoration: "none" }}>

                                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                                <div className="flex ml-3">
                                                    <div className="w-6">
                                                        <i className="fas fa-circle text-blue-700"></i>
                                                    </div>
                                                    <span className="text-gray-900 pl-3">Thông kê menu</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/admin/report-button" style={{ textDecoration: "none" }}>

                                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                                <div className="flex ml-3">
                                                    <div className="w-6">
                                                        <i className="fas fa-circle text-blue-700"></i>
                                                    </div>
                                                    <span className="text-gray-900 pl-3">Thống kê nút</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                        </Accordion> */}




                        <Link to="/admin/report-action" style={{ textDecoration: "none" }}>
                            {/* <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                                Thống kê lịch sử tương tác
                            </div> */}
                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                <div className="w-6">
                                    <i className="fas fa-history text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Lịch sử tương tác</span>
                            </div>
                        </Link>
                        <Link to="/admin/customer-management" style={{ textDecoration: "none" }}>

                            {/* <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                            <i className="fas fa-tasks text-blue-700"></i>
                            <span className="text-gray-900 pl-3">Quản Lí Khách Hàng</span>
                        </div> */}
                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                <div className="w-6">
                                    <i className="fas fa-tasks text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Quản Lí Khách Hàng</span>
                            </div>
                        </Link>

                        <Link to="/admin/integrared" style={{ textDecoration: "none" }}>
                            {/* <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                                Tích Hợp
                            </div> */}
                            <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                                <div className="w-6">
                                    <i className="fas fa-download text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Tích Hợp</span>
                            </div>
                        </Link>
                        <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                            <div className="w-6">
                                <i className="fas fa-cogs text-blue-700"></i>
                            </div>
                            <span className="text-gray-900 pl-3">Cài Đặt Kết Nối</span>
                        </div>

                        <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer mb-3">
                            <div className="w-6">
                                <i className="fas fa-book-open text-blue-700"></i>
                            </div>
                            <span className="text-gray-900 pl-3">Hướng Dẫn Sử Dụng</span>
                        </div>

                        <div className="-mt-3 ">
                            <div className={classes.root}>
                                <Accordion>
                                    <div className="hover:bg-blue-200">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>
                                                <div className="flex py-1 px-2  cursor-pointer">
                                                    <div className="w-6">
                                                        <i className="fas fa-chart-line text-blue-700"></i>
                                                    </div>
                                                    <span className="text-gray-900 pl-3">Thống kê</span>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                    </div>
                                    <AccordionDetails>
                                        <Typography>
                                            <div className="">
                                                <Link to="/admin/report-interactive" style={{ textDecoration: "none" }}>

                                                    <div className=" py-3 px-2 hover:bg-blue-200 cursor-pointer">
                                                        <div className="flex ml-3">
                                                            <div className="w-6">
                                                                <div className="h-2 w-2 mt-2 ml-1 rounded-full bg-blue-700"></div>
                                                            </div>
                                                            <span className="text-gray-900 pl-3">Thống kê tương tác</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/admin/report-menu" style={{ textDecoration: "none" }}>

                                                    <div className="flex py-3 px-2 hover:bg-blue-200 cursor-pointer">
                                                        <div className="flex ml-3">
                                                            <div className="w-6">
                                                                <div className="h-2 w-2 mt-2 ml-1 rounded-full bg-blue-700"></div>
                                                            </div>
                                                            <span className="text-gray-900 pl-3">Thống kê menu</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/admin/report-button" style={{ textDecoration: "none" }}>

                                                    <div className="flex py-3 px-2 hover:bg-blue-200 cursor-pointer">
                                                        <div className="flex ml-3">
                                                            <div className="w-6">
                                                                <div className="h-2 w-2 mt-2 ml-1 rounded-full bg-blue-700"></div>
                                                            </div>
                                                            <span className="text-gray-900 pl-3">Thống kê nút</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>

                        <div className="border border-gray-300" />
                        <Link to="/admin/upgrade-account" style={{ textDecoration: "none" }}>
                            <div className="flex py-3 px-4  hover:bg-blue-200 cursor-pointer mt-3">
                                <div className="w-6">
                                    <i className="fas fa-layer-group text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Nâng Cấp Tài Khoản</span>
                            </div></Link>
                        <div className="flex py-3 px-4 hover:bg-blue-200 cursor-pointer">
                            <div className="w-6">
                                <i className="fas fa-cloud-download-alt text-blue-700"></i>
                            </div>
                            <span className="text-gray-900 pl-3">Chợ Ứng Dụng</span>
                        </div>
                        <Link to="/admin/payment-history" style={{ textDecoration: "none" }}>
                            <div className="flex py-3 px-4 mb-3 hover:bg-blue-200 cursor-pointer">
                                <div className="w-6">
                                    <i className="fab fa-cc-amazon-pay text-blue-700"></i>
                                </div>
                                <span className="text-gray-900 pl-3">Lịch Sử Thanh Toán</span>
                            </div>
                        </Link>
                    </nav>

                </div>
            </div>
        </>
    )
}


