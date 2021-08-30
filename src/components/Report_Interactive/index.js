import React, { useState, useEffect } from "react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import { CCard, CCardBody, CCardTitle, CCardHeader, CRow } from "@coreui/react";
import { dataHour, header } from "../CommonData/data";
import DatePicker from "react-datepicker";
import axios from "axios";
import ReportUsers from "./index2";
import ReportIp from "./index3";
function TotalCustomerByMonth() {
  // const headers = header;
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [day, setDay] = useState(new Date());
  const [totalByDay, setTotalByDay] = useState([]);
  const getDataByDay = async () => {
    console.log("header", header);
    console.log("window.name", window.name);
    //  const username = "vuthanhnam@gmail.com";
    // this is version official
    const username = localStorage.getItem("email");

    console.log("object", username);
    console.log("date", date.toISOString());
    let day = date.getDate();

    console.log("day", day);
    let month = date.getMonth() + 1;

    console.log("month", month);
    let year = date.getFullYear();

    console.log("year", year);

    if (year !== (undefined | null) && month !== (undefined | null)) {
      var API_Statistics = `http://localhost:8080/api/v1/statisticAllActionOnThisMenuEnable?email=${username}&day=${day}&month=${month}&year=${year}`;
      console.log("object API:  ", API_Statistics);
      axios.get(API_Statistics, { header }).then((response) => {
        setTotalByDay(response.data);
        console.log("response:  " + response.data);
      });
    }
  };

  useEffect(() => {
    getDataByDay();
  }, [date, year, month, day]);

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
              // onChange={handleDateChange} //only when value has changed
            />
          </CCardBody>
        </CCard>

        <CCard className="col-8 offset-1">
          <CCardHeader className="text-center font-extrabold">
            Thống kê tương tác hàng ngày của Menu hiện đang sử dụng:{}
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
