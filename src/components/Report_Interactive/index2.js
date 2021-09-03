import React, { useState, useEffect } from "react";
import { CChartPie, CChart } from "@coreui/react-chartjs";
import { CCard, CCardBody, CCardHeader, CRow } from "@coreui/react";
import { header, username } from "./../CommonData/data";
import axios from "axios";
function ReportUsers() {
  const [data, setData] = useState([]);
  const [dataLabelAddress, setDataLabelAddress] = useState([]);
  const [data2, setData2] = useState([]);
  const [dataLabelSupplier, setDataLabelSupplier] = useState([]);

  const getDataByAddress = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsActivityByAddress?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const dt = [];
        const dt2 = [];
        const res = response.data;

        for (let index = 0; index < res.length; index++) {
          dt.push(res[index][1]);
          dt2.push(res[index][0]);
        }

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
        setDataLabelAddress(dt2);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataBySupplier = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticsActivityBySupplier?email=${username}`,
      header,
    };

    axios(config)
      .then(function (response) {
        const dt = [];
        const dt2 = [];
        const res = response.data;
        for (let index = 0; index < res.length; index++) {
          dt.push(res[index][1]);
          dt2.push(res[index][0]);
        }

        setDataLabelSupplier(dt2);
        setData2([
          {
            data: dt,
            backgroundColor: [
              "#9900FF",
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
    getDataByAddress();
    getDataBySupplier();
  }, []);

  return (
    <CRow>
      <CCard className="col-6">
        <CCardHeader>
          <h2>Tương tác theo vùng miền</h2>
          <i>Tổng số tương tác theo địa phương</i>
        </CCardHeader>
        <CCardBody className="chart-wrapper">
          <CChartPie type="pie" datasets={data} labels={dataLabelAddress} />
        </CCardBody>
      </CCard>

      <CCard className="col-6">
        <CCardHeader>
          <h2>Tương tác theo nhà mạng</h2>
          <i>Tổng số tương tác bởi từng nhà cung cấp Internet</i>
        </CCardHeader>
        <CCardBody>
          <CChart
            type="polarArea"
            datasets={data2}
            options={{
              maintainAspectRatio: true,
              tooltips: {
                enabled: true,
              },
            }}
            labels={dataLabelSupplier}
          />
        </CCardBody>
      </CCard>
    </CRow>
  );
}

export default ReportUsers;
