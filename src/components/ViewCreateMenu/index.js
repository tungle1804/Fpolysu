import React, { useContext, useState } from 'react'
import ModalComponent from '../ModalComponent';
import { Modal, Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import MenuService from '../../service/Menu/MenuService';
import ButtonService from '../../service/Button/ButtonService';
import { ButtonContext } from '../../service/ButtonContext';
import CreateDetailsMenu from '../CreateDetailsMenu';
import WelcomeBack from '../viewtest/WelcomeBack'
import ButtonFake from '../../service/ButtonFake';
import { useDispatch, useSelector } from 'react-redux';
import { createButton } from '../../redux/actions/createbuttonAction';
export default function ViewCreateMenu() {
    const data = useSelector(state => state.createbuttons.data)

    const requesting = useSelector(state => state.createbuttons.requesting)

    const dispatch = useDispatch();
    let history = useHistory();
    const [nameMN, setNameMN] = useState('')
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [test, setTest] = useState()
    const [test1, setTest1] = useContext(ButtonContext)
    const [images, setImages] = useState()
    const [colormenu, setColorMenu] = useState()


    const onHandleChange = (e) => {
        const { name } = e.target;
        setTest({
            ...test,
            [name]: e.target.value

        })


    }

    const handleShow = (images) => {
        setImages(images)

        setShow(true);
    }

    const handleShow1 = () => {

        setShow1(true);
    }
    const handleClose1 = () => {


        let data = {
            menu: [{ users: { email: localStorage.getItem('email') }, name_menu: nameMN, status: 'false', color_menu: colormenu }]
            , button: []
        }
        for (let i = 0; i < test1.length; i++) {

            const button = {
                name_button: test1[i].name_button, color_text: test1[i].color_text, color_background: test1[i].color_background, color_icon: test1[i].color_icon, link: test1[i].link, icon: test1[i].icon
            };

            data.button.push(button)
        }
        console.log(data)
        ButtonService.createButton(data)

        setShow1(false)
        history.push('/admin/list-metu');

    }
    const handleClose2 = () => {
        // MenuService.deleteMenu(idmenu)
        setShow1(false)
    }
    const getRandomInt = (min, max) => {
        return (Number(Math.floor(Math.random() * (max - min)) + min));

    };
    const onhandleCloses = () => {

        // let tshirt = { tenBT: test.tenBT, color: test.color, link: test.link }
        // setTest1(currentState => [...currentState, tshirt]);
        // localStorage.setItem('test', JSON.stringify(test1))

        let tshirt = { id_button: getRandomInt(4, 10000), name_button: test.name_button, color_text: test.color_text, color_background: test.color_background, color_icon: test.color_icon, link: test.link, icon: images }
        dispatch(createButton(tshirt))
        setTest1(currentState => [...currentState, tshirt]);

        // let tshirt_fake = { id_button: number, name_button: test.name_button, color_text: test.color_text, color_background: test.color_background, color_icon: test.color_icon, link: test.link, icon: images }
        ButtonFake.createButtonFake(tshirt)
        setShow(false)

    }
    const onhandleCloses2 = () => {
        setShow(false)
    }


    const changemenuname = (e) => {
        setNameMN(e.target.value)


    }

    const onhandleColor = (color) => {
        setColorMenu(color)
    }
    return (
        <>
            <div className=" ml-10 h-full" style={{ width: '405px' }}>
                <div className="text-sm text-gray-600 font-normal antialiased tracking-normal">
                    Projects &nbsp; / &nbsp; Biltrax IT Project
        </div>
                <div className="text-2xl mt-3 text-black font-semibold antialiased tracking-normal">
                    <button >Tạo Menu</button>
                </div>


                <Link to='/admin/list-menu' className=" px-3 py-1 self-center ml-2 text-sm font-medium antialiased rounded bg-blue-800 text-white">Quay lại</Link>
                <button onClick={handleShow1} to="create-menu" className=" px-3 py-1 self-center ml-2 text-sm font-medium antialiased rounded bg-blue-800 text-white">Lưu Menu</button>
                <div className="mx-2 bg-white rounded">
                    <div className="overflow-auto flex-col " style={{ height: '418px' }} >

                        <div className="bg-gray-100 mt-4 rounded">

                            <div className="mb-6">
                                <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Tên Menu</label>
                                <input onChange={changemenuname} type="text" name="name" id="name" placeholder="Nhập tên Menu" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <label>Danh sách các nút để chọn:</label>
                            <section className="container mx-auto px-6 my-1 flex flex-wrap -m-4">
                                <div className="p-2 md:w-40 ">

                                    <div onClick={() => handleShow('zalo.png')} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
                                        {/* <ModalComponent onhandleClose={onhandleCloses} shows={show} /> */}
                                        <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                                            <img className="h-12" src="../images/zalo.png" />

                                            <div >
                                                <p className=" text-xs font-medium ml-2 ">
                                                    Zalo
              </p>

                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-2 md:w-40 ">
                                    <div onClick={() => handleShow('message.png')} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
                                        <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                                            <img className="h-12" src="../images/message.png" />
                                            <div>
                                                <p className="text-xs font-medium ml-2 ">
                                                    Messager
              </p>

                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-2 md:w-40 ">
                                    <div onClick={() => handleShow('call.png')} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
                                        <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                                            <img className="h-12" src="../images/call.png" />
                                            <div>
                                                <p className=" text-xs font-medium ml-2 ">
                                                    Gọi ngay
              </p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-2 md:w-40 ">
                                    <div onClick={() => handleShow('seemore.png')} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
                                        <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                                            <img className="h-12" src="../images/seemore.png" />
                                            <div>
                                                <p className=" text-xs font-medium ml-2 ">
                                                    Xem Thêm
              </p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-2 md:w-40 ">
                                    <div onClick={() => handleShow('email.png')} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
                                        <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                                            <img className="h-12" src="../images/email.png" />
                                            <div>
                                                <p className=" text-xs font-medium ml-2 ">
                                                    Nhận Email
              </p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-2 md:w-40 ">
                                    <div onClick={() => handleShow('share.png')} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
                                        <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                                            <img className="h-12" src="../images/share.png" />
                                            <div>
                                                <p className=" text-xs font-medium ml-2 ">
                                                    Chia sẻ
              </p>

                                            </div>
                                        </a>
                                    </div>
                                </div>



                            </section>
                            <label>Màu sắc:</label>
                            <div className="container mx-auto px-6 my-1 flex flex-wrap -m-4 mt-5 mb-5">
                                <button onClick={() => onhandleColor('black')} className="h-12 w-12 mx-auto rounded-md bg-gray-900"></button>
                                <button onClick={() => onhandleColor('#EE0000')} className="h-12 w-12 mx-auto rounded-md bg-red-600"></button>
                                <button onClick={() => onhandleColor('fuchsia')} className="h-12 w-12 mx-auto rounded-md bg-pink-700"></button>
                                <button onClick={() => onhandleColor('gray')} className="h-12 w-12 mx-auto rounded-md bg-gray-500"></button>
                                <button onClick={() => onhandleColor('aqua')} className="h-12 w-12 mx-auto rounded-md bg-teal-400"></button>
                            </div>

                            <label>Chọn thiết bị bạn muốn hiển thị:</label> <br /><br />
                            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Mọi thiết bị
          </button>
                            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
                                Điện thoại
          </button>
                            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect">
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
                        </div>
                    </div>
                </div>
                <div className="flex  justify-between px-1 text-center items-center">
                    <div className="p-2">
                        <button className="flex rounded px-4 py-2 focus:outline-none text-gray-500 hover:bg-blue-100 justify-around">

                            <svg className="h-4 w-4 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 013.414-1.736L8.989 1.8a8.112 8.112 0 00-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 01-3.414 1.736l.069 2.076a8.122 8.122 0 004.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex px-3 py-1 self-center text-sm antialiased rounded-md text-gray-600 ">
                        issue 48 of 88
            </div>

                </div>

            </div>
            <Modal show={show} onHide={onhandleCloses2} >
                <Modal.Header closeButton>
                    <Modal.Title>Cấu hình nút : Gọi ngay</Modal.Title>
                </Modal.Header>
                <Modal.Body >Mô tả : Khách hàng sẽ gọi trực tiếp thông qua tính năng này
                 <Modal.Title>  Cấu hình hiển thị nút</Modal.Title>
                    {/* <Modal.Text>Biểu tượng nút</Modal.Text> */}

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Biểu tượng nút</Form.Label>
                            <img className="h-12 bg-gray-400" src={`../images/${images}`} />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tên hiển thị của nút</Form.Label>
                            <Form.Control name="name_button" onChange={onHandleChange} type="text" placeholder="Tên hiển thị của nút" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Nhập nội dung chú thích</Form.Label>
                            <Form.Control type="text" placeholder="Hiển thị chú thích khi di chuột vào" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Color Text</Form.Label>
                            <Form.Control name="color_text" onChange={onHandleChange} type="text" placeholder="Màu Chữ" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Color Background</Form.Label>
                            <Form.Control name="color_background" onChange={onHandleChange} type="text" placeholder="Màu Nền" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Color Icon</Form.Label>
                            <Form.Control name="color_icon" onChange={onHandleChange} type="text" placeholder="Màu Icon" />
                        </Form.Group>

                        <Form.Group controlId="formLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control name="link" onChange={onHandleChange} type="text" placeholder="Link" />
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
                    <Button variant="secondary" onClick={onhandleCloses} >
                        Thêm vào Menu
          </Button>

                    <Button variant="primary" onClick={onhandleCloses2} >
                        Quay lại
          </Button>
                </Modal.Footer>
            </Modal>






            <Modal show={show1} >
                <Modal.Header >
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
    )
}
