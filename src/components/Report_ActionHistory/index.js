import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import translate from "translate"; // New wave
import {
  CCard,
  CPagination,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CCardHeader,
  CRow,
} from "@coreui/react";
import { header } from "./../CommonData/data";
import axios from "axios";
import DisplayResultPagination from "./../DisplayResultPagination/DisplayResultPagination";
function Report_ActionHistory() {
  translate.engine = "google";
  translate.key = process.env.TRANSLATE_KEY;
  const headers = header;
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  // const getTotalPage = () => {
  //   const API_getTotalPage = "http://localhost:8080/customers/countAllRecord";
  //   axios
  //     .get(API_getTotalPage)
  //     .then((response) => {
  //       console.log("response", response.data);
  //       setTotalRecord(response.data);
  //       setTotalPage(totalRecord / limit);
  //     })
  //     .catch((error) => {
  //       console.log("error:  " + error);
  //     });
  // };
  const getData = async () => {
    const username = "vuthanhnam@gmail.com";
    //const username= window.name;
    const API = `http://localhost:8080/api/v1/getStatisticInformationOfAction?email=${username}&pageNo=${
      pageNo - 1
    }&limit=${limit}`;
    console.log("API: ", API);

    await axios
      .get(API, { headers })
      .then((response) => {
        console.log("response  ", response);
        setData(response.data.content);
        console.log("data:  ", data);
        setTotalRecord(response.data.totalElements);
        console.log("totalElement", totalRecord);

        setTotalPage(response.data.totalPages);
        console.log("list Data now: ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   getTotalPage();
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, []);
  useEffect(() => {
    getData();
    // return () => {
    //   cleanup
    // }
  }, [pageNo, limit]);
  console.log("list Data now 2: ", data);
  return (
    <div className="row">
      <CCard style={{}} className="col-12">
        <CCardHeader className="font-weight-bolder text-center bg-blue-500">
          Thống kê Tương tác
        </CCardHeader>
        <table
          className=" table table-striped table-bordered "
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th>STT</th>
              <th>Thời gian</th>
              <th>Tên Menu</th>
              <th>Tên Button</th>
              <th>Link-Button</th>
              <th>Nguồn</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              !data.length(
                <tr className="text-center">
                  <td colSpan={3}>No Student</td>
                </tr>
              )
            } */}
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{new Date(item[0]).toUTCString()}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CRow className="row">
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
      {/* <CDropdown className="m-1 float-right offset-8">
        <CDropdownToggle color="secondary" size="sm">
          Bản ghi
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem header>Chọn số bản ghi hiển thị</CDropdownItem>
          <CDropdownItem
            onClick={() => {
              setPageNo(1);
              setTotalPage(totalRecord / 3);
              setLimit(3);
            }}
          >
            5
          </CDropdownItem>
          <CDropdownItem
            onClick={() => {
              setPageNo(1);
              setTotalPage(totalRecord / 8);
              setLimit(8);
            }}
          >
            8
          </CDropdownItem>
          <CDropdownItem
            onClick={() => {
              setPageNo(1);
              setTotalPage(totalRecord / 10);
              setLimit(10);
            }}
          >
            10
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown> */}
    </div>
  );
}

export default Report_ActionHistory;
