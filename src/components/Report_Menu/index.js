import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import Select from "react-select";
import {
  CCard,
  CHeader,
  CCol,
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
import CustomerDatePicker from "./../CustomerDatePicker/index";

function Report_Menu() {
  const [dataMenu, setDataMenu] = useState([]);
  const [menu, setMenu] = useState([]);
  const [menus, setMenus] = useState([]);
  // let menus = [];
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

    await axios(config).then(function (response) {
      const datas = response.data;
      console.log("datas", datas);

      datas.map((item) => {
        console.log("item", item);
        const mn = { value: item.id, label: item.name_menu };
        arr.push(mn);
      });
    });
    setMenus(arr).catch(function (error) {
      console.log(error);
    });
  };
  console.log("test", menus);
  const getDataMenu = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/api/v1/getTotalNumberClickOnMenu?email=vuthanhnam@gmail.com&start=2021-08-17&end=2021-08-22&menuId=6",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        setDataMenu(response.data.content);
        console.log("data", dataMenu);
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
    // return () => {
    //   cleanup
    // }
  }, [menu]);
  // const menus = [
  //   { value: "under", label: "Dưới 18 tuổi" },
  //   { value: "between", label: "18 đến 35 tuổi" },
  //   { value: "over", label: "Trên 35 tuổi" },
  // ];
  return (
    <div className="container">
      <CRow>
        <CHeader className="text-blue-600-center">
          Thống kê tương tác theo Menu
        </CHeader>
      </CRow>
      <br />
      <CRow>
        <CCol xs="3" sm="4">
          <Select
            name="gender"
            options={menus}
            placeholder="Chọn Menu"
            //  defaultValue={{ value: "", label: "Chon Menu" }}
            onChange={(e) => {
              //  setPage(1);
              setMenu(e.value);
              console.log("this menu select", e.value);
            }}
          />
        </CCol>
        <CCol xs="3" sm="4" className="border-8 text-center">
          <CustomerDatePicker />
        </CCol>
      </CRow>
    </div>
  );
}

export default Report_Menu;
