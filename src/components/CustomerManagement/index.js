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

  // function CustomerManagement({
  //   data,
  //   requesting,
  //   dispatch,
  //   dataButton,
  //   requestingButton,
  // }) {
  //   return (
  //     <>
  //       <main className="flex w-full h-full shadow-lg rounded-3xl">
  //         <section className="flex flex-col w-2/12 bg-white rounded-l-3xl">
  //           <div className="w-16 mx-auto mt-12 mb-20 p-4 bg-indigo-600 rounded-2xl text-white">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={1}
  //                 d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
  //               />
  //             </svg>
  //           </div>
  //           <nav className="relative flex flex-col py-4 items-center">
  //             <a
  //               href="xxx"
  //               className="relative w-16 p-4 bg-purple-100 text-purple-900 rounded-2xl mb-4"
  //             >
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
  //                 />
  //               </svg>
  //               <span className="absolute -top-2 -right-2 bg-red-600 h-6 w-6 p-2 flex justify-center items-center text-white rounded-full">
  //                 3
  //               </span>
  //             </a>
  //             <a
  //               href="xxx"
  //               className="w-16 p-4 border text-gray-700 rounded-2xl mb-4"
  //             >
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
  //                 />
  //               </svg>
  //             </a>
  //             <a
  //               href="xxx"
  //               className="w-16 p-4 border text-gray-700 rounded-2xl mb-4"
  //             >
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  //                 />
  //               </svg>
  //             </a>
  //             <a
  //               href="xxx"
  //               className="w-16 p-4 border text-gray-700 rounded-2xl mb-4"
  //             >
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  //                 />
  //               </svg>
  //             </a>
  //             <a
  //               href="xxx"
  //               className="w-16 p-4 border text-gray-700 rounded-2xl mb-24"
  //             >
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  //                 />
  //               </svg>
  //             </a>
  //             <a href="xxx" className="w-16 p-4 border text-gray-700 rounded-2xl">
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  //                 />
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  //                 />
  //               </svg>
  //             </a>
  //           </nav>
  //         </section>
  //         <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
  //           <label className="px-3">
  //             <input
  //               className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
  //               placeholder="Search..."
  //             />
  //           </label>
  //           <ul className="mt-6">
  //             <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md text-gray-400">23m ago</p>
  //               </a>
  //               <div className="text-md italic text-gray-400">
  //                 You have been invited!
  //               </div>
  //             </li>
  //             <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md text-gray-400">23m ago</p>
  //               </a>
  //               <div className="text-md italic text-gray-400">
  //                 You have been invited!
  //               </div>
  //             </li>
  //             <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md text-gray-400">23m ago</p>
  //               </a>
  //               <div className="text-md italic text-gray-400">
  //                 You have been invited!
  //               </div>
  //             </li>
  //             <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md text-gray-400">23m ago</p>
  //               </a>
  //               <div className="text-md italic text-gray-400">
  //                 You have been invited!
  //               </div>
  //             </li>
  //             <li className="py-5 border-b px-3 bg-indigo-600 text-white">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md">23m ago</p>
  //               </a>
  //               <div className="text-md">You have been invited!</div>
  //             </li>
  //             <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md text-gray-400">23m ago</p>
  //               </a>
  //               <div className="text-md italic text-gray-400">
  //                 You have been invited!
  //               </div>
  //             </li>
  //             <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
  //               <a href="xxx" className="flex justify-between items-center">
  //                 <h3 className="text-lg font-semibold">Akhil Gautam</h3>
  //                 <p className="text-md text-gray-400">23m ago</p>
  //               </a>
  //               <div className="text-md italic text-gray-400">
  //                 You have been invited!
  //               </div>
  //             </li>
  //           </ul>
  //         </section>
  //         <section className="w-6/12 px-4 flex flex-col bg-white rounded-r-3xl">
  //           <div className="flex justify-between items-center h-48 border-b-2 mb-8">
  //             <div className="flex space-x-4 items-center">
  //               <div className="h-12 w-12 rounded-full overflow-hidden">
  //                 <img
  //                   src="https://bit.ly/2KfKgdy"
  //                   loading="lazy"
  //                   className="h-full w-full object-cover"
  //                   alt="ahihi"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <h3 className="font-semibold text-lg">Akhil Gautam</h3>
  //                 <p className="text-light text-gray-400">
  //                   akhil.gautam123@gmail.com
  //                 </p>
  //               </div>
  //             </div>
  //             <div>
  //               <ul className="flex text-gray-400 space-x-4">
  //                 <li className="w-6 h-6">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth={2}
  //                       d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
  //                     />
  //                   </svg>
  //                 </li>
  //                 <li className="w-6 h-6">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth={2}
  //                       d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
  //                     />
  //                   </svg>
  //                 </li>
  //                 <li className="w-6 h-6">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth={2}
  //                       d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
  //                     />
  //                   </svg>
  //                 </li>
  //                 <li className="w-6 h-6">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth={2}
  //                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  //                     />
  //                   </svg>
  //                 </li>
  //                 <li className="w-6 h-6">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth={2}
  //                       d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
  //                     />
  //                   </svg>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //           <section>
  //             <h1 className="font-bold text-2xl">We need UI/UX designer</h1>
  //             <article className="mt-8 text-gray-500 leading-7 tracking-wider">
  //               <p>Hi Akhil,</p>
  //               <p>
  //                 Design and develop enterprise-facing UI and consumer-facing UI
  //                 as well as REST API backends.Work with Product Managers and User
  //                 Experience designers to create an appealing user experience for
  //                 desktop web and mobile web.
  //               </p>
  //               <footer className="mt-12">
  //                 <p>Thanks &amp; Regards,</p>
  //                 <p>Alexandar</p>
  //               </footer>
  //             </article>
  //             <ul className="flex space-x-4 mt-12">
  //               <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-indigo-600 hover:bg-blue-100">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={1}
  //                     d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  //                   />
  //                 </svg>
  //               </li>
  //               <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-blue-800 hover:bg-blue-100">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={1}
  //                     d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
  //                   />
  //                 </svg>
  //               </li>
  //               <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-pink-400 hover:bg-blue-100">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={1}
  //                     d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
  //                   />
  //                 </svg>
  //               </li>
  //               <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-yellow-500 hover:bg-blue-100">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={1}
  //                     d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
  //                   />
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
  //                   />
  //                 </svg>
  //               </li>
  //             </ul>
  //           </section>
  //           <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
  //             <textarea
  //               className="w-full bg-gray-50 p-2 rounded-xl"
  //               placeholder="Type your reply here..."
  //               rows={3}
  //               defaultValue={""}
  //             />
  //             <div className="flex items-center justify-between p-2">
  //               <button className="h-6 w-6 text-gray-400">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
  //                   />
  //                 </svg>
  //               </button>
  //               <button className="bg-purple-600 text-white px-6 py-2 rounded-xl">
  //                 Reply
  //               </button>
  //             </div>
  //           </section>
  //         </section>
  //       </main>
  //     </>
  //   );
  // }
}

const mapStateToProps = state => {

  return {

    data: state.data.data,
    dataInfo: state.data.dataInfo,

  };

};
const mapDispatchToProps = (dispatch) => {
  return {
    // MenusAction: bindActionCreators(MenusAction, dispatch),
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement);
