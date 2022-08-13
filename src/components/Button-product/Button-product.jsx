import React, { useState }  from "react";
import "./Button-product.css";

export const ButtonProduct = () => {

    const [prodCount, setProdCount]= useState(1);
    
    return (
        <div className="count-product">
        <button
            onClick={() => {
              setProdCount(Math.max(prodCount - 1, 1));
            }}
          >
            {" "}
            <i class="fa-solid fa-minus"></i>
        </button>
        <span>{prodCount}</span>
        <button
            onClick={() => {
              setProdCount(prodCount + 1);
            }}
          >
            {" "}
            <i class="fa-solid fa-plus"></i>
        </button>
        </div>
    );
}