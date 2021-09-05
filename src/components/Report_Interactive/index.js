import React, { useState, useEffect } from "react";
import { CChartLine } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CLabel,
  CCardHeader,
  CRow,
  CBadge,
} from "@coreui/react";
import { dataHour, header, username } from "../CommonData/data";
import DatePicker from "react-datepicker";
import axios from "axios";
import ReportUsers from "./index2";
import ReportIp from "./index3";
import Select from "react-select";

function TotalCustomerByMonth() {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [day, setDay] = useState(new Date());
  const [totalByDay, setTotalByDay] = useState([]);
  const [menu, setMenu] = useState([]);
  const [idMenu, setIdMenu] = useState();
  const [total, setTotal] = useState();
  let arr = [];

  const getDataByDay = async () => {
    let sum = 0;
    let day = date.getDate();

    let month = date.getMonth() + 1;

    let year = date.getFullYear();

    if (year !== (undefined | null) && month !== (undefined | null) && idMenu) {
      var API_Statistics = `http://localhost:8080/api/v1/statisticAllActionOnThisMenuEnable?email=${username}&idMenu=${idMenu}&day=${day}&month=${month}&year=${year}`;

      await axios.get(API_Statistics, { header }).then((response) => {
        response.data.map((item) => {
          sum += item;
        });
        setTotal(sum);
        setTotalByDay(response.data);
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

        datas.map((item) => {
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
      <CRow>
        <CCard className="col-3">
          <CCardBody className="mx-auto p-1 border-none text-center">
            <CCardHeader className="font-extrabold " style={{ height: "60px" }}>
              Chọn ngày
            </CCardHeader>
            <br />
            <br />
            <DatePicker
              inline
              className="text-center"
              selected={date}
              onChange={(date) => setDate(date)} //when day is clicked
            />
          </CCardBody>
          <CCardHeader>
            Tổng số Tương tác :{" "}
            <CBadge
              className="float-lg-right rounded font-extrabold"
              color="primary"
            >
              {total}
            </CBadge>{" "}
          </CCardHeader>
          <br />
          <br />
        </CCard>

        <CCard className="col-9 ">
          <CCardHeader className="row justify-center">
            <CLabel className="font-bold text-center pt-2">
              Thống kê theo ngày của Menu đang dùng :
            </CLabel>
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
                  backgroundColor: "#6699FF",
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
