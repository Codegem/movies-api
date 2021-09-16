import React from "react";
import { MenuLink, MenuWrapper } from "./MenuElements";
import { MenuItems } from "./MenuData";

const Menu = () => {
  return (
    <MenuWrapper>
      {MenuItems.map((item, key) => {
        return (
          <MenuLink to={item.to} key={key}>
            {item.name}
          </MenuLink>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
