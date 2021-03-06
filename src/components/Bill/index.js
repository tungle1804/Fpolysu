import React, { useContext, useEffect, useState } from "react";
import { callApi } from "../../service/Apis";
import { useHistory } from "react-router";
import * as moment from "moment";
import Swal from 'sweetalert2'
import AdminHeader from "./../admin/components/AdminHeader/index";

function Bill() {
    const [services, setServices] = useState([]);
    const name = localStorage.getItem("fullName");
    const email = localStorage.getItem("email");

    useEffect(() => {
        callApi("get", "paypal/service-fee")
            .then(function (response) {
                setServices(response.data);
                console.log(services);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    const date = moment(new Date()).format("DD/MM/YYYY");
    let dateEnd = moment(new Date()).format("DD/MM/YYYY");
    let price = "";
    let paypal = "";
    const onHandleChange = (e) => {
        price = e.target.value;
        console.log(price);
        if (price == 2.99) {
            dateEnd = moment(new Date()).add(1, "months").format("DD/MM/YYYY");
            console.log(dateEnd);
            document.getElementById('dateEnd').value = dateEnd;
        } else if (price == 4.99) {
            dateEnd = moment(new Date()).add(3, "months").format("DD/MM/YYYY");
            console.log(dateEnd);
            document.getElementById('dateEnd').value = dateEnd;
        } else if (price == 6.99) {
            dateEnd = moment(new Date()).add(6, "months").format("DD/MM/YYYY");
            console.log(dateEnd);
            document.getElementById('dateEnd').value = dateEnd;
        } else if (price == 11.99) {
            dateEnd = moment(new Date()).add(12, "months").format("DD/MM/YYYY");
            console.log(dateEnd);
            document.getElementById('dateEnd').value = dateEnd;
        }
    };

    const onHandleSubmit = (e) => {
        if (price === "") {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi....',
                text: 'Vui lòng chọn gói dịch vụ!',
            })
        }
        e.preventDefault();
        callApi("post", "paypal/pay", price)
            .then(function (response) {
                console.log(response.data);
                paypal = response.data;
                window.location.replace(paypal);
            })
            .then(function (response) {
                console.log("AAAAAAAAAAAAAA" + response);
                localStorage.setItem("price", price);
            })
            .catch(function (error) {
                console.log(error);
                console.log("AAAAAAA" + error);
            });
    };

    return (
        <>
            <form onSubmit={onHandleSubmit} className="mx-auto">
                <div className="mx-auto">
                    <div className="mx-auto min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                            <div className="w-full pt-1 pb-5">
                                <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                    <i className="mdi mdi-credit-card-outline text-3xl" />
                                </div>
                            </div>
                            <div className="mb-10">
                                <h1 className="text-center font-bold text-xl uppercase">Polysu Pro</h1>
                            </div>
                            <div className="mb-3 flex -mx-2">
                                <div className="px-2">
                                    <label htmlFor="type1" className="flex items-center cursor-pointer">
                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked />
                                        <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />{" "}
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="font-bold text-sm mb-2 ml-1">Giá trị đơn hàng:</label>
                                <div>
                                    <select
                                        name="price"
                                        selected={services[0]}
                                        className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                        onChange={onHandleChange}
                                    >
                                        <option> -- Vui lòng chọn gói dịch vụ --</option>
                                        {services.map((option) => (
                                            <option name={option.name} value={option.price}>
                                                POLYSU PRO - {option.nameService} - {option.price} USD
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="font-bold text-sm mb-2 ml-1">Chủ tài khoản:</label>
                                <div>
                                    <input
                                        className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                        type="text"
                                        value={name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="font-bold text-sm mb-2 ml-1">Email:</label>
                                <div>
                                    <input
                                        className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                        type="text"
                                        value={email}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="mb-16 -mx-2 flex items-end">
                                <div className="px-2 w-1/2">
                                    <label className="font-bold text-sm mb-2 ml-1">Ngày bắt đầu</label>
                                    <div>
                                        <input
                                            value={date}
                                            disabled
                                            className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                            type="text"
                                        ></input>
                                    </div>
                                </div>
                                <div className="px-2 w-1/2">
                                    <label className="font-bold text-sm mb-2 ml-1">Ngày kết thúc</label>
                                    <input
                                        id="dateEnd"
                                        value={dateEnd}
                                        disabled
                                        className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                        type="text"
                                        onChange={onHandleChange}
                                    ></input>
                                </div>
                            </div>

                            <div>
                                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                    <i className="mdi mdi-lock-outline mr-1" /> PAY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
                </div>
            </form>
        </>
    );
}

export default Bill;
