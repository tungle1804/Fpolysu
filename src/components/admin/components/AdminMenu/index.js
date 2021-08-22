import React  from "react";
import { Link } from "react-router-dom";


export default function AdminMenu() {
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
              <h1 className = "text-xl">PolySu</h1>
            </div>
            <div className="px-2 text-xs leading-none text-gray-600">
              FPT Polytechnic
            </div>
          </div>
        </div>

        <div className="border border-gray-300 mt-5" />
        <div className="overflow-auto" style={{ height: "530px" }}>
          <div className="flex-col py-3">
            <Link to="/admin/manage/dashboard" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-tachometer-alt text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Tổng Quan</span>
                </div>
            </Link>
            <Link to="/admin/manage/staffs" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-chalkboard-teacher text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Quản Lý Nhân Viên</span>
              </div>
            </Link>
            <Link to="/admin/manage/customers" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-users text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Quản Lý Khách Hàng</span>
              </div>
            </Link>
            <Link to="/admin/manage/services-fee" style = {{textDecoration:"none"}}>
            <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
            <i className="fas fa-money-check-alt text-blue-700"></i>
              <span className = "text-gray-900 pl-3">Quản Lý Phí Dịch Vụ</span>
            </div>
            </Link>
            <Link to="/admin/manage/data-of-customers" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-database text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Quản Lý Dữ Liệu Khách Hàng</span>
              </div>
            </Link>
            <Link to="/admin/manage/statistical" style = {{textDecoration:"none"}}>
              <div className="py-3 px-4 hover:bg-blue-100 cursor-pointer">
              <i className="fas fa-chart-bar text-blue-700"></i>
                <span className = "text-gray-900 pl-3">Tổng Hợp Thống Kê</span>
              </div>
            </Link>
            <div className="" />
          </div>
        </div>
      </div>
    </>
  );

}
