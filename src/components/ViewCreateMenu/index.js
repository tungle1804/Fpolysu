import React, { useContext, useState, useRef, useEffect } from "react";
import ModalComponent from "../ModalComponent";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MenuService from "../../service/Menu/MenuService";
import ButtonService from "../../service/Button/ButtonService";
import { ButtonContext } from "../../service/ButtonContext";
import CreateDetailsMenu from "../CreateDetailsMenu";
import WelcomeBack from "../viewtest/WelcomeBack";
import ButtonFake from "../../service/ButtonFake";
import Slider from "@material-ui/core/Slider";
import { useDispatch, useSelector } from "react-redux";
import { createButton } from "../../redux/actions/createbuttonAction";
import Swal from "sweetalert2";
// import TabsRender from './location';
import Modals from "./Modals";
import { InputContext } from "../../service/InputContext";
import Tooltip from "@material-ui/core/Tooltip";
import {
  CreateInput,
  fetchClearInput,
  fetchInputSuccess,
  fetchSaveInput,
  saveDataInputTotal,
} from "../../redux/actions/InputAction";
import { SketchPicker } from "react-color";
import {
  saveBackgroundColor,
  saveOpacityMenu,
} from "../../redux/actions/backgroundColorAction";
import moment from "moment";
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
import Moment from "react-moment";
// import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { createMenu } from "../../redux/actions/menuAction";

// import Button from 'react-bootstrap/Button';

export function useStyle() {
  return <> text-blue-500 border-b-2 font-medium border-blue-500</>;
}

