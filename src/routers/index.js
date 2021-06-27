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
import Report_Interactive from '../components/Report_Interactive';
import CreateMenu from '../components/CreateMenu/index'
import { ButtonProvider } from '../service/ButtonContext';
import { MenuProvider } from '../service/MenuContext';
import UpdateMenu from '../components/UpdateMenu'
import DisplayUpdate from '../components/Display/displayupdate'

import PriceList from '../components/PriceList'
import Navbar from '../components/QA';
import Bill from '../components/Bill'
import PaymentHistory from '../components/PaymentHistory'
import UpgradeAccount from '../components/UpgradeAccount'

// eslint-disable-next-line import/no-anonymous-default-export
export default function Routers() {

    return (
        <>
            <ButtonProvider>
                <MenuProvider>
                    <Router>
                        <Switch>
                            <Route path="/login"><Login /></Route>
                            <Route path="/resgiter"><Resgiter /></Route>


                            <Route path="/price-list"><PriceList /></Route>


                            <Route path="/QA"><Navbar /></Route>
                            <Route path="/contact"><Contact /></Route>
                            <Route path="/hssd"><Hssd /></Route>
                            <Route path="/view/:id" component={Display} />
                            <Route exact path="/homepage"><HomePage /></Route>
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
                                        <Route path='/admin/report' component={Report_Interactive} />


                                        <Route path='/admin/create-menu'><CreateMenu /></Route>
                                        <Route path='/admin/update-menu/:id'><UpdateMenu /></Route>
                                    </Switch>
                                </Home>
                            </Route>
                        </Switch>
                    </Router>
                </MenuProvider>
            </ButtonProvider>
        </>
    );
}


