import React, { useState } from 'react'
import { useEffect } from 'react'
import { callApi } from '../../../../service/Apis'
import { useDispatch, useSelector } from 'react-redux';
import { setStaff } from '../../../../redux/actions/staffs';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2'
import {decode as base64_decode, encode as base64_encode} from 'base-64';

const AdminStaff = () => {

// const binh = localStorage.getItem("email")
// const encoded = encodeURI(binh);
// console.log("Binh mã hóa ",encoded);
let encoded = base64_encode(localStorage.getItem("email"));
let decoded = base64_decode(encoded);
console.log("bình mã hóa 1", encoded);
console.log("bình mã hóa 4", decoded);

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
        <td className="py-3 px-6 text-center" onClick={deleteUser(item.email)}>
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>
        </td>
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
                    <th className="py-3 px-6 text-center">Xóa</th>
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
