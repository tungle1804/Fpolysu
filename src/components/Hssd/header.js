import React from 'react';
import { useHistory } from 'react-router';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {

  const history = useHistory();

  return (
    <>
      <a>
        <div className="font-black my-auto px-16 border-r-2 border-purple-500 border-opacity-50 lg:block hidden text-blue-900 text-4xl flex items-start">
          Polysu<span className="w-3 h-3 rounded-full bg-purple-600 ml-2" />
        </div>
        <div className="block lg:hidden ml-3">
          <button aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            id="nav" className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </a>
      <div className="flex mr-3">
        <div className="relative mx-auto my-auto text-gray-600 lg:block hidden">
          <div className="font-sans text-black bg-white flex items-center justify-center m-3 rounded w-52">
            <div className="border rounded overflow-hidden flex">
              <input type="text" className="px-4 py-2" placeholder="Search..." />
              <button className="flex items-center justify-center px-4 border-l">
                <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex my-3 ml-3">
          <button onClick={() => history.push('/login')} className="flex-1 md:w-auto w-16 py-2 px-3 mx-2 hover:text-white bg-red-500 rounded transition duration-150 ease-in-out transform hover:scale-110 bg-emerald-600 text-black font-semibold">
            Đăng nhập
          </button>
          <button onClick={() => history.push('/resgiter')} className="flex-1 py-2 w-40 px-3 mx-2 hover:text-white bg-red-500 rounded transition duration-150 ease-in-out transform hover:scale-110 bg-emerald-600 text-black font-semibold">
            Đăng ký
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;


