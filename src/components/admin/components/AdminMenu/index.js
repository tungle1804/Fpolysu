import React  from "react";
import { Link } from "react-router-dom";


export default function AdminMenu() {
  return (
    <>
      <div className="flex-col border-r mt-16 pl-5 w-1/5 bg-gray-100 h-auto">
        <div className="flex ml-3 py-8">
          <div className="h-8 w-8 rounded">
            <img
              className="h- w-20 mt-1 rounded "
              src="https://fpt.com.vn/Content/home/images/icon/logo-ft.png"
            />
          </div>
          <div className="flex-col">
            <div className="items-center cursor-pointer px-2  mb-1 text-sm font-medium text-gray-700 hover:underline">
              PolySu
            </div>
            <div className="px-2 text-xs leading-none text-gray-600">
              FPT Polytechnic
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-5" />
        <div className="overflow-auto" style={{ height: "430px" }}>
          <div className="flex-col px-3">
            <Link to="/admin/manage/dashboard">
              <div className="items-center ml-2 py-4  mb-1 text-sm font-medium text-gray-700">Tổng Quan</div>
            </Link>
            <Link to="/admin/manage/staffs">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Quản lý nhân viên
              </div>
            </Link>
            <Link to="/admin/manage/customers">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Quản lý khách hàng
              </div>
            </Link>
            <Link to="/admin/manage/services-fee">
            <div className="py-3 px-3 bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Quản Lí phí dịch vụ
            </div>
            </Link>
            <Link to="/admin/manage/data-of-customers">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Quản lý dữ liệu khách hàng
              </div>
            </Link>
            <Link to="/admin/manage/statistical">
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Tổng hợp thống kê
              </div>
            </Link>
            <div className="border border-gray-300 mt-5" />
          </div>
        </div>
      </div>
    </>
  );

}
