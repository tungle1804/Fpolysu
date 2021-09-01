import React, { useContext, useState, useRef } from "react";
import ModalComponent from "../ModalComponent";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MenuService from "../../service/Menu/MenuService";
import ButtonService from "../../service/Button/ButtonService";
import { ButtonContext } from "../../service/ButtonContext";
import CreateDetailsMenu from "../CreateDetailsMenu";
import WelcomeBack from "../viewtest/WelcomeBack";
import ButtonFake from "../../service/ButtonFake";
import { useDispatch, useSelector } from "react-redux";
import { createButton } from "../../redux/actions/createbuttonAction";
import Swal from "sweetalert2";
// import TabsRender from './location';
import Modals from "./Modals";
import { InputContext } from "../../service/InputContext";
import {
  CreateInput,
  fetchClearInput,
  fetchInputSuccess,
  fetchSaveInput,
  saveDataInputTotal,
} from "../../redux/actions/InputAction";
import { SketchPicker } from "react-color";
import { saveBackgroundColor } from "../../redux/actions/backgroundColorAction";
import {
  saveDisplayMenu,
  saveDisplayMenuV2,
} from "../../redux/actions/displayMenuAction";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "./style.css";
import { makeid } from "../../utils/index.js";
export function useStyle() {
  return <> text-blue-500 border-b-2 font-medium border-blue-500</>;
}

