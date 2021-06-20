import React, { useState } from 'react';
export const MenuContext = React.createContext();
export const MenuProvider = (props) => {
    const [menu, setMenu] = useState([]);
    // const [userss, setUserss] = useState([]);


    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            {props.children}

        </MenuContext.Provider>
    )
}