import React, { useEffect, useState } from 'react'
import { callApi } from '../../../../service/Apis';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

const AddStaff = () => {

    let history = useHistory();

    const [user, setUser] = useState({createdDate: new Date(), createdBy: localStorage.getItem('email') });
    const [role, setRole] = useState([]);

    useEffect(() => {
        callApi('get', 'api/v1/admin/users/role')
        .then(response => {
            setRole(response.data);
        })
    }, [])


    const onhandleResgiter = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log("value ",e.target.value)
    }

    const onclickResgiter = (e) => {
        e.preventDefault();
        var data = JSON.stringify(user);
        callApi("post", "api/v1/user", data)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Thêm mới nhân viên thành công',
                    timer: 2000
                })
            })
            .catch(error => { console.log(error) })
        
        document.getElementById("form").reset();
    }

    return (
        <>
            <div>
                <div className="min-w-screen min-h-screen flex items-center justify-center ">
                    <div className="rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>

                        <div className="pt-4 pb-1 px-5" >
                            <div className="pb-3" style={{ maxWidth: '90px' }} onClick = {() => {history.goBack()}}>
                                <i className="fas fa-angle-left cursor-pointer" style={{ fontSize: "22px" }}></i>
                                <span className="pl-3 cursor-pointer">Quay lại</span>
                            </div>
                            <h4 className="text-blue-600">Thêm mới nhân viên</h4>
                        </div>
                        <hr />

                        <div className="w-full px-5">
                            <div>
                                <form onSubmit={onclickResgiter} id="form" >
                                    <div className="flex -mx-3">
                                        <div className="w-3/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-medium px-1">Họ và tên</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} name="fullName" id="hoten" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Hồ Hồng Hạnh" />
                                            </div>
                                        </div>
                                        <div className="w-2/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-medium px-1">Số điện thoại</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} name="phone" id="sdt" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="0987888999" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-3/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Ngày sinh</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} name="dateOfBirth" id="" type="date" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                            </div>
                                        </div>
                                        <div className="w-1/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Giới tính</label>
                                            <div className="flex justify-between">
                                                <div>
                                                    <label className="inline-flex items-center mt-3">
                                                        <input onChange={onhandleResgiter} name="gender" value= "Nam" type="radio" className="form-radio h-5 w-5 text-red-600"  /><span className="ml-2">Nam</span>
                                                    </label>
                                                </div>

                                                <div>
                                                    <label className="inline-flex items-center mt-3">
                                                        <input onChange={onhandleResgiter}  name="gender" value = "Nữ" type="radio" className="form-radio h-5 w-5 text-orange-600" /><span className="ml-2">Nữ</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Địa chỉ</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} name="address" id="" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="số nhà 35, đường Cầu Giấy, Hà Nội" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Email</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} name="email" id="email" type="email" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="honghanh@gmail.com" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-3/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Mật khẩu</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                                                <input onChange={onhandleResgiter} name="password" id="password1" type="password" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                            </div>
                                        </div>

                                        <div className="w-2/5 px-3 mb-3">
                                            <label htmlFor className="text-sm font-semibold px-1">Vai trò</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                                                <select onChange={onhandleResgiter} name = "role" type="select" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                                   <option >Chọn vai trò</option>
                                                   {role.map((item, key) => {
                                                       return (
                                                        <option value = {item}>{item}</option>
                                                       )
                                                   })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end py-4">
                                        <div className="w-1/7 mr-3 ">
                                            <button type="reset" className="focus:outline-none text-blue-600 text-base py-2 px-3 border border-blue-900 rounded-md hover:bg-gray-100 hover:shadow-lg flex items-center font-semibold">Hủy</button>
                                        </div>
                                        <div className="w-1/7">
                                            <button type="submit" id="btn_register" className="focus:outline-none text-white text-base py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg flex items-center font-semibold">Thêm mới</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddStaff
