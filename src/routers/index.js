import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";
import Home from '../components/Home';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import Resgiter from '../components/Resgiter';
import Contact from '../components/Contact';
import Hssd from '../components/Hssd';
import Display from '../components/Display';
import DisplayCreateDetails from '../components/Display/displaycreatedetails'
import Dashboard from '../components/Dashboard';
import ManagerMenu from '../components/ManagerMenu';

import CreateMenu from '../components/CreateMenu/index'
import { ButtonProvider } from '../service/ButtonContext';
import { MenuProvider } from '../service/MenuContext';
import UpdateMenu from '../components/UpdateMenu'
import DisplayUpdate from '../components/Display/displayupdate'
import Report_Interactive from '../components/Report_Interactive';
import PriceList from '../components/PriceList'
import Navbar from '../components/QA';
import Bill from '../components/Bill'
import PaymentHistory from '../components/PaymentHistory'
import UpgradeAccount from '../components/UpgradeAccount'
import Integrated from '../components/Integrated'
import CustomerManagement from '../components/CustomerManagement';
import AdminManage from '../components/AdminManage';
import { InputProvider } from '../service/InputContext';

// eslint-disable-next-line import/no-anonymous-default-export
export default function Routers() {

    return (
        <>
            <ButtonProvider>
                <MenuProvider>
                    <InputProvider>
                        <Router>
                            <Switch>
                                <Route path="/admin/manage"><AdminManage /></Route>
                                <Route path="/login"><Login /></Route>
                                <Route path="/resgiter"><Resgiter /></Route>
                                <Route path="/price-list"><PriceList /></Route>
                                <Route path="/QA"><Navbar /></Route>
                                <Route path="/contact"><Contact /></Route>
                                <Route path="/hssd"><Hssd /></Route>
                                <Route path="/view/:id" component={Display} />
                                <Route exact path="/"><HomePage /></Route>
                                <Route path="/viewdetails"><DisplayCreateDetails /></Route>
                                <Route path="/viewupdate/:id"><DisplayUpdate /> </Route>
                                <Route path='/admin/:path?/:path?' exact>


                                    <Home>
                                        <Switch>

                                            <Route exact path='/admin' component={Dashboard} />
                                            <Route path='/admin/payment-history' component={PaymentHistory} />
                                            <Route path='/admin/upgrade-account' component={UpgradeAccount} />
                                            <Route path='/admin/bill' component={Bill} />
                                            <Route path='/admin/list-menu'>
                                                <ManagerMenu />
                                            </Route>
                                            <Route path='/admin/integrared' component={Integrated} />
                                            <Route path='/admin/report' component={Report_Interactive} />
                                            <Route path='/admin/customer-management' component={CustomerManagement} />
                                            <Route path='/admin/create-menu'><CreateMenu /></Route>
                                            <Route path='/admin/update-menu/:id'><UpdateMenu /></Route>

                                        </Switch>
                                    </Home>
                                </Route>
                            </Switch>
                        </Router>
                    </InputProvider>
                </MenuProvider>
            </ButtonProvider>
        </>
    );
}


