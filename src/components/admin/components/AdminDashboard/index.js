import React, { useState, useEffect } from 'react'
import { callApi } from "../../../../service/Apis";

const AdminDashboard = () => {
  const [employee, setEmployee] = useState();
  const [customer, setCustomer] = useState();
  const [button, setButton] = useState();
  const [menu, setMenu] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const fullname = localStorage.getItem('fullName');
  useEffect(() => {
    callApi("get", "api/v1/sum-employee")
      .then(function (response) {
        setEmployee(response.data);
        console.log(employee);
      })
      .catch(function (err) {
        console.log(err);
      });

    callApi("get", "api/v1/sum-customer")
      .then(function (response) {
        setCustomer(response.data);
        console.log(customer);
      })
      .catch(function (err) {
        console.log(err);
      });

    callApi("get", "api/v1/sum-menu")
      .then(function (response) {
        setMenu(response.data);
        console.log(menu);
      })
      .catch(function (err) {
        console.log(err);

      });

    callApi("get", "api/v1/total-price")
      .then(function (response) {
        setTotalPrice(response.data);
        console.log(totalPrice);
      })
      .catch(function (err) {
        console.log(err);
      });

    callApi("get", "api/v1/sum-button")
      .then(function (response) {
        setButton(response.data);
        console.log(totalPrice);
      })
      .catch(function (err) {
        console.log(err);
      });

  }, [])
  return (
    <div className="bg-indigo-50 flex-grow py-12 px-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-sm font-bold text-indigo-600">Chào {fullname},</h4>
          <h1 className="text-4xl font-bold text-indigo-900 mt-">Chào mừng đến POLYSU!</h1>
        </div>
        <div>
          <div className="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-10">
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">Tổng số khách hàng</span>
              <h1 className="text-2xl font-bold">{customer}</h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">Tổng số nhân viên</span>
              <h1 className="text-2xl font-bold">{employee}</h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">Doanh thu</span>
              <h1 className="text-2xl font-bold">${totalPrice}</h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">Tổng số MENU</span>
              <h1 className="text-2xl font-bold">{menu}</h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex mt-10 space-x-10">
          <div className="bg-white w-2/3 p-8 flex items-center justify-around rounded-xl shadow-lg">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400">Tổng doanh thu</h3>
              <h1 className="text-4xl font-bold text-indigo-600">${totalPrice}</h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="flex-grow bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-center">
              <div className="m-3">
                <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span className="mr-2">Send</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
              <div className="m-3">
                <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span className="mr-2">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
              </div>
              <div className="m-3">
                <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span className="mr-2">Wait</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-center font-semibold text-gray-400">Tổng số Button</h3>
              <h1 className="text-4xl text-center font-bold text-indigo-600">{button}</h1>
            </div>
          </div>
        </div>
        <div />
        <div />
      </div>
      <div />
      <div />
    </div>
  )
}

export default AdminDashboard
