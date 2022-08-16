import React, { useState } from "react";
import "./Button-product.css";

export const ButtonProduct = () => {
  const [prodCount, setProdCount] = useState(1);

  return (
    <>
      <div>
        <p className="title-prod">Tamanho:</p>

        <button className="size-prod">P</button>
        <button className="size-prod">M</button>
        <button className="size-prod">G</button>
        <button className="size-prod">GG</button>
      </div>

      <div>
        <p className="title-prod">Quantidade:</p>

        <button
          className="quantity-prod"
          onClick={() => {
            setProdCount(Math.max(prodCount - 1, 1));
          }}
        >
          {" "}
          <i class="fa-solid fa-minus"></i>
        </button>

        <span className="number-prod">{prodCount}</span>

        <button
          className="quantity-prod"
          onClick={() => {
            setProdCount(prodCount + 1);
          }}
        >
          {" "}
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
};
