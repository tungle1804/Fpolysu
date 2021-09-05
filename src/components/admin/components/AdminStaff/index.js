import React, { useState } from 'react'
import { useEffect } from 'react'
import { callApi } from '../../../../service/Apis'
import { useDispatch, useSelector } from 'react-redux';
import { setStaff } from '../../../../redux/actions/staffs';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2'

const AdminStaff = () => {

  /* Viết theo kiểu Redux
  
  const staff = useSelector((state) =>  state.staffs)
  const dispatch = useDispatch();
  
    useEffect(() => {
      callApi('get', 'api/v1/admin/users')
        .then(response => {
          dispatch(setStaff(response.data));
        })
    }, []);
  
   */

  let history = useHistory();

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    callApi('get', 'api/v1/admin/users')
      .then(response => {
        console.log("Bình test staff ", response.data);
        setStaff(response.data);
        
      })
  }, []);

  const deleteUser = (email) => {
    callApi("delete", `api/v1/users/${email}`)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Thành công',
          text: 'Xóa nhân viên thành công',
          timer: 2000
        });
      })

  }

  /* Phân Trang Frontend */
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(7);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id))
  }

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = staff.slice(indexOfFirstTodo, indexOfLastTodo);
  const renderTodos = currentTodos.map((item, key) => {
    return (
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            <span>{key + 1}</span>
          </div>
        </td>

        <td className="py-3 px-6 text-left whitespace-nowrap  cursor-pointer" onClick={() => { history.push({ pathname: `/admin/manage/staffs/${item.email}`, state: item }) }}>
          <div className="flex items-center">
            <span className="font-medium">{item.fullName}</span>
          </div>
        </td>

        <td className="py-3 px-6 text-left cursor-pointer" onClick={() => { history.push({ pathname: `/admin/manage/staffs/${item.email}`, state: item }) }}>
          <div className="flex items-center">
            <div className="mr-2">
              <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
              {/* <img className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" /> */}
            </div>
            <span>{item.email}</span>
          </div>
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            <span className="font-medium">{item.phone}</span>
          </div>
        </td>

        <td className="py-3 px-6 text-center">
          {item.role == 'employee'
            ? <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{item.role}</span>
            : <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{item.role}</span>
          }

        </td>
        {/* <td className="py-3 px-6 text-center">
      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
    </td> */}
 
      </tr>
    )
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(staff.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number} id={number} onClick={handleClick} className="relative block py-2 px-3 leading-tight page-link border border-gray-300 text-blue-700 border-r-0 cursor-pointer">{number}</li>
    );
  });
  /* End - Phân Trang Frontend */

  return (
    <div className="pt-10">

      <div className="overflow-x-auto">
        <div className="max-w-screen max-h-screen flex items-center justify-center font-sans overflow-hidden">

          <div className="w-full px-10">
            <div className="flex justify-between text-center">
              <div class="inline-block mt-2">
                <h5 className="text-2xl text-blue-700">Quản lý nhân viên</h5>
              </div>

              <div className="flex mt-2">
                <div className="text-gray-600 mr-10" style={{ marginTop: "-1px" }}>
                  <input className="border-2 rounded-md border-gray-300 bg-white px-3 text-sm focus:outline-none"
                    type="search" name="search" placeholder="Tìm kiếm" style={{ width: "230px", height: "37px" }} />
                  <button type="submit" >
                  </button>
                </div>

                <div class="inline-block">
                  <button onClick={() => { history.push("/admin/manage/staffs/add") }} type="button" class="focus:outline-none text-white text-sm py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg flex items-center font-semibold">
                    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Thêm mới nhân viên
                  </button>
                </div>
              </div>
            </div>
            <hr className="mt-4 text-gray-100" />
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">Stt</th>
                    <th className="py-3 px-6 text-left">Họ tên</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-center">Số điện thoại</th>
                    <th className="py-3 px-6 text-center">Vai trò</th>
                  
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {renderTodos}
                </tbody>
              </table>
            </div>

            <div className="" style={{ height: "150px" }}>
              <ul className="flex list-none">
                <li className="page-item page-link cursor-pointer" onClick={() => { setCurrentPage(currentPage - 1); if (currentPage == 1) { setCurrentPage(1) } }}>Previous</li>
                {renderPageNumbers}
                <li className="page-item page-link cursor-pointer " onClick={() => { setCurrentPage(currentPage + 1); if (currentPage == pageNumbers.length) { setCurrentPage(pageNumbers.length) } }}>Next</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminStaff
