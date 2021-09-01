import React,{ useState } from 'react'
import { useEffect } from 'react'
import { callApi } from '../../../../service/Apis'
import { useHistory } from 'react-router';
const AdminServiceFee = () => {
   const [servicefee, setServicefee] = useState([]);
   let history = useHistory();
  useEffect(() => {
    callApi('get', 'api/v1/admin/servicefee')
      .then(response => {
        setServicefee(response.data);
      })
  }, []);

  const render = servicefee.map((item,key) =>{
    return (
     
      <tr className="border-b border-gray-200 hover:bg-gray-100 mx">
        <td className="py-3 px-6 text-center" onClick={() => { history.push({ pathname: `/admin/manage/services-fee/${item.id}`, state: item }) }}>
        {/* <td className="py-3 px-6 text-center" onClick={() => { history.push("/admin/manage/services-fee/update")}  } > */}
            <span className="font-medium">{item.id}</span>
        </td>
        <td className="py-3 px-6 text-left" onClick={() => { history.push({ pathname: `/admin/manage/services-fee/${item.id}`, state: item }) }}>
            <span className="font-medium">{item.nameService}</span>
        </td>
        <td className="py-3 px-6 text-left">
            <span className="font-medium">{item.price} VNĐ</span>
        </td>
       
        </tr>
    )
  })

  return (
    <div>
       <div className="pt-10">
       <div className="w-full px-10">
        <div className="flex justify-between text-center">
        <div class="inline-block mt-2">
                <h5 className="text-2xl text-blue-700">Quản lý Phí dịch vụ</h5>
              </div>
              <div className="flex mt-2">
                <div className="text-gray-600 mr-10" style={{ marginTop: "-1px" }}>
                  <input className="border-2 rounded-md border-gray-300 bg-white px-3 text-sm focus:outline-none"
                    type="search" name="search" placeholder="Tìm kiếm" style={{ width: "230px", height: "37px" }} />
                  <button type="submit" >
                  </button>
                </div>

                <div class="inline-block">
                  <button  type="button" onClick={() => { history.push("/admin/manage/services-fee/add") }} class="focus:outline-none text-white text-sm py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg flex items-center font-semibold">
                    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Thêm mới phí dịch vụ
                  </button>
                </div>
               
              </div>
        </div>
        </div>
        <hr className="mt-4 text-gray-100" />
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">#</th>
                    <th className="py-3 px-6 text-left">Tên dịch vụ</th>
                    <th className="py-3 px-6 text-left">Giá tiền</th>
                   
                   
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                 {render}
                </tbody>
              </table>
            </div>

       </div>
       
        
    
      
    </div>
  )
}

export default AdminServiceFee