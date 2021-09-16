import styled, { keyframes } from "styled-components";
import { PrimaryColor } from "../../GlobalElements";

const AppearInput = keyframes`
	0% {
		transform: translateY(-20px);
		left: 12.5%;
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		left: 50%;
		transform: translate(-50%, 0);
		opacity: 1;
	}
`;

export const Search = styled.div`
  position: absolute;
  z-index: 99;
  width: 75vw;
  height: 4rem;
  top: 8.2vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    animation: ${AppearInput} 1s forwards;
  }
`;

export const SearchInput = styled.input`
  width: 95%;
  height: 2.5rem;
  border: none;
  border-bottom: 1px solid ${PrimaryColor};
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  padding-left: 15px;
  color: white;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
