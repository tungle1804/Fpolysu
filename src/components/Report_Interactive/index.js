import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CFormGroup,
  CCardHeader,
  CPagination,
  CRow,
  CLabel,
} from "@coreui/react";
import {
  dataYear,
  dataMonth,
  dataDay,
  dataHour,
  header,
} from "../CommonData/data";
import DatePicker from "react-datepicker";
import axios from "axios";
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
    const username = "vuthanhnam@gmail.com";
    // this is version official
    // const username = localStorage.getItem("email");

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
  function handleChangeYear() {
    let item = document.getElementById("y");

    setYear(item.value);
    //console.log("this year: " + year);
  }
  function handleChangeMonth() {
    let item = document.getElementById("m");

    setMonth(item.value);
    //console.log("this year: " + year);
  }
  function handleChangeDay() {
    let item = document.getElementById("d");

    setDay(item.value);
    // console.log("this year: " + year);
  }
  useEffect(() => {
    getDataByDay();
  }, [date, year, month, day]);

  return (
    <>
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

        <CCard className="col-8">
          <CCardHeader className="text-center font-extrabold">
            Thống kê tương tác hàng ngày của Menu hiện đang sử dụng:{}
          </CCardHeader>
          <CCardBody>
            <CChartBar
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
    </>
  );
}
export default TotalCustomerByMonth;

{
  /* <div className="row">
          <div className="col-3 offset-1">
            <select
              id="y"
              className="form-control"
              placeholder="Chọn tháng"
              aria-label="Default select example"
              onChange={handleChangeYear}
            >
              <option selected disabled>
                Select Year
              </option>
              {dataYear.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3 offset-1">
            <select
              id="m"
              className="form-control"
              placeholder="Chọn tháng"
              aria-label="Default select example"
              onChange={handleChangeMonth}
            >
              <option selected disabled>
                Select month
              </option>
              {dataMonth.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3 offset-1">
            <select
              id="d"
              className="form-control"
              placeholder="Chọn tháng"
              aria-label="Default select example"
              onChange={handleChangeDay}
            >
              <option selected disabled>
                Select Day
              </option>
              {dataDay.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div> */
}
