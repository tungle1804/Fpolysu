import React, { useCallback, useContext, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ButtonContext } from "../../service/ButtonContext";
import * as ReactBootStrap from "react-bootstrap";
import "./style.css";
import ButtonFake from "../../service/ButtonFake";
import Ifram from "./iframe";
import DisplayCreateDetails from "../Display/displaycreatedetails";
import { connect, useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  createButton,
  deleteButton,
  updateButton,
  viewButton,
} from "../../redux/actions/createbuttonAction";
import Display from "../Display/displaycreatedetails";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { SketchPicker } from "react-color";
// import styles from 'public/styleMetu/style.css';
function CreateDetailsMenu({ data, color }) {
  const displayMenu = useSelector((state) => state.displayMenu.displayMenu);
  const initialContent = () => {
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
            .mt-tooltip_text {
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
            
             </style>
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
            .mt-tooltip_text {
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
            
             </style>
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
            .mt-tooltip_text {
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
            
             </style>
            </head>
            <body >
              <div id="page" ></div>
            </body>
          </html>`;
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
  const initstateValueButton = {
    name_button: null,
    color_text: null,
    color_background: null,
    color_icon: null,
    link: null,
  };
  const data1 = useSelector((state) => state.createbuttons.data);
  const [colorText, setColorText] = useState(initstateText);
  const [valueButton, setValueButton] = useState(initstateValueButton);
  const [colorBackground, setColorBackground] = useState(initstateBackground);
  const [editButton, setEditButton] = useState({});
  const [show, setShow] = useState(false);

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewButton());
  }, [data]);

  const demos = {
    soundcloud:
      // '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="/viewreactjs/viewreact.js"></iframe>'
      '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="http://127.0.0.1:5500/metu/src/components/viewtest/view.html"></iframe>',
  };
  const onHandleChange = (e) => {
    const { name } = e.target;
    setEditButton({
      ...editButton,
      [name]: e.target.value,
    });
  };
  const ondelete = (id) => {
    dispatch(deleteButton(id));
    // button.forEach((item, index) => {
    //     if (item.id_button === id) {
    //         button.splice(index, 1)
    //     }
    // })
    // setButton([...button])
    ButtonFake.deleteButtonFake(id);
  };
  const onedit = (id) => {
    data1.forEach((items, index) => {
      if (items.id_button === id) {
        setEditButton(data1[index]);
        setColorText({
          ...colorText,
          color: {
            r: hexToR(data1[index].color_text),
            g: hexToG(data1[index].color_text),
            b: hexToB(data1[index].color_text),
          },
        });
        setColorBackground({
          ...colorBackground,
          color: {
            r: hexToR(data1[index].color_background),
            g: hexToG(data1[index].color_background),
            b: hexToB(data1[index].color_background),
          },
        });
      }
    });
    setShow(true);
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
  const handleClose = () => {
    setShow(false);
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
      id_button: editButton.id_button,
      name_button: editButton.name_button,
      color_text: rgbToHex(
        valueButton.color_text.r ? valueButton.color_text.r : "",
        valueButton.color_text.g ? valueButton.color_text.g : "",
        valueButton.color_text.b ? valueButton.color_text.b : ""
      ),
      color_background: rgbToHex(
        valueButton.color_background.r ? valueButton.color_background.r : "",
        valueButton.color_background.g ? valueButton.color_background.g : "",
        valueButton.color_background.b ? valueButton.color_background.b : ""
      ),
      color_icon: rgbToHex(
        valueButton.color_icon.r ? valueButton.color_icon.r : "",
        valueButton.color_icon.g ? valueButton.color_icon.g : "",
        valueButton.color_icon.b ? valueButton.color_icon.b : ""
      ),
      link: editButton.link,
      icon: editButton.icon,
    };
    dispatch(updateButton(editButtons));
    // ButtonFake.updateButtonFake(editButtons, editButton.id_button)
    setShow(false);
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
  const initialContentView = () => {
    if (displayMenu === "1") {
      return initialContent();
    } else if (displayMenu === "2") {
      return initialContent1();
    } else if (displayMenu === "3" || displayMenu === "4") {
      return initialContent2();
    }
  };

  return (
    <>
      <div className=" lg:ml-10 bg-white rounded shadow-xl p-6 w-screen lg:w-full ">
        <div className="w-full px-2 hover:bg-blue-100 py-2 text-xl font-semibold">
          Danh sách nút đã tạo
        </div>

        {/* <div class="flex-1 bg-white text-gray-600 font-bold rounded border-2 border-green-500 hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center">
                    <button class="px-3 ">
                        <div class="flex mx-auto my-auto">
                            <i class="fas fa-phone-volume mr-1 my-auto"></i>
                            <span class="text-sm">Gọi ngay</span></div>
                    </button></div> */}

        <section className="my-1 grid grid-cols-1 xl:grid-cols-6 gap-2 mr-1">
          {data1.map((item) => (
            <div className="flex  flex-wrap mt-1">
              <div
                class="flex-1  font-bold rounded border-2  hover:border-green-700 hover:text-black shadow-md py-2 px-2  items-center"
                style={{ backgroundColor: `${item.color_background}` }}
              >
                <button class="px-3 ">
                  <div class="flex mx-auto my-auto">
                    <i class="fas fa-phone-volume mr-1 my-auto"></i>
                    <span
                      class="text-sm"
                      style={{ color: `${item.color_text}` }}
                    >
                      {" "}
                      {item.name_button}
                    </span>
                  </div>
                </button>
              </div>
              {/* <div class="p-2 "> */}

              {/* <div></div> */}
              {/* style={{ backgroundColor: `${item.color_background}` }} className={`flex items-center p-1  rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                <button classname={`flex items-center bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                        <img className="h-12" src={`../images/${item.icon}`} />

                                      <div>

                                       <p className="text-xs font-medium mt-2 ml-2" style={{ color: `${item.color_text}` }}>
                                               {item.name_button}
                                         </p>
                                        <ReactBootStrap.NavDropdown size="sm" id="collasible-nav-dropdown">
                                              <ReactBootStrap.NavDropdown.Item onClick={() => onedit(item.id_button)} >Sửa</ReactBootStrap.NavDropdown.Item>
                                          </ReactBootStrap.NavDropdown>
                                       </div>
                                  </button>

                               </div>
                          </div> */}
            </div>
          ))}{" "}
        </section>

        <div className="flex mt-3 border-b-2 border-gray-200 pb-4">
          <button class="flex px-4 py-2 hover:bg-red-500  w-auto self-center text-sm font-medium antialiased rounded bg-blue-800 text-white">
            <i class="fas fa-tv mr-3 my-auto"></i>
            <div>Máy tính</div>
          </button>
          <button class="flex ml-2 px-4 py-2 hover:bg-red-500 w-auto self-center  text-sm font-medium antialiased rounded bg-blue-800 text-white">
            <i class="fas fa-mobile-alt mr-3 my-auto"></i>
            <div>Điện thoại</div>
          </button>
        </div>
        <button
          style={{ backgroundColor: color }}
          className={`h-12 w-12 mx-auto rounded-md `}
        ></button>
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
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Cấu hình nút : Gọi ngay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Mô tả : Khách hàng sẽ gọi trực tiếp thông qua tính năng này
          <Modal.Title> Cấu hình hiển thị nút</Modal.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div class=" flex  space-x-2">
                <div class="flex-1 mt-5">
                  {" "}
                  <Form.Label>Biểu tượng nút</Form.Label>
                  <img
                    className="h-12 bg-gray-400"
                    src={`../images/${editButton.icon}`}
                  />
                </div>
                <div class="flex-1 ">
                  <div className="flex  flex-wrap mt-1 ">
                    <div class="p-2 text-right ml-5 mt-3">
                      <Form.Label>Hiển thị</Form.Label>
                      <div
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
                        className={`flex items-center p-1  rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}
                      >
                        <button
                          classname={`flex items-center bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}
                        >
                          <img
                            className="h-12"
                            src={`../images/${editButton.icon}`}
                          />

                          <div>
                            <p
                              className="text-xs font-medium mt-2 ml-2"
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
                              {editButton && editButton.name_button}
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
                value={editButton.name_button}
                onChange={onHandleChange}
                name="name_button"
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
              <Form.Label className="mr-5">Màu chữ</Form.Label>
              {viewColorTextInput()}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="mr-5">Màu nền</Form.Label>
              {viewColorBackgroundInput()}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Icon</Form.Label>
              <Form.Control
                value={editButton.color_icon}
                onChange={onHandleChange}
                name="color_icon"
                type="color_icon"
                placeholder="Màu"
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
                Cấu hình giá trị thuộc tính nút
              </Form.Label>
            </Form.Group>
            {/* <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nhập số điện thoại (*)</Form.Label>
                            <Form.Control type="text" placeholder="Gọi ngay" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nhập tên người phụ trách số điện thoại (*)</Form.Label>
                            <Form.Control type="text" placeholder="Gọi ngay" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Địa chỉ của văn phòng | chi nhánh | cá nhân</Form.Label>
                            <Form.Control type="text" placeholder="Gọi ngay" />

                        </Form.Group> */}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditMenu}>
            Sửa Menu
          </Button>

          <Button variant="primary" onClick={handleClose}>
            Quay lại
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    loadInput: state.input.loadInput,
    requesting: state.input.requesting,
    displayMenu: state.displayMenu.displayMenu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // MenusAction: bindActionCreators(MenusAction, dispatch),
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateDetailsMenu);
