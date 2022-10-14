import "./Checkout.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import axios from "axios";
import { useEffect } from "react";

const Checkout = ({
  produtosCarrinho,
  isLoged,
  customerData,
  setProdutosCarrinho,
  addressData,
}) => {
  const [ignore, setIgnore] = useState(true);

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

  const handleRemoveItem = (key) => {
    produtosCarrinho.splice(key, 1);
    if (ignore) {
      setIgnore(false);
    } else {
      setIgnore(true);
    }
  };

  let subTotalPrice = 0;
  const subTotal = () => {
    for (let i = 0; i < produtosCarrinho.length; i++) {
      if (produtosCarrinho[i].offer > 0) {
        subTotalPrice +=
          (produtosCarrinho[i].price -
            produtosCarrinho[i].price * produtosCarrinho[i].offer) *
          produtosCarrinho[i].quantidade;
      } else {
        subTotalPrice +=
          produtosCarrinho[i].price * produtosCarrinho[i].quantidade;
      }
    }
  };
  subTotal();

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  //puxar do banco o id_address

  const [addressId, setAddressId] = useState();
  // const [addressId, setAddressId] = useState();
  const [update, setUpdate] = useState(false);

  let localCustomerData;
  let customer_id;

  if (localStorage.customerData !== undefined) {
    localCustomerData = JSON.parse(localStorage.customerData);
    if (localCustomerData[0].customer_id) {
      customer_id = localCustomerData[0].customer_id;
    }
  }

  useEffect(() => {
    if (customer_id !== "" && customer_id !== undefined) {
      fetch(`http://localhost/address/${customer_id}`)
        .then((res) => res.json())
        .then((resultado) => {
          setAddressId(resultado);
        });
    }
  }, []);

  const [loading, setLoading] = useState(true);

  const finalizePurchase = async () => {
    if (loading === true) {
      try {
        await axios
          .post("http://localhost/pedido", {
            customer_id,
            id_address: addressId,
            total_price: subTotalPrice + 30,
          }) //criar order_details (product_id, pedido_id, quantity, size)
          .then(async (resultado) => {
            for (let i = 0; i < produtosCarrinho.length; i++) {
              await axios.post("http://localhost/orderDetails", {
                product_id: produtosCarrinho[i].product_id,
                pedido_id: resultado.data[0].pedido_id,
                quantity: produtosCarrinho[i].quantidade,
                size: produtosCarrinho[i].tamanho.toLowerCase(),
              });
            }
            await axios.post("http://localhost/sms", {
              pedido_id: resultado.data[0].pedido_id,
              customer_id: customerData[0].customer_id,
            });
          });

        localStorage.removeItem("produtosCarrinho");
        setProdutosCarrinho([]);
        setUpdate(!update);
      } catch (error) {
        console.log(error);
      }
      setLoading(!loading);
    }
  };

  return (
    <>
      {loading === true && (
        <>
          {(!isLoged ||
            isLoged === "wrongPassword" ||
            isLoged === "notFound") && (
            <NavLink to="/Login">
              <div
                style={{
                  width: "100vw",
                  height: "60vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>Faça o login para finalizar o pedido clicando aqui</h1>
              </div>
            </NavLink>
          )}
          {isLoged === true && (
            <section className="checkout" style={{ marginLeft: 5 + "px" }}>
              <div className="checkout__header">
                <h1>
                  Seu Pedido{" "}
                  <NavLink to="/">
                    <h6>(continuar comprando)</h6>
                  </NavLink>
                </h1>
              </div>
              <div className="checkout__produtos">
                <div className="checkout__produtos-tems">
                  {produtosCarrinho.map((produto, key) => (
                    <div key={key} className="checkout__produtos-item">
                      <div className="checkout__produtos-img">
                        <img src={produto.img_link} alt={produto.name} />
                      </div>
                      <div className="checkout__produtos-infos">
                        <h2>Produto: {produto.name}</h2>
                        <h3>Marca: {produto.trademark}</h3>
                        <h3>Tam.: {produto.tamanho}</h3>
                        {produto.offer > 0 && (
                          <h3>
                            {formatPrice(
                              produto.price - produto.price * produto.offer
                            )}
                          </h3>
                        )}
                        {!produto.offer > 0 && (
                          <b>{formatPrice(produto.price)}</b>
                        )}
                        <i>
                          <FontAwesomeIcon
                            className="checkout__produtos-icon"
                            icon={faMinus}
                            onClick={() => {
                              handleMinusQuant(key);
                            }}
                          />
                          {produto.quantidade}
                          <FontAwesomeIcon
                            className="checkout__produtos-icon"
                            icon={faPlus}
                            onClick={() => {
                              handlePlusQuant(key);
                            }}
                          />
                        </i>
                      </div>
                      <div className="checkout__produtos-remove">
                        <FontAwesomeIcon
                          className="checkout__produtos-icon"
                          icon={faX}
                          onClick={() => {
                            handleRemoveItem(key);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {produtosCarrinho.length > 0 && (
                <>
                  <div className="checkout__infos">
                    <h1>Destino</h1>
                    <div className="checkout__infos-items">
                      <div className="checkout__endereco">
                        <>
                          <ul>
                            <li>
                              <b className="checkout__endereco-items">
                                Remetente:{" "}
                              </b>
                              {customerData[0].name}
                            </li>
                            <li>
                              <b className="checkout__endereco-items">
                                Endereco:{" "}
                              </b>
                              {addressData.address}
                            </li>
                            <li>
                              <b className="checkout__endereco-items">
                                Cidade:{" "}
                              </b>
                              {addressData.city}
                            </li>
                            <li>
                              <b className="checkout__endereco-items">
                                Estado:{" "}
                              </b>
                              {addressData.uf}
                            </li>
                            <li>
                              <b className="checkout__endereco-items">CEP: </b>
                              {addressData.cep}
                            </li>
                          </ul>
                          <NavLink to="/userConfigs">
                            <Button
                              txt={"Editar"}
                              classes={"checkout__endereco-button"}
                            />
                          </NavLink>
                        </>
                      </div>
                      <div className="checkout__pagamento">
                        <h1>Pagamento</h1>
                        <div className="checkout__total-price">
                          <div className="checkout__total-price-item">
                            <h3>Como deseja pagar ?</h3>
                            <div className="checkout__frete-price">
                              <h3>Entrega</h3>
                              <h3>R$ 30, 00</h3>
                            </div>
                            <div className="checkout__total-price-item__total-price">
                              <h3>Total</h3>
                              <h3>{formatPrice(subTotalPrice + 30)}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="checkout__metodo-pagamento">
                          <input type="radio" name="payment-method" id="pix" />
                          <label htmlFor="pix">
                            <div>
                              <i className="fa-brands fa-pix"></i>
                              PIX
                            </div>
                          </label>
                        </div>
                        <div className="checkout__metodo-pagamento">
                          <input
                            type="radio"
                            checked
                            name="payment-method"
                            id="boleto"
                            readOnly
                          />
                          <label htmlFor="boleto">
                            <div>
                              <i className="fa-solid fa-barcode"></i>
                              Boleto
                            </div>
                          </label>
                        </div>
                        <div className="checkout__metodo-pagamento">
                          <input
                            type="radio"
                            name="payment-method"
                            id="cartao-credito"
                          />
                          <label htmlFor="cartao-credito">
                            <div>
                              <i className="fa-solid fa-credit-card"></i>
                              Cartão de crédito
                            </div>
                          </label>
                        </div>

                        <Button
                          txt={"Finalizar Compra"}
                          fn={finalizePurchase}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {produtosCarrinho.length === 0 && (
                <>
                  <h1>Seu carrinho está vazio :/</h1>
                  <NavLink to={"/"}>
                    Veja nossos produtos ! <h3>Clique AQUI</h3>
                  </NavLink>
                </>
              )}
            </section>
          )}
        </>
      )}
      {loading === false && (
        <>
          <h1>TU JÁ FINALIZOU O PEDIDO DOIDO</h1>
        </>
      )}
    </>
  );
};

export default Checkout;
