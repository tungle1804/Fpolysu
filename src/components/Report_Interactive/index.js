import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import Barchart from '../BarChart';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
   <>
   <div>
     <h1 className="text-2xl font-bold m-5">Thống kê tương tác</h1>
     <div className="grid grid-cols-2 gap-10">
       <div>
       <p className="text-lg text-center font-bold m-5">Tỉ lệ nhấp chuột vào menu</p>
  <table className="rounded-t-lg mx-auto bg-gray-200" >
    <tbody>
      <tr className="text-left border-b-2 border-gray-300  ">
        <th className="px-3 py-1">#</th>
        <th className="px-3 py-1">Tên Menu</th>
        <th className="px-3 py-1">Số lần hiển thị	</th>
        <th className="px-3 py-1">Số lần click</th>
        <th className="px-3 py-1">Tỉ lệ click</th>
       
      </tr>
      <tr className="bg-gray-100 border-b border-gray-400">
        <td className="px-1 py-1">1</td>
        <td className="px-1 py-1">abc</td>
        <td className="px-1 py-1">50</td>
        <td className="px-1 py-1">0</td>
        <td className="px-1 py-1">0</td>
       
      </tr>
    </tbody></table>
       </div>
       <div>
       <p className="text-lg text-center font-bold m-5">Tỉ lệ nhấp chuột vào widget</p>
       <table className=" mx-auto bg-gray-200">
    <tbody>
      <tr className="text-left border-b-2 border-gray-300  ">
        <th className="px-3 py-1">#</th>
        <th className="px-3 py-1">Tên Menu</th>
        <th className="px-3 py-1">Số lần hiển thị	</th>
        <th className="px-3 py-1">Số lần click</th>
        <th className="px-3 py-1">Tỉ lệ click</th>
       
      </tr>
      <tr className="bg-gray-100 border-b border-gray-400">
        <td className="px-1 py-1">1</td>
        <td className="px-1 py-1">abc</td>
        <td className="px-1 py-1">50</td>
        <td className="px-1 py-1">0</td>
        <td className="px-1 py-1">0</td>
       
      </tr>
    </tbody></table>
       </div>
       
     </div>
     <div className="grid grid-cols-2 gap-10 pt-20">
       <div>
       <p className="text-lg text-center font-bold m-5">Tương tác trên thiết bị</p>
      <span>Tổng số click trên thiết bị</span>
        <div>
          <Barchart/>
        </div>

       </div>
      {/* phần 2 */}
       <div>
       <p className="text-lg text-center font-bold m-5">Tương tác trên nút</p>
       <span>Tổng số click trên tất cả kiểu nút trên menu</span>
       <div>
       <Barchart/>
       </div>
       </div>
     </div>
     <div className="grid grid-cols-1 gap-10 pt-10">
       <div>
       <p className="text-lg text-center font-bold m-5">Danh sách tất cả click trên từng nút theo thời gian</p>  
     
       <table className="rounded-t-lg mx-auto bg-gray-200" >
    <tbody>
      <tr className="text-left border-b-2 border-gray-300  ">
        <th className="px-10 py-1">#</th>
        <th className="px-10 py-1">Tên Menu</th>
        <th className="px-10 py-1">Số lần hiển thị	</th>
        <th className="px-10 py-1">Số lần click</th>
        <th className="px-10 py-1">Tỉ lệ click</th>
        <th className="px-10 py-1">Số lần click</th>
        <th className="px-10 py-1">Tỉ lệ click</th>
       
      </tr>
      <tr className="bg-gray-100 border-b border-gray-400">
        <td className="px-10 py-1">1</td>
        <td className="px-10 py-1">abc</td>
        <td className="px-10 py-1">50</td>
        <td className="px-10 py-1">0</td>
        <td className="px-10 py-1">0</td>
        <td className="px-10 py-1">0</td>
        <td className="px-10 py-1">0</td>
       
      </tr>
    </tbody></table>
    </div>
     </div>
  </div>



    </>
    
)

