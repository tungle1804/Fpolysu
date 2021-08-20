import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
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
            <div className="items-center cursor-pointer px-2  mb-1 text-sm font-medium text-gray-700 hover:underline">
            <h1 className = "text-xl">PolySu</h1>
            </div>
            <div className="px-2 text-xs leading-none text-gray-600">
              FPT Polytechnic
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-5" />
        <div className="overflow-auto" style={{ height: "730px" }}>
          <div className="flex-col py-3">
            <Link to="/admin" style = {{textDecoration:"none"}}>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-tachometer-alt text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Tổng Quan</span>
              </div>
            </Link>
            <Link to="/admin/list-menu" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
                <i className="fas fa-bars text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Quản Lí Menu</span>
              </div>
            </Link>
            <Link to="/admin/report" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-chart-pie text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Thống Kê</span>
              </div>
            </Link>
            <Link to="/admin/customer-management" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-users text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Quản Lí Khách Hàng</span>
            </div>
            </Link>

            <Link to="/admin/integrared" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-calendar-check text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Tích Hợp</span>
              </div>
            </Link>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
            <i className="fas fa-cogs text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Cài Đặt Kết Nối</span>
            </div>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer mb-3">
            <i className="fas fa-book-open text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Hướng Dẫn Sử Dụng</span>
            </div>
            <div className="border border-gray-300" />
            <Link to="/admin/upgrade-account" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4  hover:bg-blue-100 cursor-pointer mt-3">
              <i className="fas fa-layer-group text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Nâng Cấp Tài Khoản</span>
            </div></Link>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
            <i className="fas fa-cloud-download-alt text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Chợ Ứng Dụng</span>
            </div>
            <Link to="/admin/payment-history" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 mb-3 hover:bg-blue-100 cursor-pointer">
              <i className="fab fa-cc-amazon-pay text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Lịch Sử Thanh Toán</span>
            </div>
            </Link>
            <div className="border border-gray-300" />
          </div>
        </div>
      </div>
    </>
  );

}
