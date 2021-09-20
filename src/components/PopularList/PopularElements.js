import styled from "styled-components";
import { Swiper } from "swiper/react";
import { PrimaryColor } from "../GlobalElements";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1vh;
  background: url(${({ bg }) => bg});
  background-size: cover;
  @media screen and (max-width: 480px) {
    margin-top: 12vw;
  }
`;

export const AllMovies = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.5rem;
  @media screen and (max-width: 480px) {
    margin-top: -10vw;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 5rem;
  color: ${PrimaryColor};
  @media screen and (max-width: 480px) {
    text-align: left;
    margin-left: 1.5rem;
  }
`;

export const ThumbImg = styled.div`
  height: 13rem;
  width: 10rem;
  background-image: url(${({ src }) => src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 480px) {
    height: 75vw;
    width: 10rem;
  }
`;

export const Movies = styled(Swiper)`
  border-top: 2px solid rgba(147, 148, 150, 0.6);
  padding: 1.3rem 5rem;
  width: calc(100% - 5rem);
  margin-top: 0.5rem;
  .swiper-slide {
    height: 18rem;
    width: 10rem;
    &:hover ${ThumbImg} {
    }
  }
  @media screen and (max-width: 480px) {
    width: 95vw;
    padding: 1rem 0.5rem;
    .swiper-slide {
      height: 70vw;
      width: 10vw;
    }
  }
`;

export const Text = styled.p`
  max-width: 10rem;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1.425rem;
  text-align: center;
  color: white;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  margin-top: 0.5rem;
`;
