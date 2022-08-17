import "./Produtos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { produtos } from "../../assets/produtos/produtos";

export const Produtos = () => {
  return (
    <div className="produtos">
      <div className="produtos__top">
        <FontAwesomeIcon icon={faHeart} />
        <img src={produtos[0].imgDirectory} alt={produtos[0].alt} />
      </div>
      <div className="produtos__bottom">
        {produtos[0].offer.isOffer && (
          <div className="produtos__info">
            <small>
              <del>R${produtos[0].price}</del>
            </small>
            <b>
              {(
                produtos[0].price -
                produtos[0].price * produtos[0].offer.percent
              ).toFixed(2)}
              <div
                style={{
                  backgroundColor: "red",
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <b style={{ color: "white" }}>
                  -{produtos[0].offer.percent * 100}%
                </b>
              </div>
            </b>
          </div>
        )}
        <p>{produtos[0].trademark}</p>

        <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
      </div>
    </div>
  );
};
