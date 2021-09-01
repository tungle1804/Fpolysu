import React, { useState, useEffect } from 'react'
import { callApi } from '../../service/Apis'

function PaymentHistory() {
    const [history, setHistory] = useState([]);
    const [email, setEmail] = useState(localStorage.getItem('email'));
    console.log(email)
    useEffect(() => {
        callApi('get', `paypal/payment-history/${email}`)
            .then(function (response) {
                setHistory(...history, response.data)
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="text-gray-600 body-font w-5/6 mx-auto ">
                <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                    <div className="text-center lg:w-1/6 md:w-1/2 w-full px-4 mt-0 ">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-b-2 pb-3">Gói</h2>
                        <nav className="list-none mb-10 ">
                            {history.map(h =>
                                <li>
                                    <p>PRO {h.serviceFee.nameService} </p>
                                </li>
                            )}


                        </nav>
                    </div>
                    <div className="text-center lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-b-2 pb-3">Số lượng</h2>
                        <nav className="list-none mb-10">
                            {history.map(h =>
                                <li>
                                    <p>1</p>
                                </li>
                            )}

                        </nav>
                    </div>
                    <div className="text-center lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-b-2 pb-3">Số tiền</h2>
                        <nav className="list-none mb-10">
                            {history.map(h =>
                                <li>
                                    <p>{h.totalPrice} USD</p>
                                </li>
                            )}

                        </nav>
                    </div>
                    <div className="text-center lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-b-2 pb-3">Ngày bắt đầu</h2>
                        <nav className="list-none mb-10">
                            {history.map(h =>
                                <li>
                                    <p>{h.dateStart} </p>
                                </li>
                            )}

                        </nav>
                    </div>
                    <div className="text-center lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-b-2 pb-3">Ngày kết thúc</h2>
                        <nav className="list-none mb-10">
                            {history.map(h =>
                                <li>
                                    <p> {h.dateEnd} </p>
                                </li>
                            )}
                        </nav>
                    </div>
                    <div className="text-center lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-b-2 pb-3">Trạng thái</h2>
                        <nav className="list-none mb-10">
                            {history.map(h =>
                                <li>
                                    {h.status ? <p className="text-green-700">đang kích hoạt</p> : <p className="text-red-700">hết hạn</p>}
                                </li>
                            )}

                        </nav>
                    </div>
                </div>

            </div>


        </>
    )
}

export default PaymentHistory
