import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/images/search.svg";

export const InputWrapper = styled.div`
  position: relative;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media screen and (max-width: 480px) {
    position: absolute;
    right: 4rem;
    top: 2.9rem;
  }
`;

export const Logo = styled(Search)`
  position: absolute;
  align-self: center;
  right: 1.3rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
