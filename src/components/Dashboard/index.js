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
    <div className="mx-auto">
      <>
        <section className="text-gray-600 body-font ml-200 w-full ">
          <div className="bg-gray-300 w-auto mx-auto rounded-2xl mt-5 max-h-full border-2 border-gray-900">
            <div className="flex flex-col text-center w-full mb-20 pt-20">
              <h1 className="sm:text-3xl text-2xl font-medium pt-20  title-font text-gray-900">
                Tổng quan MENU
              </h1>
            </div>
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap mx-auto  text-center">
                <div className="p-4 sm:w-1/3 w-1/2">
                  <img
                    className="max-h-16 mx-auto"
                    src="images/Mouse.png"
                    alt=""
                  />
                  <p className="leading-relaxed">Tổng số tương tác</p>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {totalClickByUser}
                  </h2>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <img
                    className="max-h-16 mx-auto"
                    src="images/Menu.png"
                    alt=""
                  />
                  <p className="leading-relaxed">Tổng menu đã tạo</p>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {totalMenuCreated}
                  </h2>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <img
                    className="max-h-16 mx-auto"
                    src="images/Box.png"
                    alt=""
                  />
                  <p className="leading-relaxed">Tổng số nút đang dùng</p>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {totalButtonCreated}
                  </h2>
                </div>
                {/* <div className="p-4 sm:w-1/4 w-1/2">
                                <p className="leading-relaxed">Products</p>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                            </div> */}
              </div>
            </div>
          </div>
        </section>
        <Statistics></Statistics>
      </>
    </div>
  );
}
