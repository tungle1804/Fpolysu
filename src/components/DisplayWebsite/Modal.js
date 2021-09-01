
// class CoolButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showHideClassName: this.props.show ? "modal display-block" : "modal display-none"
//         }

//     }

//     render() {

//         return (
// <div className={this.state.showHideClassName} className="flex justify-center h-screen items-center bg-gray-200 antialiased">
//     <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
//         <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
//             <p className="font-semibold text-gray-800">Add a step</p>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//         </div>
//         <div className="flex flex-col px-6 py-5 bg-gray-50">
//             <p className="mb-2 font-semibold text-gray-700">Bots Message</p>
//             <textarea type="text" name placeholder="Type message..." className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36" id defaultValue={""} />
//             <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
//                 <div className="w-full sm:w-1/2">
//                     <p className="mb-2 font-semibold text-gray-700">Customer Response</p>
//                     <select type="text" name className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none" id>
//                         <option value={0}>Add service</option>
//                     </select>
//                 </div>
//                 <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
//                     <p className="mb-2 font-semibold text-gray-700">Next step</p>
//                     <select type="text" name className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none" id>
//                         <option value={0}>Book Appointment</option>
//                     </select>
//                 </div>
//             </div>
//             <hr />
//             <div className="flex items-center mt-5 mb-3 space-x-4">
//                 <input className="inline-flex rounded-full" type="checkbox" id="check1" name="check1" />
//                 <label className="inline-flex font-semibold text-gray-400" htmlFor="check1">
//                     Add a crew</label><br />
//                 <input className="inline-flex" type="checkbox" id="check2" name="check2" defaultChecked />
//                 <label className="inline-flex font-semibold text-blue-500" htmlFor="check2">
//                     Add a specific agent</label><br />
//             </div>
//             <div className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm">
//                 <div className="flex flex-row items-center">
//                     <img className="w-10 h-10 mr-3 rounded-full" src="https://randomuser.me/api/portraits/lego/7.jpg" alt="" />
//                     <div className="flex flex-col">
//                         <p className="font-semibold text-gray-800">Xu Lin Bashir</p>
//                         <p className="text-gray-400">table.co</p>
//                     </div>
//                 </div>
//                 <h1 className="font-semibold text-red-400">Remove</h1>
//             </div>
//         </div>
//         <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
//             <p className="font-semibold text-gray-600">Cancel</p>
//             <button onClick={this.props.handleClose} className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
//                 Save
//             </button>
//         </div>
//     </div>
// </div>


//         )
//     }
{/* <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div> */}

// }
const Modals = ({ handleClose, show, children, input, onHandleChangeInput }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    // const onHandleChangeInput = (e) => {
    //     console.log(e.target.value)
    // }
    return (
        <>
            <div className={showHideClassName} >
                <div className="mt-dialog mt-dialog--open">
                    <div>
                        <div className="mt-dialog__surface">
                            <div className="mt-dialog__title" style={{ backgroundColor: 'rgb(0, 174, 239)', color: 'rgb(255, 255, 255)' }}>
                                <span style={{ textAlign: 'left' }}>Điền thông tin và trường sẽ gọi tư vấn cho bạn</span><svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="24px" height="24px" style={{ cursor: 'pointer', flex: '0 0 24px', margin: '6px 0px 0px 16px' }}>
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg></div><div className="mt-dialog__content"><div>
                                        <input className="mt-textfield" placeholder="Số điện thoại" style={{ marginTop: '0px' }} />
                                        <div style={{ display: 'none', fontSize: '12px', textAlign: 'left', color: 'rgb(244, 67, 54)', margin: '0px', padding: '0px' }}>Chọn một số điện thoại hợp lệ</div>
                                    </div><div>
                                    <input className="mt-textfield" placeholder="Họ Tên" style={{ marginTop: '16px' }} /><div style={{ display: 'none', fontSize: '12px', textAlign: 'left', color: 'rgb(244, 67, 54)', margin: '0px', padding: '0px' }}>Nội dung chưa đúng</div></div><div>
                                    <input className="mt-textfield" placeholder="Cơ sở (HN, HCM, Cần Thơ, Đà Nẵng, Tây Nguyên)" style={{ marginTop: '16px' }} />
                                    <div style={{ display: 'none', fontSize: '12px', textAlign: 'left', color: 'rgb(244, 67, 54)', margin: '0px', padding: '0px' }}>Nội dung chưa đúng</div>
                                    {input && input.length > 0 && input.map(items => {
                                        return (<>
                                            <input onChange={onHandleChangeInput} name={`${items.id}`} className="mt-textfield" placeholder={`${items.inputName}`} style={{ marginTop: '16px' }} />
                                        </>)
                                    })}
                                </div>
                            </div>
                            <div className="mt-dialog__actions" style={{ justifyContent: 'flex-end' }}><div style={{ flex: '1 1 auto' }} />
                                <button className="mt-button" style={{ backgroundColor: 'rgb(0, 174, 239)', color: 'rgb(255, 255, 255)' }}>Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};