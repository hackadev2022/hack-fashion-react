import "./Checkout.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import Cards from './PaymentsCards/Cards'
import axios from "axios"

const Checkout = ({ produtosCarrinho }) => {
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
  const url = 'http://localhost:3000/sms';

  console.log('produtos')
  console.log(produtosCarrinho)

  const [ignore, setIgnore] = useState(true);

  const [pixValue, setPixValue] = useState()

  useEffect(() => {

    console.log(pixValue)

  })

  const valueLog = (event) => {
    setPixValue(event.target.value)
  }

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
  const msgteste = 'deu certin.'

  const hendleSubmitMsg = async () => {
    try {      
        await axios.post('http://localhost:80/sms', {msgteste})
    } catch (error) {
      console.log(error)      
    }
  }


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

  return (
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
                <img src={produto.imgDirectory} alt={produto.name} />
              </div>
              <div className="checkout__produtos-infos">
                <h2>Produto: {produto.name}</h2>
                <h3>Marca: {produto.trademark}</h3>
                <h3>Tam.: {produto.tamanho}</h3>
                {produto.offer.isOffer && (
                  <h3>

                    {formatPrice(
                      produto.price -
                      produto.price * produto.offer.percent
                    )}
                  </h3>
                )}
                {!produto.offer.isOffer && <b>R${formatPrice(produto.price)}</b>}
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
      <div className="checkout__infos">
        <h1>Destino</h1>
        <div className="checkout__infos-items">
          <div className="checkout__endereco">
            {!showEditEndereco && (
              <>
                <ul>
                  <li>
                    <b className="checkout__endereco-items">Remetente: </b>
                    {endereco.clienteName}
                  </li>
                  <li>
                    <b className="checkout__endereco-items">Endereco: </b>
                    {endereco.endereco}
                  </li>
                  <li>
                    <b className="checkout__endereco-items">Cidade: </b>
                    {endereco.cidade}
                  </li>
                  <li>
                    <b className="checkout__endereco-items">Estado: </b>
                    {endereco.estado}
                  </li>
                  <li>
                    <b className="checkout__endereco-items">CEP: </b>
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
                    <b className="checkout__endereco-items">Remetente: </b>
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
                    <b className="checkout__endereco-items">Endereco: </b>
                    <input
                      className="checkout__input-text"
                      type="text"
                      name="endereço"
                      placeholder="Seu endereço"
                      defaultValue={endereco.endereco}
                      onChange={(e) => setEditEndereco(e.target.value)}
                    />
                  </li>
                  <li>
                    <b className="checkout__endereco-items">Cidade: </b>
                    <input
                      className="checkout__input-text"
                      type="text"
                      name="cidade"
                      placeholder="Sua cidade"
                      defaultValue={endereco.cidade}
                      onChange={(e) => setEditCidade(e.target.value)}
                    />
                  </li>
                  <li>
                    <b className="checkout__endereco-items">Estado: </b>
                    <input
                      className="checkout__input-text"
                      type="text"
                      name="estado"
                      placeholder="Seu estado"
                      defaultValue={endereco.estado}
                      onChange={(e) => setEditEstado(e.target.value)}
                    />
                  </li>
                  <li>
                    <b className="checkout__endereco-items">CEP: </b>
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
                  <h3>{formatPrice((subTotalPrice + 30))}</h3>
                </div>
              </div>
            </div>
            <div className="checkout__metodo-pagamento">
              <input type="radio" name="payment-method" id="pix"
                value='Pix'
                onChange={valueLog}
                onClick={valueLog}
              />
              <label htmlFor="pix">
                <div>
                  <i className="fa-brands fa-pix"></i>
                  PIX
                </div>

              </label>
            </div>
            <div className="checkout__metodo-pagamento">
              <input type="radio" name="payment-method" id="boleto"
                value='Boleto'
                onChange={(e) => setPixValue(e.target.value)}
                onClick={valueLog}
              />
              <label htmlFor="boleto">
                <div>
                  <i className="fa-solid fa-barcode"></i>
                  Boleto
                </div>
              </label>
            </div>
            <div className="checkout__metodo-pagamento">
              <input type="radio" name="payment-method" id="cartao-credito"
                value='Cartão de crédito'
                onChange={(e) => setPixValue(e.target.value)}
                onClick={valueLog}
              />
              <label htmlFor="cartao-credito">
                <div>
                  <i className="fa-solid fa-credit-card"></i>
                  Cartão de crédito
                </div>
              </label>
            </div>


          {
            pixValue === 'Pix' && (
              < Cards styleCards={'CardPix'} text={<>
                <h3>Copie o codigo abaixo</h3>
                <br />
                <p className="txt-pix-code">#b3_?4?hV;nUx7VPDNz+b*EA!%Z$Kv7</p>

                </>
              } />
            )
          }

          {
            pixValue === 'Boleto' && (
              < Cards styleCards={'CardBoleto'} text={
              <button>Gerar Boleto</button>
            } />
            )
          }

          {
            pixValue === 'Cartão de crédito' && (
              < Cards styleCards={'CardCredit'} text={<>
              <label >Nome</label>
              <input type="text" />
                <br />
              <label >Numero cartão</label>
              <input type="number" />
              <br />
              <label >CVV</label>
              <input type="number" />

            </>} />
            )
          }
            {/* <Button txt={"Finalizar Compra"} fn={hendleSubmitMsg}/> */}
            <button onClick={() => {hendleSubmitMsg()}}>teste</button>
          </div>




        </div>
      </div>
    </section>
  );
};

export default Checkout