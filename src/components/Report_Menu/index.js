import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import Select from "react-select";
import {
  CCard,
  CCol,
  CContainer,
  CPagination,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CBadge,
} from "@coreui/react";
import { header, username } from "./../CommonData/data";
import axios from "axios";
import DisplayResultPagination from "./../DisplayResultPagination/DisplayResultPagination";
import CustomerDatePicker from "./../CustomerDatePicker/index";

function Report_Menu() {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);

  const [dataMenu, setDataMenu] = useState([]);
  const [menuId, setMenuId] = useState();
  const [dataActionOfMenuByDay, setDataActionOfMenuByDay] = useState();
  const [menus, setMenus] = useState([]);
  const [listCalender, setListCalender] = useState([]);

  const [startDate, setStartDate] = useState(new Date("2021-08-01"));
  const [endDate, setEndDate] = useState(new Date());
  const [buttonByUrl, setButtonByUrl] = useState([]);

  const arr = [];
  let rs = [];
  let rs2 = [];
  const getListMenu = async () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getMenuByEmail/${username}`,
      header,
    };

    await axios(config)
      .then(function (response) {
        const datas = response.data;

        datas.map((item) => {
          const mn = { value: item.id, label: item.name_menu };
          arr.push(mn);
        });
        setMenus(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getListCalenderbyTimeRange = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getListCalenderByRangeTime?start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header,
      data: data,
    };
    if (startDate && endDate) {
      axios(config)
        .then(function (response) {
          setListCalender(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const getDataMenu = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnMenu?email=${username}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate
        .toISOString()
        .slice(0, 10)}&menuId=${menuId}`,
      header,
    };
    if (menuId) {
      axios(config)
        .then(function (response) {
          setDataMenu(response.data.content);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const getDataActionOfMenuByDay = () => {
    const baseHref =
      "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay";
    var config = {
      method: "get",
      url: `${baseHref}?email=${username}&idMenu=${menuId}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,

      header,
    };
    if (menuId) {
      axios(config)
        .then(function (response) {
          setDataActionOfMenuByDay(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const getDataClickByUrl = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/countTotalClickBuFromUrl?email=${username}&idMenu=${menuId}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header,
    };

    axios(config).then(function (response) {
      setData(response.data.content);
      setTotalRecord(response.data.totalElements);
      setTotalPage(response.data.totalPages);
      //  console.log("thuis is datat:   ", response.data.content);
      // data.map((item) => {
      //   rs.push(item);
    });
    data.map((item) => {
      var config = {
        method: "get",
        url: `http://localhost:8080/api/v1/statisticsActivityOfOneButtonByAddress?email=${username}&url=${item[0]}`,
        header,
      };
      axios(config)
        .then(function (response) {
          const d = response.data;
          rs.push(d);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    setButtonByUrl(rs);
    console.log("rs", buttonByUrl[0]);
  };
  const getButtons = (url) => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsActivityOfOneButtonByAddress?email=${username}&url=${url}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const data = response.data;
        setButtonByUrl(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    buttonByUrl.map((it, index) => {
      return (
        <CButton
          className="col-2"
          key={index}
          size="sm"
          shape="pill"
          color="primary"
          className="m-2"
          backgroundColor="infor"
        >
          {it[0]} : {it[1]}
        </CButton>
      );
    });
  };

  useEffect(() => {
    getListMenu();
  }, []);

  useEffect(() => {
    getDataMenu();
    getListCalenderbyTimeRange();
    getDataActionOfMenuByDay();
    getDataClickByUrl();
  }, [menuId, startDate, endDate, pageNo, limit]);

  return (
    <CContainer>
      <div className="row justify-content-center">
        <h2>
          Thống kê tương tác theo &nbsp;
          <CBadge color="primary"> Menu</CBadge>
        </h2>
      </div>
      <br />
      <CRow>
        <CCol sm={6}>
          <CCard>
            <CCardHeader>Chọn Menu</CCardHeader>
            <br />
            <CCardBody>
              <Select
                name="menu"
                options={menus}
                placeholder="Chọn Menu"
                onChange={(e) => {
                  setMenuId(e.value);
                }}
              />
            </CCardBody>
            <br />
            <br />
          </CCard>
        </CCol>
        <CCol sm={6}>
          <CCard>
            <CCardHeader>Chọn Thời gian</CCardHeader>
            <CCardBody>
              <CustomerDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                className="border-5 text-center"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <hr />
      <CRow className="container row-auto">
        <CCard className="col-3">
          <CCardHeader
            className="text-center bg-blue-200 text-blue-500 font-weight-bold"
            style={{ color: "6699FF" }}
          >
            Tổng số Tương tác{" "}
          </CCardHeader>
          <CCardBody>
            <h1 className="text-lg-center px-3">
              <CBadge color="primary">{dataMenu}</CBadge>
            </h1>
          </CCardBody>
        </CCard>

        <CCard className="col-9">
          <CCardHeader className="text-center font-bold">
            Thống kê tương tác trên Menu
          </CCardHeader>
          <CCardBody>
            <CChartBar
              datasets={[
                {
                  label: "Lượng Tương tác",
                  backgroundColor: "#6699FF",
                  data: dataActionOfMenuByDay,
                },
              ]}
              labels={listCalender}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CRow>
      <br />
      <CCard>
        <CCardHeader className="font-weight-bolder text-center ">
          Thống kê số Click đường dẫn
        </CCardHeader>

        <table
          className=" table table-striped table-bordered "
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th className="pl-10">Link</th>
              <th className="text-center">Total Click</th>
            </tr>
          </thead>
          <tbody>
            {buttonByUrl.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <a href={data[index][0]} className="row pl-3">
                      {data[index][0]}
                    </a>
                    <CRow>
                      {item.map((it) => {
                        return (
                          <CButton
                            className="col-2"
                            key={index}
                            size="sm"
                            shape="pill"
                            color="primary"
                            className="m-2"
                            backgroundColor="infor"
                          >
                            {it[0]} : {it[1]}
                          </CButton>
                        );
                      })}
                    </CRow>
                  </td>
                  <td className="text-center">{data[index][1]}</td>
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

export default Report_Menu;
