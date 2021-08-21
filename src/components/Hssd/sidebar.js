import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

export default function Sidebar({ sidebarOpen,
    setSidebarOpen }) {

    const location = useLocation();
    const { pathname } = location;
    const page = pathname.split('/')[1];

    const trigger = useRef(null);
    const sidebar = useRef(null);

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


    return (
        <>
            <div className="lg:w-64">
                {/* Sidebar backdrop (mobile only) */}
                <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

                {/* Sidebar */}
                <div
                    id="sidebar"
                    ref={sidebar}
                    className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll  lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-100 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
                >

                    {/* Sidebar header */}
                    <div className="flex justify-between mb-10 pr-3 sm:px-2">
                        {/* Close button */}
                        <button
                            ref={trigger}
                            className="lg:hidden text-gray-500 hover:text-gray-400"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-controls="sidebar"
                            aria-expanded={sidebarOpen}
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
                    <div className="relative text-lg bg-transparent text-gray-800 my-5 block lg:hidden">
                        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                            <input className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>




                    {/* Links */}
                    <nav className="">
                        <div>
                            <span className="text-xl text-gray-500 uppercase font-bold">Tổng quan về Polysu</span>
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
                            <Link to="/hssd3" className="" >
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white focus:bg-blue-500 focus:text-white">
                                   Tao menu
                                </a>
                            </Link>
                            <Link to="/hssd5" className="" >
                                <a href="#" className="font-medium block text-black mb-2 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white focus:bg-blue-500 focus:text-white">
                                Cài đặt Polysu lên website
                                </a>
                            </Link>
                            

                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}


