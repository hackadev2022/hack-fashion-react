import "./Carrinho.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
  faX,
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
              <ul key={key} className="layout-carrinho">
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
                      <p className="old-price">{formatPrice(produto.price)}</p>
                      <p className="shop-line-1">
                        {" "}
                        {formatPrice(
                          produto.price -
                          produto.price * produto.offer.percent
                        )}
                      </p>
                      <p className="shop-line-2">
                        10x{" "}
                        {(formatPrice(
                          (produto.price -
                            produto.price * produto.offer.percent) /
                          10
                        ))}
                      </p>
                    </>
                  )}
                  {!produto.offer.isOffer && (
                    <>
                      <p className="shop-line-1">
                        R$ {formatPrice(produto.price)}
                      </p>
                      <p className="shop-line-2">
                        10x {" "} {formatPrice(produto.price / 10)}
                      </p>
                    </>
                  )}
                </li>

                <FontAwesomeIcon
                  className="remove"
                  icon={faX}
                  onClick={() => {
                    handleRemoveItem(key);
                  }}
                />
              </ul>
            ))}

            <div className="space"></div>
          </div>
          {/* </li> */}

          {/* </ul> */}
        </div>
        {/* <div className="cart__promotion-code">
          <input type="text" placeholder="Código Promocional" />
          <button>Aplicar</button>
        </div> */}
      </div>
      <div className="cart__total">
        <h6 id="subtotal">Subtotal - {" "}{formatPrice(subTotalPrice)}</h6>
        <NavLink to="/checkout">
          <Button className="button-checkout" txt={"Finalizar Compra"}>
            Finalizar Compra
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export const formatPrice = (price) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};;
