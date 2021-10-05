import styled, { keyframes } from "styled-components";
import { PrimaryColor } from "../GlobalElements";
import { FaPlay } from "react-icons/fa";
import {
  Genre,
  GenreItem,
  DescriptionText,
} from "../ActiveMovie/ActiveElements";

const Entrance = keyframes`
  0% {
    -webkit-transform: translateY(-1400px) rotateX(-30deg) scale(0);
            transform: translateY(-1400px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
`;

const Exit = keyframes`
  0% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% -1400px;
            transform-origin: 50% -1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
            transform: translateY(600px) rotateX(30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  &.active {
    animation: ${Exit} 0.7s ease-in both;
  }
  &.close {
    animation: ${Entrance} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.7s;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  padding-left: 6rem;
  width: 100%;
  height: 100%;
`;

export const Rating = styled.div`
  margin: 0 1em;
  line-height: 1rem;
  vertical-align: center;
`;

export const Popularity = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: gold;
`;

export const Title = styled.h1`
  width: 50%;
  font-size: 3.5rem;
  color: ${PrimaryColor};
`;
export const InfoGenres = styled(Genre)``;

export const InfoGenreItem = styled(GenreItem)`
  color: gold;
`;
export const Release = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: gold;
`;

export const OverView = styled(DescriptionText)`
  color: ${PrimaryColor};
  text-indent: 25px;
  line-height: 2rem;
  font-size: 1.5rem;
`;

export const VideoSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  &.active {
    animation: ${Entrance} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.7s;
  }
  &.close {
    animation: ${Exit} 0.7s ease-in both;
  }
  @media screen and (max-width: 480px) {
    top: 4rem;
  }
`;

export const Flex = styled.div`
  max-width: 40%;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 3.5rem;
  top: 5rem;
  width: 1.5rem;
  height: 2.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  &::before {
    content: "";
    position: absolute;
    transform: rotate(45deg);
    border-bottom: 0.5rem solid ${PrimaryColor};
    width: 2.5rem;
    height: 1px;
    margin-bottom: 2rem;
  }
  &::after {
    content: "";
    position: absolute;
    border-bottom: 0.5rem solid ${PrimaryColor};
    transform: rotate(-45deg);
    width: 2.5rem;
  }
`;

const Rotation = keyframes`
  0%{
    transform: rotate(0);
  }
  10%{
    transform: rotate(180deg);
  }
`;

export const Button = styled(FaPlay)`
  margin-left: 2rem;
  width: 5vw;
  height: 5vw;
  color: gold;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${PrimaryColor};
    animation: ${Rotation} 0.5s forwards;
  }
`;
