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
  customer_id,
  setProdutosCarrinho,
}) => {
  const [showEditEndereco, setShowEditEndereco] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEndereco, setEditEndereco] = useState("");
  const [editCidade, setEditCidade] = useState("");
  const [editEstado, setEditEstado] = useState("");
  const [editCep, setEditCep] = useState("");
  const [endereco, setEndereco] = useState({
    clienteName: "João",
    endereco: "Rua dos Devs",
    cidade: "Goiânia",
    estado: "GO",
    cep: "75400000",
  });
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

  const handleEditar = () => {
    setEndereco({
      clienteName: ``,
      endereco: ``,
      cidade: ``,
      estado: ``,
      cep: ``,
    });
    setShowEditEndereco(true);
  };

  const handleSave = () => {
    setEndereco({
      clienteName: `${editName}`,
      endereco: `${editEndereco}`,
      cidade: `${editCidade}`,
      estado: `${editEstado}`,
      cep: `${editCep}`,
    });
    setShowEditEndereco(false);
  };

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

  if (localStorage.customerData !== undefined) {
    localCustomerData = JSON.parse(localStorage.customerData);
    if (localCustomerData[0].customer_id) {
      customer_id = localCustomerData[0].customer_id;
    }
  }

  useEffect(() => {
    if (customer_id !== "") {
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
            total_price: subTotalPrice,
          }) //criar order_details (product_id, pedido_id, quantity, size)
          .then(async (resultado) => {
            console.log('linha 142')
            for (let i = 0; i < produtosCarrinho.length; i++) {
              await axios.post("http://localhost/orderDetails", {
                product_id: produtosCarrinho[i].product_id,
                pedido_id: resultado.data[0].pedido_id,
                quantity: produtosCarrinho[i].quantidade,
                size: produtosCarrinho[i].tamanho,
              });
              console.log('linha 150')
              await axios.post('http://localhost:80/sms', {pedido_id: resultado.data[0].pedido_id, customer_id})
              console.log('linha 152')
            }
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
                        {!showEditEndereco && (
                          <>
                            <ul>
                              <li>
                                <b className="checkout__endereco-items">
                                  Remetente:{" "}
                                </b>
                                {endereco.clienteName}
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  Endereco:{" "}
                                </b>
                                {endereco.endereco}
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  Cidade:{" "}
                                </b>
                                {endereco.cidade}
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  Estado:{" "}
                                </b>
                                {endereco.estado}
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  CEP:{" "}
                                </b>
                                {endereco.cep}
                              </li>
                            </ul>
                            <Button
                              txt={"Editar"}
                              fn={handleEditar}
                              classes={"checkout__endereco-button"}
                            />
                          </>
                        )}
                        {showEditEndereco && (
                          <>
                            <ul>
                              <li>
                                <b className="checkout__endereco-items">
                                  Remetente:{" "}
                                </b>
                                <input
                                  className="checkout__input-text"
                                  type="text"
                                  name="name"
                                  placeholder="Seu nome"
                                  defaultValue={endereco.name}
                                  onChange={(e) => setEditName(e.target.value)}
                                />
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  Endereco:{" "}
                                </b>
                                <input
                                  className="checkout__input-text"
                                  type="text"
                                  name="endereço"
                                  placeholder="Seu endereço"
                                  defaultValue={endereco.endereco}
                                  onChange={(e) =>
                                    setEditEndereco(e.target.value)
                                  }
                                />
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  Cidade:{" "}
                                </b>
                                <input
                                  className="checkout__input-text"
                                  type="text"
                                  name="cidade"
                                  placeholder="Sua cidade"
                                  defaultValue={endereco.cidade}
                                  onChange={(e) =>
                                    setEditCidade(e.target.value)
                                  }
                                />
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  Estado:{" "}
                                </b>
                                <input
                                  className="checkout__input-text"
                                  type="text"
                                  name="estado"
                                  placeholder="Seu estado"
                                  defaultValue={endereco.estado}
                                  onChange={(e) =>
                                    setEditEstado(e.target.value)
                                  }
                                />
                              </li>
                              <li>
                                <b className="checkout__endereco-items">
                                  CEP:{" "}
                                </b>
                                <input
                                  className="checkout__input-text"
                                  type="text"
                                  name="cep"
                                  placeholder="Seu cep"
                                  defaultValue={endereco.cep}
                                  onChange={(e) => setEditCep(e.target.value)}
                                />
                              </li>
                            </ul>
                            <Button
                              txt={"Salvar"}
                              fn={handleSave}
                              classes={"checkout__endereco-button"}
                            />
                          </>
                        )}
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
