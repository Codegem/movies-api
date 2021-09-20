import React from "react";
import { MenuLink, MenuWrapper } from "./MenuElements";
import { MenuItems } from "./MenuData";

const Menu = ({ handleSelect }) => {
  return (
    <MenuWrapper>
      {MenuItems.map((item, key) => {
        return (
          <MenuLink to={item.to} key={key} onClick={handleSelect}>
            {item.name}
          </MenuLink>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
