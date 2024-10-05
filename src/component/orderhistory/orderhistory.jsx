// OrderHistory.js
import React from "react";
import { useOrderContext } from "../storecontext/OrderContext";

const OrderHistory = () => {
    const { orders } = useOrderContext();

    return (
        <div className="order-history">
            <h2>Order History</h2>
            <div className="order-list">
                {orders.length === 0 ? (
                    <p>No orders placed yet.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="order-item">
                            <h4>Order {index + 1}</h4>
                            <p>Table Number: {order.tableNumber}</p>
                            <p>Contact Number: {order.contactNumber}</p>
                            <p>Date: {order.date}</p>
                            <p>Time: {order.time}</p>
                            <h5>Ordered Items:</h5>
                            <p>Name: {order.name}</p>
                            <p>Price: ₹ {order.price}</p>
                            <img src={order.image} alt={order.name} style={{ width: '100px', height: '100px' }} />
                            {/* Add more item details if necessary */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
