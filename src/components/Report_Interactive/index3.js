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
import Select from "react-select";
function ReportIp() {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [userAddress, setUserAddress] = useState();
  const [userAddresss, setUserAddresss] = useState();
  const getLocations = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsActivityByIp?email=${username}&pageNo=${
        pageNo - 1
      }&limit=${limit}`,
      header,
    };
    let arr = [];
    arr.push({ value: "", label: "All" });
    axios(config)
      .then(function (response) {
        setData(response.data.content);

        setTotalRecord(response.data.totalElements);
        setTotalPage(response.data.totalPages);
        data.map((item) => {
          const dt = { value: item[1], label: item[1] };
          arr.push(dt);
        });

        setUserAddresss(arr);
        console.log("ccc", userAddresss);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataIp = () => {
    var config = {
      method: "get",
      url: userAddress
        ? `http://localhost:8080/api/v1/statisticsActivityByIp?email=${username}&userAddress=${userAddress}&pageNo=${
            pageNo - 1
          }&limit=${limit}`
        : `http://localhost:8080/api/v1/statisticsActivityByIp?email=${username}&pageNo=${
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
    getLocations();
  }, []);

  useEffect(() => {
    getDataIp();
  }, [userAddress, pageNo, limit]);

  return (
    <CCard className="row">
      <CCardHeader className="font-bold text-center">
        Thống kê lượt tương tác theo địa chỉ IP của người dùng
      </CCardHeader>
      <CCardBody>
        <table
          className=" table table-striped table-bordered "
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th>IP Address</th>
              <th>
                <Select
                  className="font-bold"
                  name="userAddress"
                  options={userAddresss}
                  placeholder="Location"
                  onChange={(e) => {
                    setPageNo(1);
                    setUserAddress(e.value);
                  }}
                />
              </th>
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

      <CRow className="mx-2">
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
