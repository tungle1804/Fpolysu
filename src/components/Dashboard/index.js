import React, { useState, useEffect } from "react";
import "./toggle.css";
import { header } from "./../CommonData/data";
import axios from "axios";
import Statistics from "./index1";
export default function Dashboard() {

  const [totalClickByUser, setTotalClickByUser] = useState();
  const [totalMenuCreated, setTotalMenuCreated] = useState();
  const [totalButtonCreated, setTotalButtonCreated] = useState();
  const getTotalClickByUser = () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickByUser?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setTotalClickByUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getTotalMenuCreated = () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/countSumMenuCreated?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setTotalMenuCreated(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getTotalButtonCreated = () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/countSumButtonCreated?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setTotalButtonCreated(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getTotalClickByUser();
    getTotalMenuCreated();
    getTotalButtonCreated();
  }, []);

  return (
    <div className="mx-auto w-full">
      <div>
        {/*-===================== FIRST ROW CONTAINING THE  STATS CARD STARTS HERE =============================*/}
        <div className="block lg:flex space-y-4 lg:space-y-0 justify-between rounded-lg bg-white py-10 p-6 w-full">
          {/*-== First Stats Container ====-*/}
          <div className="container mx-auto pr-4">
            <div className="w-auto bg-gray-100 max-w-xs mx-auto rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
              <div className="h-full py-4 bg-red-400 my-auto">
                <div className="flex justify-start ml-2">
                  <i class="fas fa-mouse-pointer fa-2x bg-white py-2 px-3 border-2 border-black rounded-lg my-auto"></i>
                  <p className="mr-0 text-white text-lg pl-2 my-auto">
                    Tổng số tương tác
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p className="border-b-2 border-black">TOTAL</p>
              </div>
              <p className="py-4 text-3xl ml-5">{totalClickByUser}</p>
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
                  <p className="mr-0 text-white text-lg pl-2 my-auto">
                    Tổng menu đã tạo
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p className="border-b-2 border-black">TOTAL</p>
              </div>
              <p className="py-4 text-3xl ml-5">{totalMenuCreated}</p>
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
                  <p className="mr-0 text-white text-lg pl-2 my-auto">
                    Tổng số nút đang dùng
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p className="border-b-2 border-black">TOTAL</p>
              </div>
              <p className="py-4 text-3xl ml-5">{totalButtonCreated}</p>
              {/* <hr > */}
            </div>
          </div>

          {/*-== Fourth Stats Container ====-*/}
        </div>
        <hr />
        <div className="mx-auto w-full">
          <Statistics></Statistics>
        </div>
      </div>
    </div>
  );
}
