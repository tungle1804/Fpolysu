import React, { useState, useEffect } from "react";

import {
  CCard,
  CCardBody,
  CPagination,
  CCardHeader,
  CRow,
} from "@coreui/react";
import { header, username } from "./../CommonData/data";
import axios from "axios";
import DisplayResultPagination from "./../DisplayResultPagination/DisplayResultPagination";
function ReportIp() {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);

  const getDataIp = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsActivityByIp?email=${username}&pageNo=${
        pageNo - 1
      }&limit=${limit}`,
      header,
    };

    axios(config)
      .then(function (response) {
        setData(response.data.content);
        setTotalRecord(response.data.totalElements);

        setTotalPage(response.data.totalPages);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataIp();
  }, []);

  return (
    <CCard className="row">
      <div className="row container ">
        <CCardHeader className="font-bold justify-content-center text-center">
          Thống kê lượt tương tác theo địa chỉ IP của người dùng
        </CCardHeader>
      </div>
      <CCardBody>
        <table
          className=" table table-striped table-bordered "
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th>IP Address</th>
              <th>Location</th>
              <th>Total Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CCardBody>

      <CRow>
        <CPagination
          className="col-5 mx-0 px-3"
          addListClass="some-class"
          activePage={pageNo}
          pages={totalPage}
          onActivePageChange={setPageNo}
        />
        <div className="col-6 right">
          <DisplayResultPagination
            page={pageNo}
            setPage={setPageNo}
            limit={limit}
            setLimit={setLimit}
            totalElements={totalRecord}
          ></DisplayResultPagination>
        </div>
      </CRow>
    </CCard>
  );
}

export default ReportIp;
