import React, { useContext, useEffect, useState } from 'react'
import ButtonService from '../../service/Button/ButtonService';
import MenuService from '../../service/Menu/MenuService'
import * as ReactBootStrap from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap'
import './style.css'
import { ButtonContext } from '../../service/ButtonContext';
import { viewButtonByIDMenu } from '../../redux/actions/buttonAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCreateData } from '../../redux/actions/dataAction';
import { getCurrentDate } from '../../utils';
// import moment from "react-moment";

export default function Display() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const [createData, setCreateData] = useState({})
    const [menu, setMenu] = useState();
    const [button, setButton] = useState();
    const [show, setShow] = useState(false);

    let email = localStorage.getItem('email')



    useEffect(() => {
        if (email != null) {


            ButtonService.getButtonByIDMenu(id).then((res) => {
                setButton(res.data)
            })

        }
    }, [id])



    const onclick = () => {
        setShow(true);
    }
    const onchangeClose = () => {
        setShow(false)
    }
    const onHandleChange = (e) => {
        const { name } = e.target;
        setCreateData({
            ...createData,
            [name]: e.target.value

        })


    }
    const handleCreateData = () => {
        // console.log(getCurrentDate())
        const dataOfCustomer = { fullName: createData.fullName, phone: createData.phone, emailCustomer: createData.emailCustomer, address: createData.address, conTent: createData.conTent, notes: createData.notes, users: { email: email }, createDate: getCurrentDate() }
        console.log(dataOfCustomer)
        dispatch(fetchCreateData(dataOfCustomer))
        // console.log(editButtons)
        // dispatch(updateButton(editButtons))

    }
    return (
        <>

            <img src="../images/background.jpg" style={{ width: '1000px', height: '520px' }}></img>
            <div id="metu">

                <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                <div className="mmt-container  mmt-container--full">
                    <div className="mmt-app">
                        {(button && button.length > 0) ? button.map(items => (
                            <>

                                <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', backgroundColor: `${items.menu.color_menu}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1 }} />
                                <span onClick={onclick} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
                                    <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
                                        <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                        <span className="mmt-button__label" style={{ color: `${items.color_text}` }}>{items.name_button}</span></span>

                                </div></span>
                            </>

                        )

                        ) : ''}</div></div>    </div>
            <Modal show={show}  >
                <Modal.Header closeButton>
                    <Modal.Title>Cấu hình nút : Gọi ngay</Modal.Title>
                </Modal.Header>
                <Modal.Body >Mô tả : Khách hàng sẽ gọi trực tiếp thông qua tính năng này
                    <Modal.Title>  Cấu hình hiển thị nút</Modal.Title>
                    {/* <Modal.Text>Biểu tượng nút</Modal.Text> */}

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Họ và Tên</Form.Label>
                            <Form.Control onChange={onHandleChange} name="fullName" type="text" placeholder="Họ và tên" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control onChange={onHandleChange} name="phone" type="text" placeholder="Số điện thoại" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={onHandleChange} name="emailCustomer" type="text" placeholder="Email" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control onChange={onHandleChange} name="address" type="text" placeholder="Địa chỉ" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control onChange={onHandleChange} name="conTent" type="text" placeholder="Nội dung" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control onChange={onHandleChange} name="notes" type="text" placeholder="Ghi chú" />

                        </Form.Group>





                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <ReactBootStrap.Button variant="secondary" onClick={handleCreateData}      >
                        Gửi
                    </ReactBootStrap.Button>

                    <ReactBootStrap.Button variant="primary" onClick={onchangeClose}  >
                        Quay lại
                    </ReactBootStrap.Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
