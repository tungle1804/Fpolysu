import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { ButtonContext } from '../../service/ButtonContext'
import * as ReactBootStrap from 'react-bootstrap';
import './style.css'
import ButtonFake from '../../service/ButtonFake';
import Ifram from './iframe'
import DisplayCreateDetails from '../Display/displaycreatedetails'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { createButton, deleteButton, updateButton, viewButton } from '../../redux/actions/createbuttonAction';
import Display from '../Display/displaycreatedetails';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { SketchPicker } from 'react-color'
// import styles from 'public/styleMetu/style.css';
export default function CreateDetailsMenu({ data, color }) {

    const initialContent = () => {
        return (
            `<!DOCTYPE html>
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
          </html>`
        )
    }

    const initstateText = {
        displayColorText: false,
        color: {
            r: '241',
            g: '112',
            b: '19',

        }
    }
    const initstateBackground = {
        displayColorBackground: false,
        color: {
            r: '241',
            g: '112',
            b: '19',

        }
    }
    const initstateValueButton = {
        name_button: null,
        color_text: null,
        color_background: null,
        color_icon: null,
        link: null
    }
    const data1 = useSelector(state => state.createbuttons.data)
    const [colorText, setColorText] = useState(initstateText);
    const [valueButton, setValueButton] = useState(initstateValueButton);
    const [colorBackground, setColorBackground] = useState(initstateBackground);
    const [editButton, setEditButton] = useState({})
    const [show, setShow] = useState(false);


    const stylesText = {
        color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${colorText.color && colorText.color.r}, ${colorText.color && colorText.color.g}, ${colorText.color && colorText.color.b})`,
            // backgroundColor: colorText.color_text ? colorText.color_text : "",
        },
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '1',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },

    };
    const stylesBackground = {
        color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${colorBackground.color && colorBackground.color.r}, ${colorBackground.color && colorBackground.color.g}, ${colorBackground.color && colorBackground.color.b})`,
        },
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '1',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },

    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(viewButton())
    }, [data])



    const demos = {
        soundcloud:
            // '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="/viewreactjs/viewreact.js"></iframe>'
            '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="http://127.0.0.1:5500/metu/src/components/viewtest/view.html"></iframe>'
    };
    const onHandleChange = (e) => {
        const { name } = e.target;
        setEditButton({
            ...editButton,
            [name]: e.target.value

        })
    }
    const ondelete = (id) => {
        dispatch(deleteButton(id))
        // button.forEach((item, index) => {
        //     if (item.id_button === id) {
        //         button.splice(index, 1)
        //     }
        // })
        // setButton([...button])
        ButtonFake.deleteButtonFake(id)
    }
    const onedit = (id) => {
        data1.forEach((items, index) => {
            if (items.id_button === id) {
                setEditButton(data1[index])
                setColorText({
                    ...colorText,
                    color: {
                        r: hexToR(data1[index].color_text),
                        g: hexToG(data1[index].color_text),
                        b: hexToB(data1[index].color_text),

                    }
                })
                setColorBackground({
                    ...colorBackground,
                    color: {
                        r: hexToR(data1[index].color_background),
                        g: hexToG(data1[index].color_background),
                        b: hexToB(data1[index].color_background),

                    }
                })
            }
        })
        setShow(true);

    }
    function hexToR(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            parseInt(result[1], 16)
            : null;
    }
    function hexToG(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            parseInt(result[2], 16)
            : null;
    }
    function hexToB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            parseInt(result[3], 16)
            : null;
    }
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleEditMenu = () => {

        const editButtons = { id_button: editButton.id_button, name_button: editButton.name_button, color_text: editButton.color_text, color_background: editButton.color_background, color_icon: editButton.color_icon, link: editButton.link, icon: editButton.icon }

        dispatch(updateButton(editButtons))
        ButtonFake.updateButtonFake(editButtons, editButton.id_button)
        setShow(false)
    }
    const handleClickText = () => {
        setColorText({ ...colorText, displayColorText: true })
    }
    const handleCloseText = () => {
        setColorText({ ...colorText.color, displayColorText: false })
    }
    const handleChangeText = (color) => {
        setColorText({ ...colorText, color: color.rgb })
        setValueButton({ ...valueButton, color_text: color.rgb })
    }
    const handleClickBackground = () => {
        setColorBackground({ ...colorBackground, displayColorBackground: true })
    }
    const handleCloseBackground = () => {
        setColorBackground({ ...colorBackground.color, displayColorBackground: false })
    }
    const handleChangeBackground = (color) => {
        setColorBackground({ ...colorBackground, color: color.rgb })
        setValueButton({ ...valueButton, color_background: color.rgb })
    }
    const viewColorTextInput = () => {
        return (<>
            <div style={stylesText.swatch} onClick={handleClickText}>
                <div style={stylesText.color} />
            </div>

            {
                colorText.displayColorText ? <div >
                    <div style={stylesText.cover} onClick={handleCloseText} />
                    <SketchPicker color={colorText.color} onChange={handleChangeText} />
                </div> : ""
            }

        </>)
    }
    const viewColorBackgroundInput = () => {


        return (<>
            <div style={stylesBackground.swatch} onClick={handleClickBackground}>
                <div style={stylesBackground.color} />
            </div>

            {
                colorBackground.displayColorBackground ? <div >
                    <div style={stylesBackground.cover} onClick={handleCloseBackground} />
                    <SketchPicker color={colorBackground.color} onChange={handleChangeBackground} />
                </div> : ""
            }

        </>)
    }
    return (
        <>
            <div className=" relative ml-10  pt-8" style={{ width: '700px' }}>
                <div className="w-full px-2 hover:bg-blue-100 py-2 text-xl font-semibold">Danh sách nút đã tạo</div>



                <div className="flex  flex-wrap mt-1">





                    {data1.map(item => (

                        <div class="p-2 ">

                            <div
                                style={{ backgroundColor: `${item.color_background}` }} className={`flex items-center p-1  rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                <button classname={`flex items-center bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                    <img className="h-12" src={`../images/${item.icon}`} />

                                    <div>

                                        <p className="text-xs font-medium mt-2 ml-2" style={{ color: `${item.color_text}` }}>
                                            {item.name_button}
                                        </p>
                                        <ReactBootStrap.NavDropdown size="sm" id="collasible-nav-dropdown">
                                            <ReactBootStrap.NavDropdown.Item onClick={() => onedit(item.id_button)} >Sửa</ReactBootStrap.NavDropdown.Item>
                                            <ReactBootStrap.NavDropdown.Item onClick={() => ondelete(item.id_button)}  >Xóa</ReactBootStrap.NavDropdown.Item>
                                        </ReactBootStrap.NavDropdown>
                                    </div>
                                </button>

                            </div>
                        </div>
                    )
                    )}

                </div>
                <button style={{ backgroundColor: color }} className={`h-12 w-12 mx-auto rounded-md `}></button>
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
                        <Frame initialContent={initialContent()} ><Display /></Frame>

                        {/* src={`http://localhost:3000/view/${idMenu}`} */}
                        {/* {requesting1 ? <Iframe frameborder="0" src={`http://localhost:3000/viewdetails`} /> : <Iframe frameborder="0" src={`http://localhost:3000/viewdetails`} />} */}


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
                            <div class=" flex  space-x-2">
                                <div class="flex-1 mt-5">   <Form.Label>Biểu tượng nút</Form.Label><img className="h-12 bg-gray-400" src={`../images/${editButton.icon}`} /></div>
                                <div class="flex-1 "><div className="flex  flex-wrap mt-1 ">
                                    <div class="p-2 text-right ml-5 mt-3">
                                        <Form.Label>Hiển thị</Form.Label>
                                        <div style={{
                                            background: `rgba(${colorBackground.color && colorBackground.color.r},
                                                    ${colorBackground.color && colorBackground.color.g}, 
                                                    ${colorBackground.color && colorBackground.color.b})`
                                        }} className={`flex items-center p-1  rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                            <button classname={`flex items-center bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100`}>

                                                <img className="h-12" src={`../images/${editButton.icon}`} />

                                                <div>

                                                    <p className="text-xs font-medium mt-2 ml-2"
                                                        style={{
                                                            color: `rgba(${colorText.color && colorText.color.r},
                                                    ${colorText.color && colorText.color.g}, 
                                                    ${colorText.color && colorText.color.b})`
                                                        }} >

                                                        {editButton && editButton.name_button}
                                                    </p>

                                                </div>
                                            </button>

                                        </div>
                                    </div>

                                </div></div>

                            </div>
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
                            <Form.Label className="mr-5">Màu chữ</Form.Label>
                            {viewColorTextInput()}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="mr-5" >Màu nền</Form.Label>
                            {viewColorBackgroundInput()}
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
                    <Button variant="secondary" onClick={handleEditMenu}    >
                        Sửa Menu
                    </Button>

                    <Button variant="primary" onClick={handleClose}  >
                        Quay lại
                    </Button>
                </Modal.Footer>
            </Modal>






        </>
    )
}
