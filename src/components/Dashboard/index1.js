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
      <section className="text-gray-600 body-font w-full">
        <div className="container  py-24 mx-auto pt-10 w-full ">
          <div className="flex flex-wrap -mx-9 ">
            <div className="md:w-1/3">
              <div className="flex border-2 border-gray-900 h-full bg-gray-300 p-8 flex-col rounded-l-2xl">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Đường dẫn có lượt click cao nhất
                  </h2>
                </div>
                <div className="flex-grow">
                  <CCardBody>
                    <CDataTable
                      items={totalClickByUrl}
                      fields={["Đường dẫn", "Số lượng"]}
                      sorter
                      column-filter
                      hover
                    ></CDataTable>
                  </CCardBody>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-wind"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="flex border-2 border-gray-900 h-full bg-gray-300 p-8 flex-col ">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Menu có lượng click cao nhất
                  </h2>
                </div>
                <div className="flex-grow">
                  <table>
                    <tr>
                      {" "}
                      <th className="col-8">Tên Menu </th>
                      <th className="col-4">Số Click</th>
                    </tr>

                    <tbody>
                      {totalClickByMenu.map((item) => {
                        return (
                          <tr>
                            <td className="col-8">{item[0]}</td>
                            <td className="col-4">{item[1]}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="flex border-2 border-gray-900 h-full bg-gray-300 p-8 flex-col rounded-r-2xl">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={6} cy={6} r={3} />
                      <circle cx={6} cy={18} r={3} />
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Nút có lượt click cao nhất
                  </h2>
                </div>
                <div className="flex-grow">
                  <table>
                    <tr>
                      {" "}
                      <th className="col-8">Tên Nút </th>
                      <th className="col-4">Số Click</th>
                    </tr>

                    <tbody>
                      {totalClickByButton.map((item) => {
                        return (
                          <tr>
                            <td className="col-8">{item[0]}</td>
                            <td className="col-4">{item[1]}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
