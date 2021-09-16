import React from "react";
import { LogoWrapper, LogoLink } from "./LogoElements";
const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <LogoLink to="/movies-api/">MovieDb</LogoLink>
      </LogoWrapper>
    </>
  );
};

export default Logo;
