import React, { useEffect, useState } from 'react'
import { callApi } from '../../../../service/Apis';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2'

const AddService = () => {
  let history = useHistory();
  const [service, setService] = useState([]);

  const onhandleResgiter = (e) =>{
    const { name, value } = e.target;
    setService({...service,[name]: value})
    console.log("value",e.target.value)
  }

  const onclickResgiter = (e) => {
    e.preventDefault();
    var data = JSON.stringify(service);
    callApi("post", "api/v1/admin/servicefee/create", data)
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
    <div>

      <div className="rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="pt-4 pb-1 px-5" >
          <div className="pb-3" style={{ maxWidth: '90px' }} onClick={() => { history.goBack() }}>
            <i className="fas fa-angle-left cursor-pointer" style={{ fontSize: "22px" }}></i>
            <span className="pl-3 cursor-pointer">Quay lại</span>
          </div>
          <h4 className="text-blue-600">Thêm mới phí dịch vụ</h4>
        </div>
        <hr />

        <div className="w-full px-5">
          <div>
            <form  onSubmit={onclickResgiter} id="form">
              <div className="flex -mx-3">
                <div className="w-3/5 px-3 mb-3">
                  <label htmlFor className="text-sm font-medium px-1">Tên dịch vụ</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                    <input onChange={onhandleResgiter}  name="nameService" id="nameService" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Gói Vip1" />
                  </div>
                </div>
                <div className="w-3/5 px-3 mb-3">
                  <label htmlFor className="text-sm font-medium px-1">Giá tiền</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                    <input onChange={onhandleResgiter}  name="price" id="price" type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="VNĐ" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end py-4">
                  <div className="w-1/7 mr-3 ">
                    <button type="reset" className="focus:outline-none text-blue-600 text-base py-2 px-3 border border-blue-900 rounded-md hover:bg-gray-100 hover:shadow-lg flex items-center font-semibold">Hủy</button>
                  </div>
                  <div className="w-1/7">
                    <button type="submit" className="focus:outline-none text-white text-base py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg flex items-center font-semibold">Thêm mới</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddService
