import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="flex-col border-r mt-16 w-2/7 bg-gray-100 h-auto">
        <div className="flex pt-10">
          <div className="pl-10">
            <img
              className="h-2/5 w-20"
              src="https://fpt.com.vn/Content/home/images/icon/logo-ft.png"
              alt="xxx"
            />
          </div>

          <div className="flex-col">
            <div className="items-center cursor-pointer px-2  mb-1 text-sm font-medium text-gray-700 hover:underline">
              <h1 className="text-xl">PolySu</h1>
            </div>
            <div className="px-2 text-xs leading-none text-gray-600">
              FPT Polytechnic
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-5" />
        <div className="overflow-auto" style={{ height: "430px" }}>
          <div className="flex-col px-3">
            <Link to="/admin">
              <div className="items-center ml-2 py-4  mb-1 text-sm font-medium text-gray-700">
                Tổng Quan
              </div>
            </Link>
            <Link to="/admin/list-menu">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Quản lí Menu
              </div>
            </Link>
            <Link to="/admin/report-interactive">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Thông Kê Tương tác
              </div>
            </Link>
            <Link to="/admin/report-menu">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Thông kê menu
              </div>
            </Link>
            <Link to="/admin/report-button">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Thống kê nút
              </div>
            </Link>
            <Link to="/admin/report-action">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
               Thống kê lịch sử tương tác
              </div>
            </Link>
            <Link to="/admin/customer-management">
              <div className="py-3 px-3 bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Quản Lí Khách Hàng
              </div>
            </Link>

            <Link to="/admin/integrared">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Tích Hợp
              </div>
            </Link>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-cogs text-blue-700"></i>
              <span className="text-gray-900 pl-3">Cài Đặt Kết Nối</span>
            </div>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer mb-3">
              <i className="fas fa-book-open text-blue-700"></i>
              <span className="text-gray-900 pl-3">Hướng Dẫn Sử Dụng</span>
            </div>
            <div className="border border-gray-300" />
            <Link to="/admin/upgrade-account" style={{ textDecoration: "none" }}>
              <div className="py-3 px-4  hover:bg-blue-100 cursor-pointer mt-3">
                <i className="fas fa-layer-group text-blue-700"></i>
                <span className="text-gray-900 pl-3">Nâng Cấp Tài Khoản</span>
              </div></Link>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-cloud-download-alt text-blue-700"></i>
              <span className="text-gray-900 pl-3">Chợ Ứng Dụng</span>
            </div>
            <Link to="/admin/payment-history" style={{ textDecoration: "none" }}>
              <div className="py-3 px-4 mb-3 hover:bg-blue-100 cursor-pointer">
                <i className="fab fa-cc-amazon-pay text-blue-700"></i>
                <span className="text-gray-900 pl-3">Lịch Sử Thanh Toán</span>
              </div>
            </Link>
            <div className="border border-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
}
