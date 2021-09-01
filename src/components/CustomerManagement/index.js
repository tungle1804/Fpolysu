import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadData, loadDataInfo } from "../../redux/actions/dataAction";
import DataService from "../../service/DataService";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function CustomerManagement({
  data,
  requesting,
  dispatch,
  dataButton,
  requestingButton,
  dataInfo,
}) {
  const [exportData, setExportData] = useState([]);
  const [dataModal, setDataModal] = useState();
  useEffect(() => {
    dispatch(loadData());
  }, []);
  const onchangebyId = (id) => {
    if (id != null) {
      dispatch(loadDataInfo({ id }));
    }
  };
  console.log(dataInfo);
  useEffect(() => {
    setExportData(dataInfo);
    console.log("sss");
    if (dataInfo && dataInfo.length > 0) {
      if (dataInfo[0].modal) {
        if (dataInfo[0].modal.length > 0) {
          setDataModal(dataInfo[0].modal);
        }
      }
    }
  }, [dataInfo]);
  // useEffect(() => {
  //   setExportData(dataInfo);
  // }, [dataInfo]);
  const onSave = () => {
    let data = {
      fullName: "Le duc beoooo",
      phone: "044445532",
      emailCustomer: "leducbinh@gmail.com",
      address: "TP Vinh Nghe an",
      conTent: "toi duoc vao cong ty",
      notes: "abxxc",
      users: { email: "leducbinh@gmail.com" },
    };
    DataService.createData(data);
  };
  const onExportData = (data) => {
    setExportData(data);
  };
  const DataSet = [
    {
      columns: [
        {
          title: "Country Region",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 30 },
        }, // width in characters
        {
          title: "Confirmed",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 100 },
        }, // width in pixels
        {
          title: "Deaths",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        }, // width in pixels
        {
          title: "Recovered",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 100 },
        }, // width in pixel

        {
          title: exportData.length > 0 ? exportData[0].fullname : "",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        }, // width in pixels

        exportData.length > 0
          ? exportData[0].modal.length > 0
            ? exportData[0].modal.map((item) => ({
                title: item.length > 0 ? item.inputName : "",
                style: { font: { sz: "18", bold: true } },
                width: { wpx: 125 },
              }))
            : ""
          : "",
        // exportData
        //   ? exportData.map((item) => ({
        //       title: item.inputName ? item.inputName : "",
        //       style: { font: { sz: "18", bold: true } },
        //       width: { wpx: 125 },
        //     }))
        //   : "",
        // {
        //   title: "Email",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 125 },
        // }, // width in pixels
        // {
        //   title: "Fullname",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wch: 30 },
        // }, // width in characters
        // {
        //   title: "Phone",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 100 },
        // }, // width in pixels
        // {
        //   title: "Address",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 100 },
        // }, // width in pixels
        // {
        //   title: "Content",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 125 },
        // }, // width in pixels
        // {
        //   title: "Notes",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wch: 30 },
        // }, // width in characters
        // {
        //   title: "CreateDate",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 125 },
        // }, // width in pixels

        // item.modal.map((items) => ({
        //   title: items.inputName ? items.inputName : "",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 125 },
        // })),
      ],
      // data1: exportData.modal.map((items) => ({
      //   value: items.inputValue ? items.inputValue : "sss",
      //   style: {
      //     font: { color: { rgb: "ffffff" } },
      //     fill: { patternType: "solid", fgColor: { rgb: "ebc907" } },
      //   },
      // })),
      data: exportData.map((item) => [
        {
          value: item.address ? item.address : "",
          style: { font: { sz: "14" } },
        },
        {
          value: item.content ? item.content : "",
          style: { font: { sz: "14" } },
        },
        {
          value: item.createDate ? item.createDate : "",
          style: {
            font: { color: { rgb: "ffffff" } },
            fill: { patternType: "solid", fgColor: { rgb: "3461eb" } },
          },
        },
        {
          value: item.emailCustomer ? item.emailCustomer : "",
          style: {
            font: { color: { rgb: "ffffff" } },
            fill: { patternType: "solid", fgColor: { rgb: "eb1207" } },
          },
        },
        {
          value: item.fullname ? item.fullname : "",
          style: {
            font: { color: { rgb: "ffffff" } },
            fill: { patternType: "solid", fgColor: { rgb: "4bd909" } },
          },
        },
        {
          value: item.notes ? item.notes : "",
          style: {
            font: { color: { rgb: "ffffff" } },
            fill: { patternType: "solid", fgColor: { rgb: "ebc907" } },
          },
        },
        {
          value: item.phone ? item.phone : "",
          style: {
            font: { color: { rgb: "ffffff" } },
            fill: { patternType: "solid", fgColor: { rgb: "35bdb4" } },
          },
        },

        // {
        //   value: "tung",
        //   style: { font: { sz: "14" } },
        // },
        // {
        //   value: data.fullName ? data.fullName : "",
        //   style: { font: { sz: "14" } },
        // },
        // {
        //   value: data.phone ? data.phone : "",
        //   style: { font: { sz: "14" } },
        // },
        // {
        //   value: data.address ? data.address : "",
        //   style: { font: { sz: "14" } },
        // },
        // {
        //   value: data.conTent ? data.conTent : "",
        //   style: { font: { sz: "14" } },
        // },
        // {
        //   value: data.notes ? data.notes : "",
        //   style: { font: { sz: "14" } },
        // },
        // {
        //   value: data.createDate ? data.createDate : "",
        //   style: { font: { sz: "14" } },
        // },
        // data.modal.map((items) => ({
        //   title: items.inputName ? items.inputName : "",
        //   style: { font: { sz: "18", bold: true } },
        //   width: { wpx: 125 },
        // })),
      ]),
    },
  ];
  return (
    <>
      <main className="flex w-full bg-white h-full shadow-lg rounded-3xl">
        <section className="flex flex-col pt-3 w-4/12  h-full overflow-y-scroll">
          <h1 class="font-bold text-2xl ml-3">Danh sách liên hệ</h1>
          <label className="px-3">
            <input
              className="rounded-lg p-4 bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 w-full"
              placeholder="Search..."
            />
          </label>
          <ul className="mt-6">
            {data && data.length > 0
              ? data.map((item) => {
                  return (
                    <>
                      <div onClick={() => onchangebyId(item.id)}>
                        <li className="py-3 border-b px-3 transition hover:bg-indigo-100">
                          <div className="flex justify-center items-center content-center bg-gradient-to-br from-pink-300 to-pink-600 shadow-md hover:shadow-lg h-10 w-10 rounded-full fill-current text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">
                              {item.phone}
                            </h3>
                            <p className="text-md text-gray-400">23m ago</p>
                          </div>
                        </li>
                      </div>
                    </>
                  );
                })
              : ""}
          </ul>
        </section>
        <section className="w-6/12 px-4 flex flex-col bg-indigo-200 rounded-r-3xl">
          <div className="flex justify-between items-center h-48 border-b-2 mb-8">
            <div className="flex space-x-4 items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src="https://bit.ly/2KfKgdy"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Akhil Gautam</h3>
                <p className="text-light text-gray-400">
                  akhil.gautam123@gmail.com
                </p>
              </div>
            </div>
            <div>
              <ul className="flex text-gray-400 space-x-4">
                <li className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                  </svg>
                </li>
                <li className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                </li>
                <li className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </li>
                <li className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <section>
            <label>Thời gian </label>

            <input
              disabled
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              value={
                dataInfo.length > 0 && dataInfo[0].createDate
                  ? dataInfo[0].createDate
                  : ""
              }
            />
            <label>Họ và tên</label>
            <input
              disabled
              value={
                dataInfo.length > 0 && dataInfo[0].fullname
                  ? dataInfo[0].fullname
                  : ""
              }
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              defaultValue={""}
            />
            <label>Email</label>
            <input
              disabled
              value={
                dataInfo.length > 0 && dataInfo[0].emailCustomer
                  ? dataInfo[0].emailCustomer
                  : ""
              }
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              defaultValue={""}
            />
            <label>Địa chỉ</label>
            <input
              disabled
              value={
                dataInfo.length > 0 && dataInfo[0].address
                  ? dataInfo[0].address
                  : ""
              }
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              defaultValue={""}
            />
            <label>Số điện thoại </label>
            <input
              disabled
              value={
                dataInfo.length > 0 && dataInfo[0].phone
                  ? dataInfo[0].phone
                  : ""
              }
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              defaultValue={""}
            />
            <label>Để lại lời nhắn </label>
            <input
              disabled
              value={
                dataInfo.length > 0 && dataInfo[0].content
                  ? dataInfo[0].content
                  : ""
              }
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              defaultValue={""}
            />
            <label>Note </label>
            <input
              disabled
              value={
                dataInfo.length > 0 && dataInfo[0].notes
                  ? dataInfo[0].notes
                  : ""
              }
              className="w-full bg-purple-100 p-2 rounded-xl"
              rows={3}
              defaultValue={""}
            />
          </section>
        </section>
        <div>
          <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="h-2 w-full bg-gray-800" />
            <div className="px-2 py-3">
              <div className="w-full text-center border-t mb-1 pb-3">
                <h1 className="mt-2 text-xl font-bold">Thông tin khách hàng</h1>
              </div>
              <table className="w-full border">
                <thead></thead>
                <tbody>
                  {dataModal && dataModal.length > 0
                    ? dataModal.map((item) => (
                        <tr className="border-t text-sm">
                          <td className="p-1 pl-2 border-r ">
                            {item.inputName}
                          </td>
                          <input
                            value={item.inputValue}
                            type="text"
                            autofocus
                            id="username"
                            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                          />
                        </tr>
                      ))
                    : ""}
                </tbody>
                <thead>
                  <button
                    onClick={onSave}
                    type="button"
                    className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  >
                    cập nhập
                  </button>
                  <div style={{ textlAign: "-webkit - right" }}>
                    {dataInfo.length !== 0 ? (
                      <ExcelFile
                        filename="Thong_tin_khach_hang"
                        element={
                          <button
                            type="button"
                            className="btn btn-success float-right m-3"
                          >
                            Export Data
                          </button>
                        }
                      >
                        <ExcelSheet
                          dataSet={DataSet}
                          name="Thong_tin_khach_hang"
                        />
                      </ExcelFile>
                    ) : null}
                  </div>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    dataInfo: state.data.dataInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement);
