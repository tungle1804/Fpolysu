import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CRow } from "@coreui/react";
import { header, username } from "./../CommonData/data";
import axios from "axios";

function ReportRatioActivity() {
  const [dataMenu, setDataMenu] = useState([]);
  const [dataWidget, setDataWidget] = useState([]);

  const getDataMenu = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberActionDisplayOnMenu?email=${username}`,
      header,
    };
    var config2 = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnMenu?email=${username}`,
      header,
    };
    let datax = [];
    axios(config)
      .then(function (response) {
        datax = response.data.content;
      })
      .catch(function (error) {
        console.log(error);
      });
    axios(config2)
      .then(function (response) {
        let dt = response.data.content;
        let datax2 = [];
        for (let index = 0; index < dt.length; index++) {
          let element = dt[index][1];
          console.log("element", element);
          let test = datax[index];
          test = [...test, element];
          datax2 = [...datax2, test];
        }

        setDataMenu(datax2);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataWidget = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/statisticActionButtonByRangeTimeSelect?email=${username}`,
      header,
    };
    var config2 = {
      method: "get",
      url: `http://localhost:8080/api/v1/getTotalNumberClickOnButtonByRangeTimeSelect?email=${username}`,
      header,
    };
    let datax = [];
    axios(config)
      .then(function (response) {
        datax = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    axios(config2)
      .then(function (response) {
        let dt = response.data;
        let datax2 = [];
        for (let index = 0; index < dt.length; index++) {
          let element = dt[index][1];
          let test = datax[index];
          test = [...test, element];
          datax2 = [...datax2, test];
        }

        setDataWidget(datax2);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataWidget();
    getDataMenu();
  }, []);
  return (
    <CRow>
      <CCard className="col-6">
        <CCardHeader align={"center"}>T??? l??? nh???p chu???t v??o Menu</CCardHeader>
        <CCardBody>
          <table
            className=" table table-striped table-bordered "
            style={{ border: "none" }}
          >
            <thead>
              <tr>
                <th>STT</th>
                <th>T??n Menu</th>
                <th>S??? l???n hi???n th???</th>
                <th>S??? l???n Click</th>
                <th>T??? l??? Click</th>
              </tr>
            </thead>
            <tbody>
              {/* {
              !data.length(
                <tr className="text-center">
                  <td colSpan={3}>No Student</td>
                </tr>
              )
            } */}
              {dataMenu.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{((item[2] / item[1]) * 100).toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="col-6">
        <CCardHeader align={"center"} textColor="red">
          T??? l??? nh???p chu???t v??o Widget
        </CCardHeader>
        <CCardBody>
          <table
            className=" table table-striped table-bordered "
            style={{ border: "none" }}
          >
            <thead>
              <tr>
                <th>STT</th>
                <th>T??n N??t</th>
                <th>S??? l???n hi???n th???</th>
                <th>S??? l???n Click</th>
                <th>T??? l??? Click</th>
              </tr>
            </thead>
            <tbody>
              {/* {
              !data.length(
                <tr className="text-center">
                  <td colSpan={3}>No Student</td>
                </tr>
              )
            } */}

              {dataWidget.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{((item[2] / item[1]) * 100).toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </CRow>
  );
}

export default ReportRatioActivity;
