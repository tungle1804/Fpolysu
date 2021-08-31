import React, { useState, useEffect } from "react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CLabel,
  CCardTitle,
  CCardHeader,
  CRow,
} from "@coreui/react";
import { dataHour, header } from "../CommonData/data";
import DatePicker from "react-datepicker";
import axios from "axios";
import ReportUsers from "./index2";
import ReportIp from "./index3";
import Select from "react-select";
function TotalCustomerByMonth() {
  const username = "vuthanhnam@gmail.com";
  // this is version official
  // const username = localStorage.getItem("email");
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [day, setDay] = useState(new Date());
  const [totalByDay, setTotalByDay] = useState([]);
  const [menu, setMenu] = useState([]);
  const [idMenu, setIdMenu] = useState();

  let arr = [];
  const getDataByDay = async () => {
    console.log("header", header);
    console.log("window.name", window.name);

    console.log("object", username);
    console.log("date", date.toISOString());
    let day = date.getDate();

    console.log("day", day);
    let month = date.getMonth() + 1;

    console.log("month", month);
    let year = date.getFullYear();

    console.log("year", year);

    if (year !== (undefined | null) && month !== (undefined | null)) {
      var API_Statistics = `http://localhost:8080/api/v1/statisticAllActionOnThisMenuEnable?email=${username}&idMenu=${idMenu}&day=${day}&month=${month}&year=${year}`;
      console.log("object API:  ", API_Statistics);
      axios.get(API_Statistics, { header }).then((response) => {
        setTotalByDay(response.data);
        console.log("response:  " + response.data);
      });
    }
  };

  useEffect(() => {
    getDataByDay();
  }, [date, year, month, day, idMenu]);

  useEffect(() => {
    getListMenu();
  }, []);
  
  const getListMenu = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/findAllByStatusTrue?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const datas = response.data;
        // console.log("datas", datas);
        datas.map((item) => {
          // console.log("item", item);
          const mn = { value: item.id, label: item.name_menu };
          arr.push(mn);
        });
        setMenu(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container row-auto">
      <CRow className="container row-auto">
        <CCard className="col-3">
          <CCardBody className="mx-auto p-1 border text-center">
            <CCardTitle className="text-orange-500">Click chọn ngày</CCardTitle>
            <DatePicker
              inline
              className="text-center"
              selected={date}
              onChange={(date) => setDate(date)} //when day is clicked
            />
          </CCardBody>
        </CCard>

        <CCard className="col-8 offset-1">
          <CLabel className="font-bold text-center">
            Thống kê theo ngày của Menu đang dùng:
          </CLabel>
          <CCardHeader className="row">
            <h6 className="col-4 offset-4">Chọn Menu</h6>
            <Select
              className="col-4"
              name="IdMenu"
              options={menu}
              placeholder="Chọn Menu"
              onChange={(e) => {
                setIdMenu(e.value);
              }}
            ></Select>
          </CCardHeader>
          <CCardBody>
            <CChartLine
              datasets={[
                {
                  label: "Lượng Khách Hàng",
                  backgroundColor: "#f87979",
                  data: totalByDay,
                },
              ]}
              labels={dataHour}
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

      <ReportUsers></ReportUsers>
      <br />
      <ReportIp></ReportIp>
    </div>
  );
}
export default TotalCustomerByMonth;
