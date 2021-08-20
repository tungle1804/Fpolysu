import { React, useState } from "react";
import { useHistory, useLocation } from 'react-router'
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Hssd1 from '../Hssd1';
import Hssd2 from '../Hssd2';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink

} from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import HeaderLanding from "./header";



export default function Navbar({ sidebarOpen,
    setSidebarOpen }) {
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const page = pathname.split('/')[1];
    const trigger = useRef(null);
    const sidebar = useRef(null);
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });


    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <Router>

                
                <div className="flex h-screen bg-white">
                    <div className="flex-1 flex flex-col  overflow-hidden">
                        <div className="flex justify-between  items-center bg-gray-500 shadow-2xl">

                            {/* header */}
                            <HeaderLanding sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                        </div>
                        {/* <div class="relative min-h-screen md:flex"></div> */}
                        <div className="flex h-full">
                            {/* <div className="sidebar space-y-5 py-5 text-black overflow-y-auto mb-10 bg-gray-300 w-auto space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                

                            <nav className="">
                            <div>
                                <span className="text-xl text-gray-500 uppercase  font-bold">Tổng quan về Polysu</span>
                                <Link to="/hssd1" className="" >
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white focus:bg-blue-500 focus:text-white">Polysu là gì?</a>
                                </Link>
                                <Link to="/hssd2" className="" >
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white focus:bg-blue-500 focus:text-white">
                                    Tổng quan &amp; Vai trò
                                </a>
                                </Link>
                            </div>
                            <div className="mt-10">
                                <span className="text-xl text-gray-500 uppercase font-bold">SỬ DỤNG POLYSU</span>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Tạo Menu
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Cấu hình nút
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Cài đặt Polysu lên website
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Tạo Menu
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Cấu hình nút
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Cài đặt Polysu lên website
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Tạo Menu
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Cấu hình nút
                                </a>
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Cài đặt Polysu lên website
                                </a>

                            </div>
                            </nav>

                                </div> */}
                            
                            {/* sidebar */}

                            <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
                                <h2 className="flex py-4 px-4 sticky top-0 border-b bg-white items-center justify-between">
                                    <h1 className="font-bold tracking-wide text-2xl ">
                                        Noi dung 1
                                    </h1>
                                    <div className="text-blue-400">
                                        <i className="fa fa-dot-circle-o" />
                                    </div>
                                </h2>
                                <div className="flex w-full mx-auto px-6 py-8">
                                    <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 ">

                                        <Switch>
                                            <Route exact path="/hssd1">
                                                <Hssd1></Hssd1>

                                            </Route>
                                            <Route exact path="/hssd2">
                                                <Hssd2></Hssd2>

                                            </Route>

                                        </Switch>

                                        <div className="row my-5 ">
                                            <div className="w-full mx-auto">
                                                <div className="sm:grid grid-cols-4 gap-10 mx-auto px-16 no-underline">
                                                    <div className="col-start-1 col-end-3 my-2">
                                                        <a href="#">
                                                            <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                                                                <h3 className="text-xl mb-3 font-semibold inline-flex">
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={24}
                                                                        height={30}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                    Prev
                                                                </h3>
                                                                <p className="text-lg">What is Lorem Ipsum?</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-end-5 col-span-2 my-2">
                                                        <a href="#">
                                                            <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                                                                <h3 className="text-xl mb-3 font-semibold inline-flex ">
                                                                    Next
                                                                    <svg
                                                                        className="ml-2"
                                                                        width={24}
                                                                        height={30}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </h3>
                                                                <p className="text-lg">Why do we use it?</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container m-auto px-6 pb-40 pt-10">
                                            <div className="flex flex-col md:flex-row items-center justify-between relative w-82 h-auto md:h-58 bg-100 shadow-2xl rounded-lg p-8">
                                                <div className="w-8/12 text-2xl">
                                                    <img
                                                        alt="quote"
                                                        className="float-left mr-1"
                                                        src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                                                    />
                                                    <span className="flex ml-10">
                                                        Was this page helpful ?
                                                    </span>
                                                </div>
                                                <div className="relative shadow-md font-medium my-5 py-2 mr-10 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-green-700 rounded text-lg text-center w-48">
                                                    <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                                    Helpful
                                                </div>
                                                <div className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-red-500 rounded text-lg text-center w-48">
                                                    <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                                    Unhelpful
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>

                        </div>
                    </div>
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);\n}\n::-webkit-scrollbar-track {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: inset 7px 10px 12px #f0f0f0;\n}\n",
                    }}
                />
            </Router>
        </>
    );
};

