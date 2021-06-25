import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
   <>
       
       <div className="p-16">
       <h2 className="font-bold text-lg h-2 mb-8">Thống kế Tương Tác</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-2 m-5 mb-10">
    <div className="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
      <div className="m-2 text-justify text-sm">
       
        <h2 className="font-bold text-lg h-2 mb-8">Tương tác trên thiết bị </h2>
        <span className="text-sm">
        Tổng số click trên tất cả kiểu nút trên thiết bị
        </span>
        
      </div>
     
  <table className="text-left w-full">
    <thead className="flex text-black w-full">
      <tr className="flex w-full mb-4">
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">Two</th>
        <th className="p-4 w-1/4">Three</th>
        <th className="p-4 w-1/4">Four</th>
      </tr>
    </thead>
    {/* Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! */}
    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: '30vh'}}>
      <tr className="flex w-full mb-4">
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Cats</td>
        <td className="p-4 w-1/4">Birds</td>
        <td className="p-4 w-1/4">Fish</td>
      </tr>
    </tbody>
  </table>
    </div>
    
    <div className="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
      <div className="m-2 text-justify text-sm">
       
        <h2 className="font-bold text-lg h-2 mb-8">Tương tác trên nút </h2>
        <span className="text-sm">
        Tổng số click trên tất cả kiểu nút trên menu
        </span>
      </div>
       
  <table className="text-left w-full">
    <thead className="flex text-black w-full">
      <tr className="flex w-full mb-4">
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">Two</th>
        <th className="p-4 w-1/4">Three</th>
        <th className="p-4 w-1/4">Four</th>
      </tr>
    </thead>
    {/* Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! */}
    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: '30vh'}}>
      <tr className="flex w-full mb-4">
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Cats</td>
        <td className="p-4 w-1/4">Birds</td>
        <td className="p-4 w-1/4">Fish</td>
      </tr>
    </tbody>
  </table> 
    </div>    
  </div>

  {/* <h2 className="font-bold text-lg h-2 mb-8">Thống kế Tương Tác</h2>
  <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 m-5 mb-10">
    <div className="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
      <div className="m-2 text-justify text-sm">
       
        <h2 className="font-bold text-lg h-2 mb-8">Tương tác trên thiết bị </h2>
        <span className="text-sm">
        Tổng số click trên tất cả kiểu nút trên thiết bị
        </span>
        
      </div>
     
  <table className="text-left w-full">
    <thead className="flex text-black w-full">
      <tr className="flex w-full mb-4">
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">Two</th>
        <th className="p-4 w-1/4">Three</th>
        <th className="p-4 w-1/4">Four</th>
      </tr>
    </thead>
    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: '30vh'}}>
      <tr className="flex w-full mb-4">
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Cats</td>
        <td className="p-4 w-1/4">Birds</td>
        <td className="p-4 w-1/4">Fish</td>
      </tr>
    </tbody>
  </table>
    </div>
    
    <div className="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
      <div className="m-2 text-justify text-sm">
       
        <h2 className="font-bold text-lg h-2 mb-8">Tương tác trên nút </h2>
        <span className="text-sm">
        Tổng số click trên tất cả kiểu nút trên menu
        </span>
      </div>
       
  <table className="text-left w-full">
    <thead className="flex text-black w-full">
      <tr className="flex w-full mb-4">
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">One</th>
        <th className="p-4 w-1/4">Two</th>
        <th className="p-4 w-1/4">Three</th>
        <th className="p-4 w-1/4">Four</th>
      </tr>
    </thead>
    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: '30vh'}}>
      <tr className="flex w-full mb-4">
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Dogs</td>
        <td className="p-4 w-1/4">Cats</td>
        <td className="p-4 w-1/4">Birds</td>
        <td className="p-4 w-1/4">Fish</td>
      </tr>
    </tbody>
  </table> 
    </div> 
       
    
  </div> */}
</div>

    </>
    
)

