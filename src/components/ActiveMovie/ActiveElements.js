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

export const AboutMovieWrapper = styled.div`
  position: absolute;
  z-index: 15;
  top: 6.5vw;
  left: 3rem;
  max-width: 80vw;
  max-height: 80vw;
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
    width: 90vw;
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
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
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
  text-indent: 2rem;
  font-size: 1.4rem;
  line-height: 2.1rem;
  @media screen and (max-width: 480px) {
    text-indent: 1rem;
    font-size: 1.1rem;
    width: 100%;
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
