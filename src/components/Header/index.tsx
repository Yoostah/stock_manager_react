import React, { memo } from "react";
import { Menu, NavOptions } from "./style";
import MenuOption from "../MenuOption";
import logo from "../../assets/logo_light.svg";

const Header: React.FC = () => {
  return (
    <Menu>
      <div>
        <img src={logo} alt="Stock Manager" />
        <NavOptions>
          <MenuOption isActive>Produtos</MenuOption>
          <MenuOption>Entregas</MenuOption>
        </NavOptions>
      </div>
    </Menu>
  );
};

export default memo(Header);
