import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonService from '../../service/Button/ButtonService';
import MenuService from '../../service/Menu/MenuService';
import { MenuContext } from '../../service/MenuContext';
import { useDispatch, useSelector } from 'react-redux'
import { loadPosts, viewPost } from '../../redux/actions/menuAction'
import ReactLoading from 'react-loading';
export default function View({ posts, onlistbutton, requesting }) {
    const [radio, setRadio] = useState('false')
    const [listmenu, setListMenu] = useState({});
    // const [listbutton, setListButton] = useContext(MenuContext)

    // useEffect(() => {
    //     dispatch(loadPosts())
    // }, [])
    // useEffect(() => {
    //     let email = localStorage.getItem('email')
    //     MenuService.getMenuByEmail(email).then((res) => {
    //         setListMenu(res.data)
    //     })
    // }, [])

    // const onCheckChange = (e) => {

    //     console.log(e.target.value)


    //     setRadio(e.target.value)
    //     console.log(radio)
    // }
    return (
        <>
            {requesting ? <ReactLoading type="balls" color="#f32" height={467} width={275} /> : <div className=" ml-10 h-full" style={{ width: '400px' }}>
                <div className="text-sm text-gray-600 font-normal antialiased tracking-normal">
                    Projects &nbsp; / &nbsp; Biltrax IT Project
        </div>
                <div className="text-2xl mt-3 text-black font-semibold antialiased tracking-normal">
                    Danh Sách Menu
        </div>
                <Link to="create-menu" class=" px-3 py-1 self-center ml-2 text-sm font-medium antialiased rounded bg-blue-800 text-white">Tạo Menu</Link>
                <div className="flex mt-5 w-full">
                    <input type="text" className="w-1/2 h-7 px-2 text-gray-500 border rounded text-xs" placeholder="Tìm Kiếm Menu ..." />
                    <div className="items-center cursor-pointer px-2  mb-1 text-sm text-blue-500 hover:underline">Tìm Kiếm</div>
                </div>
                <div className="bg-gray-100 mt-4 rounded">

                    <div className="mx-2 bg-white rounded">
                        <div className="overflow-auto flex-col" style={{ height: '308px' }}>
                            {
                                posts.map((res) => {
                                    return (
                                        <div onClick={() => onlistbutton(res.id_menu)} className="flex-col cursor-pointer rounded hover:bg-blue-100">
                                            <div className="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                                                {res.name_menu}
                                            </div>
                                            <div className="flex px-3 justify-between">
                                                <div className="flex">
                                                    <div className="bg-red-500 rounded h-4 w-4 p-1">
                                                        <svg className="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z" /></svg>
                                                    </div>
                                                    <div className="font-bold text-gray-500 ml-1 text-xs">
                                                        NITSWEBAPP-01
                    </div>
                                                </div>

                                                <Link to={`/admin/update-menu/${res.id_menu}`} class=" inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-600 border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay -mx-2 leading-5">
                                                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                                    </svg>
                                                </Link>
                                                <button class=" inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-green-600 border-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500 hover:text-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive -mx-2 leading-5">
                                                        <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                                        <rect x="1" y="3" width="22" height="5"></rect>
                                                        <line x1="10" y1="12" x2="14" y2="12"></line>
                                                    </svg>
                                                </button>
                                                {/* <div className="w-5 py-1 relative my-1 cursor-pointer">
                                                    <div className="h-3 bg-teal-600 rounded-full">
                                                        <div className="-ml-2 mt-p w-4 h-4 absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white shadow-toggle border-gray-300 top-0 left-96"></div>
                                                    </div>
                                                </div> */}
                                                <div className="flex  justify-center  ">

                                                    <label className="flex items-center cursor-pointer">

                                                        <div className="relative">

                                                            <input id="toogleA" className="hidden" type="checkbox" onChange={event => {
                                                                let checked = event.target.checked;
                                                                setRadio(posts.map(data => {
                                                                    if (data.id_menu === res.id_menu) {
                                                                        data.status = checked;
                                                                    }
                                                                    MenuService.updateMenu(data, data.id_menu)
                                                                    console.log(data)

                                                                    return data;

                                                                }))
                                                            }} checked={res.status} ></input>

                                                            <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />

                                                            <div className="toggle__dot absolute w-6 h-6  rounded-full border-4  shadow inset-y-0 left-0" />
                                                        </div>

                                                    </label>
                                                </div>



                                            </div>
                                            <div className="border mt-3" />
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="flex  justify-between px-1 text-center items-center">
                        <div className="p-2">
                            <button className="flex rounded px-4 py-2 focus:outline-none text-gray-500 hover:bg-blue-100 justify-around">
                                {/*                                    <svg class="h-3 w-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M441.156 322.876L392.49 275.49a8.523 8.523 0 00-11.93.017l-81.894 80.299V8.533A8.536 8.536 0 00290.133 0h-68.267a8.536 8.536 0 00-8.533 8.533v347.273l-81.894-80.299a8.528 8.528 0 00-11.921-.017l-48.666 47.386a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l179.2 174.481A8.508 8.508 0 00256 512c2.15 0 4.292-.811 5.956-2.423l179.2-174.481a8.526 8.526 0 002.577-6.11c0-2.304-.93-4.506-2.577-6.11z"/></svg>*/}
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
            </div>}

        </>
    )
}
