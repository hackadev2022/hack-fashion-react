import "./Produto.css";
import { useParams } from "react-router-dom";
import { produtos } from "../../assets/produtos/produtos";
import { ButtonProduct } from "../../components/Button-product/Button-product";

export const Produto = ({ produtosCarrinho, setProdutosCarrinho }) => {
  const params = useParams();
  const produto = produtos.filter(
    (produto) =>
      produto.id.includes(`${params.itemID}`) &&
      produto.name.includes(`${params.nome}`)
  );

  //zoom img
  let box = 0;
  let img = 0;
  setTimeout(() => {
    box = document.querySelector(".produto-item__container");
    img = document.querySelector(".produto__image");

    box.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(2)";
    });

    box.addEventListener("mouseleave", () => {
      img.style.transformOrigin = `center center`;
      img.style.transform = "scale(1)";
    });
  }, 1);
  //zoom img

  return (
    <>
      <section className="produto__container">
        <div className="produto__image-box">
          <div className="produto-item__container">
            <img
              className="produto__image"
              src={produto[0].imgDirectory}
              alt={produto[0].name}
            />
          </div>
        </div>
        <div className="produto__info">
          <h2 className="produto__title">{produto[0].name}</h2>

          {/* Produto em oferta */}
          {produto[0].offer.isOffer && (
            <h2 id="produto__offer">
              R${" "}
              {(
                produto[0].price -
                produto[0].price * produto[0].offer.percent
              ).toFixed(2)}
            </h2>
          )}
          {/* Produto normal */}
          {!produto[0].offer.isOffer && (
            <h2 className="produto__normal">
              R$ {produto[0].price.toFixed(2)}
            </h2>
          )}

          <ButtonProduct
            produto={produto[0]}
            produtosCarrinho={produtosCarrinho}
            setProdutosCarrinho={setProdutosCarrinho}
          />
        </div>
      </section>
    </>
  );
};
