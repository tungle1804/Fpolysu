import React from 'react'
import Hssd1 from '../Hssd1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
const index = () => {
  return (
    <div>
     {/* component */}
<div className="h-screen flex flex-col">
  <header className="flex flex-shrink-0">
    <div className="flex-shrink-0 px-4 py-3  w-64">
      <button className="flex items-center block w-full">
      <img className="h- w-20 mt-1 rounded " src="https://fpt.com.vn/Content/home/images/icon/logo-ft.png" />
        <span className="ml-4 text-2xl font-medium text-black">PoLySu</span>
      </button>
    </div>
    <div className="flex-1 flex  px-6 items-center justify-between">
      <nav>
        <a href="#" className="hover:bg-blue-300 rounded-lg  inline-block text-2x1 font-medium text-black px-3 py-2 leading-none">Trang Chủ</a>
        <a href="#" className="ml-2 hover:bg-blue-300 rounded-lg inline-block text-2x1 font-medium text-black px-3 py-2 leading-none">Đăng nhập</a>
        <a href="#" className="hover:bg-blue-300 rounded-lg inline-block text-2x1 font-medium text-black px-3 py-2 leading-none">Đăng ký</a>
      </nav>
      <div className="flex items-center">
        <span className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center">
            <i className="fa fa-search h-5 w-5 px-2" style={{color: 'white'}} aria-hidden="true" />
          </span>
          <input className="focus:bg-white focus:text-gray-900 focus:placeholder-gray-700 pl-10 pr-4 py-2 leading-none block w-full  rounded-lg text-sm placeholder-gray-400 text-white" placeholder="Search" />
        </span>
        <button className="ml-6 text-gray-400 hover:text-gray-200">
          <i className="fa fa-bell-o h-5 w-5 fill-current" aria-hidden="true" style={{color: '#fff'}} />
        </button>
        <button className="ml-6 text-gray-400 hover:text-gray-200">
          <i className="fa fa-question-circle-o h-5 w-5 fill-current" aria-hidden="true" style={{color: '#fff'}} />
        </button>
      </div>
    </div>
  </header>
  <div className="flex overflow-0-hidden">
    <div className="w-64 p-6 bg-gray-100 overflow-y-auto ">
      <nav>
        <h1 className="font-semibold text-2xl text-gray-600 uppercase tracking-wide">
          <Link to="/hssd1" className=" text-gray-900 hover:bg-yellow-300" >Polysu là gì?</Link>
        </h1>
        <div className="mt-3">
          <a href className="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between  rounded-lg">
            <span>
              <i className="h-6 w-6 fa fa-envelope-o fill-current text-gray-700 " aria-hidden="true" />
            </span></a><a href="Tongquan.html" className=" text-gray-900 hover:bg-yellow-300" target="page">Tổng quan &amp; Vai trò</a>
        </div>
        <div className="mt-8">
          <span className="font-semibold text-1xl text-gray-600 uppercase tracking-wide">Sử dụng Polysu</span>
          <div className="mt-3">
            <a href className="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between  rounded-lg">
              <span>
              </span></a><a href="Taomenu.html" className=" text-gray-900 hover:bg-yellow-300" target="page">Tạo Menu</a>
          </div>
          <div className="mt-3">
            <a href className="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between  rounded-lg">
              <span>
              </span></a><a href="//" className=" text-gray-900 hover:bg-yellow-300" target="page">Cấu hình nút</a>
          </div>
          <div className="mt-3">
            <a href className="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between  rounded-lg">
              <span>
              </span></a><a href="//" className=" text-gray-900 hover:bg-yellow-300" target="page">Cài đặt Polysu lên website </a>
          </div>
        </div>
      </nav>
    </div>
    <main>
      <div>
        {/* <iframe width={1000} height={800} src="Polysu.js" name="page" frameBorder={0} className="border-none"  /> */}
          <Router>
            
              <Route path="/hssd1">
                <Hssd1></Hssd1>
              </Route>
            
          </Router>

      </div>
    </main>
  </div>
</div>

    </div>
  )
}

export default index
