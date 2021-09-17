import Menu from "../../Menu";
import { Mobile, MobileMenuWrapper } from "./MobileNavElements";

const MobileNav = ({ classOpen }) => {
  return (
    <MobileMenuWrapper className={classOpen}>
      <Mobile>
        <Menu />
      </Mobile>
    </MobileMenuWrapper>
  );
};

export default MobileNav;
