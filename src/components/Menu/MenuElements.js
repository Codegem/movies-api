import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryColor } from "../GlobalElements";

export const MenuWrapper = styled.div`
  width: 50%;
`;

export const MenuLink = styled(Link)`
  text-transform: capitalize;
  font-size: 1.325rem;
  color: ${PrimaryColor};
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
