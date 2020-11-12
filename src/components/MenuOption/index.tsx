import React, { useState, LiHTMLAttributes, memo } from "react";
import { Option } from "./style";

interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  isActive?: Boolean;
}

const MenuOption: React.FC<OptionProps> = ({ children, ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Option
      isActive={isActive}
      {...rest}
      onClick={() => setIsActive(!isActive)}
    >
      {children}
    </Option>
  );
};

export default memo(MenuOption);
