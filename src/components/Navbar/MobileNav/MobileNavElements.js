import styled, { keyframes } from "styled-components";

const MenuOpen = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

const MenuClose = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    opacity: 1;
  }
`;

export const MobileMenuWrapper = styled.div`
  position: absolute;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  &.open {
    animation: ${MenuOpen} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  }
  &.close {
    animation: ${MenuClose} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
  }
`;

export const Mobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    a {
      text-align: center;
      font-size: 2.5rem;
      :not(:last-child) {
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }
`;
