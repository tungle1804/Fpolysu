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
  CCardFooter,
  CRow,
  CBadge,
} from "@coreui/react";
import { header } from "./../CommonData/data";
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
  // let menus = [];
  const [startDate, setStartDate] = useState(new Date("2021-09-01"));
  const [endDate, setEndDate] = useState(new Date("2021-09-01"));

  const arr = [];
    // const username = localStorage.getItem("email");
    const username = "vuthanhnam@gmail.com";
  const getListMenu = async () => {

    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getMenuByEmail/${username}`,
      header,
    };

    await axios(config)
      .then(function (response) {
        const datas = response.data;
        // console.log("datas", datas);
        datas.map((item) => {
          // console.log("item", item);
          const mn = { value: item.id, label: item.name_menu };
          arr.push(mn);
        });
        setMenus(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // console.log(menus);

  const getListCalenderbyTimeRange = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getListCalenderByRangeTime?start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header,
      data: data,
    };
    console.log("API", config.url);
    if (startDate && endDate) {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setListCalender(response.data);
          //  console.log("dataCalender", listCalender);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  // console.log("test", menus);
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

    axios(config)
      .then(function (response) {
        setDataMenu(response.data.content);
        //   console.log("data", dataMenu);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataActionOfMenuByDay = () => {

    const baseHref =
      "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay";
    var config = {
      // const username = localStorage.getItem("eamil")
      method: "get",
      url: `${baseHref}?email=${username}&idMenu=${menuId}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      // url: "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay?email=vuthanhnam@gmail.com&idMenu=6&end=2021-08-24&start=2021-08-15",
      header,
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDataActionOfMenuByDay(response.data);
        console.log("DataActionOfMenuByDay", dataActionOfMenuByDay);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getDataClickByUrl = () => {
 

    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/countTotalClickBuFromUrl?email=${username}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header,
    };

    axios(config)
      .then(function (response) {
        console.log("dataClick:  ", JSON.stringify(response.data));
        setData(response.data.content);
        setTotalRecord(response.data.totalElements);
        console.log("totalElement", totalRecord);

        setTotalPage(response.data.totalPages);
        console.log("list Data now: ", data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getListMenu();

    // return () => {
    //   cleanup
    // }
  }, []);

  useEffect(() => {
    getDataMenu();
    getListCalenderbyTimeRange();
    getDataActionOfMenuByDay();
    getDataClickByUrl();
    // return () => {
    //   cleanup
    // }
  }, [menuId, startDate, endDate]);
  // const menus = [
  //   { value: "under", label: "Dưới 18 tuổi" },
  //   { value: "between", label: "18 đến 35 tuổi" },
  //   { value: "over", label: "Trên 35 tuổi" },
  // ];
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
                //  defaultValue={{ value: menus[0].value, label: menus[0].label }}
                onChange={(e) => {
                  //  setPage(1);
                  setMenuId(e.value);
                  console.log("this menu select", e.value);
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
          <CCardFooter></CCardFooter>
        </CCard>

        <CCard className="col-9">
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
      <CCard>
        <div className="row ">
          <CCardHeader className="font-weight-bolder text-center bg-blue-500 col-6 offset-2">
            Thống kê số Click đường dẫn
          </CCardHeader>
        </div>

        <table
          className=" table table-striped table-bordered "
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th>Link</th>
              <th>Total Click</th>
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
                  <td>
                    <a href={item[0]}>{item[0]}</a>
                  </td>
                  <td>{item[1]}</td>
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
