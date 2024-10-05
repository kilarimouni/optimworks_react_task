// OrderContext.js
import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const placeOrder = (orderDetails) => {
        // Logic to place an order, including the ordered food items
        setOrders((prevOrders) => [...prevOrders, orderDetails]);
    };

    return (
        <OrderContext.Provider value={{ orders, placeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => {
    return useContext(OrderContext);
};
