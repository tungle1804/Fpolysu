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
export default function Display() {
    let { id } = useParams();

    const data = useSelector(state => state.buttons.dataButton)
    const requesting = useSelector(state => state.buttons.requesting)
    // console.log(data + 'ssssssssssssss')
    const dispatch = useDispatch();
    console.log(data)
    useEffect(() => {
        if (email != null) {
            // MenuService.getMenuByStatus(email).then((res) => {

            ButtonService.getButtonByIDMenu(id).then((res) => {
                setButton(res.data)
            })
            // }

            // )
        }
    }, [id])
    const [menu, setMenu] = useState();
    const [button, setButton] = useState();
    const [show, setShow] = useState(false);
    let email = localStorage.getItem('email')

    // useEffect(() => {
    //     if (email != null) {
    //         MenuService.getMenuByStatus(email).then((res) => {

    //             if (res.data.length != 0) {
    //                 ButtonService.getButtonByIDMenu(res.data[0].id_menu).then((res) => {
    //                     setButton(res.data)
    //                 })
    //             }


    //         });
    //     }



    // }, [])
    const onclick = () => {
        setShow(true);
    }
    const onchangeClose = () => {
        setShow(false)
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
                            <Form.Label>Biểu tượng nút</Form.Label>
                            <Form.Control name="name_button" type="text" placeholder="Tên hiển thị của nút" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tên hiển thị của nút</Form.Label>
                            <Form.Control name="name_button" type="text" placeholder="Tên hiển thị của nút" />

                        </Form.Group>





                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <ReactBootStrap.Button variant="secondary"     >
                        Sửa Menu
                    </ReactBootStrap.Button>

                    <ReactBootStrap.Button variant="primary" onClick={onchangeClose}  >
                        Quay lại
                    </ReactBootStrap.Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
