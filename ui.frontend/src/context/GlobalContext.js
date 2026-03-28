import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // const [user,setUser]=useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [buyItem, setBuyItem] = useState(null);






    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartPlanItems")) || [];
        setCartItems(items);
    }, []);






    return (
        <GlobalContext.Provider value={{ cartItems, setCartItems, buyItem, setBuyItem }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext);