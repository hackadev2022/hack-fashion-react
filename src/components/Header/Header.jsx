import { NavLink } from "react-router-dom";
import { MenuNavBar } from "../MenuNavBar/MenuNavBar";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export const Header = ({ searchFn }) => {
  let [menuWidth, setMenuWidth] = useState("0");
  let [search, setSearch] = useState("");

  const openMenu = () => {
    setMenuWidth("100vw");
  };
  const closeMenu = () => {
    setMenuWidth("0");
  };
  const handleSearch = () => {
    searchFn(search);
  };
  const handleMoletom = () => {
    searchFn("Moletom");
  };
  const handleCamiseta = () => {
    searchFn("Camiseta");
  };
  const handleCalça = () => {
    searchFn("Calça");
  };
  const handleJeans = () => {
    searchFn("Jeans");
  };
  const handleJaqueta = () => {
    searchFn("Jaqueta");
  };

  document.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      document.getElementById("SearchEnter").click();
    }
  });

  return (
    <header>
      <MenuNavBar
        menuWidth={menuWidth}
        closeMenu={closeMenu}
        handleType={{
          handleMoletom,
          handleCamiseta,
          handleCalça,
          handleJeans,
          handleJaqueta,
        }}
      />
      <div className="header__top container">
        <div className="header__imgs">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeBtn" : "activeBtn")}
          >
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
          </NavLink>
        </div>
        <nav className="header__nav">
          <FontAwesomeIcon icon={faLocationDot} />
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? "activeUser" : "activeUser"
            }
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <FontAwesomeIcon icon={faCartShopping} />

          <FontAwesomeIcon icon={faBars} onClick={openMenu} />
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
          <i
            id="SearchEnter"
            className="fa-solid fa-magnifying-glass"
            onClick={handleSearch}
          ></i>
        </div>
        <nav className="header__categories">
          <ul>
            <li onClick={handleMoletom}>Moletom</li>
            <li onClick={handleCamiseta}>Camiseta</li>
            <li onClick={handleCalça}>Calça</li>
            <li onClick={handleJeans}>Jeans</li>
            <li onClick={handleJaqueta}>Jaqueta</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
