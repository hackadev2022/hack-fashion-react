import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Button-product.css";

export const ButtonProduct = ({
  produto,
  produtosCarrinho,
  setProdutosCarrinho,
}) => {
  const [prodCount, setProdCount] = useState(1);
  let [tamanho, setTamanho] = useState("P");

  const handleAddCart = () => {
    if (tamanho === "") {
      alert("Escolha o tamanho !");
    } else {
      setProdutosCarrinho([...produtosCarrinho, produtoEscolhido]);
    }
  };

  const produtoEscolhido = {
    name: produto.name,
    tamanho: tamanho,
    quantidade: prodCount,
    offer: produto.offer,
    price: produto.price,
    imgDirectory: produto.imgDirectory,
  };

  return (
    <>
      <div className="input-size">
        <p className="identifier">Tamanho:</p>
        <input type="radio" id="P" name="size" value="P" />
        <label
          for="P"
          onClick={() => {
            setTamanho("P");
          }}
        >
          P
        </label>
        <input
          type="radio"
          id="M"
          name="size"
          value="M"
          onClick={() => {
            setTamanho("M");
          }}
        />
        <label for="M">M</label>

        <input
          type="radio"
          id="G"
          name="size"
          value="G"
          onClick={() => {
            setTamanho("G");
          }}
        />
        <label for="G">G</label>

        <input
          type="radio"
          id="GG"
          name="size"
          value="GG"
          onClick={() => {
            setTamanho("GG");
          }}
        />
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
        <NavLink to="/Carrinho">
          <button className="button-add" onClick={handleAddCart}>
            Adicionar ao carrinho
          </button>
        </NavLink>
      </div>
    </>
  );
};
