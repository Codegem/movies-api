import styled from "styled-components";
import {
  LastSpanOpen,
  SecondSpanOpen,
  FirstSpanOpen,
  LastSpanClose,
  SecondSpanClose,
  FirstSpanClose,
} from "./Keyframes";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  height: 3rem;
  &.open {
    padding: 0.7rem;
    div {
      :nth-child(3) {
        animation: ${LastSpanOpen} 1s forwards;
      }
      :nth-child(2) {
        animation: ${SecondSpanOpen} 0.5s forwards;
      }
      :nth-child(1) {
        animation: ${FirstSpanOpen} 1s forwards;
      }
    }
  }
  &.close {
    div {
      :nth-child(3) {
        animation: ${LastSpanClose} 1s forwards;
      }
      :nth-child(2) {
        animation: ${SecondSpanClose} 0.5s forwards;
      }
      :nth-child(1) {
        animation: ${FirstSpanClose} 1s forwards;
      }
    }
  }
`;

export const Span = styled.div`
  height: 0.3rem;
  background: linear-gradient(to right, #0575e6, #859398);
  border-radius: 0.5rem;
  :nth-child(1) {
    width: 3rem;
    margin-left: 0;
  }
  :nth-child(2) {
    width: 2rem;
    margin-left: 1rem;
  }
  :nth-child(3) {
    width: 1.5rem;
    margin-left: 1.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
`;
