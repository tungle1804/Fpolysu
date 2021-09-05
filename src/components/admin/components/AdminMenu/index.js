import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function AdminMenu() {

  var click = 0;
  const handleClickStatistical = () => {
    click ++;
    const divStatistical = document.getElementById("divStatistical");
    const iconSvg = document.getElementById("iconSvg");
    if(click %2 != 0 ){
      divStatistical.style = "display: block";
      iconSvg.style = "transform: rotate(0deg)"
    }else {
      divStatistical.style = "display: none";
      iconSvg.style = "transform: rotate(-90deg)"
    }
  }
  return (
    <>
      <div className="flex-col border-r mt-16 w-1/5 bg-gray-100 h-auto">
        <div className="flex pt-10">
          <div className="pl-10">
            <img
              className="h-2/5 w-20"
              src="https://fpt.com.vn/Content/home/images/icon/logo-ft.png"
            />
          </div>
          <div className="flex-col">
            <div className="items-center cursor-pointer px-2 text-sm font-medium text-gray-700 hover:underline">
              <h1 className="text-xl">PolySu</h1>
            </div>
            <div className="px-2 text-xs leading-none text-gray-600">
              FPT Polytechnic
            </div>
          </div>
        </div>

        <div className="border border-gray-300 mt-5" />
        <div className="overflow-auto" style={{ height: "530px" }}>
          <div className="flex-col py-3">
            <Link to="/admin/manage/dashboard" style={{ textDecoration: "none" }}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <i className="fas fa-tachometer-alt text-blue-700"></i>
                <span className="text-gray-900 pl-3">Tổng Quan</span>
              </div>
            </Link>
            <Link to="/admin/manage/staffs" style={{ textDecoration: "none" }}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <i className="fas fa-chalkboard-teacher text-blue-700"></i>
                <span className="text-gray-900 pl-3">Quản Lý Nhân Viên</span>
              </div>
            </Link>
            <Link to="/admin/manage/customers" style={{ textDecoration: "none" }}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <i className="fas fa-users text-blue-700"></i>
                <span className="text-gray-900 pl-3">Quản Lý Khách Hàng</span>
              </div>
            </Link>
            <Link to="/admin/manage/services-fee" style={{ textDecoration: "none" }}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <i className="fas fa-money-check-alt text-blue-700"></i>
                <span className="text-gray-900 pl-3">Quản Lý Phí Dịch Vụ</span>
              </div>
            </Link>
            {/* <Link to="/admin/manage/data-of-customers" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-database text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Quản Lý Dữ Liệu Khách Hàng</span>
              </div>
            </Link> */}
            {/* <Link to="/admin/manage/statistical" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-chart-bar text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Tổng Hợp Thống Kê</span>
              </div>
            </Link> */}
            <div className = "">
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer flex" onClick = {handleClickStatistical}>
                <div className="mr-5">
                  <i className="fas fa-chart-bar text-blue-700"></i>
                  <span className="text-gray-900 pl-3">Báo Cáo</span>
                </div>

                <div className="pt-1 ml-5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id = "iconSvg" style = {{transform: "rotate(-90deg)"}}>
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }} />
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div id ="divStatistical" className="bg-gray-100" style = {{display : "none"}}>
               <Link to="/admin/manage/statistical-customers" style = {{textDecoration:"none"}}>
               <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <span className="text-gray-900 pl-8">Báo cáo khách hàng</span>
                </div>
                </Link>
                <Link to="/admin/manage/statistical-revenue" style = {{textDecoration:"none"}}>
                <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <span className="text-gray-900 pl-8">Báo cáo doanh thu</span>
                </div>
                </Link>
              </div>
            </div>

            <div className="" />
          </div>
        </div>
      </div>
    </>
  );

}
