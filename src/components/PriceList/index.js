import React from 'react'

const PriceList = () => {
    return (
        <div>
            <div className="bg-indigo-300 w-full">
                <section className="h-screen px-12 sm:px-24 flex items-center">
                    <div className="grid grid-cols-4  ">
                        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xxl:col-span-1 mt-40">
                            <div className="w-full">
                                <h1 className="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8">Bảng<br />
                                    <span className="text-blue-400">Giá</span>
                                </h1>
                                <p className="text-xl text-white font-semibold ">Trở thành Website thu hút nhiều khách hàng nhất của
                                    bạn!<br /> Bắt đầu sử dụng hệ thống của chúng tôi ngay từ hôm nay</p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex space-x-2">
                                <img className="max-w-full" src="/images/business-analysis-1.png" alt />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full mt-10 h-screen px-12 sm:px-24 items-center">
                <div className="grid grid-cols-4 text-center ">
                    <div className="col-span-2 py-10 bg-white-500">
                        <span className="font-bold text-xl text-gray-600">Tính năng</span>
                        <img className="m-auto my-2" src="/images/tinhnang.png" alt />
                    </div>
                    <div className="col-span-1 py-10 bg-gray-300">
                        <span className="font-bold text-xl text-gray-600">Base</span><br />
                        <i className="fas fa-star text-gray-600 my-2" />
                        <i className="fas fa-star text-gray-600" />
                        <i className="fas fa-star text-gray-600" /><br />
                        <span className="font-bold text-xl text-gray-600">Free</span>
                    </div>
                    <div className="col-span-1 py-10 bg-indigo-300">
                        <span className="font-bold text-xl text-indigo-600">PRO</span><br />
                        <i className="fas fa-star text-indigo-600 my-2" />
                        <i className="fas fa-star text-indigo-600" />
                        <i className="fas fa-star text-indigo-600" /><br />
                        <span className="font-bold text-xl text-indigo-600">59.000 VND / Tháng</span>
                    </div>
                </div>
                <div>
                    {/* Item */}
                    <div className="grid grid-cols-4">
                        <div className="col-span-2">
                            <p className="font-bold text-indigo-700 mb-1">GIỚI HẠN TỪ FREE LÊN PRO</p>
                            <p className="bg-gray-100 mb-1">Giới hạn từ Free lên Pro</p>
                            <p className="mb-1">Số lượng menu trên mỗi Website</p>
                            <p className="bg-gray-100 mb-2">Số lượng tài khoản quản lý Admin</p>
                        </div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1">5</p>
                            <p className="mb-1">5
                            </p><p className="bg-gray-100 mb-2">2</p>
                        </div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1">Không giới hạn</p>
                            <p className="mb-1">Không giới hạn</p>
                            <p className="bg-gray-100 mb-2">Không giới hạn</p>
                        </div>
                    </div>
                    {/* End - Item */}
                    {/* Item */}
                    <div className="grid grid-cols-4">
                        <div className="col-span-2">
                            <p className="font-bold text-indigo-700 mb-1">MENU TRÊN WEBSITE KHÁCH HÀNG</p>
                            <p className="bg-gray-100 mb-1">Menu dạng thanh dock ở chân trang</p>
                            <p className="mb-1">Hiệu ứng nút động</p>
                            <p className="bg-gray-100 mb-1">Tùy chỉnh màu sắc, độ trong suốt</p>
                            <p className="mb-2">Tùy chỉnh icon cho nút</p>
                        </div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" />
                            </p><p className="bg-gray-100"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" />
                            </p></div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="bg-gray-100"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" />
                            </p></div>
                    </div>
                    {/* End - Item */}
                    {/* Item */}
                    <div className="grid grid-cols-4">
                        <div className="col-span-2">
                            <p className="font-bold text-indigo-700 mb-1">TRIGGER</p>
                            <p className="bg-gray-100 mb-1">Hiển thị menu khi khách cuộn trang</p>
                            <p className="mb-1">Tự động hiển thị menu sau một khoảng thời gian</p>
                            <p className="bg-gray-100 mb-1">Hiển thị menu trên tất cả các trang hoặc theo đường dẫn chính xác</p>
                            <p className="mb-2">Hiển thị menu trên các trang theo cấu hình đường dẫn có chứa</p>
                        </div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" />
                            </p><p className="bg-gray-100 mb-2"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" /></p>
                        </div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="bg-gray-100 mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" /></p>
                        </div>
                    </div>
                    {/* End - Item */}
                    {/* Item */}
                    <div className="grid grid-cols-4">
                        <div className="col-span-2">
                            <p className="font-bold text-indigo-700 mb-1">BÁO CÁO</p>
                            <p className="bg-gray-100 mb-1">Thống kê tương tác từng nút trên mỗi đường dẫn của trang web</p>
                            <p className="mb-1">Thống kê hiệu quả mỗi nút</p>
                        </div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1"><i className="fas fa-times text-red-500" /></p>
                            <p className="mb-1"><i className="fas fa-times text-red-500" />
                            </p></div>
                        <div className="col-span-1 text-center">
                            <p className="mb-1" /><br />
                            <p className="bg-gray-100 mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <p className="mb-1"><i className="fas fa-check text-indigo-500" /></p>
                            <a className="inline-block bg-indigo-500 px-32 py-3 h-12 font-semibold text-white" href="#">Mua ngay</a>
                        </div>
                    </div>
                    {/* End - Item */}
                </div>
            </div>
        </div>
    )
}

export default PriceList
