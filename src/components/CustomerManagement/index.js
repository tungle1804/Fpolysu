import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadData, loadDataInfo } from "../../redux/actions/dataAction";
import DataService from "../../service/DataService";
import ReactExport from "react-data-export";
import PropTypes from "prop-types";
import { makeStyles, lighten } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import { alpha } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./style.css";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function CustomerManagement({
  data,
  requesting,
  dispatch,
  dataButton,
  requestingButton,
  dataInfo,
  props,
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
    return () => {
      setDataModal(null);
    };
  }, [dataInfo]);

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
        // exportData.length > 0
        //   ? exportData[0].modal.length > 0
        //     ? exportData[0].modal.map((item) => ({
        //         title: item.length > 0 ? item.inputName : "",
        //         style: { font: { sz: "18", bold: true } },
        //         width: { wpx: 125 },
        //       }))
        //     : ""
        //   : "",
        // exportData
        //   ? exportData.map((item) => ({
        //       title: item.inputName ? item.inputName : "",
        //       style: { font: { sz: "18", bold: true } },
        //       width: { wpx: 125 },
        //     }))
        //   : "",
        {
          title: "Email",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        }, // width in pixels
        {
          title: "Fullname",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 30 },
        }, // width in characters
        {
          title: "Phone",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 100 },
        }, // width in pixels
        {
          title: "Address",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 100 },
        }, // width in pixels
        {
          title: "Content",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        }, // width in pixels
        {
          title: "Notes",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 30 },
        }, // width in characters
        {
          title: "CreateDate",
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
      ],
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
      ]),
    },
  ];

  // tabs
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      "aria-controls": `wrapped-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStylesSearch = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const classesSearch = useStylesSearch();

  // table

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];

  const useStylesTable = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 493,
    },
  });

  const classesInput = useStylesTable();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="one" label="Danh sách" wrapped {...a11yProps("one")} />
            <Tab value="two" label="Bảng danh sách" {...a11yProps("two")} />
            {/* <Tab value="three" label="Item Three" {...a11yProps('three')} /> */}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <main className="flex w-full bg-white h-full ">
            <section className="flex flex-col pt-3 w-full h-full  mr-2 ">
              <div className="w-full flex border-b-2 border-gray-200 justify-between pb-2">
                <div className="my-auto">
                  <h1 class="font-bold text-base ">Danh sách liên hệ</h1>
                </div>
                <div className="my-auto mr-2">
                  <div className={classesSearch.root}>
                    <div className="bg-white rounded-lg border-2 border-gray-600">
                      <div className={classesSearch.search}>
                        <div className={classesSearch.searchIcon}>
                          <div>
                            <SearchIcon />
                          </div>
                        </div>
                        <InputBase
                          placeholder="Search…"
                          classes={{
                            root: classesSearch.inputRoot,
                            input: classesSearch.inputInput,
                          }}
                          inputProps={{ "aria-label": "search" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="overflow-y-auto " style={{ height: "550px" }}>
                <ul className="mt-3 ">
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
                                  <p className="text-md text-gray-400">
                                    23m ago
                                  </p>
                                </div>
                              </li>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </ul>
              </section>
            </section>

            <section className="w-auto px-2 flex flex-col  border-l-2 border-gray-300">
              <div className="flex justify-between items-center h-auto border-b-2 mb-2 py-2">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full my-auto overflow-hidden">
                    <img
                      src="https://bit.ly/2KfKgdy"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col my-auto ml-3">
                    <span className="font-semibold text-lg">Akhil Gautam</span>
                    <span className="text-sm text-gray-700">
                      akhil.gautam123@gmail.com
                    </span>
                  </div>
                </div>
                <div>
                  <ul className="flex text-gray-600 space-x-4">
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
              <section
                className="overflow-y-auto mt-2 pr-2"
                style={{ height: "550px" }}
              >
                <label>Thời gian: </label>

                <input
                  disabled
                  className="w-full bg-gray-200 p-2 rounded-sm"
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
                  className="w-full bg-gray-200 p-2 rounded-sm"
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
                  className="w-full bg-gray-200 p-2 rounded-sm"
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
                  className="w-full bg-gray-200 p-2 rounded-sm"
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
                  className="w-full bg-gray-200 p-2 rounded-sm"
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
                  className="w-full bg-gray-200 p-2 rounded-sm"
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
                  className="w-full bg-gray-200 p-2 rounded-sm"
                  rows={3}
                  defaultValue={""}
                />

                {dataModal && dataModal.length > 0
                  ? dataModal.map((item) => (
                      <div>
                        <label>{item.inputName}</label>
                        <input
                          value={item.inputValue}
                          type="text"
                          autofocus
                          id="username"
                          className="w-full bg-gray-200 p-2 rounded-sm"
                        />
                      </div>
                    ))
                  : ""}

                {/* <div style={{ textlAign: "-webkit - right" }}>
                    {dataInfo.length !== 0 ? (
                      <ExcelFile
                        filename="Thong_tin_khach_hang"
                        element={ */}

                {/* <div>
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
                </div> */}
              </section>
            </section>
          </main>
        </TabPanel>
        <TabPanel value={value} index="two">
          <div className="font-sans text-black bg-white flex items-center mb-3">
            <div className="border rounded overflow-hidden flex">
              <input
                type="text"
                className="px-4 py-2"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-4 border-l">
                <svg
                  className="h-4 w-4 text-grey-dark"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>

          <Paper className={classesInput.root}>
            <TableContainer className={classesInput.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </TabPanel>
        {/* <TabPanel value={value} index="three">
          Item Three
        </TabPanel> */}
      </div>
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
