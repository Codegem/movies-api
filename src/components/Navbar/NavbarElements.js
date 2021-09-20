import styled from "styled-components";

export const Navbar = styled.div`
  display: none;
  @media screen and (min-width: 480px) {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    top: 0;
    z-index: 900;
    display: flex;
    width: 100%;
    height: 8vh;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
    border-bottom: 1px solid rgba(147, 148, 150, 0.6);
  }
`;

export const MobileWrapper = styled.div`
  position: fixed;
  z-index: 999;
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    width: 100%;
    top: -0.5rem;
    right: -0.5rem;
  }
`;

export const MobileIcon = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  right: 2rem;
  top: 2rem;
`;
