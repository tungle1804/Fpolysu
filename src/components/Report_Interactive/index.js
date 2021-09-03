import React, { useState, useEffect } from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { CCard, CCardBody, CCardTitle, CCardHeader, CRow } from "@coreui/react";
import { dataHour, header, username } from "../CommonData/data";
import DatePicker from "react-datepicker";
import axios from "axios";
import ReportUsers from "./index2";
import ReportIp from "./index3";
function TotalCustomerByMonth() {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [day, setDay] = useState(new Date());
  const [totalByDay, setTotalByDay] = useState([]);
  const getDataByDay = async () => {
    let day = date.getDate();

    let month = date.getMonth() + 1;

    let year = date.getFullYear();

    if (year !== (undefined | null) && month !== (undefined | null)) {
      var API_Statistics = `http://localhost:8080/api/v1/statisticAllActionOnThisMenuEnable?email=${username}&day=${day}&month=${month}&year=${year}`;

      axios.get(API_Statistics, { header }).then((response) => {
        setTotalByDay(response.data);
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
