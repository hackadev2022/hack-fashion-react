import "./Produtos.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../Button/Button";

export const Produtos = ({ produto }) => {
  //Stars//
  let ratingStar = 0;
  let [numberOfStars, setNumberOfStars] = useState(0);
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      let aux = ratingStar;
      ratingStar = produto.ratingStar[i];
      if (aux > ratingStar) {
        ratingStar = aux;
      }
    }
    setNumberOfStars(produto.ratingStar.lastIndexOf(ratingStar) + 1);
  }, 10);
  //Stars//

  //Heart//
  let [favoriteHeart, setFavoriteHeart] = useState("");
  //Heart//

  //Total Rating//
  const totalRating = () => {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
      soma = soma + produto.ratingStar[i];
    }
    return soma;
  };
  //Total Rating//

  return (
    <div className="produtos__container">
      {!produto.inStock && (
        <>
          <div className="produtos__out-of-stock">
            <b>
              <h1>FORA DE ESTOQUE</h1>
            </b>
          </div>
          <div className="produtos">
            <div className="produtos__top">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => {
                  favoriteHeart === ""
                    ? setFavoriteHeart("red")
                    : setFavoriteHeart("");
                }}
                style={{ color: `${favoriteHeart}`, transition: "all 0.3s" }}
              />
              <div className="produtos__img">
                <img src={produto.imgDirectory} alt={produto.name} />
              </div>
            </div>
            <div className="produtos__bottom">
              <div className="produtos__info">
                <b>R$ {produto.price.toFixed(2)}</b>
                <small>
                  3x R$ {`${(produto.price / 3).toFixed(2)}`} sem juros
                </small>
                <p className="produtos__name">{produto.name}</p>
                <p className="produtos__trademark">{produto.trademark}</p>
              </div>
              <div className="produtos__rating">
                <div className="produtos__stars">
                  {numberOfStars === 1 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="twoStar" />
                      <FontAwesomeIcon icon={faStar} className="threeStar" />
                      <FontAwesomeIcon icon={faStar} className="fourStar" />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars === 2 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="threeStar" />
                      <FontAwesomeIcon icon={faStar} className="fourStar" />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars === 3 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="threeStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="fourStar" />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars === 4 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="threeStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fourStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars === 5 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="threeStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fourStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fiveStar"
                        style={{ color: "gold" }}
                      />
                    </>
                  )}
                </div>
                <div className="produtos__totalRating">
                  <i>{totalRating()} avaliações</i>
                </div>
              </div>

              <Button txt="Comprar" classes="produtos__button" />
            </div>
          </div>
        </>
      )}
      {produto.inStock && (
        <div className="produtos">
          <div className="produtos__top">
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                favoriteHeart === ""
                  ? setFavoriteHeart("red")
                  : setFavoriteHeart("");
              }}
              style={{ color: `${favoriteHeart}`, transition: "all 0.3s" }}
            />
            <NavLink
              to="/Produto"
              className={({ isActive }) => (isActive ? "default" : "default")}
            >
              <div className="produtos__img">
                <img src={produto.imgDirectory} alt={produto.name} />
              </div>
            </NavLink>
          </div>
          <div className="produtos__bottom">
            <div className="produtos__info">
              {produto.offer.isOffer && (
                <>
                  <small>
                    <del>R${produto.price.toFixed(2)}</del>
                  </small>{" "}
                  <br />
                  <b>
                    R${" "}
                    {(
                      produto.price -
                      produto.price * produto.offer.percent
                    ).toFixed(2)}
                    <div
                      className="produtos__offer-div"
                      style={{
                        backgroundColor: "red",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <i style={{ color: "white" }}>
                        -{produto.offer.percent * 100}%
                      </i>
                    </div>
                  </b>
                  <small>
                    3x R${" "}
                    {`${(
                      (produto.price - produto.price * produto.offer.percent) /
                      3
                    ).toFixed(2)}`}{" "}
                    sem juros
                  </small>
                  <p className="produtos__name">{produto.name}</p>
                  <p className="produtos__trademark">{produto.trademark}</p>
                </>
              )}
              {!produto.offer.isOffer && (
                <div className="produtos__info">
                  <b>R$ {produto.price.toFixed(2)}</b>
                  <small>
                    3x R$ {`${(produto.price / 3).toFixed(2)}`} sem juros
                  </small>
                  <p className="produtos__name">{produto.name}</p>
                  <p className="produtos__trademark">{produto.trademark}</p>
                </div>
              )}
            </div>
            <div className="produtos__rating">
              <div className="produtos__stars">
                {numberOfStars === 1 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="twoStar" />
                    <FontAwesomeIcon icon={faStar} className="threeStar" />
                    <FontAwesomeIcon icon={faStar} className="fourStar" />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars === 2 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="threeStar" />
                    <FontAwesomeIcon icon={faStar} className="fourStar" />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars === 3 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="threeStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="fourStar" />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars === 4 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="threeStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fourStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars === 5 && (
                  <>
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="threeStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fourStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fiveStar"
                      style={{ color: "gold" }}
                    />
                  </>
                )}
              </div>
              <div className="produtos__totalRating">
                <i>{totalRating()} avaliações</i>
              </div>
            </div>

            <Button txt="Comprar" classes="produtos__button" />
          </div>
        </div>
      )}
    </div>
  );
};
