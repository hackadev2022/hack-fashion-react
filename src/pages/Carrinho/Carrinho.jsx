import "./Carrinho.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export const Carrinho = ({ produtosCarrinho }) => {
  // console.log(
  //   localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho))
  // );

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
    if (produtosCarrinho[key].quantidade > 1) {
      produtosCarrinho[key].quantidade--;
    }
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
      <div className="cart__return">
        <div>
          <NavLink to="/" className="icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
        </div>
        <div>Sacola</div>
        <div></div>
      </div>
      <div className="cart__container">
        <div className="products__container">
          {/* <ul>
            <li> */}
          <div className="products__itens">
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
                  </figure>
                </li>
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
                        R$ {formatPrice(produto.price)}
                      </p>
                      <p className="shop-line-2">
                        10x R$ {formatPrice(produto.price / 10)}
                      </p>
                    </>
                  )}
                </li>

                <li className="remove-block">
                  <FontAwesomeIcon
                    className="remove"
                    icon={faXmark}
                    onClick={() => {
                      handleRemoveItem(key);
                    }}
                  />
                </li>
              </ul>
            ))}

            <div className="space"></div>
          </div>
        </div>

        <div className="cart__promotion-code">
          <p>Código promocional</p>
          <input type="text" placeholder="Insira seu código promocional" />
          <button>Aplicar</button>
        </div>

        <div id="subtotal">
          <div>
            <p>Subtotal</p>
          </div>
          <div>
            <h6>{formatPrice(subTotalPrice)}</h6>
          </div>
        </div>
      </div>

      <NavLink to="/checkout" className="cart__total">
        <p>Finalizar compra</p>
      </NavLink>
    </>
  );
};

export const formatPrice = (price) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};;
