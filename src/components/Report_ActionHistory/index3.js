import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import { CCard, CContainer, CCardBody, CRow, CBadge } from "@coreui/react";
import { header, username } from "./../CommonData/data";
import axios from "axios";
import CustomerDatePicker from "./../CustomerDatePicker/index";

function StatisticsClickAllMenu() {
  const [data, setData] = useState([]);
  const [dataActionOfMenuByDay, setDataActionOfMenuByDay] = useState();
  const [listCalender, setListCalender] = useState([]);
  const [startDate, setStartDate] = useState(new Date("2021-08-01"));
  const [endDate, setEndDate] = useState(new Date());
  const getListCalenderbyTimeRange = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getListCalenderByRangeTime?start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setListCalender(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getDataActionOfMenuByDay = () => {
    const baseHref =
      "http://localhost:8080/api/v1/statisticAllActionOnThisMenuByDay";
    var config = {
      method: "get",
      url: `${baseHref}?email=${username}&start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,

      header,
      data: data,
    };

    axios(config)
      .then(function (response) {
        setDataActionOfMenuByDay(response.data);
        console.log("data", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getListCalenderbyTimeRange();
    getDataActionOfMenuByDay();
  }, [startDate, endDate]);

  return (
    <CContainer>
      <CRow>
        <CustomerDatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          className="border-5 text-center"
        />
      </CRow>

      <hr />

      <CCard className="row" style={{ border: "none" }}>
        <CCardBody>
          <CChartBar
            className="border-none"
            datasets={[
              {
                label: "Tổng Tương tác trên toàn bộ Menu",
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
    </CContainer>
  );
}

export default StatisticsClickAllMenu;
