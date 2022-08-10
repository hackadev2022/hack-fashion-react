import { Icon } from "../Icons/Icon";
import { MenuNavBar } from "../MenuNavBar/MenuNavBar";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
  let [menuWidth, setMenuWidth] = useState("0");
  let [search, setSearch] = useState("");

  const openMenu = () => {
    setMenuWidth("100vw");
  };
  const closeMenu = () => {
    setMenuWidth("0");
  };

  return (
    <header>
      <MenuNavBar menuWidth={menuWidth} closeMenu={closeMenu} />
      <div className="header__top container">
        <div className="header__imgs">
          <img
            className="header__img-logo img-logo"
            src="/img/logo/logo-img.png"
            alt="logo da Hack Fashion"
          />
          <img
            className="header__img-name img-name header__img--display-none"
            src="/img/logo/logo-name.png"
            alt="Hack Fashion"
          />
        </div>
        <nav className="header__nav">
          <Icon icon="fa-solid fa-location-dot" />
          <Icon icon="fa-solid fa-user" />
          <Icon icon="fa-solid fa-cart-shopping" />
          <Icon icon="fa-solid fa-bars" fn={openMenu} />
        </nav>
      </div>
      <div className="header__bottom container header__bottom--display-none">
        <div className="header__search ">
          <input
            id="header__input-text"
            type="text"
            name="search"
            placeholder="Pesquise"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <nav className="header__categories">
          <ul>
            <li>Camisas moletom</li>
            <li>Camisas</li>
            <li>Suéter</li>
            <li>Jeans</li>
            <li>Calças moletom</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
