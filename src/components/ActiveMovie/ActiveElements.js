import styled from "styled-components";
import { Swiper } from "swiper";
import { ButtonStyle } from "../GlobalElements";
import { BsPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
export const MoviePoster = styled(Swiper)``;

export const AboutMovieWrapper = styled.div`
  position: absolute;
  top: 6.5rem;
  left: 6rem;
  max-width: 50rem;
  max-height: 50rem;
`;

export const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MovieTitle = styled.h1`
  font-size: 3.5rem;
  color: rgb(233, 237, 240);
`;

export const MovieImage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Genre = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

export const GenreItem = styled.p`
  color: rgb(233, 237, 240);
  font-size: 1.3rem;
  &:not(:last-child) {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid rgba(147, 148, 150, 0.6);
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
    width: 80%;
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
