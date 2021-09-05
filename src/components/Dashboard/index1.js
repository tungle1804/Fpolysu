import React, { useState, useEffect } from "react";
import "./toggle.css";
import { header, username } from "./../CommonData/data";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CCard, CCardBody, CCardHeader, CRow, CDataTable } from "@coreui/react";
import { Link } from "react-router-dom";
function Statistics() {
  const [totalClickByUrl, setTotalClickByUrl] = useState([]);
  const [totalClickByMenu, setTotalClickByMenu] = useState([]);
  const [totalClickByButton, setTotalClickByButton] = useState([]);
  let history = useHistory();
  const getTotalClickByUrl = () => {
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
      <div className="row">
        <div className="flex-1 bg-white rounded-lg px-3 col-4">
          <table
            className=" table table-striped border-none "
            style={{ border: "none" }}
          >
            <thead>
              <tr className="row">
                <th className="col-1 text-center">#</th>
                <th className="col-8 text-center">
                  Đường dẫn có số Click cao nhất
                </th>
                <th className="col-3 text-center">
                  <Link to={{ pathname: "/admin/report-menu" }}>Chi Tiết</Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {totalClickByUrl.map((item, index) => {
                return (
                  <tr key={index} className="row">
                    <td className="col-1 text-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                      </svg>
                    </td>
                    <td className="col-9 break-words">
                      <a href={item[0]}>{item[0]}</a>
                    </td>
                    <td className="col-2 text-center">{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex-1 bg-white rounded-lg px-3 col-4">
          <table
            className=" table table-striped border-none "
            style={{ border: "none" }}
          >
            <thead>
              <tr>
                <th className="col-1 text-center">#</th>
                <th className="col-9 text-center">Nút có số Click cao nhất</th>
                <th className="col-2 text-center">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {totalClickByButton.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="col-1 text-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                      </svg>
                    </td>
                    <td className="col-9 break-words text-center">{item[0]}</td>
                    <td className="col-2 text-center">{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex-1 bg-white rounded-lg px-3 col-4">
          <table
            className=" table table-striped border-none "
            style={{ border: "none" }}
          >
            <thead>
              <tr>
                <th className="col-1 text-center">#</th>
                <th className="col-9 text-center">Menu có số Click cao nhất</th>
                <th className="col-2 text-center">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {totalClickByMenu.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="col-1 text-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                      </svg>
                    </td>
                    <td className="col-9 break-words text-center">
                      {" "}
                      {item[0]}
                    </td>
                    <td className="col-2 text-center">{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
