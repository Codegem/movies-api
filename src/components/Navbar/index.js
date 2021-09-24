import { useState } from "react";
import Menu from "../Menu";
import Search from "../Search";
import Logo from "../Logo";
import { Navbar, MobileIcon, MobileWrapper } from "./NavbarElements";
import SearchTab from "../Search/searchtab";
import MobileNav from "./MobileNav";
import MenuIcon from "./CustomIcons";
import { useDispatch, useSelector } from "react-redux";
import { MenuToggle, SearchToggle } from "../../redux/actions/globalActions";

const Header = () => {
  const dispatch = useDispatch();
  const [className, setclassName] = useState("");

  const searchToggle = () => {
    dispatch(SearchToggle);
  };

  const menuState = useSelector((state) => state.global.menuOpen);
  const searchState = useSelector((state) => state.global.searchOpen);

  const menuHandler = () => {
    dispatch(MenuToggle);
    if (menuState) {
      setclassName("close");
      setTimeout(function () {
        setclassName("");
      }, 700);
    } else if (!menuState) {
      setclassName("open");
    }
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Menu />
        <Search searchToggle={searchToggle} />
        {searchState && <SearchTab open={searchState} />}
      </Navbar>

      <MobileWrapper>
        <MobileIcon onClick={menuHandler}>
          <MenuIcon openClass={className} />
        </MobileIcon>
        <Search searchToggle={searchToggle} className="searchMobile" />
        {searchState && <SearchTab open={searchState} />}
        {className && (
          <MobileNav classOpen={className} handleSelect={menuHandler} />
        )}
      </MobileWrapper>
    </>
  );
};

export default Header;