export default function ViewCreateMenu() {
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

  const style = useStyle().props.children;
  const dataInput = useSelector((state) => state.input.data);
  const dataInputTotal = useSelector((state) => state.input.dataInput);
  const dataButton = useSelector((state) => state.createbuttons.data);
  const displayMenu = useSelector((state) => state.displayMenu.displayMenu);
  const displayMenuV2 = useSelector((state) => state.displayMenu.dislayMenuV2);
  const dispatch = useDispatch();
  let history = useHistory();
  const [nameMN, setNameMN] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [valueButton, setValueButton] = useState(initstateValueButton);
  const [test1, setTest1] = useContext(ButtonContext);
  const [images, setImages] = useState();
  const [colormenu, setColorMenu] = useState();
  const [displayActive, setDisplayActive] = useState();
  const [displayColor, setDisplayColor] = useState(true);
  const [displayTab, setDisplayTab] = useState(1);
  const [displayTab1, setDisplayTab1] = useState(1);
  const [countInput, setCountInput] = useState(0);
  const [children, setChildren] = useState([]);
  const [colorPicker, setColorPicker] = useState(innistall);
  const [colorText, setColorText] = useState(initstateText);
  const [colorBackground, setColorBackground] = useState(initstateBackground);
  const [colorIcon, setColorIcon] = useState(initstateIcon);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [typeButton, setTypeButton] = useState();

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
  const onHandleChange = (e) => {
    const { name } = e.target;
    setValueButton({
      ...valueButton,
      [name]: e.target.value,
    });
  };

  const handleShow = (images, typeButton) => {
    setImages(images);
    setShow(true);
    setTypeButton(typeButton);
    setValueButton({
      ...valueButton,
      name_button: null,
      color_text: null,
      color_background: null,
      color_icon: null,
      link: null,
    });
    dispatch(fetchClearInput());
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      </>
    );
  };

  const viewColorTextInput = () => {
    return (
      <>
        <div style={stylesText.swatch} onClick={handleClickText}>
          <div style={stylesText.color} />
        </div>

        {colorText.displayColorText ? (
          <div>
            <div style={stylesText.cover} onClick={handleCloseText} />
            <SketchPicker color={colorText.color} onChange={handleChangeText} />
          </div>
        ) : (
          ""
        )}
      </>
    );
  };
  const viewColorBackgroundInput = () => {
    return (
      <>
        <div style={stylesBackground.swatch} onClick={handleClickBackground}>
          <div style={stylesBackground.color} />
        </div>

        {colorBackground.displayColorBackground ? (
          <div>
            <div
              style={stylesBackground.cover}
              onClick={handleCloseBackground}
            />
            <SketchPicker
              color={colorBackground.color}
              onChange={handleChangeBackground}
            />
          </div>
        ) : (
          ""
        )}
      </>
    );
  };
  const viewColorIconInput = () => {
    return (
      <>
        <div style={stylesIcon.swatch} onClick={handleClickIcon}>
          <div style={stylesIcon.color} />
        </div>

        {colorIcon.displayColorIcon ? (
          <div>
            <div style={stylesIcon.cover} onClick={handleCloseIcon} />
            <SketchPicker color={colorIcon.color} onChange={handleChangeIcon} />
          </div>
        ) : (
          ""
        )}
      </>
    );
  };
  const handleShow1 = () => {
    setShow1(true);
  };
  const handleClose1 = () => {
    let data = {
      menu: [
        {
          users: { email: localStorage.getItem("email") },
          name_menu: nameMN,
          status: "false",
          color_menu: colormenu
            ? colormenu
            : rgbToHex(
                colorPicker.color.r,
                colorPicker.color.g,
                colorPicker.color.b
              ),
          menuType: displayMenu ? displayMenu : "1",
          menuLocation: displayMenuV2 ? displayMenuV2 : null,
          menuCode: makeid(15),
        },
      ],
      buttons: [],
      modal: [],
    };

    for (let i = 0; i < dataButton.length; i++) {
      let button = {
        id: dataButton[i].id_button,
        name_button: dataButton[i].name_button,
        color_text: dataButton[i].color_text,
        color_background: dataButton[i].color_background,
        color_icon: dataButton[i].color_icon,
        link: dataButton[i].link,
        icon: dataButton[i].icon,
        TypeButton: dataButton[i].TypeButton,
      };
      data.buttons.push(button);
      // for (let i = 0; i < dataInput.length; i++) {
      //     if (dataInput.length > 0 && dataInput && test1[i].name_button === dataInput[i].id_button) {
      //         const modal = { inputName: dataInput[i].name_input, inputValue: dataInput[i].value_input }
      //         button.modal.push(modal)
      //     }

      // }
      // data.button.push(button)
    }
    for (let j = 0; j < dataInputTotal.length; j++) {
      let modal = {
        id: dataInputTotal[j].buttons.id,
        inputName: dataInputTotal[j].inputName,
        inputValue: null,
      };
      data.modal.push(modal);
    }
    // for (let i = 0; i < dataInputTotal.length; i++) {
    //     const modal = { buttons: { id: dataInputTotal[i].buttons.id }, dataInputTotal: dataInputTotal[i].inputName, inputValue: null }
    //     data.modal.push(modal)
    // }
    console.log(data);
    if (
      (colormenu && colormenu != null) ||
      (colorPicker &&
        colorPicker.color.r != null &&
        colorPicker.color.g != null &&
        colorPicker.color.b != null)
    ) {
      ButtonService.createButton(data);
      // setShow1(false)
      history.push("/admin/list-metu");
    } else {
      Swal.fire("Bạn phải chọn màu cho Menu");
    }
  };
  const handleClose2 = () => {
    setShow1(false);
  };
  const getRandomInt = (min, max) => {
    return Number(Math.floor(Math.random() * (max - min)) + min);
  };

  const onhandleCloses = () => {
    const id = getRandomInt(4, 10000);
    let tshirt = {
      id_button: id,
      name_button: valueButton.name_button,
      color_text: rgbToHex(
        valueButton.color_text.r,
        valueButton.color_text.g,
        valueButton.color_text.b
      ),
      color_background: rgbToHex(
        valueButton.color_background.r,
        valueButton.color_background.g,
        valueButton.color_background.b
      ),
      color_icon: valueButton.color_icon
        ? rgbToHex(
            valueButton.color_icon.r,
            valueButton.color_icon.g,
            valueButton.color_icon.b
          )
        : null,
      link: valueButton.link,
      icon: images,
      captionContent: valueButton.captionContent,
      TypeButton: typeButton,
    };
    dispatch(createButton(tshirt));
    setTest1((currentState) => [...currentState, tshirt]);

    for (let i = 0; i < dataInput.length; i++) {
      const CreateInputValue = {
        buttons: { id: id },
        inputName: dataInput[i].name_input.input_name,
      };

      dispatch(saveDataInputTotal(CreateInputValue));
    }

    setShow(false);
  };
  const onhandleCloses2 = () => {
    setShow(false);
  };

  const changemenuname = (e) => {
    setNameMN(e.target.value);
  };

  const onhandleColor = (color) => {
    setColorMenu(color);
    dispatch(saveBackgroundColor(color));
  };
  const InsertInput = () => {
    const id = getRandomInt(4, 1000);
    let tshirt = { id_input: id, inputName: null };
    dispatch(CreateInput(tshirt));
  };

  const viewColorLeft = () => {
    return (
      <>
        <button
          onClick={() => onhandleColor("black")}
          className="h-6 w-12 mr-2  rounded-md bg-gray-900"
        ></button>
        <button
          onClick={() => onhandleColor("#EE0000")}
          className="h-6 w-12 mr-2   rounded-md bg-red-600"
        ></button>
        <button
          onClick={() => onhandleColor("fuchsia")}
          className="h-6 w-12 mr-2  rounded-md bg-pink-700"
        ></button>
        <button
          onClick={() => onhandleColor("gray")}
          className="h-6 w-12  mr-2  rounded-md bg-gray-500"
        ></button>
        <button
          onClick={() => onhandleColor("aqua")}
          className="h-6 w-12 mr-2   rounded-md bg-teal-400"
        ></button>
      </>
    );
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
          <div className="container mx-auto px-6 my-1 flex flex-wrap -m-4 mt-3 mb-5">
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
  const onChangeViewDisplayLeft = () => {
    setDisplayTab1(1);
  };
  const onChangeViewDisplayRight = () => {
    setDisplayTab1(2);
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
  const onChangeViewColorRight = () => {
    setDisplayTab(2);
    setColorMenu(null);
    dispatch(saveBackgroundColor(null));
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
  return (
    <>
      <div className=" bg-white p-6 h-full rounded shadow-xl w-full max-w-lg">
        <div className="text-2xl mt-3 text-black font-semibold antialiased tracking-normal justify-between">
          <button>Tạo Menu</button>
        </div>
        <div className="flex mt-3 border-b-2 border-gray-200 pb-3">
          <Link
            to="/admin/list-menu"
            className=" px-3 py-2 mr-2 self-center text-sm font-medium antialiased rounded bg-white text-black border-2 border-gray-200"
          >
            <i class="fas fa-arrow-left mr-2"></i>Quay lại
          </Link>
          <button
            onClick={handleShow1}
            to="create-menu"
            className=" px-3 py-2 self-center text-sm font-medium antialiased rounded bg-blue-800 text-white"
          >
            {" "}
            <i className="fas fa-plus-square mr-2"></i>Lưu Menu
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
                  onChange={changemenuname}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập tên Menu"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <label>Danh sách các nút để chọn:</label>
              <section className="my-1 grid grid-cols-2 xl:grid-cols-3 gap-2 mr-1">
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center">
                  <button
                    onClick={() => handleShow("message.png", "2")}
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
                    onClick={() => handleShow("message.png")}
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
                    onClick={() => handleShow("zalo.png", "1")}
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
                    onClick={() => handleShow("seemore.png")}
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
                    onClick={() => handleShow("email.png", "3")}
                    className="px-3"
                  >
                    <div className="flex mx-auto my-auto">
                      <i class="fas fa-envelope-open-text mr-1 my-auto"></i>
                      <span className="text-sm">Thông tin</span>
                    </div>
                  </button>
                </div>
                <button className="w-1/2 bg-white text-gray-600 font-bold rounded border-2 border-gray-500 hover:border-gray-700  hover:text-black shadow-md py-2 px-2 items-center">
                  <i className="fas fa-plus"></i>
                </button>
              </section>
              <label>Màu sắc:</label>
              <div className="mr-1 mt-1 border-2 border-gray-200 rounded-lg">
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
                <label>Tùy chỉnh giao diện cho máy tính:</label>
                <nav class="flex flex-col sm:flex-row mb-3">
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

                <label className="mt-3">Chọn thiết bị bạn muốn hiển thị:</label>
                <div className="flex mt-2 gap-1 mr-1">
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
                {/* <div className="mt-3 mr-1">
                                    <div className="mt-4">Tùy chỉnh giao diện cho máy tính:</div>
                                    <TabsRender />
                                </div> */}
                {/* drop */}

                <div className="w-full px-3 mb-5 mx-auto">
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
                              <div className="mt-2">
                                Thời gian hiển thị menu:
                              </div>
                              <ul className="flex  w-full">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container justifyContent="space-around">
                                    <KeyboardTimePicker
                                      margin="normal"
                                      id="time-picker"
                                      label="Bắt đầu"
                                      value={selectedDate}
                                      onChange={handleDateChange}
                                      KeyboardButtonProps={{
                                        "aria-label": "change time",
                                      }}
                                    />
                                  </Grid>
                                </MuiPickersUtilsProvider>
                                {/* <div className="mx-2 my-auto rounded-full bg-gray-400 p-2">Đến</div> */}
                                <i className="fas fa-arrow-circle-right mx-4 my-auto"></i>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container justifyContent="space-around">
                                    <KeyboardTimePicker
                                      margin="normal"
                                      id="time-picker"
                                      label="Kết thúc"
                                      value={selectedDate}
                                      onChange={handleDateChange}
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
                                  <input
                                    className="text-center"
                                    type="Number"
                                  />
                                  <div className="flex-1 text-sm bg-gray-400 text-center">
                                    Giây
                                  </div>
                                </div>
                                <div className="flex border-2 border-gray-400 w-full rounded">
                                  <div className="flex-1 p-2 text-sm bg-gray-400 ">
                                    Ẩn sau:
                                  </div>
                                  <input
                                    className="text-center"
                                    type="Number"
                                  />
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
                  {/* <nav class="flex flex-col sm:flex-row">
                                <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                                    <img class="object-cover w-full h-full" src="https://admin.metu.vn/assets_metu/media/menu/shape/full.png" />
                                </div>
                               
                            </nav> */}

                  {/* <sesction>
                            <label>Chọn thiết bị bạn muốn hiển thị:</label> <br /><br />
                            <button onClick={onChangeDisplayMenu} class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Mọi thiết bị
                            </button>
                            <button onClick={onChangeDisplayMenu1} class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Điện thoại
                            </button>
                            <button onClick={onChangeDisplayMenu2} class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Máy tính
                            </button>
                            <br />
                            <label>Cấu hình đường dẫn hiển thị</label>
                            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Đường dẫn tùy chỉnh
                            </button>
                            <button class=" mb-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Đường dẫn ladipage
                            </button>
                            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Đường dẫn haravan
                            </button>
                            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Đường dẫn động
                            </button>
                            </sesction> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-between px-1 text-center items-center">
            {/* <div className="p-2">
                        <button className="flex rounded px-4 py-2 focus:outline-none text-gray-500 hover:bg-blue-100 justify-around">

                            <svg className="h-4 w-4 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 013.414-1.736L8.989 1.8a8.112 8.112 0 00-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 01-3.414 1.736l.069 2.076a8.122 8.122 0 004.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex px-3 py-1 self-center text-sm antialiased rounded-md text-gray-600 ">
                        issue 48 of 88
                    </div> */}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={onhandleCloses2}>
        <Modal.Header closeButton>
          <Modal.Title>Cấu hình nút : Gọi ngay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Mô tả : Khách hàng sẽ gọi trực tiếp thông qua tính năng này
          <Modal.Title> Cấu hình hiển thị nút</Modal.Title>
          {/* <Modal.Text>Biểu tượng nút</Modal.Text> */}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div class=" flex  space-x-2">
                <div class="flex-1 mt-5">
                  {" "}
                  <Form.Label>Biểu tượng nút</Form.Label>
                  <img
                    className="h-12 bg-gray-400"
                    src={`../images/${images}`}
                  />
                </div>
                <div class="flex-1 ">
                  <div className="flex  flex-wrap mt-1 ">
                    <div class="p-2 text-right ml-5 mt-3">
                      <Form.Label>Hiển thị</Form.Label>
                      <div
                        style={{
                          background: `rgba(${
                            valueButton.color_background &&
                            valueButton.color_background.r
                          },
                                                    ${
                                                      valueButton.color_background &&
                                                      valueButton
                                                        .color_background.g
                                                    }, 
                                                    ${
                                                      valueButton.color_background &&
                                                      valueButton
                                                        .color_background.b
                                                    })`,
                        }}
                        className={`flex items-center p-1  rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}
                      >
                        <button
                          classname={`flex items-center bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}
                        >
                          <img className="h-12" src={`../images/${images}`} />

                          <div>
                            <p
                              className="text-xs font-medium mt-2 ml-2"
                              style={{
                                color: `rgba(${
                                  valueButton.color_text &&
                                  valueButton.color_text.r
                                },
                                                    ${
                                                      valueButton.color_text &&
                                                      valueButton.color_text.g
                                                    }, 
                                                    ${
                                                      valueButton.color_text &&
                                                      valueButton.color_text.b
                                                    })`,
                              }}
                            >
                              {valueButton && valueButton.name_button}
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                name="captionContent"
                onChange={onHandleChange}
                placeholder="Hiển thị chú thích khi di chuột vào"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <div className="grid  grid-cols-3">
                <div class="...">
                  <Form.Label className="mr-3">Màu chữ</Form.Label>
                  {viewColorTextInput()}
                </div>
                <div>
                  {" "}
                  <Form.Label className="mr-3">Màu nền</Form.Label>
                  {viewColorBackgroundInput()}
                </div>
                <div>
                  {" "}
                  <Form.Label className="mr-3">Màu icon</Form.Label>
                  {viewColorIconInput()}
                </div>
              </div>
            </Form.Group>
            {(() => {
              if (typeButton == "1") {
                return (
                  <>
                    <Form.Group controlId="formLink">
                      <Form.Label>Link</Form.Label>
                      <Form.Control
                        name="link"
                        onChange={onHandleChange}
                        type="text"
                        placeholder="Link"
                      />
                    </Form.Group>
                  </>
                );
              } else if (typeButton == "2") {
                return (
                  <>
                    <Form>
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
                  </>
                );
              } else if (typeButton == "3") {
                return (
                  <>
                    <Form.Group controlId="formBasicCheckbox">
                      <div class="cursor-pointer text-blue-400 ml-1 ">
                        <Modals />
                        <p
                          onClick={() => InsertInput()}
                          class="inline hover:bg-blue-100 px-4 py-3 rounded-full"
                        >
                          <i class="fas fa-globe"></i>Thêm trường thông tin
                        </p>
                      </div>
                    </Form.Group>
                  </>
                );
              }
            })()}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onhandleCloses}>
            Thêm vào Menu
          </Button>

          <Button variant="primary" onClick={onhandleCloses2}>
            Quay lại
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1}>
        <Modal.Header>
          <Modal.Title>Thông Báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc muốn thêm Menu mới ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose1}>
            Có
          </Button>
          <Button variant="secondary" onClick={handleClose2}>
            Không
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
