import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Menu from '../Menu';


import Header from '../Header';
import ManagerMenu from '../ManagerMenu';
import Report_Interactive from '../Report_Interactive';
import CreateMenu from '../CreateMenu';
import Dashboard from '../Dashboard';
import { ButtonContext, ButtonProvider } from '../../service/ButtonContext';
import { MenuProvider } from '../../service/MenuContext';
import Display from '../Display';
import { useState } from 'react';
import AdminSidebar from './AdminSilebar';
import AdminHeader from './AdminHeader';



// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {

    const [sidebarAdminOpen, setSidebarAdminOpen] = useState(false);


    return (
        <div className="h-screen">
            <div className="flex sticky justify-between items-center bg-white border-b-2 shadow-xl ">
                <AdminHeader sidebarAdminOpen={sidebarAdminOpen} setSidebarAdminOpen={setSidebarAdminOpen} />
                {/* <Header /> */}
            </div>

            <div className="flex h-screen bg-white">
                <div className="flex-1 flex flex-col ">

                    {/* <div class="relative min-h-screen md:flex"></div> */}
                    <div className="flex h-full">
                        <div className="shadow-xl h-screen">
                            <div className="shadow-xl">
                                {/* sidebar */}
                                <AdminSidebar sidebarAdminOpen={sidebarAdminOpen} setSidebarAdminOpen={setSidebarAdminOpen} />
                            </div>
                        </div>


                        {/* main */}

                        <main className="flex flex-col bg-gray-100 w-full h-auto overflow-y-auto pb-20">
                            <div className="flex w-full mx-auto lg:px-5 py-3">
                                <div className="flex w-full bg-gray-100  rounded-sm">

                                    {children}


                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);\n}\n::-webkit-scrollbar-track {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: inset 7px 10px 12px #f0f0f0;\n}\n",
                }}
            />

        </div>



    )
}
