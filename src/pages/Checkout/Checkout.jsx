import "./Checkout.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

const Checkout = ({ produtosCarrinho }) => {
  const [endereco, setEndereco] = useState({
    clienteNome: "João",
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
  return (
    <section className="checkout">
      <h1>
        Seu Pedido{" "}
        <NavLink to="/">
          <h6>(continuar comprando)</h6>
        </NavLink>
      </h1>
      <div className="checkout__produtos">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Produto</th>
              <th>Tamanho</th>
              <th>Qtd.</th>
              <th>Preço_Unit.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {produtosCarrinho.map((produto, key) => (
              <tr className="checkout__tr">
                <th>
                  <div className="checkout__td-item">
                    <FontAwesomeIcon
                      className="remove"
                      icon={faX}
                      onClick={() => {
                        handleRemoveItem(key);
                      }}
                    />
                  </div>
                </th>
                <td className="checkout__td">
                  <div className="checkout__td-item">
                    <img src={produto.imgDirectory} alt={produto.name} />
                  </div>
                </td>
                <td className="checkout__td">
                  <div className="checkout__td-item">{produto.name}</div>
                </td>
                <td className="checkout__td">
                  <div className="checkout__td-item">{produto.tamanho}</div>
                </td>
                <td className="checkout__td">
                  <div className="checkout__td-item">
                    <button
                      className="button-quantity"
                      onClick={() => {
                        handleMinusQuant(key);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    {produto.quantidade}
                    <button
                      className="button-quantity"
                      onClick={() => {
                        handlePlusQuant(key);
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </td>
                {produto.offer.isOffer && (
                  <>
                    <td className="checkout__td">
                      <div className="checkout__td-item">
                        R$
                        {(
                          produto.price -
                          produto.price * produto.offer.percent
                        ).toFixed(2)}
                      </div>
                    </td>
                    <td className="checkout__td">
                      <div className="checkout__td-item">
                        R$
                        {(
                          (produto.price -
                            produto.price * produto.offer.percent) *
                          produto.quantidade
                        ).toFixed(2)}
                      </div>
                    </td>
                  </>
                )}
                {!produto.offer.isOffer && (
                  <>
                    <td className="checkout__td">
                      <div className="checkout__td-item">
                        R$
                        {produto.price.toFixed(2)}
                      </div>
                    </td>
                    <td className="checkout__td">
                      <div className="checkout__td-item">
                        R${(produto.price * produto.quantidade).toFixed(2)}
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="checkout__infos">
        <h1>Destino</h1>
        <div className="checkout__endereco">
          <ul>
            <li>{endereco.name}</li>
            <li>{endereco.endereco}</li>
            <li>{endereco.cidade}</li>
            <li>{endereco.estado}</li>
            <li>{endereco.cep}</li>
          </ul>
          <Button txt={"Editar"} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
