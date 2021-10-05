import styled from "styled-components";
import { Swiper } from "swiper";
import { ButtonStyle } from "../GlobalElements";
import { BsPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
export const MoviePoster = styled(Swiper)``;

export const Overlay = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    height: 80vh;
    width: 100vw;
    position: absolute;
    top: 20vh;
    z-index: 10;
    background: red;
    background: linear-gradient(
      to bottom,
      rgba(15, 12, 41, 0),
      rgba(36, 36, 62, 1),
      rgba(48, 43, 99, 1)
    );
    background-blend-mode: screen;
  }
`;

export const DesktopOverlay = styled.div`
  position: absolute;
  top: 3.8vw;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 44.45vw;
    height: 30.25vw;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &::after {
    content: "";
    position: absolute;
    left: 44.45vw;
    width: 0;
    height: 0;
    border-top: 17.25vw solid transparent;
    border-left: 20vw solid rgba(0, 0, 0, 0.4);
    border-bottom: 13.2vw solid transparent;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const AboutMovieWrapper = styled.div`
  position: absolute;
  z-index: 15;
  top: 5.5rem;
  left: 3rem;
  max-width: 50rem;
  max-height: 50rem;
  @media screen and (max-width: 480px) {
    z-index: 20;
    top: 5rem;
    left: 2rem;
  }
`;

export const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  color: rgb(233, 237, 240);
  width: 80%;
  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
    max-width: 100%;
  }
`;

export const MovieImage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  transition: all 1s ease;
  background-repeat: no-repeat;
  @media screen and (max-width: 480px) {
    background-size: 100% 62%;
  }
`;

export const Genre = styled.div`
  display: flex;
  margin: 0.5rem 0;
  @media screen and (max-width: 480px) {
    max-width: 80%;
    flex-wrap: wrap;
  }
`;

export const GenreItem = styled.p`
  color: rgb(233, 237, 240);
  font-size: 1.3rem;
  &:not(:last-child) {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid rgba(147, 148, 150, 0.6);
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Vote = styled.div`
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.8rem;
  margin: 0.5rem 0;
  color: rgb(233, 237, 240);
`;

export const ButtonPlay = styled(ButtonStyle)`
  background: rgb(10, 72, 71);
  cursor: pointer;
`;

export const ButtonFavorite = styled(ButtonStyle)`
  cursor: pointer;
`;

export const DescriptionText = styled.p`
  color: rgb(233, 237, 240);
  margin-top: 1.6vw;
  width: 60%;
  font-size: 1.1rem;
  line-height: 1.6rem;
  @media screen and (max-width: 480px) {
    text-indent: 15px;
    width: 95%;
    margin-top: 2rem;
  }
`;

export const PlayIcon = styled(BsPlayFill)`
  color: white;
  font-size: 1.5rem;
`;
export const FavoriteIcon = styled(IoMdAdd)`
  color: white;
  font-size: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  margin: 0.5rem 0;
`;
