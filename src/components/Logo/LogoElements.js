import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryColor } from "../GlobalElements";

export const LogoWrapper = styled.div`
  width: 25%;
`;

export const LogoLink = styled(Link)`
  font-size: 2rem;
  color: ${PrimaryColor};
`;
