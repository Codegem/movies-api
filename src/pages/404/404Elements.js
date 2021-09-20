import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 65%;
  @media screen and (max-width: 480px) {
    width: 110%;
  }
`;

export const Text = styled.p`
  position: absolute;
  z-index: 2;
  margin-top: 5rem;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ErrorH1 = styled.h1`
  position: absolute;
  z-index: 2;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
    top: 8rem;
  }
`;

export const PillWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 10%;
  bottom: 8rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    bottom: calc(10rem + 5vw);
    width: 90vw;
  }
`;

export const TakePill1 = styled(Link)`
  width: 10rem;
  height: 10rem;
  cursor: grab;
  :focus {
    cursor: grabbing;
  }
  @media screen and (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`;
export const TakePill2 = styled(Link)`
  width: 10rem;
  height: 10rem;
  cursor: grab;
  :focus {
    cursor: grabbing;
  }
  @media screen and (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`;
