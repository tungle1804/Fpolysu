import React, { useState } from 'react';
export const InputContext = React.createContext();
export const InputProvider = (props) => {
    const [input, setInput] = useState([]);
    // const [userss, setUserss] = useState([]);


    return (
        <InputContext.Provider value={[input, setInput]}>
            {props.children}

        </InputContext.Provider>
    )
}