/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadData, loadDataInfo } from '../../redux/actions/dataAction';
import DataService from '../../service/DataService';

function CustomerManagement({ data, requesting, dispatch, dataButton, requestingButton, dataInfo }) {

    useEffect(() => {

        dispatch(loadData())

    }, [])
    const onchangebyId = (id) => {

        if (id != null) {
            dispatch(loadDataInfo({ id }))
        }
    }
    const onSave = () => {
        let data = {
            fullName: "Le duc beoooo", phone: "044445532", emailCustomer: "leducbinh@gmail.com",
            address: "TP Vinh Nghe an", conTent: "toi duoc vao cong ty", notes: "abxxc", users: { email: "leducbinh@gmail.com" }

        }
        DataService.createData(data)


    }
    return (
        <>


            <main className="flex w-full h-full shadow-lg rounded-3xl">

                <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
                    <h1 class="font-bold text-2xl ml-3">Danh sách liên hệ</h1>
                    <label className="px-3">
                        <input className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full" placeholder="Search..." />
                    </label>
                    <ul className="mt-6">
                        {data && data.length > 0 ?
                            data.map((item) => {
                                return (<>
                                    <div onClick={() => onchangebyId(item.id)}>
                                        <li className="py-3 border-b px-3 transition hover:bg-indigo-100">
                                            <div className="flex justify-center items-center content-center bg-gradient-to-br from-pink-300 to-pink-600 shadow-md hover:shadow-lg h-10 w-10 rounded-full fill-current text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-lg font-semibold">{item.phone}</h3>
                                                <p className="text-md text-gray-400">23m ago</p>
                                            </div>

                                        </li>
                                    </div>
                                </>)

                            })

                            : ""}


                    </ul>
                </section>
                <section className="w-6/12 px-4 flex flex-col bg-indigo-200 rounded-r-3xl">

                    <div className="flex justify-between items-center h-48 border-b-2 mb-8">
                        <div className="flex space-x-4 items-center">
                            <div className="h-12 w-12 rounded-full overflow-hidden">
                                <img src="https://bit.ly/2KfKgdy" loading="lazy" className="h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-lg">Akhil Gautam</h3>
                                <p className="text-light text-gray-400">akhil.gautam123@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <ul className="flex text-gray-400 space-x-4">
                                <li className="w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                    </svg>
                                </li>
                                <li className="w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </li>
                                <li className="w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                </li>
                                <li className="w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </li>
                                <li className="w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <section >
                        <label>Thời gian hẹn </label>

                        <input disabled className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                        <label>Họ và tên</label>
                        <input disabled value={dataInfo ? dataInfo.fullName : ""} className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                        <label>Email</label>
                        <input disabled value={dataInfo ? dataInfo.emailCustomer : ""} className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                        <label>Địa chỉ</label>
                        <input disabled value={dataInfo ? dataInfo.address : ""} className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                        <label>Số điện thoại </label>
                        <input disabled value={dataInfo ? dataInfo.phone : ""} className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                        <label>Để lại lời nhắn </label>
                        <input disabled value={dataInfo ? dataInfo.conTent : ""} className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                        <label>Note </label>
                        <input disabled value={dataInfo ? dataInfo.notes : ""} className="w-full bg-purple-100 p-2 rounded-xl" rows={3} defaultValue={""} />
                    </section>
                    <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
                        <textarea className="w-full bg-gray-50 p-2 rounded-xl" placeholder="Type your reply here..." rows={3} defaultValue={""} />
                        <div className="flex items-center justify-between p-2">
                            <button className="h-6 w-6 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-xl">Reply</button>
                        </div>
                    </section>
                </section>
                <div>
                    <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                        <div className="h-2 w-full bg-gray-800" />
                        <div className="px-2 py-3">
                            <div className="w-full text-center border-t mb-1 pb-3">
                                <h1 className="mt-2 text-xl font-bold">Thông tin khách hàng</h1>

                            </div>
                            <table className="w-full border">
                                <thead>

                                </thead>
                                <tbody>
                                    <tr className="border-t text-sm">
                                        <td className="p-1 pl-2 border-r ">Tên: </td>
                                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                                    </tr>
                                    <tr className="border-t text-sm">
                                        <td className="p-1 pl-2 border-r ">SĐT</td>
                                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                                    </tr>
                                    <tr className="border-t text-sm">
                                        <td className="p-1 pl-2 border-r ">Email</td>
                                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                                    </tr>
                                    <tr className="border-t text-sm">
                                        <td className="p-1 pl-2 border-r ">Địa chỉ</td>
                                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                                    </tr>
                                </tbody>
                                <thead>
                                    <button onClick={onSave} type="button" className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                                        cập nhập
                                    </button>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>

            </main>

        </>

    )

}
const mapStateToProps = state => {

    return {

        data: state.data.data,
        dataInfo: state.data.dataInfo,

    };
};
const mapDispatchToProps = dispatch => {
    return {
        // MenusAction: bindActionCreators(MenusAction, dispatch),
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement)