import React from "react";
import { encode } from '../../utils/index';
const Integrated = () => {

  return (
    <>
      <div className="flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-gray-100">
        <div className="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-indigo-600 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
          <p className="m-0 p-0">
            Tích hợp POLYSU lên website của bạn. Vui lòng làm theo hướng dẫn sau
            đây để tích hợp POLYSU lên Website.
          </p>
          <p className="m-0 p-0 text-indigo-600">
            Cách 1: Sao chép và dán đoạn mã này vào trong thẻ body trên Website
            của bạn.
          </p>
          <p className="m-0 p-0">
            Chú ý: mỗi website chỉ được gắn một đoạn mã này
          </p>
          <div className="p-2">
            <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
              <span
                onClick={(event) => {
                  var range, selection;
                  selection = window.getSelection();
                  range = document.createRange();
                  range.selectNodeContents(document.getElementById("tichhop"));
                  selection.removeAllRanges();
                  selection.addRange(range);
                  document.execCommand("copy");
                }}
                className="inline-flex bg-indigo-600 text-white rounded-full h-12 px-3 justify-center items-center"
              >
                <i className="far fa-copy text-white pr-2"></i> Sao chép
              </span>
              <span id="tichhop" className="inline-flex px-2">
                &lt;script&gt;window.name="{encode(window.localStorage.getItem("email") ? window.localStorage.getItem("email") : "")}
                "&lt;/script&gt;&lt;script type="text/babel" src="index.js"&gt;&lt;/script&gt;
              </span>
            </div>
          </div>
          <p>
            {" "}
            Cách 2: Cài đặt plugin POLYSU. Đối với các Website sử dụng mã nguồn
            mở Wordpress, POLYSU cung cấp plugin để giúp dễ dàng tích hợp POLYSU
            lên Website của bạn.
          </p>
        </div>
      </div>
    </>
  );
};
export default Integrated;
