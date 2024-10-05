import React from 'react';
import { OrderProvider } from './component/storecontext/OrderContext';
import OrderHistory from './component/orderhistory/orderhistory';
import FoodDisplay from './component/menu/menu';
import OrderForm from './component/orderfrom/order';

const App = () => {
    return (
        <OrderProvider>
            <h1>Food Ordering App</h1>
            <FoodDisplay />
            <OrderForm/>
            <OrderHistory/>
        </OrderProvider>
    );
};

export default App;
