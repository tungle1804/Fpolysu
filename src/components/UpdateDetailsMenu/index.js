import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Iframe from "react-iframe";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadButtonByIDMenu } from "../../redux/actions/updatebuttonAction";
import { updateButtonEdit } from "../../redux/actions/createbuttonAction";
import { createButton } from "../../redux/actions/createbuttonAction";
import ButtonFake from "../../service/ButtonFake";
import ButtonService from "../../service/Button/ButtonService";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { deleteButton } from "../../redux/actions/createbuttonAction";
import Display from "../Display/displayupdate";
import { SketchPicker } from "react-color";
export default function UpdateDetailsMenu() {
  const initialContent = () => {
    return `<!DOCTYPE html>
              <html>
                <head>
                 <style>
                 .mt-tooltip:hover .mt-tooltip__text {
                  visibility: visible;
              }
                 #metu .mmt-container {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    z-index: 21474836464;
                    pointer-events: none;
                    box-sizing: border-box;
                }
                body {
                   display: table-cell;
                  }
                #metu .mmt-app {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    box-sizing: border-box;
                    min-height: 56px;
                    transition: all 0.24s;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,
                        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
                }
                
                #metu .mmt-menu__item {
                    pointer-events: auto;
                }
                
                .mt-tooltip {
                    display: inline-flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }
                .mt-tooltip__text {
                    position: absolute;
                    visibility: hidden;
                    z-index: 1;
                    background: #232f34;
                    color: #fff;
                    text-align: center;
                    padding: 4px 8px;
                    border-radius: 4px;
                    min-width: 120px;
                    max-width: 240px;
                    bottom: calc(100% + 5px);
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 12px;
                    box-sizing: border-box;
                }
                
                #metu .mmt-button {
                    background-color: hsla(0, 0%, 100%, 0.2);
                }
                
                #metu .mmt-button {
                    display: flex;
                    align-items: center;
                    align-self: stretch;
                    padding: 0 10px;
                    flex-direction: row;
                    cursor: pointer;
                    position: relative;
                    justify-content: flex-start;
                    border-radius: 3px;
                    height: 40px;
                    margin: 10px 5px;
                }
                .mt-tooltip__text:after {
                  content: " ";
                  position: absolute;
                  top: 100%;
                  left: 50%;
                  margin-left: -5px;
                  border: 5px solid transparent;
                  border-top-color: #232f34;
              }
              #metu .mmt-button:hover{background-color:rgba(27,27,27,.2)}
                 </style>
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                 integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                 crossOrigin="anonymous" />
                </head>
                <body >
                  <div id="page" ></div>
                </body>
              </html>`;
  };
  const initialContent1 = () => {
    return `<!DOCTYPE html>
              <html>
                <head>
                 <style>
                 #metu .mmt-container {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    z-index: 21474836464;
                    pointer-events: none;
                    box-sizing: border-box;
                }
                #metu .mmt-container--fit {
                   text-align:center;
                }
                #metu .mmt-container--fit .mmt-app {
                    display: inline-flex;
                    border-radius: 4px 4px 0 0;
                    overflow: hidden;
                 }
                body {
                   display: table-cell;
                  }
                #metu .mmt-app {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    box-sizing: border-box;
                    min-height: 56px;
                    transition: all 0.24s;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,
                        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
                }
                
                #metu .mmt-menu__item {
                    pointer-events: auto;
                }
                
                .mt-tooltip {
                    display: inline-flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }
                .mt-tooltip__text {
                    position: absolute;
                    visibility: hidden;
                    z-index: 1;
                    background: #232f34;
                    color: #fff;
                    text-align: center;
                    padding: 4px 8px;
                    border-radius: 4px;
                    min-width: 120px;
                    max-width: 240px;
                    bottom: calc(100% + 5px);
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 12px;
                    box-sizing: border-box;
                }
                
                #metu .mmt-button {
                    background-color: hsla(0, 0%, 100%, 0.2);
                }
                
                #metu .mmt-button {
                    display: flex;
                    align-items: center;
                    align-self: stretch;
                    padding: 0 10px;
                    flex-direction: row;
                    cursor: pointer;
                    position: relative;
                    justify-content: flex-start;
                    border-radius: 3px;
                    height: 40px;
                    margin: 10px 5px;
                }
                .mt-tooltip:hover .mt-tooltip__text {
                  visibility: visible;
              }
                 </style>
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                 integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                 crossOrigin="anonymous" />
                </head>
                <body >
                  <div id="page" ></div>
                </body>
              </html>`;
  };
  const initialContent2 = () => {
    return `<!DOCTYPE html>
              <html>
                <head>
              
                 <style>
                .mt-button{display:inline-flex;position:relative;border:none;outline:none;min-width:56px;height:32px;overflow:hidden;vertical-align:middle;font-size:13px;line-height:32px;text-decoration:none;padding:0 16px;margin:0;border-radius:4px;font-weight:500;color:#fff;cursor:pointer;background-color:#2979ff} 
                #metu .mmt-button{display:flex;align-items:center;align-self:stretch;padding:0 10px;
                    flex-direction:row;cursor:pointer;position:relative;justify-content:flex-start;
                    border-radius:3px;height:40px;margin:10px 5px;}
                #metu .mmt-button.mmt-button--circle{margin:4px 5px!important;border-radius:20px!important;}
                #metu .mmt-button.mmt-button--circle.mmt-button--square{margin:1px -8px!important;border-radius:4px 0 0 4px!important}
                #metu .mmt-button--circle .mmt-button__icon{margin:0;transition:margin-right .25s cubic-bezier(.4,0,.2,1)}
                #metu .mmt-button--circle .mmt-button__label{width:0;overflow:hidden;transition:width .25s cubic-bezier(.4,0,.2,1);white-space:nowrap;text-overflow:clip;}
                #metu .mmt-button--circle:hover .mmt-button__icon{margin-right:10px}#metu .mmt-button--circle:hover .mmt-button__label{width:168px}
                #metu .mmt-button{/* background-color:hsla(0,0%,100%,.2); */}#metu .mmt-button:hover{background-color:rgba(27,27,27,.2);}
                #metu .mmt-button--circle,#metu .mmt-button--circle:hover,#metu .mmt-button--mobile,#metu .mmt-button--mobile:hover{background-color:transparent;background-color:initial;}
             
                 #metu .mmt-container {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    z-index: 21474836464;
                    pointer-events: none;
                    box-sizing: border-box;
                }
                #metu .mmt-app--circle-middle-right {
                    align-items: flex-end;
                    justify-content: center;
                }
                #metu .mmt-app--circle-top-right {
                    align-items: flex-end;
                    justify-content: flex-start;
                }
                #metu .mmt-app--circle-bottom-left {
                    align-items: flex-start;
                    justify-content: flex-end;
                }
                #metu .mmt-app--circle-middle-left {
                    align-items: flex-start;
                    justify-content: center;
                }
                #metu .mmt-app--circle {
                    height: 100vh;
                    width: 100%!important;
                    flex-direction: column;
                    padding: 8px;
                }
               #metu .mmt-app--circle-bottom-right{
                align-items: flex-end;
                justify-content: flex-end;
                }
               
                body {
                   display: table-cell;
                  }
                #metu .mmt-app {
                    position: relative;
                    display: flex;
                
                    box-sizing: border-box;
                    min-height: 56px;
                    transition: all 0.24s;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,
                        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
                }
                
                #metu .mmt-menu__item {
                    pointer-events: auto;
                }
                
                .mt-tooltip {
                    display: inline-flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }
                .mt-tooltip__text {
                    position: absolute;
                    visibility: hidden;
                    z-index: 1;
                    background: #232f34;
                    color: #fff;
                    text-align: center;
                    padding: 4px 8px;
                    border-radius: 4px;
                    min-width: 120px;
                    max-width: 240px;
                    bottom: calc(100% + 5px);
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 12px;
                    box-sizing: border-box;
                }
                #metu .mmt-button.mmt-button--circle{
                    margin: 4px 5px!important;
                    border-radius: 20px!important;
                }
              
                #metu .mmt-button--circle .mmt-button__label{
                    width: 0;
                    overflow: hidden;
                    transition: width .25s cubic-bezier(.4,0,.2,1);
                    white-space: nowrap;
                    text-overflow: clip;
                }
                #metu .mmt-button__labe{
                    font-size: 14px;
        line-height: 20px
                }
                
                #metu .mmt-button {
                    display: flex;
                    align-items: center;
                    align-self: stretch;
                    padding: 0 10px;
                    flex-direction: row;
                    cursor: pointer;
                    position: relative;
                    justify-content: flex-start;
                    border-radius: 3px;
                    height: 40px;
                    margin: 10px 5px;
                }
                .mt-tooltip:hover .mt-tooltip__text {
                  visibility: visible;
              }
                 </style>
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                 integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                 crossOrigin="anonymous" />
                </head>
                <body >
                  <div id="page" ></div>
                </body>
              </html>`;
  };

  const initstateBackground = {
    displayColorBackground: false,
    color: {
      r: "241",
      g: "112",
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
  const anchorRef = React.useRef(null);
  const data = useSelector((state) => state.createbuttons.data);
  console.log(data);
  //   const displayMenu = useSelector((state) => state.displayMenu.displayMenu);
  const typeMenu = useSelector((state) => state.posts.menuData);
  const [show, setShow] = useState(false);
  const [editButton, setEditButton] = useState({});
  const [loadButton, setLoadButton] = useState();
  const [colorText, setColorText] = useState(initstateText);
  const [colorIcon, setColorIcon] = useState(initstateIcon);
  const requesting = useSelector((state) => state.updatebuttons.requesting);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("1");
  const [displayMenu, setDisplayMenu] = useState(
    typeMenu ? (typeMenu.menuType ? typeMenu.menuType : "1") : "1"
  );
  const [colorBackground, setColorBackground] = useState(initstateBackground);
  const [valueButton, setValueButton] = useState(initstateValueButton);
  const stylesText = {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: `rgba(${colorText.color && colorText.color.r}, ${
        colorText.color && colorText.color.g
      }, ${colorText.color && colorText.color.b})`,
      // backgroundColor: colorText.color_text ? colorText.color_text : "",
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
  function hexToR(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[1], 16) : null;
  }
  function hexToG(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[2], 16) : null;
  }
  function hexToB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[3], 16) : null;
  }
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
  useEffect(() => {
    setLoadButton(data);
    // if (data && data.length > 0) {
    //   for (let i = 0; i < data.length; i++) {
    //     dispatch(createButton(Object.assign({}, data[i])));
    //   }
    // }
  }, [data]);
  const onedit = (id) => {
    data.forEach((items, index) => {
      if (items.id === id) {
        setEditButton(data[index]);
        setColorText({
          ...colorText,
          color: {
            r: hexToR(data[index].color_text),
            g: hexToG(data[index].color_text),
            b: hexToB(data[index].color_text),
          },
        });
        setColorBackground({
          ...colorBackground,
          color: {
            r: hexToR(data[index].color_background),
            g: hexToG(data[index].color_background),
            b: hexToB(data[index].color_background),
          },
        });
        setColorIcon({
          ...colorIcon,
          color: {
            r: hexToR(data[index].color_icon),
            g: hexToG(data[index].color_icon),
            b: hexToB(data[index].color_icon),
          },
        });
      }
    });
    setShow(true);
  };
  const onHandleChange = (e) => {
    const { name } = e.target;
    setEditButton(
      {
        ...editButton,
        [name]: e.target.value,
      },
      console.log(editButton)
    );
  };
  const onhandleClose = () => {
    setShow(false);
  };
  const onhandleEdit = () => {
    const editMenu = {
      id_button: editButton.id_button,
      name_button: editButton.name_button,
      color_text: editButton.color_text,
      color_background: editButton.color_background,
      color_icon: editButton.color_icon,
      link: editButton.link,
      icon: editButton.icon,
      //   menu: { id_menu: id },
    };
    // dispatch(updateButton(editButtons));
    // ButtonService.updateButton(editButtons, editButton.id_button);
    setShow(false);
  };
  const handleClick = (event) => {
    setOpen((prevOpen) => !prevOpen);
  };
  const ondelete = (id) => {
    console.log(id);
    dispatch(deleteButton(id));
  };
  const onStep1 = () => {
    setStep("1");
  };
  const onStep2 = () => {
    setStep("2");
  };
  const initialContentView = () => {
    if (displayMenu === "1") {
      return initialContent();
    } else if (displayMenu === "2") {
      return initialContent1();
    } else if (displayMenu === "3" || displayMenu === "4") {
      return initialContent2();
    }
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
  const handleCloseIcon = () => {
    setColorIcon({
      ...colorIcon.color,
      displayColorIcon: false,
    });
  };
  const handleChangeIcon = (color) => {
    setColorIcon({ ...colorIcon, color: color.rgb });
    setValueButton({ ...valueButton, color_icon: color.rgb });
  };
  const handleClickIcon = () => {
    setColorIcon({ ...colorIcon, displayColorIcon: true });
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
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const handleEditMenu = () => {
    const editButtons = {
      id: editButton.id,
      name_button: editButton.name_button,
      link: editButton.link,
      icon: editButton.icon,
      typeButton: editButton.typeButton,
      captionContent: editButton.captionContent,
      color_text: rgbToHex(
        valueButton.color_text
          ? valueButton.color_text.r
          : colorText.color && colorText.color.r,
        valueButton.color_text
          ? valueButton.color_text.g
          : colorText.color && colorText.color.g,
        valueButton.color_text
          ? valueButton.color_text.b
          : colorText.color && colorText.color.b
      ),

      color_background: rgbToHex(
        valueButton.color_background
          ? valueButton.color_background.r
          : colorBackground.color && colorBackground.color.r,
        valueButton.color_background
          ? valueButton.color_background.g
          : colorBackground.color && colorBackground.color.g,
        valueButton.color_background
          ? valueButton.color_background.b
          : colorBackground.color && colorBackground.color.b
      ),
      color_icon: rgbToHex(
        valueButton.color_icon
          ? valueButton.color_icon.r
          : colorIcon.color && colorIcon.color.r,
        valueButton.color_icon
          ? valueButton.color_icon.g
          : colorIcon.color && colorIcon.color.g,
        valueButton.color_icon
          ? valueButton.color_icon.b
          : colorIcon.color && colorIcon.color.b
      ),
    };
    dispatch(updateButtonEdit(editButtons));
    // ButtonFake.updateButtonFake(editButtons, editButton.id_button)
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <div className=" lg:ml-10 bg-white rounded shadow-xl p-6 w-screen lg:w-full ">
        <div className="w-full px-2 hover:bg-blue-100 py-2 text-xl font-semibold">
          Danh s??ch n??t ???? t???o
        </div>
        <section className="my-1 grid grid-cols-1 xl:grid-cols-6 gap-2 mr-1">
          {loadButton && loadButton.length > 0
            ? loadButton.map((item) => (
                <div className="flex  flex-wrap mt-1">
                  <div
                    class="flex-1  font-bold rounded border-2  hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center"
                    style={{ backgroundColor: `${item.color_background}` }}
                  >
                    <button
                      ref={anchorRef}
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      class="px-3 "
                      onClick={handleClick}
                    >
                      <div class="flex mx-auto my-auto">
                        <i
                          style={{ color: `${item.color_icon}` }}
                          className={` ${item.icon} mr-1 my-auto `}
                        />
                        <span
                          class="text-sm"
                          style={{ color: `${item.color_text}` }}
                        >
                          {item.name_button}
                        </span>
                        <ReactBootStrap.NavDropdown
                          size="smm"
                          id="collasible-nav-dropdown"
                        >
                          <ReactBootStrap.NavDropdown.Item
                            onClick={() => onedit(item.id)}
                          >
                            S???a
                          </ReactBootStrap.NavDropdown.Item>
                          <ReactBootStrap.NavDropdown.Item
                            onClick={() => ondelete(item.id)}
                          >
                            X??a
                          </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                      </div>
                    </button>
                  </div>
                </div>
              ))
            : ""}
        </section>

        <div className="flex mt-3 border-b-2 border-gray-200 pb-4">
          <button
            onClick={onStep1}
            class="flex px-4 py-2 hover:bg-red-500  w-auto self-center text-sm font-medium antialiased rounded bg-blue-800 text-white"
          >
            <i class="fas fa-tv mr-3 my-auto"></i>
            <div>M??y t??nh</div>
          </button>
          <button
            onClick={onStep2}
            class="flex ml-2 px-4 py-2 hover:bg-red-500 w-auto self-center  text-sm font-medium antialiased rounded bg-blue-800 text-white"
          >
            <i class="fas fa-mobile-alt mr-3 my-auto"></i>
            <div>??i???n tho???i</div>
          </button>
        </div>
        {(() => {
          if (step == "1") {
            return (
              <>
                <div className="app-preview__body desktop">
                  <div className="preview-image">
                    <img
                      src="../../../../images/desktop.png"
                      alt=""
                      width="692px"
                      height="409px"
                    />
                    <Frame initialContent={initialContentView()}>
                      <Display />
                    </Frame>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="app-preview__body desktop">
                  <div
                    className="preview-image"
                    style={{ textAlign: "-webkit-center" }}
                  >
                    <img
                      src="../../../../images/mobile.png"
                      alt=""
                      width="210px"
                      height="100px"
                    />
                  </div>
                </div>
              </>
            );
          }
        })()}
      </div>
      {/* <div className=" relative ml-10  pt-8" style={{ width: '605px' }}>
                <div className="w-full px-2 hover:bg-blue-100 py-2 text-xl font-semibold">Danh s??ch n??t ???? t???o</div>
                <button className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline" ></button>
                <div className="flex  flex-wrap mt-1">
                    {(data && data.length > 0) ? data.map(item => (

                        <div class="p-2 ">

                            <div style={{ backgroundColor: item.color_background }} className={`flex items-center p-1  rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                <button classname={`flex items-center bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                    <img className="h-12" src={`../../images/${item.icon}`} />

                                    <div>

                                        <p className="text-xs font-medium mt-2 ml-2" style={{ color: item.color_text }}>
                                            {item.name_button}
                                        </p>
                                        <ReactBootStrap.NavDropdown size="sm" id="collasible-nav-dropdown">
                                            <ReactBootStrap.NavDropdown.Item onClick={() => onedit(item.id_button)}  >S???a</ReactBootStrap.NavDropdown.Item>
                                            <ReactBootStrap.NavDropdown.Item  >X??a</ReactBootStrap.NavDropdown.Item>
                                        </ReactBootStrap.NavDropdown>
                                    </div>
                                </button>

                            </div>
                        </div>
                    )
                    ) : <div>data is not empty</div>}
                </div>
                <button className={`h-12 w-12 mx-auto rounded-md `}></button>

                <div className="app-preview__body desktop">
                    <div className="preview-image">
                        <img src="../../../../images/desktop.png" alt="" width="692px" height="409px" />
                        {requesting ? '' : <Iframe frameborder="0" src={`http://localhost:3000/viewupdate/${id}`} />}
                    </div>
                </div>

            </div> */}

      <Modal show={show}>
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
                  <div style={{ display: "grid" }}>
                    <Form.Label>Bi???u t?????ng n??t</Form.Label>
                    <i className={` mr-1 my-auto fa-5x ${editButton.icon}`}></i>
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
                              colorBackground.color && colorBackground.color.r
                            },
                                                      ${
                                                        colorBackground.color &&
                                                        colorBackground.color.g
                                                      }, 
                                                      ${
                                                        colorBackground.color &&
                                                        colorBackground.color.b
                                                      })`,
                          }}
                        >
                          <button class="px-3 ">
                            <div class="flex mx-auto my-auto">
                              <i
                                style={{
                                  color: `rgba(${
                                    colorIcon.color && colorIcon.color.r
                                  },
                                                    ${
                                                      colorIcon.color &&
                                                      colorIcon.color.g
                                                    }, 
                                                    ${
                                                      colorIcon.color &&
                                                      colorIcon.color.b
                                                    })`,
                                }}
                                class={`${editButton.icon} mr-1 my-auto`}
                              ></i>
                              <span
                                class="text-sm"
                                style={{
                                  color: `rgba(${
                                    colorText.color && colorText.color.r
                                  },
                                                      ${
                                                        colorText.color &&
                                                        colorText.color.g
                                                      }, 
                                                      ${
                                                        colorText.color &&
                                                        colorText.color.b
                                                      })`,
                                }}
                              >
                                {" "}
                                {editButton && editButton.name_button}
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
                value={editButton.name_button}
                onChange={onHandleChange}
                name="name_button"
                type="text"
                placeholder="T??n hi???n th??? c???a n??t"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nh???p n???i dung ch?? th??ch</Form.Label>
              <Form.Control
                value={editButton.captionContent}
                name="captionContent"
                onChange={onHandleChange}
                type="text"
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
              if (editButton.typeButton == "1") {
                return (
                  <>
                    <Form.Group controlId="formLink">
                      <Form.Label>Link</Form.Label>
                      <Form.Control
                        value={editButton.link}
                        name="link"
                        onChange={onHandleChange}
                        type="text"
                        placeholder="Link"
                      />
                    </Form.Group>
                  </>
                );
              } else if (editButton.typeButton == "2") {
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
                          value={editButton.link}
                          name="link"
                          onChange={onHandleChange}
                          type="text"
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
              } else if (editButton.typeButton == "3") {
                return (
                  <>
                    <Form.Group controlId="formBasicCheckbox">
                      <div class="cursor-pointer text-blue-400 ml-1 ">
                        {/* <Modals />
                        <p
                          onClick={() => InsertInput()}
                          class="inline hover:bg-blue-100 px-4 py-3 rounded-full"
                        >
                          <i class="fas fa-globe"></i>Th??m tr?????ng th??ng tin
                        </p> */}
                      </div>
                    </Form.Group>
                  </>
                );
              }
            })()}
            {/* <Form.Group controlId="formLink">
              <Form.Label>Link</Form.Label>
              <Form.Control
                value={editButton.link}
                onChange={onHandleChange}
                name="link"
                type="text"
                placeholder="Link"
              />
            </Form.Group> */}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditMenu}>
            S???a Menu
          </Button>

          <Button variant="primary" onClick={handleClose}>
            Quay l???i
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>C???u h??nh n??t : G???i ngay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          M?? t??? : Kh??ch h??ng s??? g???i tr???c ti???p th??ng qua t??nh n??ng n??y
          <Modal.Title> C???u h??nh hi???n th??? n??t</Modal.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Bi???u t?????ng n??t</Form.Label>
              <img
                className="h-12 bg-gray-400"
                src={`../../images/${editButton.icon}`}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>T??n hi???n th??? c???a n??t</Form.Label>
              <Form.Control
                value={editButton.name_button}
                onChange={onHandleChange}
                name="name_button"
                type="text"
                placeholder="T??n hi???n th??? c???a n??t"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nh???p n???i dung ch?? th??ch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hi???n th??? ch?? th??ch khi di chu???t v??o"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Text</Form.Label>
              <Form.Control
                value={editButton.color_text}
                onChange={onHandleChange}
                name="color_text"
                type="text"
                placeholder="M??u"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Background</Form.Label>
              <Form.Control
                value={editButton.color_background}
                onChange={onHandleChange}
                name="color_background"
                type="text"
                placeholder="M??u"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Icon</Form.Label>
              <Form.Control
                value={editButton.color_icon}
                onChange={onHandleChange}
                name="color_icon"
                type="color_icon"
                placeholder="M??u"
              />
            </Form.Group>
            <Form.Group controlId="formLink">
              <Form.Label>Link</Form.Label>
              <Form.Control
                value={editButton.link}
                onChange={onHandleChange}
                name="link"
                type="text"
                placeholder="Link"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label type="text" label="Check me out">
                {" "}
                C???u h??nh gi?? tr??? thu???c t??nh n??t
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nh???p s??? ??i???n tho???i (*)</Form.Label>
              <Form.Control type="text" placeholder="G???i ngay" />
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onhandleEdit}>
            S???a Menu
          </Button>

          <Button variant="primary" onClick={onhandleClose}>
            Quay l???i
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
