import React from "react";
import "./toggle.css";

export default function Dashboard() {
  return (
    <div className="mx-auto w-full">
      <div>
        {/*-===================== FIRST ROW CONTAINING THE  STATS CARD STARTS HERE =============================*/}
        <div className="flex justify-between rounded-lg bg-white py-10 p-6 w-full">
          {/*-== First Stats Container ====-*/}
          <div className="container mx-auto pr-4">
            <div className="w-auto bg-gray-100 max-w-xs mx-auto rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
              <div className="h-full py-4 bg-red-400 my-auto">
                <div className="flex justify-start ml-2">
                  <i class="fas fa-mouse-pointer fa-2x bg-white py-2 px-3 border-2 border-black rounded-lg my-auto"></i>
                  <p className="mr-0 text-white text-lg pl-2 my-auto">Tổng số tương tác</p>
                </div>
              </div>
              <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p className="border-b-2 border-black">TOTAL</p>
              </div>
              <p className="py-4 text-3xl ml-5">20,456</p>
              {/* <hr > */}
            </div>
          </div>
          {/*-== First Stats Container ====-*/}
          {/*-== Second Stats Container ====-*/}
          <div className="container mx-auto pr-4">
            <div className="w-auto bg-gray-100 max-w-xs mx-auto rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
              <div className="h-full py-4 bg-blue-400 my-auto">
                <div className="flex justify-start ml-2">
                  <i class="fas fa-bars fa-2x bg-white py-2 px-3 border-2 border-black rounded-lg my-auto"></i>
                  <p className="mr-0 text-white text-lg pl-2 my-auto">Tổng menu đã tạo</p>
                </div>
              </div>
              <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p className="border-b-2 border-black">TOTAL</p>

              </div>
              <p className="py-4 text-3xl ml-5">20,456</p>
              {/* <hr > */}
            </div>
          </div>
          {/*-== Second Stats Container ====-*/}
          {/*-== Third Stats Container ====-*/}
          <div className="container mx-auto pr-4">
            <div className="w-auto bg-gray-100 max-w-xs mx-auto rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
              <div className="h-full py-4 bg-purple-400 my-auto">
                <div className="flex justify-start ml-2">
                  <i class="fas fa-box fa-2x bg-white py-2 px-3 border-2 border-black rounded-lg my-auto"></i>
                  <p className="mr-0 text-white text-lg pl-2 my-auto">Tổng số nút đang dùng</p>
                </div>
              </div>
              <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p className="border-b-2 border-black">TOTAL</p>

              </div>
              <p className="py-4 text-3xl ml-5">20,456</p>
              {/* <hr > */}
            </div>
          </div>

          {/*-== Fourth Stats Container ====-*/}
        </div>
        {/* content */}
        <div className="flex w-full justify-between mt-4 mx-auto gap-5">
          <div className="flex-1 bg-white rounded-lg px-3">
            <div className="py-4 border-b-2 border-gray-200 flex justify-between">
              <span className="mr-3">
                Đường dẫn có số click cao nhất
              </span>
              <span className="text-sm">
                Chi tiết
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="">
                Noi dung
              </span>
              <a href="">abc</a>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg px-3">
            <div className="py-4 border-b-2 border-gray-200 flex justify-between">
              <span className="mr-5">
                Nút có số click cao nhất
              </span>
              <span className="text-sm">
                Chi tiết
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="">
                Noi dung
              </span>
              <a href="">abc</a>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg px-3">
            <div className="py-4 border-b-2 border-gray-200 flex justify-between">
              <span className="mr-5">
                Menu có số click cao nhất
              </span>
              <span className="text-sm">
                Chi tiết
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="">
                Noi dung
              </span>
              <a href="">abc</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
