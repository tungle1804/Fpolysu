import React, { useEffect, useState } from 'react'
import { callApi } from '../../../../service/Apis';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

const UpdateCustomer = (props) => {

    let history = useHistory();

    const userDetail = props.location.state;
    const [user, setUser] = useState({ 
        fullName: userDetail.fullName,
        phone: userDetail.phone,
        dateOfBirth: userDetail.dateOfBirth,
        gender: userDetail.gender,
        address: userDetail.address,
        email: userDetail.email,
        role: userDetail.role,
        createdDate: userDetail.createdDate, 
        createdBy: userDetail.createdBy
     });

    const [status, setStatus] = useState([]);
    useEffect(() => {
        callApi('get', 'api/v1/admin/users/status')
            .then(response => {
                setStatus(response.data);
            })
    }, [])

    const statusFilter = status.filter((item) => item != userDetail.status)

    const onhandleResgiter = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log("value ", user)
    }

    const updateUser = (e) => {
        e.preventDefault();
        var data = JSON.stringify(user);
        callApi("put", `api/v1/users/${userDetail.email}`, data)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Chỉnh sửa thông tin khách hàng thành công',
                    timer: 2000
                });
                history.goBack()
            })
            .catch(error => { console.log(error) })

    }

    return (
 
                <div className="min-w-screen min-h-screen flex items-center justify-center ">
                    <div className="rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>

                        <div className="pb-1 px-5" >
                            <div className="pb-3" style={{ maxWidth: '90px' }} onClick = {() => {history.goBack()}}>
                                <i className="fas fa-angle-left cursor-pointer" style={{ fontSize: "22px" }}></i>
                                <span className="pl-3 cursor-pointer">Quay lại</span>
                            </div>
                            <h4 className="text-blue-600">Chỉnh sửa thông tin khách hàng</h4>
                        </div>
                        <hr />
                        <div className="w-full px-5">
                            <div>                            
                                    <div className="flex -mx-3">
                                        <div className="w-3/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-medium px-1">Họ và tên</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} defaultValue = {userDetail.fullName} name="fullName" id="hoten" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Hồ Hồng Hạnh" />
                                            </div>
                                        </div>
                                        <div className="w-2/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-medium px-1">Số điện thoại</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} defaultValue = {userDetail.phone} name="phone" id="sdt" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="0987888999" />
                                            </div>
                                        </div>
                                    </div>                           
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Tên doanh nghiệp</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} defaultValue = {userDetail.business} name="address" id="" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="số nhà 35, đường Cầu Giấy, Hà Nội" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-3/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Email</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                                                <input defaultValue = {userDetail.email} disabled name="email" id="email" type="email" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="honghanh@gmail.com" />
                                            </div>
                                        </div>

                                         <div className="w-2/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Trạng thái</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                                                <select onChange={onhandleResgiter} name="role" type="select" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                                        <option value={userDetail.status}>{userDetail.status}</option>
                                                    {statusFilter.map((item, key) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-3/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Ngày tạo</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                                                <input defaultValue = {userDetail.createdDate} disabled name="" id="" type="date" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="honghanh@gmail.com" />
                                            </div>
                                        </div>

                    
                                    </div>

                                    <div className="flex justify-end py-4">
                                        <div className="w-1/7 mr-3 ">
                                            <button onClick = {() => {history.goBack()}} className="focus:outline-none text-blue-600 text-base py-2 px-3 border border-blue-900 rounded-md hover:bg-gray-100 hover:shadow-lg flex items-center font-semibold">Hủy</button>
                                        </div>
                                        <div className="w-1/7">
                                            <button type="submit" onClick={updateUser} id="btn_register" className="focus:outline-none text-white text-base py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg flex items-center font-semibold">Lưu</button>
                                        </div>
                                    </div>                               
                            </div>
                        </div>

                    </div>
                </div>
      
    )
}

export default UpdateCustomer
