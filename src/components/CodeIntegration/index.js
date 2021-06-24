import React from 'react'

const CodeIntegration = () => {
    return (
        <div>
            <div className="bg-indigo-50 w-full">
                <section className="h-screen px-12 sm:px-24">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xxl:col-span-1 bg-white px-10 py-10">
                            <div className="w-full">
                                <h3 className="font-bold">Tích hợp POLYSU lên website của bạn</h3>
                                <p className="italic">Vui lòng làm theo hướng dẫn sau đây để tích hợp METU lên Website.</p>
                                <hr className="m-5 text-black" />
                                <p className> <span className="font-bold">Cách 1:</span> Sao chép và dán đoạn mã này vào trong thẻ
                                    <span className="font-bold">
                                        &lt;</span><span className="font-bold">body&gt;</span><span className="font-bold">
                                        &lt;</span>/<span className="font-bold">body&gt;</span> trên Website của bạn.
                                </p>
                                <p className>Chú ý: mỗi website chỉ được gắn một đoạn mã này</p>
                                <div className="mt-2">
                                    <input className="w-4/5 bg-red-300 p-2 " type="text" />
                                    <button className="bg-purple-800 p-2 text-white m-0"><i className="far fa-copy text-white" />  Sao
                                        chép</button>
                                </div>
                                <hr className="m-5 text-black" />
                                <div>
                                    <p className> <span className="font-bold">Cách 2:</span> Cài đặt plugin POLYSU (chưa hỗ trợ)
                                    </p><p className>Đối với các Website sử dụng mã nguồn mở Wordpress, Polysu cung cấp plugin để
                                        giúp dễ dàng tích hợp Polysu lên Website của bạn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CodeIntegration
