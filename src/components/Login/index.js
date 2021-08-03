import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { ButtonContext } from '../../service/ButtonContext';
import UserService from '../../service/UserService';
import Register from '../Resgiter/index'
export default function Login() {

    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    let history = useHistory();


    const onhandleChange = (e) => {
        const { name } = e.target;
        setUser({
            ...user,
            [name]: e.target.value

        })
    }

    useEffect(() => {
        UserService.loginUser(user.email).then(res => {
            setUsers(res.data)
        })
    }, [user])
    const onchangeLogin = () => {
        UserService.loginUser(user.email).then((res) => {
            setUsers(res.data)
        })

        if (users === null) {
            alert('email khong ton tai')
        } else {
            if (users.password === user.password) {
                if (users.role == 0) {
                    history.push('/admin')
                    localStorage.setItem('email', users.email)
                } else {
                    alert('ban da vao trang admin')
                }
            } else {
                console.log(users)
                alert('password khong chinh xac')
            }
        }
    }

    return (
        <>

            <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    {/* <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1> */}

                    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                        <div className="px-5 py-7">
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input onChange={onhandleChange} name="email" id="email" type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input onChange={onhandleChange} name="password" id="password" type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <button id="btn_login" onClick={onchangeLogin} className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span className="inline-block mr-2">Login</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="py-5">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="text-center sm:text-left whitespace-nowrap">
                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                        <span className="inline-block ml-1">Forgot Password</span>
                                    </button>
                                </div>
                                <div className="text-center sm:text-right  whitespace-nowrap">
                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span className="inline-block ml-1">Help</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    <span className="inline-block ml-1">Back to your-app.com</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
