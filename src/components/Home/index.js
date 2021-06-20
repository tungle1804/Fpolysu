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




// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
    return (
        <div>
            {/* <ButtonProvider>
                <MenuProvider> */}
            <div div className="bg-white relative" >

                <Header />
                <div className="flex">
                    <Menu />

                    <div className="flex w-4/5 mt-24 h-auto">

                        {/* <Switch>
                                        <Route exact path='admin'>
                                            <Dashboard />
                                        </Route>
                                        <Route path={`${path}/list-menu`}>
                                            <ManagerMenu />
                                        </Route>
                                        <Route path="/report">
                                            <Report_Interactive />
                                        </Route>
                                        <Route path="/create-menu"><CreateMenu /></Route>

                                    </Switch> */}


                        {children}
                    </div>
                </div>
            </div>
        </div>



    )
}
