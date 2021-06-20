import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Iframe from 'react-iframe';
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { loadButtonByIDMenu, updateButton } from '../../redux/actions/updatebuttonAction';
import ButtonFake from '../../service/ButtonFake';
import ButtonService from '../../service/Button/ButtonService';
export default function UpdateDetailsMenu({ id }) {

    const data = useSelector(state => state.updatebuttons.data)

    const [show, setShow] = useState(false)
    const [editButton, setEditButton] = useState({})
    const requesting = useSelector(state => state.updatebuttons.requesting)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadButtonByIDMenu(id))
    }, [id])
    const onedit = (id) => {
        data.forEach((items, index) => {
            if (items.id_button === id) {
                setEditButton(data[index])

            }
        })
        setShow(true)
    }
    const onHandleChange = (e) => {
        const { name } = e.target;
        setEditButton({
            ...editButton,
            [name]: e.target.value

        }, console.log(editButton))


    }
    const onhandleClose = () => {
        setShow(false)
    }
    const onhandleEdit = () => {
        const editButtons = { id_button: editButton.id_button, name_button: editButton.name_button, color_text: editButton.color_text, color_background: editButton.color_background, color_icon: editButton.color_icon, link: editButton.link, icon: editButton.icon, menu: { id_menu: id } }
        dispatch(updateButton(editButtons))
        ButtonService.updateButton(editButtons, editButton.id_button)
        setShow(false)
    }
    return (
        <>
            <div className=" relative ml-10  pt-8" style={{ width: '605px' }}>
                <div className="w-full px-2 hover:bg-blue-100 py-2 text-xl font-semibold">Danh sách nút đã tạo</div>
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
                                            <ReactBootStrap.NavDropdown.Item onClick={() => onedit(item.id_button)}  >Sửa</ReactBootStrap.NavDropdown.Item>
                                            <ReactBootStrap.NavDropdown.Item  >Xóa</ReactBootStrap.NavDropdown.Item>
                                        </ReactBootStrap.NavDropdown>
                                    </div>
                                </button>

                            </div>
                        </div>

                    )

                    ) : <div>data is not empty</div>}



                </div>
                <button className={`h-12 w-12 mx-auto rounded-md `}></button>

                {/* <div className="mt-10" >
            <img classname="-my:-80"
                src="images/desktop.png"

            />
           
        </div> */}
                <div className="app-preview__body desktop">
                    <div className="preview-image">
                        <img src="../../../../images/desktop.png" alt="" width="692px" height="409px" />
                        {/* <iframe frameborder="0"
                    src="https://menu.metu.vn?preview=%7B%22businessId%22%3A%22KHMwYHrWv%22%2C%22menu%22%3A%7B%22id%22%3A0%2C%22theme%22%3A%22dark%22%2C%22config%22%3A%7B%7D%2C%22widget%22%3A%5B%7B%22tracking_type%22%3A%22schedule%22%2C%22type%22%3A%22form%22%2C%22title%22%3A%22%C4%90%E1%BA%B7t%20l%E1%BB%8Bch%20%C4%91i%20em%22%2C%22icon%22%3A%22callmeback_01%22%2C%22icon_url%22%3A%22https%3A%2F%2Fmedia.metu.vn%2Fimages%2Ficon_callmeback_01.svg%22%2C%22highlight%22%3Afalse%2C%22tooltip%22%3A%22b%E1%BA%A1n%20%C6%A1i%20setup%20%C4%91i%22%2C%22data%22%3A%7B%22fields%22%3A%5B%7B%22title%22%3A%22S%E1%BB%91%20%C4%91i%E1%BB%87n%20tho%E1%BA%A1i%22%2C%22type%22%3A%22phone%22%2C%22is_required%22%3Atrue%7D%2C%7B%22title%22%3A%22%C4%90%E1%BB%83%20l%E1%BA%A1i%20l%E1%BB%9Di%20nh%E1%BA%AFn%22%2C%22type%22%3A%22text%22%2C%22is_required%22%3Afalse%7D%5D%2C%22title%22%3A%22%C4%90%E1%BB%83%20l%E1%BA%A1i%20th%C3%B4ng%20tin%20l%E1%BB%8Bch%20h%E1%BA%B9n%20v%C3%A0%20s%E1%BB%91%20%C4%91i%E1%BB%87n%20tho%E1%BA%A1i%2C%20ch%C3%BAng%20t%C3%B4i%20s%E1%BA%BD%20li%C3%AAn%20h%E1%BB%87%20v%E1%BB%9Bi%20b%E1%BA%A1n%20s%E1%BB%9Bm%20nh%E1%BA%A5t%22%2C%22redirect%22%3A%22%22%2C%22note%22%3A%22%22%7D%7D%2C%7B%22tracking_type%22%3A%22login%22%2C%22type%22%3A%22link%22%2C%22title%22%3A%22%C4%90%C4%83ng%20nh%E1%BA%ADp%22%2C%22icon%22%3A%22login_01%22%2C%22icon_url%22%3A%22https%3A%2F%2Fmedia.metu.vn%2Fimages%2Ficon_login_01.svg%22%2C%22highlight%22%3Afalse%2C%22tooltip%22%3A%22%22%2C%22data%22%3A%7B%22target%22%3A%22_blank%22%2C%22link%22%3A%22%22%7D%7D%2C%7B%22tracking_type%22%3A%22order%22%2C%22type%22%3A%22link%22%2C%22title%22%3A%22%C4%90%E1%BA%B7t%20mua%22%2C%22icon%22%3A%22order_01%22%2C%22icon_url%22%3A%22https%3A%2F%2Fmedia.metu.vn%2Fimages%2Ficon_order_01.svg%22%2C%22highlight%22%3Afalse%2C%22tooltip%22%3A%22%22%2C%22data%22%3A%7B%22target%22%3A%22_blank%22%2C%22link%22%3A%22%22%7D%7D%2C%7B%22tracking_type%22%3A%22share%22%2C%22type%22%3A%22share%22%2C%22title%22%3A%22Chia%20s%E1%BA%BBdsd%22%2C%22icon%22%3A%22share_01%22%2C%22icon_url%22%3A%22https%3A%2F%2Fmedia.metu.vn%2Fimages%2Ficon_share_01.svg%22%2C%22highlight%22%3Afalse%2C%22tooltip%22%3A%22dsd%22%2C%22data%22%3A%7B%7D%7D%2C%7B%22tracking_type%22%3A%22zalo%22%2C%22type%22%3A%22link%22%2C%22title%22%3A%22Zalo%20Chat%22%2C%22icon%22%3A%22zalo_01%22%2C%22icon_url%22%3A%22https%3A%2F%2Fmedia.metu.vn%2Fimages%2Ficon_zalo_01.svg%22%2C%22highlight%22%3Afalse%2C%22tooltip%22%3A%22szdfd%22%2C%22data%22%3A%7B%22target%22%3A%22_blank%22%2C%22link%22%3A%22%22%7D%7D%5D%7D%2C%22device%22%3A%22desktop%22%2C%22isPro%22%3Atrue%2C%22config%22%3A%7B%22style%22%3A%22bar_full%22%2C%22width%22%3Anull%2C%22position%22%3A%22bottom%22%2C%22icon_color%22%3A%22%23ffffff%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22background_color%22%3A%22%23363636%22%2C%22background_opacity%22%3A1%7D%7D"
                    class="ng-star-inserted"></iframe> */}
                        {/* <iframe frameborder="0" src="viewmetu/view.html" class="ng-star-inserted"></iframe> */}
                        {/* <iframe frameborder="0" src="viewreactjs/viewreact" class="ng-star-inserted"></iframe> */}
                        {/* <iframe frameborder="0"
                    src="http://localhost:3000/report"
                    class="ng-star-inserted"></iframe> */}
                        {/* {iframe ? <Ifram iframe={demos["soundcloud"]} /> : ''} */}
                        {requesting ? '' : <Iframe frameborder="0" src={`http://localhost:3000/viewupdate/${id}`} />}


                    </div>
                </div>

            </div>
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
                            <img className="h-12 bg-gray-400" src={`../../images/${editButton.icon}`} />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tên hiển thị của nút</Form.Label>
                            <Form.Control value={editButton.name_button} onChange={onHandleChange} name="name_button" type="text" placeholder="Tên hiển thị của nút" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Nhập nội dung chú thích</Form.Label>
                            <Form.Control type="text" placeholder="Hiển thị chú thích khi di chuột vào" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Color Text</Form.Label>
                            <Form.Control value={editButton.color_text} onChange={onHandleChange} name="color_text" type="text" placeholder="Màu" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Color Background</Form.Label>
                            <Form.Control value={editButton.color_background} onChange={onHandleChange} name="color_background" type="text" placeholder="Màu" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Color Icon</Form.Label>
                            <Form.Control value={editButton.color_icon} onChange={onHandleChange} name="color_icon" type="color_icon" placeholder="Màu" />
                        </Form.Group>
                        <Form.Group controlId="formLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control value={editButton.link} onChange={onHandleChange} name="link" type="text" placeholder="Link" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label type="text" label="Check me out" > Cấu hình giá trị thuộc tính nút</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
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

                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onhandleEdit}   >
                        Sửa Menu
                    </Button>

                    <Button variant="primary" onClick={onhandleClose}  >
                        Quay lại
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
