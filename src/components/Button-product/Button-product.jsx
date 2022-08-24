import React, { useState } from "react";
import "./Button-product.css";

export const ButtonProduct = () => {
  const [prodCount, setProdCount] = useState(1);

  return (
    <>
      <div className="input-size">
        <p className="identifier">Tamanho:</p>
        <input type="radio" id="P" name="size" value="P" />
        <label for="P">P</label>

        <input type="radio" id="M" name="size" value="M" />
        <label for="M">M</label>

        <input type="radio" id="G" name="size" value="G" />
        <label for="G">G</label>

        <input type="radio" id="GG" name="size" value="GG" />
        <label for="GG">GG</label>
      </div>

      <div>
        <p className="identifier">Quantidade:</p>

        <button
          className="button-quantity"
          onClick={() => {
            setProdCount(Math.max(prodCount - 1, 1));
          }}
        >
          {" "}
          <i class="fa-solid fa-minus"></i>
        </button>

        <span className="button-number">{prodCount}</span>

        <button
          className="button-quantity"
          onClick={() => {
            setProdCount(prodCount + 1);
          }}
        >
          {" "}
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <div>
        <button className="button-add">Adicionar ao carrinho</button>
      </div>
    </>
  );
};
