import React from 'react'
import AdminMenu from '../AdminMenu';
import AdminHeader from '../AdminHeader';

export default ({ children }) => {
    return (
        <div>
            <div div className="bg-white relative" >
                <AdminHeader />
                <div className="flex">
                    <AdminMenu />
                    <div className="flex w-4/5 mt-24 h-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
