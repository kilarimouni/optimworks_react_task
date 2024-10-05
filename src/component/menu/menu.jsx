// FoodDisplay.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodList from "../foodlist/foodlist";
import "./menu.css";
import { useOrderContext } from "../storecontext/OrderContext";

const FoodDisplay = ({ category }) => {
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { placeOrder } = useOrderContext();

    useEffect(() => {
        axios
            .get("https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968", {
                headers: {
                    "X-Master-Key": "<YOUR_API_KEY_HERE>",
                },
            })
            .then((response) => {
                if (response.data.record) {
                    setFoodList(response.data.record);
                } else {
                    console.error("No record found in response.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching food list:", error);
                setLoading(false);
            });
    }, []);

    // Function to add food item to the cart
    const addToCart = (item) => {
        placeOrder({ ...item, totalPrice: item.price });
    };

    return (
        <div className="display" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <h2>TOP DISHES NEAR YOU</h2>
            <div className="display-list">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    foodList.map((item) => (
                        <FoodList
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.sub_category}
                            price={item.price}
                            image={item.image_url}
                            addToCart={addToCart} // Pass addToCart function
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;
