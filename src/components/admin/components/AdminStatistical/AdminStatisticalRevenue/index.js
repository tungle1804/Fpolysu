import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import Select from "react-select";
import {
  CCard,
  CCol,
  CContainer,
  CPagination,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CRow,
  CBadge,
} from "@coreui/react";
import { header } from "../../../../CommonData/data";
import axios from "axios";
import CustomerDatePicker from "../../../../CustomerDatePicker/index";

const AdminStatisticalRevenue = () => {

  const [statisticalBy, setStatisticalBy] = useState("1");

 const handleSelectCustomer = (e) => {
   const {name , value} = e.target;
   setStatisticalBy(value);
   console.log("bình statistical ", statisticalBy);
  }

  const [startDate, setStartDate] = useState(new Date("2021-09-01"));
  const [endDate, setEndDate] = useState(new Date("2021-09-01"));
  const [arrayDataOfRevenue, setArrayDataOfRevenue] = useState([]);
  const [listCalender,setListCalender] = useState([]);
  const [totalStatisticalRevenue,setTotalStatisticalRevenue] = useState();

  // console.log(menus);

  const getListCalenderbyTimeRange = () => {
    var config = {
      method: "get",
      url: `http://localhost:8080/api/v1/getListCalenderByRangeTimeOfAdminStatistical?start=${startDate
        .toISOString()
        .slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header
    };
    console.log("API", config.url);
    if (startDate && endDate) {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setListCalender(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  
  const getStatisticalCustomer = () => {
    var baseHref = "http://localhost:8080/api/v1/admin/statisticRevenueByAllDay";
      var config = {
      method: "get",
      url: `${baseHref}?start=${startDate.toISOString().slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header
   
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setArrayDataOfRevenue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getTotalCustomer = () => {
    var baseHref = "http://localhost:8080/api/v1/admin/statistical-revenue";
    var config = {
      method: "get",
      url: `${baseHref}?start=${startDate.toISOString().slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`,
      header,
    };
      axios(config)
        .then(function (response) {
          console.log("test b ", response)
          setTotalStatisticalRevenue(response.data);
        })
        .catch(function (error) {
        })
      } 

  useEffect(() => {
    getListCalenderbyTimeRange();
    getStatisticalCustomer();
    getTotalCustomer();
  }, [startDate, endDate]);



  return (
    <div className="pt-10 pb-10">

      <div className="overflow-x-auto">
        <div className="max-w-screen max-h-screen flex items-center justify-center font-sans overflow-hidden">

          <div className="w-full px-10">
            <div className="flex justify-between text-center">
              <div class="inline-block mt-2">
                <h5 className="text-2xl text-blue-700">Báo cáo doanh thu</h5>
              </div>

              <div className="flex mt-2">
                <div className="text-gray-600 mr-10" style={{ marginTop: "-1px" }}>
                  {/* <input className="border-2 rounded-md border-gray-300 bg-white px-3 text-sm focus:outline-none"
                    type="search" name="search" placeholder="Tìm kiếm" style={{ width: "230px", height: "37px" }} />
                  <button type="submit" >
                  </button> */}
                </div>

                <div class="inline-block">
                  <button type="button" class="focus:outline-none text-white text-sm py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg flex items-center font-semibold">
                    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Xuất excel
                  </button>
                </div>
              </div>
            </div>
            <hr className="mt-4 text-gray-100" />
            <div className="bg-white shadow-md rounded my-6">
            </div>
          </div>
        </div>
      </div>



      <CContainer style = {{marginTop: "5px"}}>
        <CRow>
          <CCol sm={6}>
            <CCard>
              <CCardHeader>Chọn Thời gian</CCardHeader>
              <CCardBody>
                <CustomerDatePicker
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  className="border-5 text-center"
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm={6}>
          </CCol>
        </CRow>

        <hr />
        <CRow className="container row-auto">
          <CCard className="col-3">
            <CCardHeader
              className="text-center bg-blue-200 text-blue-500 font-weight-bold"
              style={{ color: "6699FF" }}
            >
              Tổng doanh thu {" "}
            </CCardHeader>
            <CCardBody>
              <h1 className="text-lg-center px-3">
                <CBadge color="primary">{totalStatisticalRevenue}</CBadge>
              </h1>
            </CCardBody>
            <CCardFooter></CCardFooter>
          </CCard>

          <CCard className="col-9">
            <CCardBody>
              <CChartBar
                datasets={[
                  {
                    label: "Doanh thu",
                    backgroundColor: "#6699FF",
                    data: arrayDataOfRevenue,
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
        </CRow>

      </CContainer>

    </div>
  )
}

export default AdminStatisticalRevenue

