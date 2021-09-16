import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const PrimaryColor = "rgb(32, 199, 178)";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
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
