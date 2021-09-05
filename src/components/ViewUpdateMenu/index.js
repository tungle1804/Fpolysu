import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewButtonByIDMenu } from "../../redux/actions/buttonAction";
import {
  fetchUpdateMenu,
  loadPosts,
  viewPost,
} from "../../redux/actions/menuAction";
import MenuService from "../../service/Menu/MenuService";
import { Modal, Button, Form, OverlayTrigger } from "react-bootstrap";
import { createButton } from "../../redux/actions/updatebuttonAction";
import ButtonService from "../../service/Button/ButtonService";
import { Link, useHistory } from "react-router-dom";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Grid, Slider, Tooltip } from "@material-ui/core";
import {
  saveBackgroundColor,
  saveOpacityMenu,
} from "../../redux/actions/backgroundColorAction";
import { SketchPicker } from "react-color";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import {
  saveDisplayMenu,
  saveDisplayMenuV2,
} from "../../redux/actions/displayMenuAction";
import Swal from "sweetalert2";
export function useStyle() {
  return <> text-blue-500 border-b-2 font-medium border-blue-500</>;
}
const renderSys = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    <div className="bg-gray-100 rounded px-3 shadow-sm py-1">
      Chọn thiết bị bạn muốn cho menu hiển thị.
    </div>
  </Tooltip>
);
const renderDisplay = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    <div className="bg-gray-100 rounded px-3 shadow-sm py-1">
      Tùy chọn giao diện hiển thị menu.
    </div>
  </Tooltip>
);
export default function ViewUpdateMenu() {
  const style = useStyle().props.children;

  const innistall = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "113",
      b: "19",
    },
  };
  const initstateText = {
    displayColorText: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
    },
  };

  const initstateBackground = {
    displayColorBackground: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
    },
  };
  const initstateIcon = {
    displayColorIcon: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
    },
  };
  const initstateValueButton = {
    name_button: null,
    color_text: null,
    color_background: null,
    color_icon: null,
    link: null,
  };

  const data = useSelector((state) => state.posts.menuData);
  const dataButton = useSelector((state) => state.createbuttons.data);
  const displayMenu = useSelector((state) => state.displayMenu.displayMenu);
  const displayMenuV2 = useSelector((state) => state.displayMenu.dislayMenuV2);
  const dataInputTotal = useSelector((state) => state.input.dataInput);
  const [show, setShow] = useState(false);
  const [test, setTest] = useState();
  const [menu, setMenu] = useState();
  const [namemenu, setnameMenu] = useState();
  const [images, setImages] = useState();

  const [displayTab, setDisplayTab] = useState(1);
  const [colorPicker, setColorPicker] = useState(innistall);
  const [colormenu, setColorMenu] = useState();
  const [colorText, setColorText] = useState(initstateText);
  const [colorBackground, setColorBackground] = useState(initstateBackground);
  const [colorIcon, setColorIcon] = useState(initstateIcon);
  const [valueButton, setValueButton] = useState(initstateValueButton);
  const [valueOpacity, setValueOpacity] = useState(1);
  const [seletedValidateFrom, setSeletedValidateFrom] = useState();
  const [selectedFromTime, setSelectedFromTime] = useState(0);
  const [seletedValidateTo, setSeletedValidateTo] = useState();
  const [selectedToTime, setSelectedToTime] = useState(2360);
  const [displayTab1, setDisplayTab1] = useState(1);
  const [displayActive, setDisplayActive] = useState();
  const [dataEditMenu, setDataEditMenu] = useState();
  const dispatch = useDispatch();
  let history = useHistory();
  // useEffect(() => {
  //   dispatch(viewPost(id));
  // }, []);
  useEffect(() => {
    setDataEditMenu(data);
    dispatch(saveBackgroundColor(data ? data.color_menu : ""));
    dispatch(saveOpacityMenu(data ? data.opacity : ""));
    dispatch(saveDisplayMenu(data ? data.menuType : ""));
    dispatch(saveDisplayMenuV2(data ? data.menuLocation : ""));
  }, [data]);
  const styles = {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: `rgba(${colorPicker.color && colorPicker.color.r}, ${
        colorPicker.color && colorPicker.color.g
      }, ${colorPicker.color && colorPicker.color.b})`,
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "1",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  };
  const stylesText = {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: `rgba(${colorText.color && colorText.color.r}, ${
        colorText.color && colorText.color.g
      }, ${colorText.color && colorText.color.b})`,
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      //   boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      //   display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "1",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  };
  const stylesBackground = {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: `rgba(${colorBackground.color && colorBackground.color.r}, ${
        colorBackground.color && colorBackground.color.g
      }, ${colorBackground.color && colorBackground.color.b})`,
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      //   boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      //   display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "1",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  };
  const stylesIcon = {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: `rgba(${colorIcon.color && colorIcon.color.r}, ${
        colorIcon.color && colorIcon.color.g
      }, ${colorIcon.color && colorIcon.color.b})`,
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      //   boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      //   display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "1",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  };
  const getRandomInt = (min, max) => {
    return Number(Math.floor(Math.random() * (max - min)) + min);
  };
  const onHandleChangeValueMenu = (e) => {
    const { name } = e.target;
    setDataEditMenu({
      ...dataEditMenu,
      [name]: e.target.value,
    });
  };
  const onHandleChange = (e) => {
    const { name } = e.target;
    setTest({
      ...test,
      [name]: e.target.value,
    });
  };
  const handleShow = (images) => {
    setImages(images);

    setShow(true);
  };
  const onhandleSave = () => {
    let tshirt = {
      menu: { id_menu: dataEditMenu.id },
      name_button: test.name_button,
      color_text: test.color_text,
      color_background: test.color_background,
      color_icon: test.color_icon,
      link: test.link,
      icon: images,
    };
    dispatch(createButton(tshirt));
    ButtonService.createButtons(tshirt);
    setShow(false);
  };
  const onhandleCloses = () => {
    setShow(false);
  };
  const onEditMenu = () => {
    let tshirt = {
      name_menu: menu.name_menu,
      status: data.status,
      color_menu: data.color_menu,
      users: data.users.email,
    };
  };

  const onHandleChangeMenu = (e) => {
    setnameMenu(e.target.value);
  };
  const viewColorRight = () => {
    return (
      <>
        <span className="mr-5">Màu nền</span>
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>

        {colorPicker.displayColorPicker ? (
          <div>
            <div style={styles.cover} onClick={handleClose} />
            <SketchPicker color={colorPicker.color} onChange={handleChange} />
          </div>
        ) : (
          ""
        )}
        <div style={{ width: "250px" }}>
          <Grid item xs>
            <Slider
              step={0.001}
              min={0.01}
              max={1}
              value={typeof valueOpacity === "number" ? valueOpacity : 1}
              aria-labelledby="input-slider"
              onChange={handleSliderChange}
            />
          </Grid>
        </div>
      </>
    );
  };

  const handleClick = () => {
    setColorPicker({ ...colorPicker, displayColorPicker: true });
  };
  const handleClose = () => {
    setColorPicker({ ...colorPicker, displayColorPicker: false });
  };
  const handleChange = (color) => {
    setColorPicker({ ...colorPicker, color: color.rgb });

    dispatch(
      saveBackgroundColor(rgbToHex(color.rgb.r, color.rgb.g, color.rgb.b))
    );
  };
  const handleClickText = () => {
    setColorText({ ...colorText, displayColorText: true });
  };
  const handleCloseText = () => {
    setColorText({ ...colorText.color, displayColorText: false });
  };
  const handleChangeText = (color) => {
    setColorText({ ...colorText, color: color.rgb });
    setValueButton({ ...valueButton, color_text: color.rgb });
  };
  const handleClickBackground = () => {
    setColorBackground({ ...colorBackground, displayColorBackground: true });
  };
  const handleCloseBackground = () => {
    setColorBackground({
      ...colorBackground.color,
      displayColorBackground: false,
    });
  };
  const handleChangeBackground = (color) => {
    setColorBackground({ ...colorBackground, color: color.rgb });
    setValueButton({ ...valueButton, color_background: color.rgb });
  };
  const handleClickIcon = () => {
    setColorIcon({ ...colorIcon, displayColorIcon: true });
  };
  const handleCloseIcon = () => {
    setColorIcon({ ...colorIcon.color, displayColorIcon: false });
  };
  const handleChangeIcon = (color) => {
    setColorIcon({ ...colorIcon, color: color.rgb });
    setValueButton({ ...valueButton, color_icon: color.rgb });
  };

  const handleFromTimeChange = (date) => {
    setSeletedValidateFrom(date);
    setSelectedFromTime(Number(moment(date, ["h:mm A"]).format("HHmm")));
  };
  const handleToTimeChange = (date) => {
    setSeletedValidateTo(date);
    setSelectedToTime(Number(moment(date, ["h:mm A"]).format("HHmm")));
  };
  function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const handleSliderChange = (event, newValue) => {
    setValueOpacity(newValue);
    dispatch(saveOpacityMenu(newValue));
  };
  const renderColor = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="bg-gray-100 rounded px-3 shadow-sm py-1">
        Màu sắc cho menu và nút
      </div>
    </Tooltip>
  );
  const onChangeViewColorLeft = () => {
    setDisplayTab(1);
    setColorPicker({
      ...colorPicker,
      color: {
        r: null,
        g: null,
        b: null,
      },
    });
    dispatch(saveBackgroundColor(null));
  };
  const onChangeViewColorRight = () => {
    setDisplayTab(2);
    setColorMenu(null);
    dispatch(saveBackgroundColor(null));
  };
  const onhandleColor = (color) => {
    setColorMenu(color);
    dispatch(saveBackgroundColor(color));
  };
  const onChangeDisplayMenu = () => {
    dispatch(saveDisplayMenu("1"));
  };
  const onChangeDisplayMenu1 = () => {
    dispatch(saveDisplayMenu("2"));
  };
  const onChangeDisplayMenu2 = () => {
    dispatch(saveDisplayMenu("3"));
  };
  const onChangeDisplayMenu3 = () => {
    dispatch(saveDisplayMenu("4"));
  };
  const onChangeDisplay = () => {
    setDisplayActive("1");
    dispatch(saveDisplayMenuV2("1"));
  };
  const onChangeDisplay1 = () => {
    setDisplayActive(saveDisplayMenuV2("2"));
    dispatch(saveDisplayMenuV2("2"));
  };
  const onChangeDisplay2 = () => {
    setDisplayActive(saveDisplayMenuV2("3"));
    dispatch(saveDisplayMenuV2("3"));
  };
  const onChangeDisplay3 = () => {
    setDisplayActive(saveDisplayMenuV2("4"));
    dispatch(saveDisplayMenuV2("4"));
  };
  const onChangeDisplay4 = () => {
    setDisplayActive(saveDisplayMenuV2("5"));
    dispatch(saveDisplayMenuV2("5"));
  };
  const onChangeDisplay5 = () => {
    setDisplayActive(saveDisplayMenuV2("6"));
    dispatch(saveDisplayMenuV2("6"));
  };
  const onchangeEditMenu = () => {
    // color_menu: "#ea0f0f";
    // fromDisplayTime: 2200;
    // id: 24;
    // menuCode: "MUXPcM9xFJcgSQNvR";
    // menuLocation: "1";
    // menuType: "1";
    // name_menu: "menu3";
    // opacity: "0.588";
    // status: false;
    // toDisplayTime: 2212;
    let data = {
      menu: [
        {
          users: { email: localStorage.getItem("email") },
          name_menu: dataEditMenu ? dataEditMenu.name_menu : "",
          color_menu: colormenu
            ? colormenu
            : colorPicker.color
            ? colorPicker.color.r
              ? rgbToHex(
                  colorPicker.color.r,
                  colorPicker.color.g,
                  colorPicker.color.b
                )
              : dataEditMenu.color_menu
            : dataEditMenu.color_menu,
          menuCode: dataEditMenu.menuCode,
          menuLocation: dataEditMenu.menuLocation,
          menuType: dataEditMenu.menuType,
          opacity: dataEditMenu.opacity,
          fromDisplayTime: dataEditMenu.fromDisplayTime,
          toDisplayTime: dataEditMenu.toDisplayTime,
          id: dataEditMenu.id,
          // status: "false",
          // color_menu: colormenu
          //   ? colormenu
          //   : rgbToHex(
          //       colorPicker.color.r,
          //       colorPicker.color.g,
          //       colorPicker.color.b
          //     ),
          // menuType: displayMenu ? displayMenu : "1",
          // menuLocation: displayMenuV2 ? displayMenuV2 : null,
          // menuCode: makeid(15),
          // opacity: valueOpacity ? valueOpacity : "1",
          // fromDisplayTime: selectedFromTime,
          // toDisplayTime: selectedToTime,
        },
      ],
      buttons: [],
      modal: [],
    };

    for (let i = 0; i < dataButton.length; i++) {
      let button = {
        id: dataButton[i].id,
        name_button: dataButton[i].name_button,
        color_text: dataButton[i].color_text,
        color_background: dataButton[i].color_background,
        color_icon: dataButton[i].color_icon,
        link: dataButton[i].link,
        icon: dataButton[i].icon,
        typeButton: dataButton[i].typeButton,
        captionContent: dataButton[i].captionContent,
      };
      data.buttons.push(button);
    }
    for (let j = 0; j < dataInputTotal.length; j++) {
      let modal = {
        id: dataInputTotal[j].buttons.id,
        inputName: dataInputTotal[j].inputName,
        inputValue: null,
      };
      data.modal.push(modal);
    }
    console.log(data);
    dispatch(fetchUpdateMenu({ data, history, Swal }));
  };
  const viewDisplayLeft = () => {
    return (
      <>
        <div
          onClick={onChangeDisplayMenu}
          className="shape-type-image active mr-5 ml-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/full.png"
            alt="Thanh menu dài"
          />
        </div>
        <div
          onClick={onChangeDisplayMenu1}
          className="shape-type-image active  mr-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/fit.png"
            alt="Thanh menu dài"
          />
        </div>
        <div
          onClick={onChangeDisplayMenu2}
          className="shape-type-image active  mr-5 ml-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/circle.png"
            alt="Thanh menu dài"
          />
        </div>
        <div
          onClick={onChangeDisplayMenu3}
          className="shape-type-image active  mr-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/square.png"
            alt="Thanh menu dài"
          />
        </div>
      </>
    );
  };
  const viewColorLeft = () => {
    return (
      <>
        <button
          onClick={() => onhandleColor("black")}
          className="h-6 w-12 mr-2  rounded-sm bg-gray-900"
        ></button>
        <button
          onClick={() => onhandleColor("#EE0000")}
          className="h-6 w-12 mr-2   rounded-sm bg-red-600"
        ></button>
        <button
          onClick={() => onhandleColor("fuchsia")}
          className="h-6 w-12 mr-2  rounded-sm bg-pink-700"
        ></button>
        <button
          onClick={() => onhandleColor("gray")}
          className="h-6 w-12  mr-2  rounded-sm bg-gray-500"
        ></button>
        <button
          onClick={() => onhandleColor("aqua")}
          className="h-6 w-12 mr-2   rounded-sm bg-teal-400"
        ></button>
      </>
    );
  };
  const onChangeViewDisplayLeft = () => {
    setDisplayTab1(1);
  };
  const onChangeViewDisplayRight = () => {
    setDisplayTab1(2);
  };
  const viewDisplayRight = () => {
    if (displayMenu === "1" || displayMenu === "2") {
      return (
        <>
          <div class="mat-radio-label-content">
            <div
              class="shape-type-image1"
              style={{
                backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/bottom-active.png")`,
              }}
            />
          </div>
        </>
      );
    } else if (displayMenu === "3" || displayMenu === "4") {
      return (
        <>
          <div className="container mx-auto px-6 my-1 gap-3 flex flex-wrap -m-4 mt-3 mb-5">
            <div onClick={onChangeDisplay} class="mat-radio-label-content">
              <div
                class="shape-type-image1"
                style={{
                  backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/right-bottom${
                    displayActive === "1" ? "-active" : ""
                  }.png")`,
                }}
              />
            </div>
            <div onClick={onChangeDisplay1} class="mat-radio-label-content">
              <div
                class="shape-type-image1"
                style={{
                  backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/right-mid${
                    displayActive === "2" ? "-active" : ""
                  }.png")`,
                }}
              />
            </div>
            <div onClick={onChangeDisplay2} class="mat-radio-label-content">
              <div
                class="shape-type-image1"
                style={{
                  backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/right-top${
                    displayActive === "3" ? "-active" : ""
                  }.png")`,
                }}
              />
            </div>
            <div onClick={onChangeDisplay3} class="mat-radio-label-content">
              <div
                class="shape-type-image1"
                style={{
                  backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/left-bottom${
                    displayActive === "4" ? "-active" : ""
                  }.png")`,
                }}
              />
            </div>
            <div onClick={onChangeDisplay4} class="mat-radio-label-content">
              <div
                class="shape-type-image1"
                style={{
                  backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/left-mid${
                    displayActive === "5" ? "-active" : ""
                  }.png")`,
                }}
              />
            </div>
            <div onClick={onChangeDisplay5} class="mat-radio-label-content">
              <div
                class="shape-type-image1"
                style={{
                  backgroundImage: `url("https://admin.metu.vn/assets_metu/media/menu/position/left-top${
                    displayActive === "6" ? "-active" : ""
                  }.png")`,
                }}
              />
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className=" bg-white p-6 rounded shadow-xl lg:h-full lg:w-full w-screen mb-3 lg:my-0 ">
        <div className="text-2xl mt-3 text-black font-semibold antialiased tracking-normal justify-between">
          <button>Sửa Menu</button>
        </div>
        <div className="flex mt-3 border-b-2 border-gray-200 pb-3">
          <Link
            to="/admin/list-menu"
            className=" px-3 py-2 mr-2 self-center text-sm font-medium antialiased rounded bg-white text-black border-2 border-gray-200"
          >
            <i class="fas fa-arrow-left mr-2"></i>Quay lại
          </Link>
          <button
            onClick={onchangeEditMenu}
            to="create-menu"
            className=" px-3 py-2 self-center text-sm font-medium antialiased rounded bg-blue-800 text-white"
          >
            {" "}
            <i className="fas fa-plus-square mr-2"></i>
            Lưu Menu
          </button>
        </div>
        <div className="bg-white rounded">
          <div className="overflow-auto flex-col " style={{ height: "518px" }}>
            <div className="bg-white mt-4 rounded">
              <div className="mb-6 mr-1">
                <label
                  for="name"
                  className="block mb-2 text-base text-gray-800 dark:text-gray-400"
                >
                  Tên Menu
                </label>
                <input
                  // onChange={changemenuname}
                  value={dataEditMenu ? dataEditMenu.name_menu : ""}
                  type="text"
                  name="name_menu"
                  onChange={onHandleChangeValueMenu}
                  placeholder="Nhập tên Menu"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <label>Danh sách các nút để chọn:</label>
              <section className="my-1 grid grid-cols-2 sm:grid-cols-3 gap-2 mr-1">
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center">
                  <button
                    onClick={() => handleShow("fa fa-phone-volume", "2")}
                    className="px-3 "
                  >
                    <div className="flex mx-auto my-auto">
                      <i className="fas fa-phone-volume mr-1 my-auto"></i>
                      <span className="text-sm">Gọi ngay</span>
                    </div>
                  </button>
                </div>
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center">
                  <button
                    onClick={() => handleShow("fab fa-facebook-messenger", "1")}
                    className="px-3"
                  >
                    <div className="flex mx-auto my-auto">
                      <i class="fab fa-facebook-messenger mr-1 my-auto"></i>
                      <span className="text-sm">Nhắn tin</span>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                        </svg> */}
                    </div>
                  </button>
                </div>
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700  hover:text-black shadow-md py-2 px-1  items-center">
                  <button
                    onClick={() => handleShow("fa fa-comment-alt", "1")}
                    className="px-3"
                  >
                    <div className="flex mx-auto my-auto">
                      <i class="far fa-comment-alt mr-1 my-auto"></i>
                      <span className="text-sm">Zalo chat</span>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                        </svg> */}
                    </div>
                  </button>
                </div>
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700  hover:text-black shadow-md py-2 px-2 items-center">
                  <button
                    onClick={() => handleShow("fas fa-shopping-cart", "2")}
                    className="px-3"
                  >
                    <div className="flex mx-auto my-auto">
                      <i class="fas fa-shopping-cart mr-1 my-auto"></i>
                      <span className="text-sm">Đặt mua</span>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                        </svg> */}
                    </div>
                  </button>
                </div>
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700  hover:text-black shadow-md py-2 px-2 items-center">
                  <button
                    onClick={() => handleShow("fas fa-envelope-open-text", "3")}
                    className="px-3"
                  >
                    <div className="flex mx-auto my-auto">
                      <i class="fas fa-envelope-open-text mr-1 my-auto"></i>
                      <span className="text-sm">Gửi mail</span>
                    </div>
                  </button>
                </div>
                <button className="w-1/2 bg-white text-gray-600 font-bold rounded border-2 border-gray-500 hover:border-gray-700  hover:text-black shadow-md py-2 px-2 items-center">
                  <i className="fas fa-plus"></i>
                </button>
              </section>
              <label className="mt-3">
                Màu sắc:
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderColor}
                >
                  <Button variant="">
                    <i className="far fa-question-circle opacity-50"></i>
                  </Button>
                </OverlayTrigger>
              </label>
              <div className="mr-1 border-2 border-gray-200 rounded-lg">
                <nav class="flex  sm:flex-row ">
                  <button
                    onClick={onChangeViewColorLeft}
                    className={`text-gray-600 py-2 px-4 block hover:text-blue-500 focus:outline-none ${
                      displayTab === 1 && style
                    } `}
                  >
                    Mặc định
                  </button>
                  <button
                    onClick={onChangeViewColorRight}
                    className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                      displayTab === 2 && style
                    }`}
                  >
                    Tùy chỉnh
                  </button>
                </nav>
                <div className="container mx-auto px-6 my-1 flex flex-wrap py-3">
                  {displayTab === 1 ? viewColorLeft() : viewColorRight()}
                </div>
              </div>
            </div>

            <label className="mt-4">
              Chọn thiết bị bạn muốn hiển thị:
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderSys}
              >
                <Button variant="">
                  <i className="far fa-question-circle opacity-50"></i>
                </Button>
              </OverlayTrigger>
            </label>
            <div className="flex  gap-1 mr-1">
              <button class="flex-1 inline-block border-2 border-blue-500 px-3 py-2 text-xs font-medium leading-6 text-center text-gray-600 transition rounded-sm  ripple hover:shadow-lg hover:text-black hover:border-blue-700 focus:outline-none waves-effect">
                <i className="fas fa-laptop-house mr-1"></i>
                Mọi thiết bị
              </button>
              <button class="flex-1 inline-block border-2 border-blue-500  px-3 py-2 text-xs font-medium leading-6 text-center text-gray-600  transition rounded-sm  ripple hover:shadow-lg hover:text-black hover:border-blue-700 focus:outline-none waves-effect">
                <i className="fas fa-mobile-alt mr-1"></i>
                Điện thoại
              </button>
              <button class="flex-1 inline-block border-2 border-blue-500  px-3 py-2 text-xs font-medium leading-6 text-center text-gray-600  transition rounded-sm  ripple hover:shadow-lg hover:text-black hover:border-blue-700 focus:outline-none waves-effect">
                <i className="fas fa-desktop mr-1"></i>
                Máy tính
              </button>
            </div>

            <label className="mt-4">
              Tùy chỉnh giao diện cho máy tính:
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderDisplay}
              >
                <Button variant="">
                  <i className="far fa-question-circle opacity-50"></i>
                </Button>
              </OverlayTrigger>
            </label>
            <div className="border-2 border-gray-200 mr-1">
              <nav class="flex flex-row mb-3">
                <button
                  onClick={onChangeViewDisplayLeft}
                  className={`text-gray-600 py-2 px-4 block hover:text-blue-500 focus:outline-none ${
                    displayTab1 === 1 && style
                  } `}
                >
                  Hình dạng
                </button>
                <button
                  onClick={onChangeViewDisplayRight}
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    displayTab1 === 2 && style
                  }`}
                >
                  Vị Trí
                </button>
              </nav>

              {displayTab1 === 1 ? viewDisplayLeft() : viewDisplayRight()}
            </div>

            {/* <div className="mt-3 mr-1">
                                    <div className="mt-4">Tùy chỉnh giao diện cho máy tính:</div>
                                    <TabsRender />
                                </div> */}
            {/* drop */}

            <div className="w-screen lg:w-full px-3 mb-5 mx-auto mt-3">
              <section className=" row ">
                <div className="drop mr-1">
                  <div className="border-b drop">
                    <div className="border-l-2 bg-gray-200 rounded-lg w-full border-2 border-gray-400 relative">
                      <input
                        className="w-full absolute z-10 cursor-pointer opacity-0 h-10 w-10 top-6"
                        type="checkbox"
                        id="chck1"
                      />
                      <header
                        className="flex justify-between items-center p-2 pl-8 pr-8 cursor-pointer select-none drop-label"
                        htmlFor="chck1"
                      >
                        <span className="mr-48">Nâng cao:</span>
                        <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                          {/* icon by feathericons.com */}
                          <svg
                            aria-hidden="true"
                            className
                            data-reactid={266}
                            fill="none"
                            height={24}
                            stroke="#606F7B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </header>
                      <div className="drop-content">
                        <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                          <div className="mt-2">Thời gian hiển thị menu:</div>
                          <ul className="flex  w-full">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <Grid container justifyContent="space-around">
                                <KeyboardTimePicker
                                  margin="normal"
                                  id="time-picker"
                                  label="Bắt đầu"
                                  value={seletedValidateFrom}
                                  onChange={handleFromTimeChange}
                                  KeyboardButtonProps={{
                                    "aria-label": "change time",
                                  }}
                                />
                              </Grid>
                            </MuiPickersUtilsProvider>
                            <i className="fas fa-arrow-circle-right mx-4 my-auto"></i>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <Grid container justifyContent="space-around">
                                <KeyboardTimePicker
                                  margin="normal"
                                  id="time-picker"
                                  label="Kết thúc"
                                  value={seletedValidateTo}
                                  onChange={handleToTimeChange}
                                  KeyboardButtonProps={{
                                    "aria-label": "change time",
                                  }}
                                />
                              </Grid>
                            </MuiPickersUtilsProvider>
                          </ul>
                          <div>Thời gian ẩn hiện menu</div>
                          <div className="block mt-2">
                            <div className="flex mb-2 border-2 border-gray-400 w-full rounded">
                              <div className="flex-1 p-2 text-sm bg-gray-400 ">
                                Hiện sau:
                              </div>
                              <input className="text-center" type="Number" />
                              <div className="flex-1 text-sm bg-gray-400 text-center">
                                Giây
                              </div>
                            </div>
                            <div className="flex border-2 border-gray-400 w-full rounded">
                              <div className="flex-1 p-2 text-sm bg-gray-400 ">
                                Ẩn sau:
                              </div>
                              <input className="text-center" type="Number" />
                              <div className="flex-1 text-sm bg-gray-400 text-center">
                                Giây
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Cấu hình nút : Gọi ngay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Mô tả : Khách hàng sẽ gọi trực tiếp thông qua tính năng này
          <Modal.Title> Cấu hình hiển thị nút</Modal.Title>
          {/* <Modal.Text>Biểu tượng nút</Modal.Text> */}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Biểu tượng nút</Form.Label>
              <img
                className="h-12 bg-gray-400"
                src={`../../images/${images}`}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tên hiển thị của nút</Form.Label>
              <Form.Control
                name="name_button"
                onChange={onHandleChange}
                type="text"
                placeholder="Tên hiển thị của nút"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nhập nội dung chú thích</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hiển thị chú thích khi di chuột vào"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Text</Form.Label>
              <Form.Control
                name="color_text"
                onChange={onHandleChange}
                type="text"
                placeholder="Màu Chữ"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Background</Form.Label>
              <Form.Control
                name="color_background"
                onChange={onHandleChange}
                type="text"
                placeholder="Màu Nền"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Icon</Form.Label>
              <Form.Control
                name="color_icon"
                onChange={onHandleChange}
                type="text"
                placeholder="Màu Icon"
              />
            </Form.Group>

            <Form.Group controlId="formLink">
              <Form.Label>Link</Form.Label>
              <Form.Control
                name="link"
                onChange={onHandleChange}
                type="text"
                placeholder="Link"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label type="text" label="Check me out">
                {" "}
                Cấu hình giá trị thuộc tính nút
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nhập số điện thoại (*)</Form.Label>
              <Form.Control type="text" placeholder="Gọi ngay" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Nhập tên người phụ trách số điện thoại (*)
              </Form.Label>
              <Form.Control type="text" placeholder="Gọi ngay" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Địa chỉ của văn phòng | chi nhánh | cá nhân
              </Form.Label>
              <Form.Control type="text" placeholder="Gọi ngay" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onhandleSave}>
            Thêm vào Menu
          </Button>

          <Button variant="primary" onClick={onhandleCloses}>
            Quay lại
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
