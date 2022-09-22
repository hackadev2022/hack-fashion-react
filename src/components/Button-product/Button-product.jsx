import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Button-product.css";
import { useEffect } from "react";
import { useRef } from "react";

export const ButtonProduct = ({
  produto,
  produtosCarrinho,
  setProdutosCarrinho,
}) => {
  // const [productSizes, setProductSizes] = useState([]);
  const [update, setUpdate] = useState(false);
  let productSizeP = useRef(0);
  let productSizeM = useRef(0);
  let productSizeG = useRef(0);
  let productSizeGG = useRef(0);

  useEffect(() => {
    fetch(`http://localhost/productSize/${produto.product_id}`)
      .then((res) => res.json())
      .then((resultado) => {
        productSizeP.current = resultado[0].p;
        productSizeM.current = resultado[0].m;
        productSizeG.current = resultado[0].g;
        productSizeGG.current = resultado[0].gg;

        setUpdate(!update);
      });
  }, [
    productSizeP,
    productSizeM,
    productSizeG,
    productSizeGG,
    produto.product_id,
  ]);

  const [prodCount, setProdCount] = useState(1);
  let [tamanho, setTamanho] = useState();

  const handleAddCart = () => {
    if (!tamanho) {
      alert("Escolha o tamanho !");
    } else {
      setProdutosCarrinho([...produtosCarrinho, produtoEscolhido]);
    }
  };

  const produtoEscolhido = {
    name: produto.name,
    tamanho: tamanho,
    quantidade: prodCount,
    offer: produto.offer_percent,
    price: produto.price,
    img_link: produto.img_link,
    trademark: produto.trademark,
  };

  return (
    <>
      <div className="input-size">
        <p className="identifier">Tamanho:</p>
        {productSizeP.current === 0 && (
          <>
            <div className="not-in-stock" htmlFor="P">
              P
            </div>
          </>
        )}
        {productSizeP.current > 0 && (
          <>
            <input type="radio" id="P" name="size" value="P" />
            <label
              htmlFor="P"
              onClick={() => {
                setTamanho("P");
              }}
            >
              P
            </label>
          </>
        )}

        {productSizeM.current === 0 && (
          <>
            <div className="not-in-stock" htmlFor="M">
              M
            </div>
          </>
        )}
        {productSizeM.current > 0 && (
          <>
            <input type="radio" id="M" name="size" value="M" />
            <label
              htmlFor="M"
              onClick={() => {
                setTamanho("M");
              }}
            >
              M
            </label>
          </>
        )}

        {productSizeG.current === 0 && (
          <>
            <div className="not-in-stock" htmlFor="P">
              G
            </div>
          </>
        )}
        {productSizeG.current > 0 && (
          <>
            <input type="radio" id="G" name="size" value="G" />
            <label
              htmlFor="G"
              onClick={() => {
                setTamanho("G");
              }}
            >
              G
            </label>
          </>
        )}

        {productSizeGG.current === 0 && (
          <>
            <div className="not-in-stock" htmlFor="GG">
              GG
            </div>
          </>
        )}
        {productSizeGG.current > 0 && (
          <>
            <input type="radio" id="GG" name="size" value="GG" />
            <label
              htmlFor="GG"
              onClick={() => {
                setTamanho("GG");
              }}
            >
              GG
            </label>
          </>
        )}
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
          <i className="fa-solid fa-minus"></i>
        </button>

        <span className="button-number">{prodCount}</span>

        <button
          className="button-quantity"
          onClick={() => {
            setProdCount(prodCount + 1);
          }}
        >
          {" "}
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      <div>
        {!tamanho && (
          <button className="button-add" onClick={handleAddCart}>
            Adicionar ao carrinho
          </button>
        )}
        {tamanho && (
          <NavLink to="/Carrinho">
            <button className="button-add" onClick={handleAddCart}>
              Adicionar ao carrinho
            </button>
          </NavLink>
        )}
      </div>
    </>
  );
};
