import "./MenuNavBar.css";

export const MenuNavBar = ({ menuWidth, closeMenu }) => {
  setTimeout(() => {
     let divMenuNavBar = document.querySelector(".menu-nav-bar");
     divMenuNavBar.style.width = menuWidth;
  }, 1);

  return (
    <div className="menu-nav-bar">
      <i className="menu fa-solid fa-xmark" onClick={closeMenu}></i>
      <ul>
        <li onClick={closeMenu}>Jeans</li>
        <li onClick={closeMenu}>Camisas</li>
        <li onClick={closeMenu}>Suéter</li>
        <li onClick={closeMenu}>Calças moletom</li>
        <li onClick={closeMenu}>Camisas moletom</li>
      </ul>
    </div>
  );
};
