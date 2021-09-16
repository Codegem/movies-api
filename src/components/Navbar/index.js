import { useState } from "react";
import Menu from "../Menu";
import Search from "../Search";
import Logo from "../Logo";
import { Navbar } from "./NavbarElements";
import SearchTab from "../Search/searchtab";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const searchToggle = () => {
    setSearchActive(!searchActive);
  };

  return (
    <Navbar>
      <Logo />
      <Menu />
      <Search searchToggle={searchToggle} />
      {searchActive && <SearchTab open={searchActive} />}
    </Navbar>
  );
};

export default Header;
