import React, { useState } from "react";
// import { useOrderContext } from "../../contexts/OrderContext";
import { useOrderContext } from "../storecontext/OrderContext";
import "./order.css";

const OrderForm = () => {
    const { placeOrder } = useOrderContext();
    const [tableNumber, setTableNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrder = {
            tableNumber,
            contactNumber,
            date,
            time,
        };
        placeOrder(newOrder); // Place the order
        // Reset form fields
        setTableNumber("");
        setContactNumber("");
        setDate("");
        setTime("");
    };

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <h2>Place Your Order</h2>
            <input
                type="text"
                placeholder="Table Number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Contact Number (optional)"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;
