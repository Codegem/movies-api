import styled from "styled-components";

export const Navbar = styled.div`
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
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
