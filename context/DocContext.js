"use client"

import {createContext, useEffect, useState} from "react";

// Create Context for Data Doc
export const DocContext = createContext(null);

//Create provider
export const DocProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {

    }, [data]);

    return (
        <DocContext.Provider value={{data, setData}}>
            {children}
        </DocContext.Provider>
    )
}