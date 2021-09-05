import React, { useContext, useEffect, useState } from "react";
import ButtonService from "../../service/Button/ButtonService";
import MenuService from "../../service/Menu/MenuService";
import * as ReactBootStrap from "react-bootstrap";
import { Modal, Button, Form } from "react-bootstrap";
import "./style.css";
import { ButtonContext } from "../../service/ButtonContext";
import { viewButtonByIDMenu } from "../../redux/actions/buttonAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchCreateData } from "../../redux/actions/dataAction";
import { getCurrentDate } from "../../utils";
import { fetchLoadInput } from "../../redux/actions/InputAction";
import FormImpl from "react-bootstrap/esm/Form";
// import moment from "react-moment";

function Display({ loadInput, requesting, displayMenu }) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [createData, setCreateData] = useState({});
  const [idInput, setIDInput] = useState({});
  const [button, setButton] = useState();
  const [show, setShow] = useState(false);
  const [displayType, setdisplayType] = useState();
  const [displayTypeV2, setDisplayTypeV2] = useState();
  let email = localStorage.getItem("email");
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    setInputValue(loadInput);
  }, [loadInput]);

  useEffect(() => {
    if (email != null) {
      ButtonService.getButtonByIDMenu(id).then((res) => {
        setButton(res.data);
        setdisplayType(
          res.data[0]
            ? res.data[0].menu.menuType
              ? res.data[0].menu.menuType
              : ""
            : ""
        );
        setDisplayTypeV2(
          res.data[0]
            ? res.data[0].menu.menuType
              ? res.data[0].menu.menuLocation
              : ""
            : ""
        );
      });
    }
  }, [id]);

  const onclick = (id) => {
    console.log(id);
    dispatch(fetchLoadInput(id));
    setShow(true);
  };
  const onchangeClose = () => {
    setShow(false);
  };
  const onHandleChange = (e) => {
    const { name } = e.target;
    setCreateData({
      ...createData,
      [name]: e.target.value,
    });
  };
  const onHandleChangeInput = (e) => {
    const { name } = e.target;
    setIDInput({
      ...idInput,
      [name]: e.target.value,
    });
    console.log(idInput);
  };
  const handleCreateData = () => {
    var newArray = Object.keys(idInput);
    var newArrayValue = Object.values(idInput);
    let data = {
      dataOfCustomers: [
        {
          fullName: createData.fullName,
          phone: createData.phone,
          emailCustomer: createData.emailCustomer,
          address: createData.address,
          conTent: createData.conTent,
          notes: createData.notes,
          users: { email: email },
          createDate: getCurrentDate(),
        },
      ],
      modal: [],
    };
    for (let i = 0; i < newArray.length; i++) {
      let modal = { id: newArray[i], inputValue: newArrayValue[i] };
      data.modal.push(modal);
    }

    console.log(data);
    dispatch(fetchCreateData(data));
  };
  const viewDisplayV2 = (displayTypeV2) => {
    if (displayTypeV2 === "1") {
      return "mmt-app--circle-bottom-right";
    } else if (displayTypeV2 === "2") {
      return "mmt-app--circle-middle-right";
    } else if (displayTypeV2 === "3") {
      return "mmt-app--circle-top-right";
    } else if (displayTypeV2 === "4") {
      return "mmt-app--circle-bottom-left";
    } else if (displayTypeV2 === "5") {
      return "mmt-app--circle-middle-left";
    } else if (displayTypeV2 === "6") {
      return "mmt-app--circle-top-left";
    }
  };

  return (
    <>
      {/* {

                <>
                    {(() => {
                        if (button.menu.menuType === "1") {
                            return (<>
                                <img src="../images/background.jpg" style={{ width: '820px', height: '520px' }}></img>
                                <div id="metu">
                                    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                                    <div className="mmt-container  mmt-container--full">
                                        <div className="mmt-app">

                                            {(button && button.length > 0) ? button.map(items => (
                                                <>
                                                    <div style={{
                                                        position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                                        backgroundColor: `${items.menu.color_menu ? items.menu.color_menu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                                    }} />
                                                    <span onClick={() => onclick(items.id_button)} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
                                                        <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
                                                            <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                                            <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>

                                                        {
                                                            items.captionContent &&
                                                            <div className="mt-tooltip_text">
                                                                <span>{items.captionContent}</span>
                                                            </div>
                                                        }

                                                    </div></span>
                                                </>

                                            )

                                            ) : ''}




                                        </div></div>    </div>
                            </>)
                        } else if (button.menu.menuType === "2") {
                            return (<>
                                <img src="../images/background.jpg" style={{ width: '820px', height: '520px' }}></img>
                                <div id="metu">
                                    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                                    <div className="mmt-container  mmt-container--fit">
                                        <div className="mmt-app">

                                            {(button && button.length > 0) ? button.map(items => (
                                                <>
                                                    <div style={{
                                                        position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                                        backgroundColor: `${items.menu.color_menu ? items.menu.color_menu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                                    }} />
                                                    <span onClick={() => onclick(items.id_button)} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
                                                        <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
                                                            <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                                            <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>

                                                        {
                                                            items.captionContent &&
                                                            <div className="mt-tooltip_text">
                                                                <span>{items.captionContent}</span>
                                                            </div>
                                                        }

                                                    </div></span>
                                                </>

                                            )

                                            ) : ''}

                                            )

                                        </div></div>    </div>
                            </>)

                        }
                    })()}
                </>


            }


            <span></span> */}

      <img
        src="../images/backgroundFinal.jpg"
        style={{ width: "1000px", height: "520px" }}
      ></img>
      <div id="metu">
        <div
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            zIndex: 999999,
          }}
        />
        {(() => {
          if (displayType === "1") {
            return (
              <>
                <div className="mmt-container  mmt-container--full">
                  <div className="mmt-app">
                    {button && button.length > 0
                      ? button.map((items) => (
                          <>
                            <div
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: "0px",
                                left: "0px",
                                backgroundColor: `${items.menu.color_menu}`,
                                opacity: items.menu.opacity
                                  ? items.menu.opacity
                                  : "1",
                                color: "rgb(255, 255, 255)",
                                pointerEvents: "none",
                                zIndex: -1,
                              }}
                            />
                            <span
                              onClick={() => onclick(items.id)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              <div className="mt-tooltip">
                                <span
                                  className="mmt-button call"
                                  style={{
                                    backgroundColor: `${items.color_background}`,
                                  }}
                                >
                                  <i
                                    style={{ color: items.color_icon }}
                                    className={` mr-1 my-auto  ${items.icon}`}
                                  />

                                  <span
                                    className="mmt-button__label"
                                    style={{ color: `${items.color_text}` }}
                                  >
                                    {items.name_button}
                                    {items.captionContent && (
                                      <div className="mt-tooltip__text">
                                        {items.captionContent}
                                      </div>
                                    )}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>
              </>
            );
          } else if (displayType === "2") {
            return (
              <>
                <div className="mmt-container  mmt-container--fit">
                  <div className="mmt-app">
                    {button && button.length > 0
                      ? button.map((items) => (
                          <>
                            <div
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: "0px",
                                left: "0px",
                                backgroundColor: `${items.menu.color_menu}`,
                                opacity: items.menu.opacity
                                  ? items.menu.opacity
                                  : "1",
                                color: "rgb(255, 255, 255)",
                                pointerEvents: "none",
                                zIndex: -1,
                              }}
                            />
                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              <div className="mt-tooltip">
                                <span
                                  className="mmt-button call"
                                  style={{
                                    backgroundColor: `${items.color_background}`,
                                  }}
                                >
                                  <i
                                    style={{ color: items.color_icon }}
                                    className={` mr-1 my-auto  ${items.icon}`}
                                  />
                                  <span
                                    className="mmt-button__label"
                                    style={{ color: `${items.color_text}` }}
                                  >
                                    {items.name_button}
                                    {items.captionContent && (
                                      <div className="mt-tooltip__text">
                                        {items.captionContent}
                                      </div>
                                    )}
                                  </span>
                                </span>

                                {items.captionContent && (
                                  <div className="mt-tooltip__text">
                                    <span>{items.captionContent}</span>
                                  </div>
                                )}
                              </div>
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>
              </>
            );
          } else if (displayType === "3") {
            return (
              <>
                <div className="mmt-container  ">
                  <div
                    className={`mmt-app mmt-app--circle  ${viewDisplayV2(
                      displayTypeV2
                    )}`}
                  >
                    {button && button.length > 0
                      ? button.map((items) => (
                          <>
                            {/* <div style={{
                                    position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                    backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                }} /> */}
                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              {/* <div className="mt-tooltip"> */}
                              <span className="mmt-button call mmt-button--circle">
                                <span
                                  style={{
                                    backgroundColor: `${items.menu.color_menu}`,
                                    opacity: items.menu.opacity
                                      ? items.menu.opacity
                                      : "1",
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0px",
                                    left: "0px",
                                    borderRadius: "20px",
                                    zIndex: "-1",
                                  }}
                                ></span>
                                <i
                                  style={{ color: items.color_icon }}
                                  className={` mr-1 my-auto  ${items.icon}`}
                                />
                                <span
                                  className="mmt-button__label"
                                  style={{ color: `${items.color_text}` }}
                                >
                                  {items.name_button}
                                  {items.captionContent && (
                                    <div className="mt-tooltip__text">
                                      {items.captionContent}
                                    </div>
                                  )}
                                </span>
                              </span>

                              {/* </div> */}
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>
              </>
            );
          } else if (displayType === "4") {
            return (
              <>
                {" "}
                <div className="mmt-container  ">
                  <div
                    className={`mmt-app mmt-app--circle  ${viewDisplayV2(
                      displayTypeV2
                    )} `}
                  >
                    {button && button.length > 0
                      ? button.map((items) => (
                          <>
                            {/* <div style={{
                                        position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                        backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                    }} /> */}
                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              {/* <div className="mt-tooltip"> */}
                              <span className="mmt-button call mmt-button--circle">
                                <span
                                  style={{
                                    backgroundColor: `${items.menu.color_menu}`,
                                    opacity: items.menu.opacity
                                      ? items.menu.opacity
                                      : "1",
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0px",
                                    left: "0px",
                                    zIndex: "-1",
                                  }}
                                ></span>
                                <i
                                  style={{ color: items.color_icon }}
                                  className={` mr-1 my-auto  ${items.icon}`}
                                />
                                <span
                                  className="mmt-button__label"
                                  style={{ color: `${items.color_text}` }}
                                >
                                  {items.name_button}
                                  {items.captionContent && (
                                    <div className="mt-tooltip__text">
                                      {items.captionContent}
                                    </div>
                                  )}
                                </span>
                              </span>

                              {/* </div> */}
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>
              </>
            );
          }
        })()}
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
              <Form.Label>Họ và Tên</Form.Label>
              <Form.Control
                onChange={onHandleChange}
                name="fullName"
                type="text"
                placeholder="Họ và tên"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                onChange={onHandleChange}
                name="phone"
                type="text"
                placeholder="Số điện thoại"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={onHandleChange}
                name="emailCustomer"
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                onChange={onHandleChange}
                name="address"
                type="text"
                placeholder="Địa chỉ"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                onChange={onHandleChange}
                name="conTent"
                type="text"
                placeholder="Nội dung"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                onChange={onHandleChange}
                name="notes"
                type="text"
                placeholder="Ghi chú"
              />
            </Form.Group>
            {inputValue && inputValue.length > 0
              ? inputValue.map((item) => (
                  <>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>{item.inputName}</Form.Label>
                      <Form.Control
                        onChange={onHandleChangeInput}
                        name={`${item.id}`}
                        type="text"
                        placeholder="Ghi chú"
                      />
                    </Form.Group>
                  </>
                ))
              : ""}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={handleCreateData}>
            Gửi
          </ReactBootStrap.Button>

          <ReactBootStrap.Button variant="primary" onClick={onchangeClose}>
            Quay lại
          </ReactBootStrap.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    displayMenu: state.displayMenu.displayMenu,
    loadInput: state.input.loadInput,
    requesting: state.displayMenu.requesting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // MenusAction: bindActionCreators(MenusAction, dispatch),
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Display);
