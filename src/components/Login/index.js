import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { callApi } from "../../service/Apis";

export default function Login() {
  // const { jwt, setJwt } = useContext(JwtContext);
  const history = useHistory();

  const [infoLogin, setInfoLogin] = useState({ email: "", passWord: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setInfoLogin({ ...infoLogin, [name]: value });
  };

  var data = JSON.stringify(infoLogin);
  const handleSubmit = (e) => {
    e.preventDefault();
    callApi("post", "login", data)
      .then((response) => {
        console.log("object,", data);
        if (response.data.role[0].authority === "customer") {
          history.push("/admin/list-menu'");
        } else {
          history.push("/admin/manage");
        }
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem(
          "fullName",
          JSON.stringify(response.data.fullName)
        );
      //  localStorage.setItem("email", JSON.stringify(response.data.email));
        localStorage.setItem("email", response.data.email);
        //  setJwt(data.token);
      })
      .catch(function (error) {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác");
        console.log(error);
      });
  };

  return (
    <>
      <div className="py-10">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto w-4/6">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: "url('/images/FPT_Polytechnic_Hanoi.jpg')",
            }}
          ></div>
          <div className="p-8 lg:w-1/2">
            <h1 className="text-2xl font-semibold text-blue-700 text-center">
              POLYSU
            </h1>
            <p className="text-xl text-gray-600 text-center">
              Chào mừng đến với Polysu!
            </p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <img
                  className="h-auto w-20 mx-auto"
                  src="https://fpt.com.vn/Content/home/images/icon/logo-ft.png"
                />
              </div>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">
                Đăng nhập bằng email
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tên đăng nhập
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mật khẩu
                </label>
                <a
                  href="forgot-password.html"
                  className="text-xs text-gray-500"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                type="password"
                name="passWord"
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <button
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                onClick={handleSubmit}
              >
                Đăng nhập
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a
                href="register.html"
                className="text-xs text-gray-500 uppercase"
              ></a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
