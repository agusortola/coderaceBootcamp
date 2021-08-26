import { createContext } from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";

export const DataContext = createContext()

export const DataProvider = ({children}) => {

    const {data} = useFetch('http://localhost:8000/questions')
    

    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
};