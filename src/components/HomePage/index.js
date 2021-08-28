import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router'

export default function HomePage() {
    const history = useHistory();

    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "script/nav.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // const onchangelogin = () => {
    //     history.push('/login')
    // }
    return (
        <>
            {/* <style dangerouslySetInnerHTML={{ __html: "\n      #menu-toggle:checked + #menu {\n        display: block;\n      }\n  " }} /> */}
            <div className="bg-gray-100 font-montserrat">
                <header className="h-24 sm:h-32 flex items-center">

                    {/* <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
                        <div className="font-black text-blue-900 text-4xl flex items-start">
                            Polysu<span className="w-3 h-3 rounded-full bg-purple-600 ml-2" />
                        </div>

                        <div className="flex lg:items-center lg:w-auto w-full">
                            <nav className="text-purple-900 text-lg lg:flex hidden"   >
                                <button className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold">
                                    Home
                                </button>

                                <button className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold ">
                                    Contact us
                                </button>




                                <button onClick={() => history.push('/QA')} className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold"> QA</button>

                                <button onClick={() => history.push('/hssd')} className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold">

                                    Hướng dẫn sử dụng
                                </button>
                                <button onClick={() => history.push('/contact')} className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold">
                                    Liên Hệ
                                </button>

                                <button onClick={() => history.push('/price-list')} className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold">
                                    Bảng giá
                                </button>

                                <button onClick={() => history.push('/login')} className="py-2 px-3  hover:text-purple-700 transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-black font-semibold">
                                    Đăng nhập
                                </button>

                                <span class="relative inline-flex rounded-md shadow-sm animate-bounce">
                                    <button type="button" onClick={() => history.push('/resgiter')} class=" inline-flex items-center px-4 py-3 border border-purple-400 text-base leading-6 font-medium rounded-md text-black bg-red-600 hover:text-white focus:border-purple-300 transition ease-in-out duration-250">
                                        Đăng ký
                                    </button>
                                    <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                    </span>
                                </span>

                            </nav>

                        </div>

                        <button type="button" className="block lg:hidden ml-3" onClick={handleClick}>
                            <a className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </a>
                        </button>
                    </div> */}
                    <nav id="header" className="fixed bg-white shadow-xl text-white w-full  z-20 top-0">
                        <div id="progress" className="h-1 z-40 top-0" style={{ background: 'linear-gradient(to right, #FFC100 var(--scroll), transparent 0)' }} />
                        <div className="flex ">
                            <div className="font-black my-auto mx-auto lg:block hidden text-blue-900 text-4xl flex items-start">
                                Polysu<span className="w-3 h-3 rounded-full bg-purple-600 ml-2" />
                            </div>
                            <div className="w-full md:max-w-4xl mx-auto bg-white flex flex-wrap items-center justify-between mt-0 py-3">
                                <div className="block lg:hidden pl-8  p-2">
                                    <div className="font-black text-blue-900 text-4xl flex items-start">
                                        Polysu<span className="w-3 h-3 rounded-full bg-purple-600 ml-2" />
                                    </div>
                                </div>
                                <div className="block lg:hidden pr-4">
                                    <button id="nav-toggle" className="flex items-center px-3 py-2 text-black border-gray-600 focus:outline-none">
                                        <svg fill="text-black" viewBox="0 0 20 20" className="w-6 h-6 fill-current">
                                            <title>Menu</title>
                                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full flex-grow px-4 lg:flex lg:items-center lg:w-auto hidden lg:block  bg-white  z-20" id="nav-content">
                                    <ul className="list-reset lg:flex justify-center flex-1 items-center my-auto">
                                        <li class="mr-3">
                                            <a class="inline-block lg:text-xl text-base py-2 px-4 text-black hover:text-purple-700 hover:bg-gray-300 rounded font-bold transition duration-150 ease-in-out transform hover:scale-125"
                                                href="#">Trang chủ</a>
                                        </li>
                                        {/* <li class="mr-3">
                                            <a class="inline-block lg:text-xl text-base text-black hover:text-purple-700 hover:bg-gray-300 rounded py-2 px-4 transition duration-150 ease-in-out transform hover:scale-125" href="#">Contact us</a>
                                        </li> */}
                                        <li class="mr-3">
                                            <a onClick={() => history.push('/hssd')} class=" inline-block lg:text-xl text-base text-black hover:text-purple-700 hover:bg-gray-300 rounded py-2 px-4 transition duration-150 ease-in-out transform hover:scale-125" href="#">Hướng dẫn sử dụng</a>
                                        </li>
                                        <li class="mr-3">
                                            <a onClick={() => history.push('/contact')} class="inline-block lg:text-xl text-base text-black hover:text-purple-700 hover:bg-gray-300 rounded py-2 px-4 transition duration-150 ease-in-out transform hover:scale-125" href="#">Liên Hệ</a>
                                        </li>
                                        <li class="mr-3 ">
                                            <a onClick={() => history.push('/price-list')} class="inline-block lg:text-xl text-base text-black hover:text-purple-700 hover:bg-gray-300 rounded py-2 px-4 transition duration-150 ease-in-out transform hover:scale-125" href="#">Bảng giá</a>
                                        </li>
                                        <li class="mr-3 lg:hidden block">
                                            <a onClick={() => history.push('/login')} class="inline-block lg:text-xl text-base text-black hover:text-purple-700 hover:bg-gray-300 rounded py-2 px-4 transition duration-150 ease-in-out transform hover:scale-125" href="#">Đăng nhập</a>
                                        </li>
                                        <li class="mr-3 lg:hidden block">
                                            <a onClick={() => history.push('/resgiter')} class="inline-block lg:text-xl text-base text-black hover:text-purple-700 hover:bg-gray-300 rounded py-2 px-4 transition duration-150 ease-in-out transform hover:scale-125" href="#">Đăng ký</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:flex hidden my-auto mr-5">
                                <button onClick={() => history.push('/login')} className="flex-1 lg:h-14 h-10 w-16 py-2 px-3 mx-2 hover:text-white bg-red-500 rounded transition duration-150 ease-in-out transform hover:scale-110 bg-emerald-600 text-black font-semibold">
                                    Đăng nhập
                                </button>
                                <button onClick={() => history.push('/resgiter')} className="flex-1 lg:h-14 h-10 py-2 w-40 px-3 mx-2 hover:text-white bg-red-500 rounded transition duration-150 ease-in-out transform hover:scale-110 bg-emerald-600 text-black font-semibold">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row relative">
                    <div className="sm:w-6/12 relative z-10">
                        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 280.34 335.07">
                            <defs>
                                <linearGradient id="linear-gradient" x1="111.49" y1="261.12" x2="145.91" y2="370.59" gradientUnits="userSpaceOnUse">
                                    <stop offset={0} stopColor="#2a2839" />
                                    <stop offset={1} stopColor="#38435d" />
                                </linearGradient>
                                <linearGradient id="linear-gradient-2" x1="89.14" y1="228.36" x2="83.5" y2="359.38" xlinkHref="#linear-gradient" />
                                <linearGradient id="linear-gradient-3" x1="126.34" y1="149.56" x2="155.41" y2="149.56" gradientUnits="userSpaceOnUse">
                                    <stop offset={0} stopColor="#746aa6" />
                                    <stop offset="0.31" stopColor="#5d5298" />
                                    <stop offset="0.75" stopColor="#423687" />
                                    <stop offset={1} stopColor="#382b81" />
                                </linearGradient>
                                <linearGradient id="linear-gradient-4" x1="164.01" y1="151.48" x2="147.49" y2="173.66" xlinkHref="#linear-gradient-3" />
                                <linearGradient id="linear-gradient-5" x1="86.84" y1="99.43" x2="102.91" y2="103.45" gradientUnits="userSpaceOnUse">
                                    <stop offset={0} stopColor="#fff" stopOpacity={0} />
                                    <stop offset={1} stopColor="#d1b6cb" />
                                </linearGradient>
                                <linearGradient id="linear-gradient-6" x1="127.49" y1="111.21" x2="137.67" y2="159.59" xlinkHref="#linear-gradient-3" />
                                <linearGradient id="linear-gradient-7" x1="92.58" y1="96.08" x2="92.58" y2="232.64" xlinkHref="#linear-gradient-3" />
                                <linearGradient id="linear-gradient-8" x1="110.75" y1="212.47" x2="110.75" y2="115.93" xlinkHref="#linear-gradient" />
                                <linearGradient id="linear-gradient-9" x1="1046.73" y1="383.6" x2={1112} y2="382.91" gradientTransform="matrix(-0.72, -0.23, -0.4, 0.83, 1082.07, 67.22)" gradientUnits="userSpaceOnUse">
                                    <stop offset={0} stopColor="#eef2fa" />
                                    <stop offset="0.27" stopColor="#e5ecf6" />
                                    <stop offset={1} stopColor="#d1ddee" />
                                </linearGradient>
                                <linearGradient id="linear-gradient-10" x1="102.62" y1="116.25" x2="102.62" y2="105.35" xlinkHref="#linear-gradient" />
                                <linearGradient id="linear-gradient-11" x1={91} y1="95.76" x2={91} y2="112.53" xlinkHref="#linear-gradient-3" />
                                <linearGradient id="linear-gradient-12" x1="110.58" y1="95.76" x2="110.58" y2="112.53" xlinkHref="#linear-gradient-3" />
                                <linearGradient id="linear-gradient-13" x1="76.12" y1="131.17" x2="62.87" y2="198.72" xlinkHref="#linear-gradient-3" />
                            </defs>
                            <title>men</title>
                            <g style={{ isolation: 'isolate' }}>
                                <g id="Capa_1" data-name="Capa 1">
                                    <polygon points="239.69 35.48 238.45 23.87 273.51 11.88 239.69 35.48" style={{ fill: '#9c96c3' }} />
                                    <polygon points="273.51 11.88 248.59 36.8 240.91 27.2 273.51 11.88" style={{ fill: '#dcdcee' }} />
                                    <polygon points="273.51 11.88 238.45 23.87 231.12 14.74 273.51 11.88" style={{ fill: '#dcdcee' }} />
                                    <polygon points="240.91 27.2 239.69 35.48 244.26 31.38 240.91 27.2" style={{ fill: '#8382b3' }} />
                                    <path d="M236.84,30.58l-1.18.78" style={{ fill: 'none', stroke: '#8382b3', strokeMiterlimit: 10, strokeWidth: '0.992126px' }} />
                                    <path d="M230.71,34.24c-5.58,2.87-11.86,4.8-18,4.07-8.35-1-14.23-6.91-23.38-5.05A23.65,23.65,0,0,0,171.7,50c-1.44,5.56.06,12.1,4.63,15.57C188,74.46,201,60.77,201,43.91c0-21.57-27.83-40-67.68-43.14C85.52-3,22.61,31.36,1.65,101.73" style={{ fill: 'none', stroke: '#8382b3', strokeMiterlimit: 10, strokeWidth: '0.992126px', strokeDasharray: '2.864720106124878,5.729430198669434' }} />
                                    <path d="M.85,104.49c-.12.45-.25.91-.37,1.37" style={{ fill: 'none', stroke: '#8382b3', strokeMiterlimit: 10, strokeWidth: '0.992126px' }} />
                                    <path d="M98.83,335.07h34.39c1.34-11.54,2.36-21.14,2.78-26.87,2-26.91.81-62.71,3.41-66.43s-7-24.78-7-24.78l-22.73,5.2L99,259.36s-1,59.37-.41,70.29C98.64,330.67,98.73,332.53,98.83,335.07Z" style={{ fill: 'url(#linear-gradient)' }} />
                                    <path d="M95.45,335.07c1.76-9.68,3.35-17.52,4.6-22.06,6.42-23.4,18.85-95.76,18.85-95.76l-55.21,4.94a554.32,554.32,0,0,0-6.14,60,1.83,1.83,0,0,1,.3,2.85l-.43.42c-.13,3.64-.21,7.29-.22,10.94,0,9.06.17,22.95.5,38.7Z" style={{ fill: 'url(#linear-gradient-2)' }} />
                                    <path d="M155.37,153.46s.61,6.68-3,10.44-7.6,11.14-7.6,11.14a76.42,76.42,0,0,1-7.36-7.94c-2.58-3.48-10.88-17.68-11-24.92s12.77-18.1,12.77-18.1,7.14,11.7,7.75,18.38S155.37,153.46,155.37,153.46Z" style={{ fill: 'url(#linear-gradient-3)' }} />
                                    <path d="M161.15,148.86c-1.21,3.35-1.21,6.83-1.21,11.42s.45,12.53-2.44,14.48-7,5.71-10.49,2.65-5.32-7.94-5.77-12.53,5.16-11.28,7.75-15.32Z" style={{ fill: '#e7bfaa' }} />
                                    <path d="M137.37,167.1s2.74,4.94,9.64,10.31,12.13,2.68,14.14,0,0-22,0-22A13.21,13.21,0,0,1,149,149.56Z" style={{ fill: 'url(#linear-gradient-4)' }} />
                                    <polygon points="153.27 156.37 161.15 155.42 161.15 148.86 153.27 149.56 153.27 156.37" style={{ fill: '#afbad6' }} />
                                    <path d="M82.48,92.92c-1.25,3.55-13,7.67-13,7.67s35.57,40.73,49.3,40.47-6-38.4-6-38.4-4-2-5.25-5.88,1.37-20.54,1.37-20.54L94.39,67.37S83.73,89.37,82.48,92.92Z" style={{ fill: '#e7bfaa' }} />
                                    <path d="M82.48,92.92c-1.25,3.55-13,7.67-13,7.67s35.57,40.73,49.3,40.47-6-38.4-6-38.4-4-2-5.25-5.88,1.37-20.54,1.37-20.54L94.39,67.37S83.73,89.37,82.48,92.92Z" style={{ mixBlendMode: 'multiply', fill: 'url(#linear-gradient-5)' }} />
                                    <path d="M126.76,44.9c2.18,2.09,5.78,6.27,5.45,8.66S132,63.35,130,67c-2.68,5-2.37,12.77-4.11,17.31s-10.46,11.43-11.85,12-6.07-.34-8.33-2.1S91.67,77.32,94.39,67.37c0,0-5.2,1-7-8.93-.47-2.59,9.94-9.69,11.58-12.21,4-6.13,18.09-.93,22.15-.52S126.76,44.9,126.76,44.9Z" style={{ fill: '#e7bfaa' }} />
                                    <path d="M131.74,57.51s1.78-6.11-3.43-6.79l-16.26-3.31a54.83,54.83,0,0,1-6.42-2.28s-1.35,6.2-3,7.59-4.92,2.74-5.54,4.71a27,27,0,0,0-.87,4s-2.1-4.19-4.58-4.06-3.28,3.83-1.31,6a40.46,40.46,0,0,0,4,3.93,25.53,25.53,0,0,1-1.63,4.91c-1,2.06-2.89,5.5-2.89,5.5s-2.24-13.91-5.23-20.06-3-23.26,15.06-23c0,0,11.81-9.05,23.5-6.56,10.14,2.16,20.87,10.48,12.11,24.16C132.27,57.05,131.74,57.51,131.74,57.51Z" style={{ fill: '#692e20' }} />
                                    <path d="M112.86,64.71a6.19,6.19,0,0,0,1.87,2.74c1.52,1.36,2.7,1.35,4.52-.42A6.64,6.64,0,0,0,112.86,64.71Z" style={{ fill: '#fff' }} />
                                    <path d="M115.68,65c-.53-.2-.84,1.4-.76,1.75a1.7,1.7,0,0,0,1.62,1.44c1.83.27,2.22-2,2.22-2Z" style={{ fill: '#4c323a' }} />
                                    <path d="M118,66.5c-.79-.06-1.3.75-.83,1.18s1.16.6,1.38-.05S118.76,66.56,118,66.5Z" style={{ fill: '#fff', opacity: '0.35000000000000003' }} />
                                    <path d="M111.29,64.79s5.2-.22,8.82,2.8c0,0,.41-.78-.57-1.63a7.55,7.55,0,0,0-3.05-1.39C112.08,63.59,111.29,64.79,111.29,64.79Z" style={{ fill: '#673239' }} />
                                    <path d="M121.64,61.16a3.48,3.48,0,0,0,.87-2.55,17.21,17.21,0,0,0-12.42-.48s-.81.49.47.5S118.94,58.31,121.64,61.16Z" style={{ fill: '#783a40' }} />
                                    <path d="M128.61,69s0,2.37-1.34,2.64c-1.73.37-1.83-1.48-1.78-2.74A3,3,0,0,1,128.61,69Z" style={{ fill: '#fff' }} />
                                    <path d="M128.62,69.36c.41.13-.1,1.31-.3,1.49a1.21,1.21,0,0,1-1.63.13c-1.25-.72-.47-2.39-.47-2.39Z" style={{ fill: '#4c323a' }} />
                                    <path d="M128.58,70c.59.38.54,1.25,0,1.3s-1.12-.2-.95-.79S128,69.62,128.58,70Z" style={{ fill: '#fff', opacity: '0.35000000000000003' }} />
                                    <path d="M129.17,69.61c.59,0,.46-.48-.49-.94a6.68,6.68,0,0,0-2.85-.68c-1.13.08-1.23.87-1.23.87a10,10,0,0,1,4.2.81A1.06,1.06,0,0,1,129.17,69.61Z" style={{ fill: '#673239' }} />
                                    <path d="M131.67,63c-2.61-2.78-4.41-3-4.41-3a4.39,4.39,0,0,0-.75,2.33,14.46,14.46,0,0,1,5.15,1.93A1.52,1.52,0,0,0,131.67,63Z" style={{ fill: '#783a40' }} />
                                    <path d="M106.69,62c0,.46.87,1,1,1.19.3.37.11.35.52,4,.31,2.67,2.07,4.38,6.55,4.94,3.42.43,4.25-2.52,5-3.72s1.16-1.3,1.67-1.15.71.4.79,1.87-1,4.57,2.31,5.63c2.28.74,3.12.39,4.23-1.28a22,22,0,0,0,2.24-4.29c.46-1.24.77-2,.24-2.34a10.91,10.91,0,0,0-2.66-1c-2-.59-3.33-1.22-4.67-.94s-1.46.81-2,.65-.45-.71-1.46-1.68-6.32-2.52-8.31-3.11-4.84-1.11-5.13-.34A6.12,6.12,0,0,0,106.69,62Zm17.17,5.1c.53-.93.55-.79,3.07-.19s2.71.82,3,1.44-.09,2.34-1.24,4.26c-.62,1-1.46,2.32-3.48,1.73s-2.14-1.94-2-3.73A11,11,0,0,1,123.86,67.09ZM109.94,62c.54-.38,3.82.73,6.26,1.59s3.26,1.16,3.26,2.24a11.26,11.26,0,0,1-1.17,3.36c-.79,1.59-1.73,2.86-5.64,1.73-2.76-.79-3.64-2.18-3.76-4.77C108.79,63.86,109.39,62.35,109.94,62ZM95.73,60.53s1.31-.81,1.81-.72a1.92,1.92,0,0,1,.63.38l8.56,2.08,2.89-2.12s-7.27-1.85-10.83-2.71c-1.69-.41-4.11,1.77-4.11,1.77A5,5,0,0,1,95.73,60.53Z" style={{ fill: '#302925' }} />
                                    <path d="M122.18,68.18s.74,6.58,2.23,7.93c1.91,1.74,1.12,3.1-.33,3.51s-4.84-.2-4.84-.2a17,17,0,0,1,1.13-5.59A37.19,37.19,0,0,0,122.18,68.18Z" style={{ fill: '#d69587' }} />
                                    <path d="M120.85,82.27a7,7,0,0,1-2.52,3.4,4.06,4.06,0,0,1-2,.65A4.13,4.13,0,0,1,112,83.61a9.84,9.84,0,0,1-.69-3.83,20.74,20.74,0,0,0,5.51,2A14,14,0,0,0,120.85,82.27Z" style={{ fill: '#4c323a' }} />
                                    <path d="M118.33,85.67a4.06,4.06,0,0,1-2,.65A4.13,4.13,0,0,1,112,83.61C112.65,83.26,116.33,86.32,118.33,85.67Z" style={{ fill: '#a95957' }} />
                                    <path d="M126,106.39c7.37,3.63,9.65,8.22,13.3,17.41s7.3,11.28,7.3,11.28-7.76,1.67-16.42,18.8a28.72,28.72,0,0,1-11.4-17.55C116.45,124.64,126,106.39,126,106.39Z" style={{ fill: 'url(#linear-gradient-6)' }} />
                                    <path d="M75.87,96.08l-24.45,9.27s-3.94,23.1-3.61,31.7S61.1,231,61.1,231s32.42,3.6,48.72,0,27.55-6.91,27.55-6.91-5.63-83.33-6.91-91.93-4.5-25.81-4.5-25.81l-12.76-6-7.08,5Z" style={{ fill: 'url(#linear-gradient-7)' }} />
                                    <path d="M108.92,115.93s8.57,76.75,10.2,85.45l-5.58,11.09s-9.36-6.41-9.9-10-1.26-86.18-1.26-86.18Z" style={{ fill: 'url(#linear-gradient-8)' }} />
                                    <path d="M148,135.12c-1.7-.6-9-2.37-11.86-2.3s-11.47-.65-14.88-.16-6.57,5.25-9.48,6.63c-1.54.73-4.59,2.14-8.26,3.79,1.25,3.22,2.42,6.48,3.59,9.74a17.55,17.55,0,0,1,4.63-2.52c4.94-1.38,4.8-2.67,7.47-2.54a12.94,12.94,0,0,0,4.65-.23c2.41-.4,4.07-3.9,5.79-5s4.24-2.24,3.94-3.15-.42-2-6.19-.75c0,0,5.49-2,7.93-2s7.6.63,10,.6S149.64,135.71,148,135.12Z" style={{ fill: '#e7bfaa' }} />
                                    <polygon points="102.08 143.4 108.98 140.01 115.27 153.95 108.54 158.84 102.08 143.4" style={{ fill: '#afbad6' }} />
                                    <path d="M123.76,159.9l19.84,4.6a5.29,5.29,0,0,0,5.52-2.75l22-43.63c1-2,.2-3.92-1.82-4.4L149.68,109c-3.62-.12-5.48.71-6.51,2.72l-22.08,43.31C120.05,157.08,120.33,158.44,123.76,159.9Z" style={{ fill: '#969ec2' }} />
                                    <path d="M124.87,160.25l19.94,4.63a5.32,5.32,0,0,0,5.55-2.75l22.13-43.82c1-2,.19-3.94-1.84-4.41l-19.77-4.7a5.43,5.43,0,0,0-5.74,2.76l-22.26,43.71A3,3,0,0,0,124.87,160.25Z" style={{ fill: 'url(#linear-gradient-9)' }} />
                                    <path d="M157,152.5c2-.51,4.66-.71,5.33-1.93s1.66-1.53,2.77-2.44.44-1.83,1.77-2.95,0-3.05.11-4.06a14.78,14.78,0,0,0-.22-4.88c-.44-1.83-2.22-2.23-4.55-2.94s-4-.72-4,.4,2.44,2.64,2.44,2.64-4-1.22-5.1-1.62-2.89.51-2.11,1.83,4,3,5,3.55a4.18,4.18,0,0,1,1.56,1.53,17,17,0,0,1-5.11-.82c-2.1-.81-4-2.64-5.43-1.83s-.67,1.83.77,3c0,0,3.11,1.93,4.11,2.34a15.72,15.72,0,0,1-4.66-.51c-1.55-.61-2.33.1-1.89,1.22s4.77,2,4.88,2.44-.77,1.42-1.33,2.64S157,152.5,157,152.5Z" style={{ fill: '#e7bfaa' }} />
                                    <polygon points="112.65 107.07 108.92 115.93 102.38 116.25 92.58 105.75 106.89 105.34 112.65 107.07" style={{ fill: 'url(#linear-gradient-10)' }} />
                                    <polygon points="78.83 91.79 106.12 105.34 95.07 113.79 75.88 96.08 78.83 91.79" style={{ fill: 'url(#linear-gradient-11)' }} />
                                    <polygon points="106.12 105.34 115.03 111.93 113.2 100.35 110.3 97.06 106.12 105.34" style={{ fill: 'url(#linear-gradient-12)' }} />
                                    <path d="M51.42,105.35S43.64,111.23,42,114s-.68,9.3-1.35,16.43,1.92,42.76,5.64,48.65,10.49,7.44,13.88,7.44,48.42-27.7,48.42-27.7l-6.46-15.44L69,155.86s.34-25.1.68-30.68S58.19,106.89,51.42,105.35Z" style={{ fill: 'url(#linear-gradient-13)' }} />
                                    <path d="M230.66,117.53v-9l-4.44-1.31a18.59,18.59,0,0,0-1.05-2.52l2.22-4.07-6.4-6.4-4.08,2.21a17.9,17.9,0,0,0-2.51-1l-1.31-4.44H204l-1.31,4.44a18.41,18.41,0,0,0-2.51,1l-4.08-2.21-6.4,6.4,2.22,4.07a18.59,18.59,0,0,0-1,2.52l-4.44,1.31v9l4.44,1.32a18.46,18.46,0,0,0,1,2.51l-2.22,4.07,6.4,6.41,4.08-2.22a18.46,18.46,0,0,0,2.51,1l1.31,4.44h9.06l1.31-4.44a17.94,17.94,0,0,0,2.51-1l4.08,2.22,6.4-6.41-2.22-4.07a18.46,18.46,0,0,0,1.05-2.51ZM218.52,113a10,10,0,1,1-10-10A10,10,0,0,1,218.52,113Z" style={{ fill: '#d5daee' }} />
                                    <path d="M261.86,92.7V87.11l-2.74-.81a12.38,12.38,0,0,0-.65-1.55l1.37-2.51-3.95-3.95-2.51,1.36a10.64,10.64,0,0,0-1.56-.64L251,76.27h-5.58L244.62,79a10.52,10.52,0,0,0-1.55.64l-2.52-1.36-4,3.95L238,84.75a12.38,12.38,0,0,0-.65,1.55l-2.74.81V92.7l2.74.81a12.38,12.38,0,0,0,.65,1.55l-1.37,2.51,4,4,2.52-1.36a10.52,10.52,0,0,0,1.55.64l.81,2.74H251l.81-2.74a10.64,10.64,0,0,0,1.56-.64l2.51,1.36,3.95-4-1.37-2.51a12.38,12.38,0,0,0,.65-1.55Zm-7.5-2.79a6.14,6.14,0,1,1-6.14-6.15A6.14,6.14,0,0,1,254.36,89.91Z" style={{ fill: '#d5daee' }} />
                                    <line x1="194.99" y1="160.1" x2="194.99" y2="172.78" style={{ fill: 'none', stroke: '#eaf0f2', strokeMiterlimit: 10, strokeWidth: '0.30236199999999996px' }} />
                                    <path d="M201.49,159.22a6.51,6.51,0,1,1-6.5-6.36A6.43,6.43,0,0,1,201.49,159.22Z" style={{ fill: '#807fb4' }} />
                                    <path d="M201.49,181.51a6.51,6.51,0,1,1-6.5-6.36A6.43,6.43,0,0,1,201.49,181.51Z" style={{ fill: '#807fb4' }} />
                                    <polygon points="194.47 161.72 191.47 157.94 194.19 159.05 200.46 153.69 194.47 161.72" style={{ fill: '#fff' }} />
                                    <polygon points="194.47 184.26 191.47 180.47 194.19 181.59 200.46 176.23 194.47 184.26" style={{ fill: '#fff' }} />
                                    <rect x="205.33" y="161.72" width="75.01" height="6.85" style={{ fill: '#eaf0f2' }} />
                                    <rect x="205.33" y="183.76" width="49.03" height="6.85" style={{ fill: '#eaf0f2' }} />
                                    <rect x="205.33" y="155.01" width="42.89" height="3.51" style={{ fill: '#807fb4' }} />
                                    <rect x="205.33" y="176.85" width="26.57" height="3.51" style={{ fill: '#807fb4' }} />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className=" sm:w-5/12 xl:w-4/12 flex flex-col items-start sm:items-end sm:text-right ml-auto mt-8 sm:mt-0 relative z-10 xl:pt-20 mb-16 sm:mb-0">
                        <h1 className="text-4xl lg:text-5xl text-blue-900 leading-none mb-4 font-black">Tùy biến nút hút khách hàng</h1>
                        <p className="lg:text-lg mb-4 sm:mb-12 text-blue-900">
                            Công cụ tăng tỷ lệ tương tác với khách hàng trên website</p>
                        <a href="#" className="font-semibold text-lg bg-purple-600 hover:bg-blue-400 text-white py-3 px-12 rounded-full transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">Thử ngay</a>
                    </div>
                    <svg className="w-full absolute bottom-0 left-0" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.5 141.26">
                        <title>skyline</title>
                        <rect x="330.19" y="60.71" width="4.83" height="2.04" transform="translate(665.21 123.45) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="329.57" y="62.3" width="6.07" height="0.89" transform="translate(665.21 125.48) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="328.06" y="63.18" width="9.1" height="2.3" transform="translate(665.21 128.67) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <polygon points="332.04 40.63 333.17 40.63 332.77 30 332.45 30 332.04 40.63" style={{ fill: '#bebcdb' }} />
                        <path d="M331.32,40.45v20.7h2.57V40.45Zm1.46,9.1h.34V60.26h-.34Zm-.69,0h.35V60.26h-.35Z" style={{ fill: '#bebcdb' }} />
                        <rect x="190.33" y="100.21" width="13.96" height="48.65" style={{ fill: '#bebcdb' }} />
                        <polygon points="279.77 148.86 279.77 55.81 245.96 40.11 233.42 40.11 233.42 37.34 232.94 37.34 232.94 61.91 230.37 61.91 230.37 45.39 216.55 45.39 216.55 61.91 214.24 61.91 214.24 87.38 211.64 87.38 211.64 148.86 279.77 148.86" style={{ fill: '#bebcdb' }} />
                        <polygon points="65.25 148.86 65.25 94.66 45.56 85.52 38.26 85.52 28.43 88.59 28.43 98.22 27.08 98.22 27.08 113.05 25.57 113.05 25.57 148.86 65.25 148.86" style={{ fill: '#bebcdb' }} />
                        <rect x="164.44" y="95.42" width="9.07" height="53.44" style={{ fill: '#bebcdb' }} />
                        <rect x="153.67" y="87.02" width="16.77" height="61.84" style={{ fill: '#bebcdb' }} />
                        <rect x="138.3" y="98.85" width="12.5" height="49.2" style={{ fill: '#bebcdb' }} />
                        <rect x="162.49" y="41.08" width="21.7" height="106.97" style={{ fill: '#bebcdb' }} />
                        <rect x="320.95" y="50.58" width="18.44" height="92.45" transform="translate(660.35 193.6) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="329.51" y="67.95" width="18.44" height="80.8" style={{ fill: '#bebcdb' }} />
                        <path d="M322,39.93V56.22H309.5V49.94h-6.85V47.33H299v2.61H281.78c-.06.1-.11.2-.18.3V78.18h-7.21v70.68h48.8V39.93Z" style={{ fill: '#bebcdb' }} />
                        <polygon points="64.67 148.86 64.67 95.61 67.3 99.1 74.48 99.1 74.48 85.03 74.76 85.03 74.76 99.1 76.23 99.1 76.23 89.64 84.13 89.64 84.13 99.1 85.46 99.1 85.46 113.68 86.94 113.68 86.94 148.86 64.67 148.86" style={{ fill: '#bebcdb' }} />
                        <rect x="89.35" y="56.43" width="13.96" height="92.43" style={{ fill: '#bebcdb' }} />
                        <polygon points="103.21 148.86 103.21 79.28 116.61 79.28 123.81 86.73 123.81 148.86 103.21 148.86" style={{ fill: '#bebcdb' }} />
                        <polygon points="218.96 100.21 218.96 103.08 219.97 103.08 219.97 108.84 223.37 108.84 223.37 148.86 205.56 148.86 205.56 100.21 218.96 100.21" style={{ fill: '#ada7ce' }} />
                        <rect x="179.43" y="66.54" width="5.85" height="0.52" style={{ fill: '#fffffc' }} />
                        <rect x="177.96" y="67.07" width="8.77" height="8.79" style={{ fill: '#d0d4ea' }} />
                        <rect x="195.68" y="50.74" width="1.17" height="43.49" transform="translate(392.53 144.97) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="198.28" y="50.74" width="1.17" height="43.49" transform="translate(397.74 144.97) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="183.81" y="63.4" width="18.68" height="48.45" style={{ fill: '#e6f1f5' }} />
                        <polygon points="214.42 95.41 193.43 95.41 193.43 80.82 214.42 95.41" style={{ fill: '#f3f8f5' }} />
                        <rect x="170.01" y="76.18" width="25.26" height="72.68" style={{ fill: '#e6f1f5' }} />
                        <rect x="192.35" y="94.21" width="23.15" height="54.65" style={{ fill: '#d5daee' }} />
                        <polygon points="494.06 113.31 494.06 115.55 494.84 115.55 494.84 120.04 497.5 120.04 497.5 151.26 483.6 151.26 483.6 113.31 494.06 113.31" style={{ fill: '#ada7ce' }} />
                        <rect x="463.22" y="87.05" width="4.56" height="0.41" style={{ fill: '#fffffc' }} />
                        <rect x="462.08" y="87.46" width="6.84" height="6.85" style={{ fill: '#d0d4ea' }} />
                        <rect x="475.89" y="74.73" width="0.92" height="33.92" transform="translate(952.7 183.37) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="477.93" y="74.73" width="0.92" height="33.92" transform="translate(956.77 183.37) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="466.64" y="84.61" width="14.57" height="37.79" style={{ fill: '#e6f1f5' }} />
                        <polygon points="490.51 109.57 474.14 109.57 474.14 98.19 490.51 109.57" style={{ fill: '#f3f8f5' }} />
                        <rect x="455.88" y="94.57" width="19.7" height="56.69" style={{ fill: '#e6f1f5' }} />
                        <rect x="473.3" y="108.63" width="18.06" height="42.62" style={{ fill: '#d5daee' }} />
                        <polygon points="2.64 122.08 2.64 123.8 2.04 123.8 2.04 127.26 0 127.26 0 151.26 10.68 151.26 10.68 122.08 2.64 122.08" style={{ fill: '#ada7ce' }} />
                        <rect x="22.85" y="101.9" width="3.51" height="0.31" transform="translate(49.2 204.11) rotate(180)" style={{ fill: '#fffffc' }} />
                        <rect x="21.97" y="102.21" width="5.26" height="5.27" transform="translate(49.2 209.69) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="15.9" y="92.42" width="0.7" height="26.08" style={{ fill: '#d5daee' }} />
                        <rect x="14.34" y="92.42" width="0.7" height="26.08" style={{ fill: '#d5daee' }} />
                        <rect x="12.52" y="100.01" width="11.2" height="29.05" transform="translate(36.24 229.08) rotate(180)" style={{ fill: '#e6f1f5' }} />
                        <polygon points="5.37 119.2 17.95 119.2 17.95 110.46 5.37 119.2" style={{ fill: '#f3f8f5' }} />
                        <rect x="16.85" y="107.67" width="15.15" height="43.58" style={{ fill: '#e6f1f5' }} />
                        <rect x="4.72" y="118.49" width="13.88" height="32.77" style={{ fill: '#d5daee' }} />
                        <rect x="247.54" y={10} width="9.43" height="62.81" style={{ fill: '#afaacf' }} />
                        <rect x="240.25" y="12.37" width="34.36" height="77.61" style={{ fill: '#d5daee' }} />
                        <rect x="236.38" y="70.31" width="6.24" height="1.66" transform="translate(479 142.28) rotate(180)" style={{ fill: '#f3f8f5' }} />
                        <rect x="235.58" y="71.61" width="7.83" height="0.72" transform="translate(479 143.94) rotate(180)" style={{ fill: '#f3f8f5' }} />
                        <rect x="233.63" y="72.33" width="11.74" height="12.1" transform="translate(479 156.76) rotate(180)" style={{ fill: '#afaacf' }} />
                        <polygon points="252.98 43.37 252.98 148.86 279.77 148.86 279.77 55.81 252.98 43.37" style={{ fill: '#d5daee' }} />
                        <rect x="231.1" y="66.23" width="15.96" height="82.63" style={{ fill: '#afaacf' }} />
                        <rect x="242.99" y="74.34" width="1.31" height="52.62" style={{ fill: '#b9b5d6' }} />
                        <rect x="240.08" y="74.34" width="1.31" height="52.62" style={{ fill: '#b9b5d6' }} />
                        <rect x="237.16" y="74.34" width="1.31" height="52.62" style={{ fill: '#b9b5d6' }} />
                        <rect x="234.25" y="74.34" width="1.31" height="52.62" style={{ fill: '#b9b5d6' }} />
                        <rect x="253.24" y="64.52" width="9.22" height="9.79" style={{ fill: '#d5daee' }} />
                        <rect x="393.32" y="42.47" width="7.23" height="48.12" style={{ fill: '#afaacf' }} />
                        <rect x="387.74" y="44.28" width="26.33" height="59.47" style={{ fill: '#d5daee' }} />
                        <rect x="384.77" y="88.67" width="4.78" height="1.27" transform="translate(774.33 178.62) rotate(180)" style={{ fill: '#f3f8f5' }} />
                        <rect x="384.16" y="89.67" width={6} height="0.55" transform="translate(774.33 179.89) rotate(180)" style={{ fill: '#f3f8f5' }} />
                        <rect x="382.66" y="90.22" width={9} height="9.27" transform="translate(774.33 189.72) rotate(180)" style={{ fill: '#afaacf' }} />
                        <polygon points="397.49 68.03 397.49 148.86 418.02 148.86 418.02 77.56 397.49 68.03" style={{ fill: '#d5daee' }} />
                        <rect x="380.73" y="85.55" width="12.23" height="63.31" style={{ fill: '#bebcdb' }} />
                        <rect x="389.84" y="91.76" width={1} height="40.32" style={{ fill: '#b9b5d6' }} />
                        <rect x="387.61" y="91.76" width={1} height="40.32" style={{ fill: '#b9b5d6' }} />
                        <rect x="385.38" y="91.76" width={1} height="40.32" style={{ fill: '#b9b5d6' }} />
                        <rect x="383.14" y="91.76" width={1} height="40.32" style={{ fill: '#b9b5d6' }} />
                        <rect x="397.69" y="84.24" width="7.06" height="7.5" style={{ fill: '#d5daee' }} />
                        <rect x="144.5" y="83.05" width="4.91" height="7.24" transform="translate(293.91 173.35) rotate(180)" style={{ fill: '#ada7ce' }} />
                        <rect x="147.62" y="87.15" width="6.4" height="5.51" transform="translate(301.65 179.82) rotate(180)" style={{ fill: '#ada7ce' }} />
                        <rect x="174.03" y="31.75" width="8.66" height="8.92" transform="translate(356.72 72.41) rotate(180)" style={{ fill: '#ada7ce' }} />
                        <polygon points="131.9 148.86 132.9 92.77 134.11 92.77 134.11 87.02 153.95 84.96 153.95 96.28 156.29 96.28 156.29 34.61 184.49 34.61 184.49 94.87 187.03 94.87 187.03 148.86 131.9 148.86" style={{ fill: '#d9e0f0' }} />
                        <rect x="135.14" y="104.9" width="8.6" height="2.35" transform="translate(278.88 212.15) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="109.19" width="8.6" height="2.35" transform="translate(278.88 220.73) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="113.48" width="8.6" height="2.35" transform="translate(278.88 229.31) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="117.77" width="8.6" height="2.35" transform="translate(278.88 237.89) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="122.06" width="8.6" height="2.35" transform="translate(278.88 246.47) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="126.35" width="8.6" height="2.35" transform="translate(278.88 255.05) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="130.64" width="8.6" height="2.35" transform="translate(278.88 263.62) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="134.93" width="8.6" height="2.35" transform="translate(278.88 272.2) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="135.14" y="139.22" width="8.6" height="2.35" transform="translate(278.88 280.78) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="373.55" y="100.21" width="13.96" height="48.65" style={{ fill: '#bebcdb' }} />
                        <polygon points="457.44 148.86 457.44 77.56 431.54 65.53 421.93 65.53 421.93 63.41 421.56 63.41 421.56 82.24 419.59 82.24 419.59 69.58 409.01 69.58 409.01 82.24 407.23 82.24 407.23 101.76 405.24 101.76 405.24 148.86 457.44 148.86" style={{ fill: '#bebcdb' }} />
                        <rect x="345.71" y="41.08" width="21.7" height="106.97" style={{ fill: '#bebcdb' }} />
                        <polygon points="402.18 100.21 402.18 103.08 403.19 103.08 403.19 108.84 406.59 108.84 406.59 148.86 388.77 148.86 388.77 100.21 402.18 100.21" style={{ fill: '#ada7ce' }} />
                        <rect x="362.65" y="66.54" width="5.85" height="0.52" style={{ fill: '#fffffc' }} />
                        <rect x="361.18" y="67.07" width="8.77" height="8.79" style={{ fill: '#d0d4ea' }} />
                        <rect x="378.9" y="50.74" width="1.17" height="43.49" transform="translate(758.97 144.97) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="381.5" y="50.74" width="1.17" height="43.49" transform="translate(764.18 144.97) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="367.03" y="63.4" width="18.68" height="48.45" style={{ fill: '#e6f1f5' }} />
                        <polygon points="397.64 95.41 376.65 95.41 376.65 80.82 397.64 95.41" style={{ fill: '#f3f8f5' }} />
                        <rect x="353.23" y="76.18" width="25.26" height="72.68" style={{ fill: '#e6f1f5' }} />
                        <rect x="375.57" y="94.21" width="23.15" height="54.65" style={{ fill: '#d5daee' }} />
                        <rect x="434.21" y="62.03" width="4.84" height="32.25" style={{ fill: '#afaacf' }} />
                        <rect x="430.47" y="63.25" width="17.64" height="39.85" style={{ fill: '#d5daee' }} />
                        <rect x="428.48" y={93} width="3.2" height="0.85" transform="translate(860.16 186.85) rotate(180)" style={{ fill: '#f3f8f5' }} />
                        <rect x="428.07" y="93.66" width="4.02" height="0.37" transform="translate(860.16 187.7) rotate(180)" style={{ fill: '#f3f8f5' }} />
                        <rect x="427.07" y="94.04" width="6.03" height="6.21" transform="translate(860.16 194.28) rotate(180)" style={{ fill: '#afaacf' }} />
                        <polygon points="437 79.16 437 133.33 450.76 133.33 450.76 85.55 437 79.16" style={{ fill: '#d5daee' }} />
                        <rect x="425.77" y="90.9" width="8.19" height="42.42" style={{ fill: '#d5daee' }} />
                        <rect x="431.87" y="95.07" width="0.67" height="27.02" style={{ fill: '#b9b5d6' }} />
                        <rect x="430.38" y="95.07" width="0.67" height="27.02" style={{ fill: '#b9b5d6' }} />
                        <rect x="428.88" y="95.07" width="0.67" height="27.02" style={{ fill: '#b9b5d6' }} />
                        <rect x="427.39" y="95.07" width="0.67" height="27.02" style={{ fill: '#b9b5d6' }} />
                        <rect x="437.14" y="90.03" width="4.73" height="5.03" style={{ fill: '#d5daee' }} />
                        <rect x="357.25" y="31.75" width="8.66" height="8.92" transform="translate(723.16 72.41) rotate(180)" style={{ fill: '#ada7ce' }} />
                        <polygon points="315.12 148.86 316.12 92.77 317.33 92.77 317.33 87.02 337.17 84.96 337.17 96.28 339.51 96.28 339.51 34.61 367.71 34.61 367.71 94.87 370.25 94.87 370.25 148.86 315.12 148.86" style={{ fill: '#d9e0f0' }} />
                        <rect x="318.36" y="104.9" width="8.6" height="2.35" transform="translate(645.32 212.15) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="109.19" width="8.6" height="2.35" transform="translate(645.32 220.73) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="113.48" width="8.6" height="2.35" transform="translate(645.32 229.31) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="117.77" width="8.6" height="2.35" transform="translate(645.32 237.89) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="122.06" width="8.6" height="2.35" transform="translate(645.32 246.47) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="126.35" width="8.6" height="2.35" transform="translate(645.32 255.05) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="130.64" width="8.6" height="2.35" transform="translate(645.32 263.62) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="134.93" width="8.6" height="2.35" transform="translate(645.32 272.2) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="318.36" y="139.22" width="8.6" height="2.35" transform="translate(645.32 280.78) rotate(180)" style={{ fill: '#bebcdb' }} />
                        <rect x="304.77" y="105.65" width="18.73" height="43.12" style={{ fill: '#d5daee' }} />
                        <path d="M314.26,80.81V30.35h-4V28h-.9v-.37H309v-.66h-.67v-5h-.43l-.23-4.37h-.19l-.24,4.37h-.43v5h-.67v.66h-.37V28h-.9v2.4h-11.1l-6.4,7.79V80.81Zm-6.79-54.08h-.2V22.25h.2Zm.41,0h-.21V22.25h.21Z" style={{ fill: '#d0d4ea' }} />
                        <rect x="275.03" y="60.26" width="23.57" height="58.18" style={{ fill: '#afaacf' }} />
                        <rect x="88.41" y="88.48" width="3.57" height="0.95" style={{ fill: '#f3f8f5' }} />
                        <rect x="87.95" y="89.23" width="4.48" height="0.41" style={{ fill: '#f3f8f5' }} />
                        <rect x="86.83" y="89.64" width="6.72" height="6.92" style={{ fill: '#afaacf' }} />
                        <rect x="77.83" y="101.57" width="9.13" height="47.29" style={{ fill: '#bebcdb' }} />
                        <rect x="79.41" y="100.91" width="0.75" height="30.11" transform="translate(159.57 231.93) rotate(180)" style={{ fill: '#b9b5d6' }} />
                        <rect x="81.08" y="100.91" width="0.75" height="30.11" transform="translate(162.91 231.93) rotate(180)" style={{ fill: '#b9b5d6' }} />
                        <rect x="82.74" y="100.91" width="0.75" height="30.11" transform="translate(166.24 231.93) rotate(180)" style={{ fill: '#b9b5d6' }} />
                        <rect x="84.41" y="100.91" width="0.75" height="30.11" transform="translate(169.57 231.93) rotate(180)" style={{ fill: '#b9b5d6' }} />
                        <rect x="78.57" y="68.02" width="16.45" height="80.84" transform="translate(173.59 216.88) rotate(180)" style={{ fill: '#ada7ce' }} />
                        <polygon points="56.68 126.42 66.64 126.42 66.64 97.82 56.68 126.42" style={{ fill: '#f3f8f5' }} />
                        <rect x="52.41" y="65.55" width="12.23" height="44.58" transform="translate(117.05 175.69) rotate(180)" style={{ fill: '#ada7ce' }} />
                        <rect x="65.61" y="94.04" width="5.68" height="0.47" transform="translate(136.89 188.55) rotate(180)" style={{ fill: '#fffffc' }} />
                        <rect x="48.56" y="77.9" width="1.15" height="70.56" style={{ fill: '#ada7ce' }} />
                        <rect x="51.11" y="77.9" width="1.15" height="70.56" style={{ fill: '#ada7ce' }} />
                        <rect x="53.67" y="113.39" width="1.15" height="35.07" style={{ fill: '#ada7ce' }} />
                        <rect x="56.22" y="113.39" width="1.15" height="35.07" style={{ fill: '#ada7ce' }} />
                        <rect x="75.93" y="78.3" width="5.28" height="5.6" transform="translate(157.13 162.2) rotate(180)" style={{ fill: '#d5daee' }} />
                        <rect x="52.55" y="111.74" width="7.7" height="37.12" style={{ fill: '#ada7ce' }} />
                        <rect x="107.48" y="49.53" width="18.2" height="1.6" transform="translate(233.16 100.67) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="52.46" width="18.2" height="1.6" transform="translate(233.16 106.51) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="55.38" width="18.2" height="1.6" transform="translate(233.16 112.36) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="58.3" width="18.2" height="1.6" transform="translate(233.16 118.21) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="61.23" width="18.2" height="1.6" transform="translate(233.16 124.06) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="64.15" width="18.2" height="1.6" transform="translate(233.16 129.91) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="67.08" width="18.2" height="1.6" transform="translate(233.16 135.75) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y={70} width="18.2" height="1.6" transform="translate(233.16 141.6) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <rect x="107.48" y="72.92" width="18.2" height="1.6" transform="translate(233.16 147.45) rotate(180)" style={{ fill: '#d0d4ea' }} />
                        <polygon points="91.33 148.86 123.9 148.86 124.21 47.59 91.33 44.19 91.33 148.86" style={{ fill: '#d0d4ea' }} />
                        <polygon points="91.33 148.86 97.94 148.86 98.31 47.37 91.33 44.19 91.33 148.86" style={{ fill: '#a59dc7' }} />
                        <polygon points="123.81 86.73 116.61 79.28 103.21 79.28 123.81 86.73" style={{ fill: '#d5daee' }} />
                        <rect x="111.67" y="98.39" width="0.99" height="50.47" style={{ fill: '#f3f8f5', opacity: '0.43' }} />
                        <rect x="113.86" y="98.39" width="0.99" height="50.47" style={{ fill: '#f3f8f5', opacity: '0.43' }} />
                        <rect x="116.05" y="98.39" width="0.99" height="50.47" style={{ fill: '#f3f8f5', opacity: '0.43' }} />
                        <rect x="118.24" y="98.39" width="0.99" height="50.47" style={{ fill: '#f3f8f5', opacity: '0.43' }} />
                        <rect x="142.49" y="94.03" width="15.84" height="7.24" style={{ fill: '#e6f1f5' }} />
                        <rect x="290.15" y="56.21" width="33.03" height="92.65" style={{ fill: '#e6f1f5' }} />
                        <rect x="296.18" y="74.5" width="20.03" height="74.05" style={{ fill: '#d5daee' }} />
                        <polygon points="76.2 83.19 74.22 95.03 74.22 122.74 72.51 122.74 72.51 109.53 67.38 109.53 67.38 94.7 61.92 94.7 61.92 73.07 52.9 73.07 52.9 68.82 51.01 68.82 51.01 73.07 47.45 73.07 47.45 77.88 45.56 77.88 45.56 65.4 41.86 65.4 41.86 148.86 84.56 148.86 84.56 91.25 83.2 83.39 76.2 83.19" style={{ fill: '#d9e0f0' }} />
                        <rect x="99.45" y="100.12" width="8.02" height="48.74" style={{ fill: '#e6f1f5' }} />
                        <rect x="123.42" y="86.3" width="6.05" height="62.56" style={{ fill: '#e6f1f5' }} />
                    </svg>
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-6 my-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                        {/* 1 card */}
                        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transition duration-150 ease-in-out transform hover:scale-110 ">

                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Giao diện thân thiện</p>
                                <div className="flex space-x-2 text-gray-900 text-sm">
                                    {/* svg  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p>Dễ dùng trên MOBILE lẫn PC</p>
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    {/* svg  */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p>1 Weeks Left</p> */}
                                </div>
                                <div className="border-t-2" />
                                <div className="flex justify-between">
                                    {/* <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Team Member</p>
                                        <div className="flex space-x-2">
                                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-6 h-6 rounded-full" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" className="w-6 h-6 rounded-full" />
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" className="w-6 h-6 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Progress</p>
                                        <div className="text-base text-gray-400 font-semibold">
                                            <p>34%</p>
                                        </div>
                                    </div> */}
                                    <img className="w-32 mx-auto" src="images/tv.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* 2 card */}
                        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transition duration-150 ease-in-out transform hover:scale-110">

                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Cài đặt đơn giản</p>
                                <div className="flex space-x-2 text-gray-900 text-sm">
                                    {/* svg  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p>Ai cũng có thể sử dụng</p>
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    {/* svg  */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p>3 Weeks Left</p> */}
                                </div>
                                <div className="border-t-2 " />
                                <div className="flex justify-between">
                                    {/* <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Team Member</p>
                                        <div className="flex space-x-2">
                                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-6 h-6 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Progress</p>
                                        <div className="text-base text-gray-400 font-semibold">
                                            <p>76%</p>
                                        </div>
                                    </div> */}
                                    <img className="w-32 mx-auto my-2" src="images/settings.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* 3 card */}
                        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transition duration-150 ease-in-out transform hover:scale-110">

                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Tương tác dễ dàng</p>
                                <div className="flex space-x-2 text-gray-900 text-sm">
                                    {/* svg  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p>Phù hợp với mọi người</p>
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    {/* svg  */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p>2 Days Left</p> */}
                                </div>
                                <div className="border-t-2 " />
                                <div className="flex justify-between">
                                    {/* <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Team Member</p>
                                        <div className="flex space-x-2">
                                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-6 h-6 rounded-full" />
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" className="w-6 h-6 rounded-full" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" className="w-6 h-6 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Progress</p>
                                        <div className="text-base text-gray-400 font-semibold">
                                            <p>4%</p>
                                        </div>
                                    </div> */}
                                    <img className="w-32 mx-auto" src="images/action.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* 4 card */}
                        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transition duration-150 ease-in-out transform hover:scale-110">

                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Gia tăng tương tác</p>
                                <div className="flex space-x-2 text-gray-900 text-sm">
                                    {/* svg  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p>Khách hàng hài lòng hơn</p>
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    {/* svg  */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p>1 Month Left</p> */}
                                </div>
                                <div className="border-t-2 " />
                                <div className="flex justify-between">
                                    {/* <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Team Member</p>
                                        <div className="flex space-x-2">
                                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-6 h-6 rounded-full" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" className="w-6 h-6 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Progress</p>
                                        <div className="text-base text-gray-400 font-semibold">
                                            <p>90%</p>
                                        </div>
                                    </div> */}
                                    <img className="w-32 mx-auto my-2" src="images/touch-screen.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <style dangerouslySetInnerHTML={{ __html: "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')" }} />
                    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">

                        <div style={{ backgroundImage: `url("images/bg3.jpg")` }} className="w-full bg-white bg-fixed border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                            <div className="w-full max-w-6xl mx-auto">
                                <div className="text-center max-w-xl mx-auto">
                                    <h1 className="text-6xl md:text-7xl font-bold mb-5 text-black animate-pulse">Mọi người <br />Nói gì về Fpolysu.</h1>
                                    <h3 className="text-xl mb-5 font-medium">Một tiện ích tuyệt vời.</h3>
                                    <div className="text-center mb-10">
                                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
                                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
                                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
                                    </div>
                                </div>
                                <div className="-mx-3 md:flex items-start">
                                    <div className="px-3 md:w-1/3">

                                        <div className=" w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-10 transform hover:-translate-y-4 hover:scale-110 transition-transform duration-500 ease-in-out">
                                            <div className="w-full flex mb-4 items-center">
                                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-bold text-sm uppercase text-gray-600">Bình Lê.</h6>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Quá tuyệt vời và thuận tiện cho website của tôi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                            </div>
                                        </div>
                                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-10 transform hover:-translate-y-4 hover:scale-110 transition-transform duration-500 ease-in-out">
                                            <div className="w-full flex mb-4 items-center">
                                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-bold text-sm uppercase text-gray-600">Tùng Lê.</h6>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Từ khi biết đến Polysu tương tác trên website tôi tăng đáng kể.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 md:w-1/3">
                                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-10 transform hover:-translate-y-4 hover:scale-110 transition-transform duration-500 ease-in-out">
                                            <div className="w-full flex mb-4 items-center">
                                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-bold text-sm uppercase text-gray-600">Tùng Lâm.</h6>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Polysu hỗ trợ rất tốt cho tôi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                            </div>
                                        </div>
                                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-10 transform hover:-translate-y-4 hover:scale-110 transition-transform duration-500 ease-in-out">
                                            <div className="w-full flex mb-4 items-center">
                                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-bold text-sm uppercase text-gray-600">Duy Lê.</h6>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Hoàn toàn hài lòng về công dụng của Polysu.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 md:w-1/3">
                                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-10 transform hover:-translate-y-4 hover:scale-110 transition-transform duration-500 ease-in-out">
                                            <div className="w-full flex mb-4 items-center">
                                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-bold text-sm uppercase text-gray-600">Thành Nam.</h6>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Từ khi biết đến Polysu khách hàng truy cập website của chúng tôi cảm thấy rất thuận tiện!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                            </div>
                                        </div>
                                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-10 transform hover:-translate-y-4 hover:scale-110 transition-transform duration-500 ease-in-out">
                                            <div className="w-full flex mb-4 items-center">
                                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-bold text-sm uppercase text-gray-600">Bá Vinh.</h6>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Tùy chỉnh nút trên website rất dễ dàng giao diện dễ nhìn, quá tốt!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="text-gray-700 body-font flex md:flex-row flex-col items-center bg-white mx-20">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Đăng ký nhận thông tin từ nhà phát triển</h1>
                        {/* <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        <div className="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200">
                            <input className="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0" placeholder="Email" type="email" />
                            <button className="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100 opacity-10 transform hover:opacity-100 hover:bg-purple-500 hover:scale-125  transition-opacity duration-500 ease-in-out">Gửi</button>
                        </div>
                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Luôn đồng hành với chúng tôi.</p>
                        <div className="flex lg:flex-row md:flex-col">
                            <a className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full hover:bg-blue-300 transform hover:-translate-y-4 transition-transform duration-500 ease-in-out">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full hover:bg-blue-600 transform hover:-translate-y-4 transition-transform duration-500 ease-in-out">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full hover:bg-blue-400 transform hover:-translate-y-4 transition-transform duration-500 ease-in-out">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full hover:bg-red-600 transform hover:-translate-y-4 transition-transform duration-500 ease-in-out">
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-5/6 origin-center ">
                        <img className="object-cover object-center" alt="hero" src="https://images.unsplash.com/photo-1518272417499-b6ebd5fab96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                    </div>
                </div>


                <div className="py-10 m-20 bg-pink-400 transform -skew-y-3 shadow-2xl">
                    <div className=" bg-purple-500 rounded-md transform skew-y-6 md:skew-2 shadow-2xl">
                        <div className="mx-auto container pt-12 lg:pt-32 px-4 xl:px-12 2xl:px-4 py-5">
                            <div className=" lg:pt-16 pt-6 pb-6 px-2 lg:px-0 lg:pb-12 border rounded-lg border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
                                <h2 className="text-[24px] md:text-3xl lg:text-6xl font-bold sm:font-black leading-tight tracking-tight text-center text-gray-900 dark:text-gray-50 w-11/12 lg:w-4/5">Miễn phí trọn đời</h2>
                                <div className="block md:flex md:justify-center md:space-x-8 md:px-14 mx-5 gap-5">
                                    {/* box-1 */}
                                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                                        <div className="w-sm">
                                            <img className="w-64 mx-auto" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />

                                            <div className="mt-4 text-green-600 text-center">
                                                <h1 className="text-xl font-bold">Tính tương thích cao, tùy biến đa dạng.</h1>
                                                <p className="mt-4 text-gray-600">Nhiều theme với nhiều tuỳ biến màu sắc khác nhau, tương thích với mọi định dạng Website cả trên PC & Mobile.</p>
                                                {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* box-2 */}
                                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                                        <div className="w-sm">
                                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
                                            <div className="mt-4 text-green-600 text-center">
                                                <h1 className="text-xl font-bold">Tối ưu hoá doanh thu, Hiểu khách hàng tiềm năng.</h1>
                                                <p className="mt-4 text-gray-600">Tăng tới 50% tỷ lệ chuyển đổi từ khách hàng. Đo đạc hành vi trên trang của khách hàng, từ đó phân tích thói quen mua hàng. </p>
                                                {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* box-3 */}
                                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                                        <div className="w-sm">
                                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                                            <div className="mt-4 text-green-600 text-center">
                                                <h1 className="text-xl font-bold">Theo dõi, tối ưu chiến dịch quảng cáo.</h1>
                                                <p className="mt-4 text-gray-600">Đồng bộ hoá dữ liệu khách hàng có được với các chiến dịch quảng cáo, từ đó tối đa hoá hiệu quả dựa trên chi phí bỏ ra.</p>
                                                {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                                        <div className="w-sm">
                                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                                            <div className="mt-4 text-green-600 text-center">
                                                <h1 className="text-xl font-bold">Happy Customers</h1>
                                                <p className="mt-4 text-gray-600">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                                        <div className="w-sm">
                                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                                            <div className="mt-4 text-green-600 text-center">
                                                <h1 className="text-xl font-bold">Happy Customers</h1>
                                                <p className="mt-4 text-gray-600">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



                <div className="lg:px-20 pb-12">
                    <h2 className="text-[24px] lg:text-6xl text-center font-bold sm:font-black leading-tight text-gray-900 dark:text-gray-50 ls-2 tracking-tight">Cập nhật thông tin mới nhất với Polysu</h2>
                    <div className="mt-4 lg:mt-8 flex justify-center w-full">
                        <p className="leading-7 w-full md:w-11/12 lg:w-9/12 text-center text-gray-600 dark:text-gray-400">Trải nghiệm của khách hàng luôn là ưu tiên hàng đầu.</p>
                    </div>
                    <div className="mt-24">
                        <div className="flex flex-col flex-col-reverse md:flex-row items-center w-full justify-between bg-yellow-200 rounded-xl transform skew-y-3">
                            <div className="md:pr-12 xl:pr-0 mt-8 md:mt-0 w-full md:w-7/12 text-center md:text-left">
                                <h3 className="text-xl lg:text-4xl font-bold leading-9 text-gray-900 dark:text-gray-50 tracking-tight">Dự kiến ngày ra mắt Polysu</h3>
                                <p className="text-base lg:text-xl leading-7 text-gray-600 dark:text-gray-400 mt-4 w-full xl:w-10/12">Thông tin ra mắt.</p>
                                {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button> */}

                            </div>
                            <img className=" animate-bounce w-144 h-144 sm:h-auto sm:w-1/2 lg:w-auto mx-auto md:mx-0 md:pl-6 xl:w-400" src="https://tailwinduikit.com/img/home/cross-browser.svg" alt="tailwind css components and templates" />
                        </div>
                        <div className="mt-24 flex flex-col md:flex-row items-center w-full justify-between bg-purple-200 rounded-xl transform -skew-y-3">
                            <img className="animate-bounce w-192 h-144 sm:h-auto sm:w-1/2 lg:w-auto mx-auto md:mx-0 md:pr-6 xl:w-400" src="https://tailwinduikit.com/img/home/tested.svg" alt="tailwind css components and templates" />
                            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
                                <h3 className="text-xl lg:text-4xl font-bold leading-9 text-gray-900 dark:text-gray-50 tracking-tight">Những tính năng nổi bật nhất mới ra mắt</h3>
                                <p className="text-base lg:text-xl leading-7 text-gray-600 dark:text-gray-400 mt-4">Thông tin tính năng.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-col-reverse md:flex-row items-center mt-24 w-full justify-between bg-red-200 rounded-xl transform skew-y-3">
                            <div className="md:pr-12 xl:pr-0 mt-8 md:mt-0 w-full md:w-7/12 text-center md:text-left"><h3 className="text-xl lg:text-4xl font-bold leading-9 text-gray-900 dark:text-gray-50 tracking-tight">Thống kê của Polysu</h3>
                                <p className="text-base lg:text-xl leading-7 text-gray-600 dark:text-gray-400 mt-4 w-full xl:w-10/12">Thông tin thống kê.</p>
                            </div>
                            <img className="animate-bounce w-182 sm:w-1/2 lg:w-auto h-157 sm:h-auto mx-auto md:mx-0 md:pl-6 xl:w-400" src="https://tailwinduikit.com/img/home/accessibility.svg" alt="tailwind css components and templates" />
                        </div>
                        <div className="mt-24 flex flex-col md:flex-row items-center w-full justify-between bg-blue-200 rounded-xl transform -skew-y-3">
                            <img className="animate-bounce w-187 sm:w-1/2 lg:w-auto h-187 sm:h-auto  mx-auto md:mx-0 md:pr-6 xl:w-400" src="https://tailwinduikit.com/img/home/responsive.svg" alt="tailwind css components and templates" />
                            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
                                <h3 className="text-xl lg:text-4xl font-bold leading-9 text-gray-900 dark:text-gray-50 tracking-tight">Những thành tựu Polysu</h3><p className="text-base lg:text-xl leading-7 text-gray-600 dark:text-gray-400 mt-4">Thông tin thành tựu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-10 py-6 shadow-xl ">
                    <div className="mx-10 bg-purple-300 rounded-lg my-16 p-16 bg-indigo-400">
                        <h1 className="text-3xl font-medium mb-2">Luôn mang lại cảm giác hài lòng nhất cho khách hàng</h1>
                        <h2 className="font-medium text-lg text-indigo-400 mb-4 uppercase tracking-wide">Góp ý đến nhà phát triển</h2>
                        {/* <span className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.</span>  */}

                        <div className="bg-white shadow rounded-lg p-6 ">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label htmlFor="name" className="bg-white text-gray-600 px-1">Tên bạn là</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input id="name" autoComplete="false" tabIndex={0} type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                                    </p>
                                </div>
                                <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label htmlFor="lastname" className="bg-white text-gray-600 px-1">Email</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input id="email" autoComplete="false" tabIndex={0} type="email" className="py-1 px-1 outline-none block h-full w-full" />
                                    </p>
                                </div>
                                <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label htmlFor="username" className="bg-white text-gray-600 px-1">Số điện thoại</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input id="phone" autoComplete="false" tabIndex={0} type="text" className="py-1 px-1 outline-none block h-full w-full" />
                                    </p>
                                </div>
                                <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label htmlFor="password" className="bg-white text-gray-600 px-1">Chủ đề góp ý</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input id="text" autoComplete="false" tabIndex={0} type="text" className="py-1 px-1 outline-none block h-full w-full" />
                                    </p>
                                </div>

                            </div>
                            <span className="text-gray-600 my-5" >Nội dung cụ thể</span>
                            <textarea className="p-4 w-full border h-32 focus-within:border-blue-500 focus-within:text-blue-500" name="" id="" cols="30" rows="10"></textarea>
                            <div className="border-t mt-6 pt-3">
                                <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                                    Gửi
                                </button>
                            </div>
                        </div>



                    </div>

                </div>



            </div>
            <footer class="py-6 bg-gray-300 text-coolGray-900">
                <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                    <div class="grid grid-cols-12">
                        <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <a href="#" class="flex justify-center space-x-3 md:justify-start">
                                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 rounded-full text-coolGray-50">
                                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                    </svg>
                                </div>
                                <span class="self-center text-2xl font-semibold">FPOLYSU</span>
                            </a>
                        </div>
                        <div class="col-span-6 text-center md:text-left md:col-span-3">
                            <p class="pb-1 text-lg font-medium">Category</p>
                            <ul>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-6 text-center md:text-left md:col-span-3">
                            <p class="pb-1 text-lg font-medium">Category</p>
                            <ul>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:text-violet-600">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid justify-center pt-6 lg:justify-between">
                        <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2021 All rights reserved</span>
                            <a href="#">
                                <span>Privacy policy</span>
                            </a>
                            <a href="#">
                                <span>Terms of service</span>
                            </a>
                        </div>
                        <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>
                            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                </svg>
                            </a>
                            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


