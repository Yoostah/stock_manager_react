import React, { LiHTMLAttributes } from "react";
import { Option } from "./style";

interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  isActive?: Boolean;
}

const MenuOption: React.FC<OptionProps> = ({ children, ...rest }) => {
  return <Option {...rest}>{children}</Option>;
};

export default MenuOption;
