import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

const LoaderSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const PrimaryColor = "rgb(32, 199, 178)";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
    }
    html{
        background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    }   
     a{
        text-decoration: none;
        color: black;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;

export const ButtonStyle = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${PrimaryColor};
  border: none;
`;

export const LoaderPosition = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  background: none;
  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    border-style: solid;
    border-color: red;
    border-top-color: transparent;
    border-width: 4px;
    border-radius: 50%;
    animation: ${LoaderSpin} 0.8s linear infinite;
  }
`;
