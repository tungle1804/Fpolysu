import React, { useEffect, useState } from 'react'
import { callApi } from '../../service/Apis';

function PaymentSuccess() {
    const email = JSON.parse(localStorage.getItem('email'));
    const price = JSON.parse(localStorage.getItem('price'));
    console.log(price)

    const [history, setHistory] = useState({ email, price });
    console.log(history);


    var data = JSON.stringify(history);
    useEffect(() => {
        callApi('post', 'paypal/save-history', data)
            .then(function (response) {
                console.log(response.data)
                localStorage.removeItem('price')
            });

    })

    return (

        <div className="mt-0 bg-gray-100 py-6 flex flex-col justify-center sm:py-12 mx-auto w-full">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto w-4/5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h2 className="text-center font-semibold">Hóa đơn thanh toán</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <label><h5>Tài khoản</h5></label>
                                    <input autoComplete="off" id="email" value={email} disabled name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />


                                </div>
                                <div className="relative">
                                    <label><h5>Gói thanh toán</h5></label>
                                    <input autoComplete="off" id="email" value={"POLYSU PRO - " + price + " USD"} disabled name="price" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />

                                </div>
                                <div className="relative">
                                    <label><h5>Trạng thái</h5></label>

                                    <input autoComplete="off" id="password" value="Thành công" disabled name="password" type="text" className="text-green-700 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default PaymentSuccess
