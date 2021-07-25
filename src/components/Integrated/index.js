import React from 'react'

const Integrated = () => {
    return (
        <>
            <div className="flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-gray-100">
                <div className="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-indigo-600 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
                    Tích hợp METU lên website của bạn
                    Vui lòng làm theo hướng dẫn sau đây để tích hợp METU lên Website.
                    Cách 1: Sao chép và dán đoạn mã này vào trong thẻ  body /body trên Website của bạn.
                    <div className="p-2">
                        <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                            <span className="inline-flex bg-indigo-600 text-white rounded-full h-12 px-3 justify-center items-center"> Sao chép </span>
                            <span className="inline-flex px-2">script window.MBID="NE1bQVKSf";script script defer src="https://menu.metu.vn/static/js/sdk.js?container=body" script</span>
                        </div>
                    </div>

                    Chú ý: mỗi website chỉ được gắn một đoạn mã này
                    Cách 2: Cài đặt plugin METU.

                    Đối với các Website sử dụng mã nguồn mở Wordpress, METU cung cấp plugin để giúp dễ dàng tích hợp METU lên Website của bạn.
                </div>
            </div>

        </>
    )
}
export default Integrated
