import React from "react";
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const Navbar = () => {
  return (
    <>
      <div className="flex h-screen bg-green-300">
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center bg-gray-300 p-5 shadow-2xl">
            <a href="#">
              <h2 className="text-2xl font-extrabold text-red-600 ml-10">
                Logo
              </h2>
            </a>
            {/* <div className="flex">Right</div> */}
            <div className="p-2 w-64">
              <div className="bg-white flex items-center rounded-full shadow-xl h-18">
                <input
                  className="rounded-l-full w-full px-6 text-gray-700 leading-tight focus:outline-none"
                  id="search"
                  type="text"
                  placeholder="Search"
                />
                <div className="p-2">
                  <button
                    className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                    type="submit"
                  >
                    icon
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="flex h-full ">
            <nav className="flex w-1/3 h-full bg-gray-100 overflow-y-auto pb-10">
              <div className="w-full flex mx-auto px-6 py-8">
                {/* <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Sidebar</div> */}
                {/* <div className="flex items-center space-x-4 p-2 mb-5">
                                        <img className="w-48 mx-auto" src="images/isn.png" alt="" />
                                    </div> */}
                <ul className="space-y-2 text-2xl mr-10">
                  <span>Tong quan</span>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span>Noi dung dau tien cua trang</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 2</span>
                    </a>
                  </li>
                  <div className="pt-10">
                    <span>Cach su dung</span>
                  </div>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 3</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 4</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 5</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className=" text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 6</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 7</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2 font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 8</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 9</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 9</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span className="text-gray-600">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>
                      <span>Noi dung 9</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
              <h2 className="flex py-4 px-4 sticky top-0 border-b bg-white items-center justify-between">
                <h1 className="font-bold tracking-wide text-4xl my-5 ml-5 ">
                  Noi dung 1
                </h1>
                <div className="text-blue-400">
                  <i className="fa fa-dot-circle-o" />
                </div>
              </h2>
              <div className="flex w-full mx-auto px-6 py-8">
                <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    <h2>
                      <a className="px-5" href="#cau1">
                        abc
                      </a>
                      <span>post</span>
                    </h2>
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-gray-100 border-b border-gray-600">
                    Post
                  </div>
                  <div className="row my-5    ">
                    <div className="w-full mx-auto">
                      <div className="sm:grid grid-cols-4 gap-10 mx-auto px-16">
                        <div className="col-start-1 col-end-3 my-2">
                          <a href="#">
                            <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                              <h3 className="text-2xl mb-3 font-semibold inline-flex">
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
                              <h3 className="text-2xl mb-3 font-semibold inline-flex ">
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
            <nav className="flex w-1/5 h-full bg-white">
              <div className="w-full flex mx-auto px-6 py-8">
                <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                  <ul>
                    <span>contents</span>
                    <li>
                      <a href="#cau1">abcssssss</a>
                    </li>
                    <li>
                      <a href="#cau1">abc</a>
                    </li>
                    <li>
                      <a href="#cau1">abc</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);\n}\n::-webkit-scrollbar-track {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: inset 7px 10px 12px #f0f0f0;\n}\n",
        }}
      />
    </>
  );
};

export default Navbar;
