
import "./Carrinho.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// import { render } from "@testing-library/react";


export const Carrinho = ({ produtosCarrinho }) => {




  const [ignore, setIgnore] = useState(true);

  let subTotalPrice = 0;
  const subTotal = () => {
    for (let i = 0; i < produtosCarrinho.length; i++) {
      if (produtosCarrinho[i].offer.isOffer) {
        subTotalPrice +=
          (produtosCarrinho[i].price -
            produtosCarrinho[i].price * produtosCarrinho[i].offer.percent) *
          produtosCarrinho[i].quantidade;
      } else {
        subTotalPrice +=
          produtosCarrinho[i].price * produtosCarrinho[i].quantidade;
      }
    }
  };
  subTotal();

  const handleRemoveItem = (key) => {
    produtosCarrinho.splice(key, 1);
    if (ignore) {
      setIgnore(false);
    } else {
      setIgnore(true);
    }
  };

  const handleMinusQuant = (key) => {
    produtosCarrinho[key].quantidade--;
    if (ignore) {
      setIgnore(false);
    } else {
      setIgnore(true);
    }
  };

  const handlePlusQuant = (key) => {
    produtosCarrinho[key].quantidade++;
    if (ignore) {
      setIgnore(false);
    } else {
      setIgnore(true);
    }
  };

  return (
    <>

      <div>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
        </div>
        <div>Sacola</div>
      </div>
      <ul>
        <li>
          {produtosCarrinho.map((produto, key) => (
            <ul className="layout-carrinho">
              <li>
                <figure>
                  <div className="img-carrinho">
                    <img
                      src={`${produto.imgDirectory}`}
                      alt={`${produto.name}`}
                    />
                  </div>

                  <figcaption
                    onClick={() => {
                      handleRemoveItem(key);
                    }}
                  >
                    Remover Item
                  </figcaption>
                </figure>
              </li>
              <div>
                <li>
                  <p className="shop-line-1">{produto.name}</p>
                  <p className="shop-line-2">Tam: {produto.tamanho}</p>
                  <button
                    className="button-quantity"
                    onClick={() => {
                      handleMinusQuant(key);
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <span className="button-number">{produto.quantidade}</span>

                  <button
                    className="button-quantity"
                    onClick={() => {
                      handlePlusQuant(key);
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </li>
                <li>
                  {produto.offer.isOffer && (
                    <>
                      <p className="old-price">R${produto.price.toFixed(2)}</p>
                      <p className="shop-line-1">
                        R${" "}
                        {(
                          produto.price -
                          produto.price * produto.offer.percent
                        ).toFixed(2)}
                      </p>
                      <p className="shop-line-2">
                        10x R$
                        {(
                          (produto.price -
                            produto.price * produto.offer.percent) /
                          10
                        ).toFixed(2)}
                      </p>
                    </>
                  )}
                  {!produto.offer.isOffer && (
                    <>
                      <p className="shop-line-1">
                        R$ {produto.price.toFixed(2)}
                      </p>
                      <p className="shop-line-2">
                        10x R$ {(produto.price / 10).toFixed(2)}
                      </p>
                    </>
                  )}
                </li>
              </div>
            </ul>
          ))}
        </li>
        <hr />
      </ul>
      <h6 id="subtotal">Subtotal - R$ {subTotalPrice.toFixed(2)}</h6>
      <NavLink to="/checkout">
        <button className="button-checkout">Finalizar Compra</button>
      </NavLink>

    </>
  );
};
