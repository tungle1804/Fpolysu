import React, { useState, useEffect } from "react";
import { CChartPie, CChart } from "@coreui/react-chartjs";
import { CCard, CCardBody, CCardHeader, CRow, CContainer } from "@coreui/react";
import { dataEquipment, header, username } from "./../CommonData/data";
import axios from "axios";
function ReportActionByEquipment() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [labelButtons, setLabelButtons] = useState([]);
  const getDataEqupment = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsActivityByEquipment?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const dt = [];
        dt.push(response.data[0][1]);
        dt.push(response.data[1][1]);
        // console.log("dt", dt);
        setData([
          {
            data: dt,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFFF00",
              "#FF9900",
              "#00AA00",
              "#FF99CC",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFFF00",
              "#FF9900",
              "#00AA00",
              "#FF99CC",
            ],
          },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataByButton = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnButtonByType?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const dt = [];
        const dt2 = [];
        const res = response.data.content;
        for (let index = 0; index < res.length; index++) {
          dt.push(res[index][1]);
          dt2.push(res[index][0]);
        }
        setLabelButtons(dt2);
        setData2([
          {
            data: dt,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFFF00",
              "#FF9900",
              "#00AA00",
              "#FF99CC",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFFF00",
              "#FF9900",
              "#00AA00",
              "#FF99CC",
            ],
          },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataEqupment();
    getDataByButton();
  }, []);

  return (
    <CRow>
      <CCard className="col-6">
        <CCardHeader>
          <h2>Tương tác trên thiết bị</h2>
          <i>Tổng số click trên thiết bị</i>
        </CCardHeader>
        <CCardBody className="chart-wrapper">
          <CChartPie type="pie" datasets={data} labels={dataEquipment} />
        </CCardBody>
      </CCard>

      <CCard className="col-6">
        <CCardHeader>
          <h2>Tương tác trên nút</h2>
          <i>Tổng số click trên tất cả các kiểu nút trên menu</i>
        </CCardHeader>
        <CCardBody>
          <CChart type="doughnut" datasets={data2} labels={labelButtons} />
        </CCardBody>
      </CCard>
    </CRow>
  );
}

export default ReportActionByEquipment;
