import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { PrimaryColor } from "../GlobalElements";

export const InputWrapper = styled.div`
  position: relative;
  width: 15%;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Logo = styled(Search)`
  position: absolute;
  align-self: center;
  right: 1.3rem;
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
  background-color: ${PrimaryColor};
  border-radius: 20%;
`;

export const Input = styled.input`
  display: none;
  &.open {
    display: block;
    width: 15rem;
    height: 2rem;
    padding-left: 5px;
    padding-top: 5px;
    border: none;
    background: transparent;
    border-bottom: 1.5px solid ${PrimaryColor};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${PrimaryColor};
    }
  }
`;
