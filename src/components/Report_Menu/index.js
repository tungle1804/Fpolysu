import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import Select from "react-select";
import {
  CCard,
  CHeader,
  CLabel,
  CCardGroup,
  CCol,
  CIcon,
  CContainer,
  CPagination,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CRow,
  CCardTitle,
  CBadge,
} from "@coreui/react";
import { header } from "./../CommonData/data";
import axios from "axios";
import DisplayResultPagination from "./../DisplayResultPagination/DisplayResultPagination";
import CustomerDatePicker from "./../CustomerDatePicker/index";

function Report_Menu() {
  const [dataMenu, setDataMenu] = useState([]);
  const [menuId, setMenuId] = useState();
  const [dataActionOfMenuByDay, setDataActionOfMenuByDay] = useState();
  const [menus, setMenus] = useState([]);
  const [listCalender, setListCalender] = useState([]);
  // let menus = [];
  const [startDate, setStartDate] = useState(new Date('2021-08-01'));
  const [endDate, setEndDate] = useState(new Date());

  const arr = [];

  const getListMenu = async () => {
    // const username = localStorage.getItem("email");
    const username = "vuthanhnam@gmail.com";
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getMenuByEmail/${username}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
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
    var data = JSON.stringify({
      id: 1,
      name_menu: "alo",
      color_menu: "red",
      status: true,
    });

    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getListCalenderByRangeTime?start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    //  console.log("API", config.url);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setListCalender(response.data);
        //  console.log("dataCalender", listCalender);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log("test", menus);
  const getDataMenu = () => {
    const username = "vuthanhnam@gmail.com";
    // const username = localStorage.getItem("email")
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnMenu?email=${username}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate
        .toISOString()
        .slice(0, 10)}&menuId=${menuId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
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
    //var axios = require('axios');
    var data = JSON.stringify({
      menuId: 8,
    });

    const username = "vuthanhnam@gmail.com";
    const baseHref =
      "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay";
    var config = {
      // const username = localStorage.getItem("eamil")
      method: "get",
      url: `${baseHref}?email=${username}&idMenu=${menuId}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      // url: "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay?email=vuthanhnam@gmail.com&idMenu=6&end=2021-08-24&start=2021-08-15",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
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
          Thống kê tương tác theo
          <CBadge color="secondary"> Menu</CBadge>
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
          <CCardHeader className="text-center bg-blue-200 text-orange-300">
            Tổng số Tương tác{" "}
          </CCardHeader>
          <CCardBody>
            <h1 className="text-lg-center px-3">
              <CBadge color="secondary">{dataMenu}</CBadge>
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
                  backgroundColor: "#f87979",
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
    </CContainer>
  );
}

export default Report_Menu;