export default function ViewCreateMenu() {
  const innistall = {
    displayColorPicker: false,
    color: {
      r: null,
      g: null,
      b: null,
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
    captionContent: null,
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
  const [selectedFromTime, setSelectedFromTime] = useState(0);
  const [selectedToTime, setSelectedToTime] = useState(2360);
  const [seletedValidateFrom, setSeletedValidateFrom] = useState();
  const [seletedValidateTo, setSeletedValidateTo] = useState();
  const [typeButton, setTypeButton] = useState();
  const [valueOpacity, setValueOpacity] = useState(1);
  const [iconTransaction, setIconTransaction] = useState(false);
  const styles = {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      border: "1px solid darkslategrey",
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
      border: "1px solid darkslategrey",
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
      border: "1px solid darkslategrey",
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
      border: "1px solid darkslategrey",
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
  const handleChangeIconTransaction = (event) => {
    setIconTransaction(event.target.checked);
  };
  const handleShow = (images, typeButton) => {
    setImages(images);
    setIconTransaction(false);
    setShow(true);
    setTypeButton(typeButton);
    setValueButton({
      ...valueButton,
      name_button: null,
      color_text: null,
      color_background: null,
      color_icon: null,
      link: null,
      captionContent: null,
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

  const handleFromTimeChange = (date) => {
    setSeletedValidateFrom(date);
    setSelectedFromTime(Number(moment(date, ["h:mm A"]).format("HHmm")));
    console.log(Number(moment(date, ["h:mm A"]).format("HHmm")));
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
  const viewColorRight = () => {
    return (
      <>
        <span className="mr-5">M??u n???n</span>
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
  // function ValueLabelComponent(props) {
  //   const { children, open, value } = props;

  //   return (
  //     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
  //       {children}
  //     </Tooltip>
  //   );
  // }
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
            : colorPicker.color
            ? colorPicker.color.r
              ? rgbToHex(
                  colorPicker.color.r,
                  colorPicker.color.g,
                  colorPicker.color.b
                )
              : ""
            : "",
          menuType: displayMenu ? displayMenu : "1",
          menuLocation: displayMenuV2 ? displayMenuV2 : null,
          menuCode: makeid(15),
          opacity: valueOpacity ? valueOpacity : "1",
          fromDisplayTime: selectedFromTime,
          toDisplayTime: selectedToTime,
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
    let validate = true;
    if (
      (colormenu && colormenu != null) ||
      (colorPicker &&
        colorPicker.color.r != null &&
        colorPicker.color.g != null &&
        colorPicker.color.b != null)
    ) {
    } else {
      validate = false;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "B???n ph???i ch???n m??u cho Menu",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    if (nameMN && nameMN != "") {
    } else {
      validate = false;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "B???n ph???i nh???p t??n cho Menu",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    if (dataButton.length > 0) {
    } else {
      validate = false;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "B???n ph???i t???o Button cho Menu",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    if (validate) {
      if (selectedFromTime == 0 && selectedToTime == 2360) {
        Swal.fire({
          title: "Th???i gian hi???n th??? c???a Menu l?? 24h b???n c?? mu???n ti???p t???c ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `L??u`,
          denyButtonText: `Kh??ng L??u`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            // history.push("/admin/list-metu");
            dispatch(createMenu({ data, history, Swal }));
            setShow1(false);
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      } else {
        // ButtonService.createButton(data);
        dispatch(createMenu({ data, history, Swal }));
        setShow1(false);
        // history.push("/admin/list-metu");
      }
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
    let checkForm = true;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (typeButton == "1" || typeButton == "2") {
      if (valueButton.name_button) {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i nh???p t??n n??t",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }

      if (valueButton.color_text && valueButton.color_text != "") {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i ch???n m??u ch???",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      if (valueButton.color_background && valueButton.color_background != "") {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i ch???n m??u n???n",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      if (valueButton.color_icon && valueButton.color_icon != "") {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i ch???n m??u Icon",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      if (typeButton == "2") {
        if (valueButton.link && valueButton.link != "") {
        } else {
          checkForm = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "B???n ph???i ch???n thu???c t??nh cho n??t",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }

        if (vnf_regex.test(valueButton.link) == true) {
        } else {
          checkForm = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "S??? ??i???n tho???i kh??ng h???p l???",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
      if (typeButton == "1") {
        if (valueButton.link && valueButton.link != "") {
        } else {
          checkForm = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "B???n ph???i ch???n thu???c t??nh cho n??t",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
    }
    if (typeButton == "3") {
      if (valueButton.name_button) {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i nh???p t??n n??t",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      if (valueButton.color_text && valueButton.color_text != "") {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i ch???n m??u ch???",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      if (valueButton.color_background && valueButton.color_background != "") {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i ch???n m??u n???n",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      if (valueButton.color_icon && valueButton.color_icon != "") {
      } else {
        checkForm = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "B???n ph???i ch???n m??u Icon",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    }

    if (checkForm) {
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
        icon: iconTransaction
          ? String(String(images) + String(iconTransaction && " fa-spin"))
          : images,
        captionContent: valueButton.captionContent,
        typeButton: typeButton,
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
    }
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
  const viewDisplayLeft = () => {
    return (
      <>
        <div
          onClick={onChangeDisplayMenu}
          className="shape-type-image active mr-5 ml-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/full.png"
            alt="Thanh menu d??i"
          />
        </div>
        <div
          onClick={onChangeDisplayMenu1}
          className="shape-type-image active  mr-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/fit.png"
            alt="Thanh menu d??i"
          />
        </div>
        <div
          onClick={onChangeDisplayMenu2}
          className="shape-type-image active  mr-5 ml-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/circle.png"
            alt="Thanh menu d??i"
          />
        </div>
        <div
          onClick={onChangeDisplayMenu3}
          className="shape-type-image active  mr-5 hover:border-gray-500"
        >
          <img
            src="https://admin.metu.vn/assets_metu/media/menu/shape/square.png"
            alt="Thanh menu d??i"
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

  // popover

  const renderColor = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="bg-gray-100 rounded px-3 shadow-sm py-1">
        M??u s???c cho menu v?? n??t
      </div>
    </Tooltip>
  );

  const renderSys = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="bg-gray-100 rounded px-3 shadow-sm py-1">
        Ch???n thi???t b??? b???n mu???n cho menu hi???n th???.
      </div>
    </Tooltip>
  );

  const renderDisplay = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="bg-gray-100 rounded px-3 shadow-sm py-1">
        T??y ch???n giao di???n hi???n th??? menu.
      </div>
    </Tooltip>
  );

  return (
    <>
      <div className=" bg-white p-6 rounded shadow-xl lg:h-full lg:w-full w-screen mb-3 lg:my-0 ">
        <div className="text-2xl mt-3 text-black font-semibold antialiased tracking-normal justify-between">
          <button>T???o Menu</button>
        </div>
        <div className="flex mt-3 border-b-2 border-gray-200 pb-3">
          <Link
            to="/admin/list-menu"
            className=" px-3 py-2 mr-2 self-center text-sm font-medium antialiased rounded bg-white text-black border-2 border-gray-200"
          >
            <i class="fas fa-arrow-left mr-2"></i>Quay l???i
          </Link>
          <button
            onClick={handleShow1}
            to="create-menu"
            className=" px-3 py-2 self-center text-sm font-medium antialiased rounded bg-blue-800 text-white"
          >
            {" "}
            <i className="fas fa-plus-square mr-2"></i>L??u Menu
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
                  T??n Menu
                </label>
                <input
                  onChange={changemenuname}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nh???p t??n Menu"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <label>Danh s??ch c??c n??t ????? ch???n:</label>
              <section className="my-1 grid grid-cols-2 sm:grid-cols-3 gap-2 mr-1">
                <div className="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center">
                  <button
                    onClick={() => handleShow("fa fa-phone-volume", "2")}
                    className="px-3 "
                  >
                    <div className="flex mx-auto my-auto">
                      <i className="fas fa-phone-volume mr-1 my-auto"></i>
                      <span className="text-sm">G???i ngay</span>
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
                      <span className="text-sm">Nh???n tin</span>
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
                      <span className="text-sm">?????t mua</span>
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
                      <span className="text-sm">G???i mail</span>
                    </div>
                  </button>
                </div>
                <button className="w-1/2 bg-white text-gray-600 font-bold rounded border-2 border-gray-500 hover:border-gray-700  hover:text-black shadow-md py-2 px-2 items-center">
                  <i className="fas fa-plus"></i>
                </button>
              </section>
              <label className="mt-3">
                M??u s???c:
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
                    M???c ?????nh
                  </button>
                  <button
                    onClick={onChangeViewColorRight}
                    className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                      displayTab === 2 && style
                    }`}
                  >
                    T??y ch???nh
                  </button>
                </nav>
                <div className="container mx-auto px-6 my-1 flex flex-wrap py-3">
                  {displayTab === 1 ? viewColorLeft() : viewColorRight()}
                </div>
              </div>
            </div>

            <label className="mt-4">
              Ch???n thi???t b??? b???n mu???n hi???n th???:
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
                M???i thi???t b???
              </button>
              <button class="flex-1 inline-block border-2 border-blue-500  px-3 py-2 text-xs font-medium leading-6 text-center text-gray-600  transition rounded-sm  ripple hover:shadow-lg hover:text-black hover:border-blue-700 focus:outline-none waves-effect">
                <i className="fas fa-mobile-alt mr-1"></i>
                ??i???n tho???i
              </button>
              <button class="flex-1 inline-block border-2 border-blue-500  px-3 py-2 text-xs font-medium leading-6 text-center text-gray-600  transition rounded-sm  ripple hover:shadow-lg hover:text-black hover:border-blue-700 focus:outline-none waves-effect">
                <i className="fas fa-desktop mr-1"></i>
                M??y t??nh
              </button>
            </div>

            <label className="mt-4">
              T??y ch???nh giao di???n cho m??y t??nh:
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
                  H??nh d???ng
                </button>
                <button
                  onClick={onChangeViewDisplayRight}
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    displayTab1 === 2 && style
                  }`}
                >
                  V??? Tr??
                </button>
              </nav>

              {displayTab1 === 1 ? viewDisplayLeft() : viewDisplayRight()}
            </div>

            {/* <div className="mt-3 mr-1">
                                    <div className="mt-4">T??y ch???nh giao di???n cho m??y t??nh:</div>
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
                        <span className="mr-48">N??ng cao:</span>
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
                          <div className="mt-2">Th???i gian hi???n th??? menu:</div>
                          <ul className="flex  w-full">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <Grid container justifyContent="space-around">
                                <KeyboardTimePicker
                                  margin="normal"
                                  id="time-picker"
                                  label="B???t ?????u"
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
                                  label="K???t th??c"
                                  value={seletedValidateTo}
                                  onChange={handleToTimeChange}
                                  KeyboardButtonProps={{
                                    "aria-label": "change time",
                                  }}
                                />
                              </Grid>
                            </MuiPickersUtilsProvider>
                          </ul>
                          <div>Th???i gian ???n hi???n menu</div>
                          <div className="block mt-2">
                            <div className="flex mb-2 border-2 border-gray-400 w-full rounded">
                              <div className="flex-1 p-2 text-sm bg-gray-400 ">
                                Hi???n sau:
                              </div>
                              <input className="text-center" type="Number" />
                              <div className="flex-1 text-sm bg-gray-400 text-center">
                                Gi??y
                              </div>
                            </div>
                            <div className="flex border-2 border-gray-400 w-full rounded">
                              <div className="flex-1 p-2 text-sm bg-gray-400 ">
                                ???n sau:
                              </div>
                              <input className="text-center" type="Number" />
                              <div className="flex-1 text-sm bg-gray-400 text-center">
                                Gi??y
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

      <Modal show={show} onHide={onhandleCloses2}>
        <Modal.Header closeButton>
          <Modal.Title>C???u h??nh n??t : G???i ngay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          M?? t??? : Kh??ch h??ng s??? g???i tr???c ti???p th??ng qua t??nh n??ng n??y
          <Modal.Title> C???u h??nh hi???n th??? n??t</Modal.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div class=" flex  space-x-2">
                <div class="flex-1 mt-3">
                  {" "}
                  <div style={{ display: "grid" }}>
                    <Form.Label>Bi???u t?????ng n??t</Form.Label>
                    <i
                      className={` mr-1 my-auto fa-5x ${images} ${
                        iconTransaction && "fa-spin"
                      }`}
                    ></i>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={iconTransaction}
                          onChange={handleChangeIconTransaction}
                          name="checkedA"
                        />
                      }
                      label="Hi???u ???ng ?????ng"
                    />
                  </div>
                </div>
                <div class="flex-1 ">
                  <div className="flex  flex-wrap mt-1 ">
                    <div class="p-2 text-right ml-5 mt-3">
                      <Form.Label>Hi???n th???</Form.Label>
                      <div className="flex  flex-wrap mt-1">
                        <div
                          class="flex-1  font-bold rounded border-2  hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center"
                          style={{
                            background: `rgba(${
                              valueButton.color_background &&
                              valueButton.color_background.r
                            },
                                            ${
                                              valueButton.color_background &&
                                              valueButton.color_background.g
                                            }, 
                                            ${
                                              valueButton.color_background &&
                                              valueButton.color_background.b
                                            })`,
                          }}
                        >
                          <button class="px-3 ">
                            <div class="flex mx-auto my-auto">
                              <i
                                style={{
                                  color: `rgba(${
                                    valueButton.color_icon &&
                                    valueButton.color_icon.r
                                  },
                                                    ${
                                                      valueButton.color_icon &&
                                                      valueButton.color_icon.g
                                                    }, 
                                                    ${
                                                      valueButton.color_icon &&
                                                      valueButton.color_icon.b
                                                    })`,
                                }}
                                class={`${images} mr-1 my-auto ${
                                  iconTransaction && "fa-spin"
                                }`}
                              ></i>
                              <span
                                class="text-sm"
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
                                {" "}
                                {valueButton && valueButton.name_button}
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>T??n hi???n th??? c???a n??t</Form.Label>
              <Form.Control
                name="name_button"
                onChange={onHandleChange}
                type="text"
                placeholder="T??n hi???n th??? c???a n??t"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nh???p n???i dung ch?? th??ch</Form.Label>
              <Form.Control
                name="captionContent"
                onChange={onHandleChange}
                placeholder="Hi???n th??? ch?? th??ch khi di chu???t v??o"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <div className="grid  grid-cols-3">
                <div class="...">
                  <Form.Label className="mr-3">M??u ch???</Form.Label>
                  {viewColorTextInput()}
                </div>
                <div>
                  {" "}
                  <Form.Label className="mr-3">M??u n???n</Form.Label>
                  {viewColorBackgroundInput()}
                </div>
                <div>
                  {" "}
                  <Form.Label className="mr-3">M??u icon</Form.Label>
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
                          C???u h??nh gi?? tr??? thu???c t??nh n??t
                        </Form.Label>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nh???p s??? ??i???n tho???i (*)</Form.Label>
                        <Form.Control
                          name="link"
                          onChange={onHandleChange}
                          placeholder="G???i ngay"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                          Nh???p t??n ng?????i ph??? tr??ch s??? ??i???n tho???i (*)
                        </Form.Label>
                        <Form.Control type="text" placeholder="G???i ngay" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                          ?????a ch??? c???a v??n ph??ng | chi nh??nh | c?? nh??n
                        </Form.Label>
                        <Form.Control type="text" placeholder="G???i ngay" />
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
                          <i class="fas fa-globe"></i>Th??m tr?????ng th??ng tin
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
            Th??m v??o Menu
          </Button>

          <Button variant="primary" onClick={onhandleCloses2}>
            Quay l???i
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1}>
        <Modal.Header>
          <Modal.Title>Th??ng B??o</Modal.Title>
        </Modal.Header>
        <Modal.Body>B???n c?? ch???c mu???n th??m Menu m???i ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose1}>
            C??
          </Button>
          <Button variant="secondary" onClick={handleClose2}>
            Kh??ng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
