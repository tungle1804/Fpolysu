import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const index = () => {
    return (
        <>

            <div className="container mx-auto">
                <div className="w-11/12 mx-auto">
                    <div className="w-full xl:flex lg:flex md:flex sm:flex shadow">
                        <div tabIndex={0} className="focus:outline-none bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/2 lg:w-1/2 justify-center items-center border-r border-l border-gray-200">
                            <img tabIndex={0} role="img" className="focus:outline-none" aria-label="calculator" src="https://cdn.tuk.dev/assets/calculator-img.png" alt="" />
                        </div>
                        <div tabIndex={0} className="focus:outline-none bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/2 lg:w-1/2 justify-center items-center border-r border-l border-gray-200">
                            <div className="mb-6">
                                <img tabIndex={0} className="focus:outline-none" role="img" aria-label="message logo" src="https://cdn.tuk.dev/assets/paper-plane.png" alt="message logo" />
                            </div>
                            <p tabIndex={0} className="focus:outline-none text-center text-2xl font-bold text-gray-800 mb-3">BASIC</p>
                            <p tabIndex={0} className="focus:outline-none text-center text-sm text-gray-600 mb-6 font-normal w-full">Miễn phí</p>


                        </div>
                        <div tabIndex={0} className="focus:outline-none bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/2 lg:w-1/2 justify-center items-center border-r border-l border-gray-200">
                            <div className="mb-5">
                                <img tabIndex={0} className="focus:outline-none" role="img" aria-label="airplane logo" src="https://cdn.tuk.dev/assets/plane.png" alt="airplane" />
                            </div>
                            <p tabIndex={0} className="focus:outline-none text-center text-2xl font-bold text-gray-800 mb-3">PRO</p>
                            <p tabIndex={0} className="focus:outline-none text-center text-sm text-gray-600 mb-6 font-normal w-full">39,000 đ/tháng</p>

                        </div>

                    </div>
                    <div className="shadow">
                        <div>
                            <div className="flex items-center w-full">
                                <p tabIndex={0} className="focus:outline-none pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 w-3/12">GIỚI HẠN TỪ FREE LÊN PRO</p>

                            </div>
                            <table className="sm:table-fixed table-auto w-full bg-white">
                                <tbody tabIndex={0} className="focus:outline-none" role="presentation">
                                    <tr tabIndex={0} className="focus:outline-none" role="row" aria-label="first row">
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Số lượng Website cài POLYSU</td>
                                        <td tabIndex={0} role="cell" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">5</td>
                                        <td tabIndex={0} role="cell" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">Không giới hạn</td>
                                    </tr>
                                    <tr tabIndex={0} className="focus:outline-none" role="row" aria-label="second row">
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Số lượng menu trên mỗi Website</td>
                                        <td tabIndex={0} role="cell" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">5</td>
                                        <td tabIndex={0} role="cell" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">Không giới hạn</td>
                                    </tr>
                                    <tr tabIndex={0} className="focus:outline-none" role="row" aria-label="third row">
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 pt-3 pb-4 break-words">Số lượng tài khoản quản lý admin</td>
                                        <td tabIndex={0} role="cell" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">2</td>
                                        <td tabIndex={0} role="cell" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">Không giới hạn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p tabIndex={0} className="focus:outline-none pl-4 pt-3 pb-3 font-bold text-sm text-gray-600">MENU TRÊN WEBSITE KHÁCH HÀNG</p>
                            <table className="sm:table-fixed table-auto w-full bg-white">
                                <tbody tabIndex={0} className="focus:outline-none" role="presentation">
                                    <tr tabIndex={0} className="focus:outline-none" role="row" aria-label="first row">
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Menu dạng thanh dock ở chân trang</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Hiệu ứng nút động</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Tùy chỉnh màu sắc, độ trong suốt</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Tùy chỉnh icon cho nút</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p tabIndex={0} className="focus:outline-none pl-4 pt-3 pb-3 font-bold text-sm text-gray-600">TRIGGER</p>
                            <table className="sm:table-fixed table-auto w-full bg-white">
                                <tbody tabIndex={0} className="focus:outline-none" role="presentation">
                                    <tr tabIndex={0} className="focus:outline-none" role="row" aria-label="first row">
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Hiển thị menu khi khách cuộn trang</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Tự động hiển thị menu sau một khoảng thời gian</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Hiển thị menu trên tất cả các trang hoặc theo đường dẫn chính xác</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Hiển thị menu trên các trang theo cấu hình đường dẫn có chứa</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                        <div className="mb-20">
                            <p tabIndex={0} className="focus:outline-none pl-4 pt-3 pb-3 font-bold text-sm text-gray-600">BÁO CÁO</p>
                            <table className="sm:table-fixed table-auto w-full bg-white">
                                <tbody tabIndex={0} className="focus:outline-none" role="presentation">
                                    <tr tabIndex={0} className="focus:outline-none" role="row" aria-label="first row">
                                        <td tabIndex={0} role="rowheader " className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Thống kê tương tác từng nút trên mỗi đường dẫn của trang web</td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">

                                        </td>
                                        <td tabIndex={0} role="cell " aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Thống kê hiệu quả mỗi nút</td>
                                        <td aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">

                                        </td>
                                        <td className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"></td>
                                        <td aria-label="checked" className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">

                                        </td>
                                        <td className="focus:outline-none w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                            <Link to="/admin/bill"><button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm border">Nấng cấp</button></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index
