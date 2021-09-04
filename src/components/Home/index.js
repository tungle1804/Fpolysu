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

// test
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';



// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: 755,
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        speedDial: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }));

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
        { icon: <FavoriteIcon />, name: 'Like' },
    ];

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [sidebarAdminOpen, setSidebarAdminOpen] = useState(false);


    return (
        <div className="h-screen">
            <div className={classes.root}>

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

                            <main className="flex flex-col bg-gray-200 w-full h-auto overflow-y-auto pb-20">
                                <div className="flex w-full mx-auto lg:px-5 py-3">
                                    <div className="flex w-full bg-gray-200  rounded-sm">

                                        {children}


                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>

                {/* <div className="xl:block hidden">
                    <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
                    <Backdrop open={open} />
                    <SpeedDial
                        ariaLabel="SpeedDial tooltip example"
                        className={classes.speedDial}
                        hidden={hidden}
                        icon={<SpeedDialIcon />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                tooltipOpen
                                onClick={handleClose}
                            />
                        ))}
                    </SpeedDial>
                </div> */}

                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);\n}\n::-webkit-scrollbar-track {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: inset 7px 10px 12px #f0f0f0;\n}\n",
                    }}
                />

            </div>
        </div>



    )
}
