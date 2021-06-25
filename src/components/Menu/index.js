import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ButtonContext } from "../../service/ButtonContext";

export default function Menu() {
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
              PolyTu
            </div>
            <div className="px-2 text-xs leading-none text-gray-600">
              FPT Polytechnic
            </div>
          </div>
        </div>
        {/* <div className=" px-3">
                            <div className="flex py-2 px-4 cursor-pointer hover:bg-blue-100 rounded">
                                <svg className="h-3 w-3 mt-1 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 447.243 447.243">
                                    <path fillRule="evenodd" d="M420.361 192.229a31.967 31.967 0 00-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0018.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 00-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 002.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 00-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z" />
                                </svg>
                                <div className="ml-5 text-sm text-gray-600  font-normal antialiased tracking-normal">
                                    Back to project
          </div>
                            </div>
                        </div> */}
        <div className="border border-gray-300 mt-5" />
        <div className="overflow-auto" style={{ height: "430px" }}>
          <div className="flex-col px-3">
            <Link to="/admin">
              {" "}
              <div className="items-center ml-2 py-4  mb-1 text-sm font-medium text-gray-700">
                {" "}
                Tổng Quan
              </div>
            </Link>
            <Link to="/admin/list-menu">
              {" "}
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Quản lí Menu
              </div>
            </Link>
            <Link to="/admin/report">
              {" "}
              <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
                Thông Kê
              </div>
            </Link>

            <div className="py-3 px-3 bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Quản Lí Khách Hàng
            </div>
            <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Tích Hợp
            </div>
            <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Cài Đặt Kết Nối
            </div>
            <div className="py-3 px-3 hover:bg-blue-100 cursor-pointer rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Hướng Dẫn Sử Dụng
            </div>


            <div className="border border-gray-300 mt-5" />
            <Link to="/admin/upgrade-account"><div className="cursor-pointer py-3 px-3  hover:bg-blue-100 rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Nâng Cấp Tài Khoản
            </div></Link>
            <div className="cursor-pointer py-3 px-3  hover:bg-blue-100 rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Chợ Ứng Dụng
            </div>
            <Link to="payment-history"><div className="cursor-pointer py-3 px-3 mb-5 hover:bg-blue-100 rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Lịch Sử Thanh Toán
            </div></Link>
            <div className="border border-gray-300 mt-5" />
            <div className="cursor-pointer py-3 px-3 mb-5 hover:bg-blue-100 rounded text-sm text-gray-600  font-normal antialiased tracking-normal">
              Kiểm Tiền Từ PolyTu
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
