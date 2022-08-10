import "./Banner.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icons/Icon";

export const Banner = ({
  bannerTitle,
  bannerMainInfo,
  bannerInfo,
  bannerDirectoryImg,
}) => {
  return (
    <section
      className="banner "
      style={{
        backgroundImage: `url("/img/${bannerDirectoryImg}")`,
      }}
    >
      <div className="banner__top">
        <img
          className="banner__img"
          src="/img/logo/logo-img.png"
          alt="logo Hack-Fashion"
        />
        {bannerTitle && (
          <strong>
            <h2>{bannerTitle}</h2>
          </strong>
        )}
        <br />
        <div>
          {bannerMainInfo && (
            <strong>
              <h2>{bannerMainInfo}</h2>
            </strong>
          )}
          <br />
          {bannerInfo && (
            <strong>
              <h3>{bannerInfo}</h3>
            </strong>
          )}
          <br />
        </div>
      </div>
      <div className="banner__bottom">
        <Button txt="Comprar" />
        <div className="banner__icon">
          <Icon icon="fa-solid fa-chevron-down" />
        </div>
      </div>
    </section>
  );
};
