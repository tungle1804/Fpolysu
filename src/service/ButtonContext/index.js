import React, { useState } from 'react';
export const ButtonContext = React.createContext();
export const ButtonProvider = (props) => {
    const [button, setButton] = useState([]);
    // const [userss, setUserss] = useState([]);


    return (
        <ButtonContext.Provider value={[button, setButton]}>
            {props.children}

        </ButtonContext.Provider>
    )
}