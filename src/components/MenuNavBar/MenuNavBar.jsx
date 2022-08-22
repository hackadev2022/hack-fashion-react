import "./MenuNavBar.css";

export const MenuNavBar = ({ menuWidth, closeMenu, handleType }) => {
  setTimeout(() => {
    let divMenuNavBar = document.querySelector(".menu-nav-bar");
    divMenuNavBar.style.width = menuWidth;
  }, 1);

  const handleMoletom = () => {
    handleType.handleMoletom();
    closeMenu();
  };
  const handleCamiseta = () => {
    handleType.handleCamiseta();
    closeMenu();
  };
  const handleCalça = () => {
    handleType.handleCalça();
    closeMenu();
  };
  const handleJeans = () => {
    handleType.handleJeans();
    closeMenu();
  };
  const handleJaqueta = () => {
    handleType.handleJaqueta();
    closeMenu();
  };

  return (
    <div onClick={closeMenu} className="menu-nav-bar">
      <i className="menu fa-solid fa-xmark" onClick={closeMenu}></i>
      <ul>
        <li onClick={handleMoletom}>Moletom</li>
        <li onClick={handleCamiseta}>Camiseta</li>
        <li onClick={handleCalça}>Calça</li>
        <li onClick={handleJeans}>Jeans</li>
        <li onClick={handleJaqueta}>Jaqueta</li>
      </ul>
    </div>
  );
};
