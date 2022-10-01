import { NavLink } from "react-router-dom";
import "./UserConfigs.css";

export const UserConfigs = ({ customerData, setCustomerData }) => {
  console.log("customerData");
  console.log(customerData);
  return (
    <section className="section__userConfigs">
      {customerData[0].loged !== true && (
        <NavLink to="/login">
          <h1>faça o login clicando AQUI</h1>
        </NavLink>
      )}
      {customerData[0].loged === true && <h1>você está logado</h1>}
    </section>
  );
};

export default UserConfigs;
