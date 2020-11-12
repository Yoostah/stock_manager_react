import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Menu, NavOptions } from "./style";

import logo from "../../assets/logo_light.svg";

const Header: React.FC = () => {
  return (
    <Menu>
      <div>
        <img src={logo} alt="Stock Manager" />
        <NavOptions>
          <NavLink activeClassName="active-link" to="/products">
            Produtos
          </NavLink>
          <NavLink activeClassName="active-link" to="/delivery">
            Entregas
          </NavLink>
        </NavOptions>
      </div>
    </Menu>
  );
};

export default memo(Header);
