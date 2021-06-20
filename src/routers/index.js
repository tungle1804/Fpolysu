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
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <>
            <ButtonProvider>
                <MenuProvider>
                    <Router>
                        <Switch>
                            <Route path="/login"><Login /></Route>
                            <Route path="/resgiter"><Resgiter /></Route>
                            <Route path="/view/:id" component={Display} />
                            <Route exact path="/homepage"><HomePage /></Route>
                            <Route path="/viewdetails"><DisplayCreateDetails /></Route>
                            <Route path="/viewupdate/:id"><DisplayUpdate /> </Route>
                            <Route path='/admin/:path?/:path?' exact>

                                <Home>
                                    <Switch>

                                        <Route exact path='/admin' component={Dashboard} />

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


