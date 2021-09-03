import React, { useState, useEffect } from "react";
import "./toggle.css";
import { header } from "./../CommonData/data";
import axios from "axios";
import { CCard, CCardBody, CCardHeader, CRow, CDataTable } from "@coreui/react";
function Statistics() {
  const [totalClickByUrl, setTotalClickByUrl] = useState([]);
  const [totalClickByMenu, setTotalClickByMenu] = useState([]);
  const [totalClickByButton, setTotalClickByButton] = useState([]);

  const getTotalClickByUrl = () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsClickByUrl?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setTotalClickByUrl(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getTotalClickByButton = () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsClickByButton?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setTotalClickByButton(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getTotalClickByMenu = () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsClickByMenu?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setTotalClickByMenu(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getTotalClickByUrl();
    getTotalClickByMenu();
    getTotalClickByButton();
  }, []);
  return (
    <div>
      {/* content */}
      <div className="block lg:flex lg:flex space-y-4 lg:space-y-0 w-full justify-between mt-4 mx-auto gap-5">
        <div className="flex-1 bg-white rounded-lg px-3">
          <div className="py-4 border-b-2 border-gray-200 flex justify-between">
            <span className="mr-3 font-bold">Đường dẫn click cao nhất</span>
            <span className="text-sm font-bold">Chi tiết</span>
          </div>
          <div className="flex justify-between py-2">
            <table className="w-full">
              <tbody>
                {totalClickByUrl.map((item) => {
                  return (
                    <tr className="leading-10 w-full">
                      <td className="w-4/6">
                        <a href={item[0]}>{item[0]}</a>
                      </td>
                      <td className="w-1/3">{item[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg px-3">
          <div className="py-4 border-b-2 border-gray-200 flex justify-between">
            <span className="mr-5 font-bold">Menu click nhiều nhất</span>{" "}
            <span className="text-sm font-bold">Chi tiết</span>
          </div>
          <div className="flex justify-between py-2">
            <table className="w-full">
              <tbody>
                {totalClickByMenu.map((item) => {
                  return (
                    <tr className="leading-8 w-full">
                      <td className="w-5/6">{item[0]}</td>
                      <td className="w-1/6" style={{}}>
                        {item[1]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg px-3">
          <div className="py-4 border-b-2 border-gray-200 flex justify-between">
            <span className="mr-5 font-bold">Nút click nhiều nhất</span>
            <span className="text-sm font-bold">Chi tiết</span>
          </div>
          <div className="flex justify-between py-2">
            <table className="w-full">
              <tbody>
                {totalClickByButton.map((item) => {
                  return (
                    <tr className="leading-10">
                      <td className="w-5/6">{item[0]}</td>
                      <td className="w-1/6">{item[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
