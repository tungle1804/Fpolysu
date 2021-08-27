import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import translate from "translate"; // New wave
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

function Report_Button() {
  const [dataButton, setDataButton] = useState([]);
  const [menuId, setMenuId] = useState();
  const [buttonId, setButtonId] = useState();
  const [dataActionOfButtonByDay, setDataActionOfButtonByDay] = useState();
  const [menus, setMenus] = useState([]);
  const [buttons, setButtons] = useState([{ value: "", label: "" }]);
  const [listCalender, setListCalender] = useState([]);
  // let menus = [];
  const [startDate, setStartDate] = useState(new Date("2021-08-01"));
  const [endDate, setEndDate] = useState(new Date());

  const arr = [];
  const arrbt = [];
  const getListMenu = async () => {
    // const username = localStorage.getItem("email");
    const username = "vuthanhnam@gmail.com";
    const config = {
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

  const getListButtons = async () => {
    // const username = localStorage.getItem("email");
    // const username = "vuthanhnam@gmail.com";
    setButtons([]);
    const config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getButtonByIDMenu/${menuId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    await axios(config)
      .then(function (response) {
        const datas = response.data;
        //  console.log("datas", datas);
        datas.map((item) => {
          // console.log("item", item);
          const mn = { value: item.id, label: item.name_button };
          arrbt.push(mn);
        });
        if (menuId) {
          setButtons(arrbt);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("buttons", buttons);

  const getListCalenderbyTimeRange = () => {
    var data = JSON.stringify({
      id: 1,
      name_menu: "alo",
      color_menu: "red",
      status: true,
    });

    const config = {
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
  const getDataButton = () => {
    const username = "vuthanhnam@gmail.com";
    // const username = localStorage.getItem("email")
    const config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnButtonByRangeTimeSelect?email=${username}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate
        .toISOString()
        .slice(0, 10)}&buttonId=${buttonId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        setDataButton(response.data.content);
        console.log("data", dataButton);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataActionOfMenuByDay = () => {
    //var axios = require('axios');

    // const username = localStorage.getItem("eamil")
    const username = "vuthanhnam@gmail.com";
    const baseHref =
      "http://localhost:8080/api/v1/statisticAllActionOnThisButtonByDay";
    const config = {
      method: "get",
      url: `${baseHref}?email=${username}&idButton=${buttonId}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      // url: "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay?email=vuthanhnam@gmail.com&idMenu=6&end=2021-08-24&start=2021-08-15",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log("responseDataOfButton", response.data);
        console.log("objectApiUrl: ", config.url);
        setDataActionOfButtonByDay(response.data);
        console.log("DataActionOfMenuByDay", dataActionOfButtonByDay);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getListMenu();
    document.getElementById("button").hidden = true;
  }, []);

  useEffect(() => {
    getListButtons();
  }, [menuId]);

  useEffect(() => {
    getDataButton();
    getDataActionOfMenuByDay();
  }, [buttonId, menuId]);

  useEffect(() => {
    getListCalenderbyTimeRange();
    getDataActionOfMenuByDay();
  }, [startDate, endDate]);
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
          <CBadge color="secondary"> Nút </CBadge>
        </h2>
      </div>
      <br />
      <CRow>
        <CCol sm={6}>
          <CCard>
            <CCardHeader>Chọn Menu-Nút</CCardHeader>

            <CCardBody>
              <CRow>
                <CLabel className="col-3 font-extrabold">Chọn Menu: </CLabel>
                <Select
                  id="menu"
                  className="col-8"
                  name="menu"
                  options={menus}
                  placeholder="Chọn Menu"
                  //  defaultValue={{ value: menus[0].value, label: menus[0].label }}
                  onChange={(e) => {
                    document.getElementById("button").hidden = false;
                    setMenuId(e.value);
                    console.log("this menu select", e.value);
                  }}
                />
              </CRow>
              <br />
              <br />
              <CRow id="button">
                <CLabel className="col-3 font-extrabold">Chọn nút: </CLabel>
                <Select
                  className="col-8"
                  name="button"
                  options={buttons}
                  placeholder="Chọn Nút"
                  //  defaultValue={{ value: menus[0].value, label: menus[0].label }}
                  onChange={(e) => {
                    //  setPage(1);
                    setButtonId(e.value);
                    console.log("this button select", e.value);
                  }}
                />
              </CRow>
            </CCardBody>
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
              <CBadge color="secondary">{dataButton}</CBadge>
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
                  data: dataActionOfButtonByDay,
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

export default Report_Button;
