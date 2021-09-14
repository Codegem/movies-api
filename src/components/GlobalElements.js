import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const PrimaryColor = "rgb(32, 199, 178)";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body{
        width: 100%;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: black;
    }
`;

export default GlobalStyle;

export const ButtonStyle = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${PrimaryColor};
  border: none;
`;

export const Header = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  top: 0;
  z-index: 999;
  display: flex;
  width: 100vw;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  border-bottom: 1px solid rgba(147, 148, 150, 0.6);
`;
