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
    html{
        background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    }   
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
