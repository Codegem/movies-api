import Menu from "../../Menu";
import { Mobile, MobileMenuWrapper } from "./MobileNavElements";

const MobileNav = ({ classOpen, handleSelect }) => {
  return (
    <MobileMenuWrapper className={classOpen}>
      <Mobile>
        <Menu handleSelect={handleSelect} />
      </Mobile>
    </MobileMenuWrapper>
  );
};

export default MobileNav;
