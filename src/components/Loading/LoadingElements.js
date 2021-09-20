import styled, { keyframes } from "styled-components";

const upDown = keyframes`
    0%{
      transform: rotate(-45deg);
      left: -4.75rem;
      top: -1.5rem;
    }
    15%{
      transform: rotate(-25deg);
      left: -2.05rem;
      top: 0.9rem;
    }
    35%{
      transform: rotate(-10deg);
      left: -0.6rem;
      top: 3.2rem;
    }
    50%{
      transform: rotate(0deg);
      left: 0rem;
      top: 4.95rem;
    }
    65%{
      transform: rotate(-10deg);
      left: -0.6rem;
      top: 3.2rem;
    }
    80%{
      transform: rotate(-25deg);
      left: -2.05rem;
      top: 0.9rem;
    }
    100%{
      transform: rotate(-45deg);
      left: -4.75rem;
      top: -1.5rem;
    }

`;

export const LoadingWrapper = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
`;

export const LoadingCutter = styled.div`
  position: absolute;
  width: 20rem;
  height: 5rem;
  bottom: 15rem;
  border: 5px solid white;
  display: flex;
  justify-content: space-evenly;
  transform: rotate(-45deg);
  left: -4.75rem;
  top: -1.5rem;
  animation: ${upDown} 1.5s linear;
  animation-iteration-count: infinite;
`;

export const LoadingBody = styled.div`
  position: absolute;
  bottom: 0;
  width: 20rem;
  height: 15rem;
  border: 5px solid white;
`;
export const LoadingTop = styled.div`
  width: 19.8rem;
  height: 5rem;
  border: 5px solid white;
  position: absolute;
  left: -0.2rem;
  top: -0.2rem;
  display: flex;
  justify-content: space-evenly;
`;
export const LoadingMid = styled.div`
  position: absolute;
  width: 12rem;
  height: 5.5rem;
  border: 5px solid white;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: black;
`;

export const Sripe = styled.div`
  height: 5rem;
  margin-top: -0.3rem;
  width: 3rem;
  background: white;
  transform: skew(45deg);
`;

export const SripeBottom = styled.div`
  width: 2.5rem;
  margin-top: -0.3rem;
  width: 3rem;
  background: white;
  transform: skew(-45deg);
`;
