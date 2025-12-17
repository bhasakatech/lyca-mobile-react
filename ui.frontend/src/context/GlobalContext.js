import React, {createContext, useContext, useState} from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [cartItems,setCartItems]= useState([]);
    const [buyItem,setBuyItem]=useState(null);
    return(
        <GlobalContext.Provider value={{cartItems,setCartItems,buyItem,setBuyItem}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext);