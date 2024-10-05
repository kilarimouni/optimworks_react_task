// FoodList.js
import "./foodlist.css";
import React from "react";

const FoodList = ({ id, name, description, price, image, addToCart }) => {
    return (
        <div className="container-2" key={id}>
            <img src={image} alt={name} className="image" />
            <p className="title-p">{name}</p>
            <p className="food-desc">{description}</p>
            <p className="food-price">Price: ₹ {price}</p>
            <button onClick={() => addToCart({ id, name, price, image })}>
                Add to Cart
            </button>
        </div>
    );
};

export default FoodList;
