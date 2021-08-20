import React, { useEffect } from 'react'
import Hssd1 from '../Hssd1';
import Hssd2 from '../Hssd2';
import Hssd3 from '../Hssd3';

import Hssd5 from '../Hssd5';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
const Index = () => {

  return (
    <div>
      {/* component */}
      <Router>
        {/* component */}
        <div className="h-screen flex flex-col">
          <header className="flex flex-shrink-0">
            <div className="flex-shrink-0 px-4 py-3  w-64">
              <button className="flex items-center block w-full">
                <img className="h-8 w-8 rounded-full object-cover" src="https://fpt.com.vn/Content/home/images/icon/logo-ft.png" alt="" />
                <span className="ml-4 text-3xl font-medium text-black">Polysu</span>
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
                    <i className="fa fa-search h-5 w-5 px-2" style={{ color: 'white' }} aria-hidden="true" />
                  </span>
                  <input className="focus:bg-white focus:text-gray-900 focus:placeholder-gray-700 pl-10 pr-4 py-2 leading-none block w-full  rounded-lg text-sm placeholder-gray-400 text-white" placeholder="Search" />
                </span>
                <button className="ml-6 text-gray-400 hover:text-gray-200">
                  <i className="fa fa-bell-o h-5 w-5 fill-current" aria-hidden="true" style={{ color: '#fff' }} />
                </button>
                <button className="ml-6 text-gray-400 hover:text-gray-200">
                  <i className="fa fa-question-circle-o h-5 w-5 fill-current" aria-hidden="true" style={{ color: '#fff' }} />
                </button>
              </div>
            </div>
          </header>
          <div className="flex overflow-0-hidden">
            <div className="w-64 p-6 bg-gray-100 overflow-y-auto ">
              <nav>
                <h1 className="font-semibold text-lg text-gray-600 uppercase tracking-wide">
                  <Link to="/hssd1" className=" text-gray-900 hover:bg-yellow-300" >Polysu là gì?</Link>
                </h1>
                <div className="mt-3">
                  <a href className="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between  rounded-lg">
                    <span>
                      <i className="h-6 w-6 fa fa-envelope-o fill-current text-gray-700 " aria-hidden="true" />
                    </span></a>
                  <Link to="/hssd2" className=" text-gray-900 hover:bg-yellow-300" >Tổng quan &amp; Vai trò</Link>
                </div>
                <div className="mt-8">
                  <h2 className="font-semibold text-lg text-gray-600 uppercase tracking-wide">Sử dụng Polysu</h2>
                  <div className="mt-3">
                 
                  <Link to="/hssd3" className=" text-gray-900 hover:bg-yellow-300" >Tạo Menu</Link>
                </div>
                
                <div className="mt-3">
                  <Link to="/hssd5" className=" text-gray-900 hover:bg-yellow-300" >Cài đặt menu lên website</Link>
                </div>
                </div>
              </nav>
            </div>
            <main>
              <div>
                {/* //  <iframe width={1000} height={800} src="Polysu.html" name="page" frameBorder={0} /> */}


                <Switch>
                  <Route exact path="/hssd1">
                    <Hssd1></Hssd1>

                  </Route>
                  <Route exact path="/hssd2">
                    <Hssd2></Hssd2>

                  </Route>
                <Route exact path="/hssd3">
                  <Hssd3></Hssd3>
                </Route>
                <Route exact path="/hssd5">
                  <Hssd5></Hssd5>
                </Route>
               
                </Switch>

              </div>
            </main>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Index
