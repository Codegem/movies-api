import { useState } from "react";
import Menu from "../Menu";
import Search from "../Search";
import Logo from "../Logo";
import { Navbar, MobileIcon } from "./NavbarElements";
import SearchTab from "../Search/searchtab";
import MobileNav from "./MobileNav";
import MenuIcon from "./CustomIcons";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [className, setclassName] = useState("");
  const [menuOpen, setmenuOpen] = useState(false);

  const searchToggle = () => {
    setSearchActive(!searchActive);
  };

  const menuHandler = () => {
    setmenuOpen(!menuOpen);
    if (menuOpen) {
      setclassName("close");
      setTimeout(function () {
        setclassName("");
      }, 1000);
    } else if (!menuOpen) {
      setclassName("open");
    }
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Menu />
        <Search searchToggle={searchToggle} />
        {searchActive && <SearchTab open={searchActive} />}
      </Navbar>
      <MobileIcon onClick={menuHandler}>
        <MenuIcon openClass={className} />
      </MobileIcon>
      {className && <MobileNav classOpen={className} />}
    </>
  );
};

export default Header;
