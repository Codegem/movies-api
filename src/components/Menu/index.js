import React from "react";
import { MenuLink, MenuWrapper } from "./MenuElements";

const MenuItems = [
  { name: "home", to: "/" },
  { name: "Tv Shows", to: "/shows" },
  { name: "Movies", to: "/Movies" },
  { name: "Upcoming", to: "/upcoming" },
];

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
