import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { header, username } from "./../CommonData/data";
import {
  CCard,
  CPagination,
  CLabel,
  CCardFooter,
  CCardBody,
  CCardHeader,
  CRow,
  CContainer,
  CInputGroup,
  CInputGroupText,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInput,
} from "@coreui/react";
import Select from "react-select";
import axios from "axios";
import DisplayResultPagination from "./../DisplayResultPagination/DisplayResultPagination";
import ReportRatioActivity from "./index1";
import ReportActionByEquipment from "./index2";
import StatisticsClickAllMenu from "./index3";

function Report_ActionHistory() {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [data, setData] = useState([]);
  const [dataMenu, setDataMenu] = useState([]);
  const [dataWidget, setDataWidget] = useState([]);
  const [limit, setLimit] = useState(5);
  const [startDate, setStartDate] = useState(new Date("2020-08-01"));
  const [endDate, setEndDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState([]);
  const [idMenu, setIdMenu] = useState();
  let arr = [];
  const getListMenu = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/findAllByStatusTrue?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const datas = response.data;
        arr.push({ value: "", label: "Chọn Menu" });
        datas.map((item) => {
          const mn = { value: item.id, label: item.name_menu };
          arr.push(mn);
        });
        setMenu(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData = async () => {
    if (pageNo === 0) {
      setPageNo(1);
    }
    const API = `http://localhost:8080/api/v1/getStatisticInformationOfAction?email=${username}&start=${startDate
      .toISOString()
      .slice(0, 10)}&end=${endDate
      .toISOString()
      .slice(0, 10)}&search=${search}&pageNo=${pageNo - 1}&limit=${limit}`;

    await axios
      .get(API, header)
      .then((response) => {
        setData(response.data.content);
        console.log("ob:   ", data);
        setTotalRecord(response.data.totalElements);

        setTotalPage(response.data.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataMenu = async () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberActionDisplayOnMenu?email=${username}`,
      header,
    };
    var config2 = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnMenu?email=${username}`,
      header,
    };
    let datax = [];
    await axios(config)
      .then(function (response) {
        datax = response.data.content;
      })
      .catch(function (error) {
        console.log(error);
      });
    await axios(config2)
      .then(function (response) {
        let dt = response.data.content;
        let datax2 = [];
        for (let index = 0; index < dt.length; index++) {
          let element = dt[index][1];

          let test = datax[index];
          test = [...test, element];
          datax2 = [...datax2, test];
        }

        setDataMenu(datax2);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataWidget = async () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticActionButtonByRangeTimeSelect?email=${username}`,
      header,
    };
    var config2 = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnButtonByRangeTimeSelect?email=${username}`,
      header,
    };
    let datax = [];
    await axios(config)
      .then(function (response) {
        datax = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    await axios(config2)
      .then(function (response) {
        let dt = response.data;
        let datax2 = [];
        for (let index = 0; index < dt.length; index++) {
          let element = dt[index][1];
          let test = datax[index];
          test = [...test, element];
          datax2 = [...datax2, test];
        }

        setDataWidget(datax2);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setPageNo(1);
      setSearch(e.target.value);
      console.log("object ::  ", search);
    }
  };
  useEffect(() => {
    setPageNo(1);
    getListMenu();
    getDataWidget();
    getDataMenu();
  }, []);
  useEffect(() => {
    getData();
  }, [pageNo, limit, startDate, endDate, search]);

  return (
    <CContainer>
      <CCard className="row">
        <CCardHeader align={"center"}>Chọn Thời gian</CCardHeader>
        <CCardBody align={"center"}>
          <StatisticsClickAllMenu></StatisticsClickAllMenu>
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>

      <ReportRatioActivity></ReportRatioActivity>
      <br />
      <ReportActionByEquipment></ReportActionByEquipment>
      <br />
      <CCard className="row">
        <CLabel className="font-bold text-center pt-2">
          Thống kê lịch sử tương tác :
        </CLabel>
        <CCardHeader className="row justify-content-center m-0 py-0">
          <div className="col-4">
            <CInputGroup>
              <CInputGroupPrepend>
                <CInputGroupText className={"bg-info text-white"}>
                  Search
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="email"
                id="username"
                placeholder="Tìm kiếm..."
                name="username"
                autoComplete="name"
                onKeyPress={handleChange}
              />
            </CInputGroup>
          </div>
          <div className="col-6 offset-2">
            <Select
              className="col-6"
              name="IdMenu"
              options={menu}
              placeholder="Chọn Menu"
              onChange={(e) => {
                setIdMenu(e.value);
              }}
            ></Select>
          </div>
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
    </CContainer>
  );
}

export default Report_ActionHistory;
