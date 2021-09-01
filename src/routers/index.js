import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import HomePage from "../components/HomePage";
import Test from "../components/Test";
import Login from "../components/Login";
import Resgiter from "../components/Resgiter";
import Contact from "../components/Contact";
import Hssd from "../components/Hssd";
import Display from "../components/Display";
import DisplayCreateDetails from "../components/Display/displaycreatedetails";
import Dashboard from "../components/Dashboard";
import ManagerMenu from "../components/ManagerMenu";
import AddStaff from '../components/admin/components/AdminStaff/AddStaff';
import UpdateStaff from '../components/admin/components/AdminStaff/UpdateStaff';
import CreateMenu from "../components/CreateMenu/index";
import { ButtonProvider } from "../service/ButtonContext";
import { MenuProvider } from "../service/MenuContext";
import UpdateMenu from "../components/UpdateMenu";
import DisplayUpdate from "../components/Display/displayupdate";
import Report_Interactive from "../components/Report_Interactive";
import PriceList from "../components/PriceList";
import Navbar from "../components/QA";
import Bill from "../components/Bill";
import PaymentHistory from "../components/PaymentHistory";
import UpgradeAccount from "../components/UpgradeAccount";
import Integrated from "../components/Integrated";
import CustomerManagement from "../components/CustomerManagement";
import AdminManage from "./../components/admin/components/AdminManage";
import Report_Menu from "../components/Report_Menu";
import Report_ActionHistory from "../components/Report_ActionHistory";
import Report_Button from "../components/Rerport_Button";
import PaymentSuccess from "../components/PaymentSuccess";
import PaymentFailed from "../components/PaymentFailed";
import AdminDashboard from "../components/admin/components/AdminDashboard"
import AdminStaff from "../components/admin/components/AdminStaff"
import AdminCustomer from "../components/admin/components/AdminCustomer"
import AdminServiceFee from "../components/admin/components/AdminServiceFee"
import AdminDataOfCustomer from "../components/admin/components/AdminDataOfCustomer"
import AdminStatistical from "../components/admin/components/AdminStatistical"

export default function Routers() {

  return (
    <>
      <ButtonProvider>
        <MenuProvider>
          <Router>
            <Switch>
              <Route path="/admin/manage/:path?/:path?" exact>
                <AdminManage>
                  <Switch>
                    <Route exact path='/admin/manage/dashboard' component={AdminDashboard} />
                    <Route exact path='/admin/manage/staffs' component={AdminStaff} />
                    <Route exact path='/admin/manage/customers' component={AdminCustomer} />
                    <Route exact path='/admin/manage/services-fee' component={AdminServiceFee} />
                    <Route exact path='/admin/manage/data-of-customers' component={AdminDataOfCustomer} />
                    <Route exact path='/admin/manage/statistical' component={AdminStatistical} />
                    <Route exact path='/admin/manage/staffs/add' component={AddStaff} />
                    <Route exact path='/admin/manage/staffs/:id' component={UpdateStaff} />
                  </Switch>
                </AdminManage>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/resgiter">
                <Resgiter />
              </Route>
              <Route path="/price-list">
                <PriceList />
              </Route>
              <Route path="/QA">
                <Navbar />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/hssd">
                <Hssd />
              </Route>
              <Route path="/view/:id" component={Display} />
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/viewdetails">
                <DisplayCreateDetails />
              </Route>
              <Route path="/viewupdate/:id">
                <DisplayUpdate />{" "}
              </Route>
              <Route path="/admin/:path?/:path?" exact>
                <Home>
                  <Switch>
                    <Route exact path="/admin" component={Dashboard} />
                    <Route
                      path="/admin/payment-history"
                      component={PaymentHistory}
                    />
                    <Route
                      path="/admin/upgrade-account"
                      component={UpgradeAccount}
                    />
                    <Route path="/admin/bill" component={Bill} />
                    <Route path="/admin/success" component={PaymentSuccess} />
                    <Route path="/admin/failed" component={PaymentFailed} />
                    <Route path="/admin/list-menu">
                      <ManagerMenu />
                    </Route>
                    <Route path="/admin/integrared" component={Integrated} />
                    <Route
                      path="/admin/report-interactive"
                      component={Report_Interactive}
                    />
                    <Route path="/admin/report-menu" component={Report_Menu} />
                    <Route
                      path="/admin/report-button"
                      component={Report_Button}
                    />
                    <Route
                      path="/admin/report-action"
                      component={Report_ActionHistory}
                    />
                    <Route
                      path="/admin/customer-management"
                      component={CustomerManagement}
                    />
                    <Route path="/admin/create-menu">
                      <CreateMenu />
                    </Route>
                    <Route path="/admin/update-menu/:id">
                      <UpdateMenu />
                    </Route>
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
