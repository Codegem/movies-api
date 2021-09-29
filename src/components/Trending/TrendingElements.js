import styled from "styled-components";
import { Swiper } from "swiper/react";
import { PrimaryColor } from "../GlobalElements";

export const AllMovies = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.p`
  position: absolute;
  z-index: 15;
  bottom: 20.5rem;
  left: 3rem;
  font-size: 1.5rem;
  color: ${PrimaryColor};
  @media screen and (max-width: 480px) {
    z-index: 20;
    bottom: 17.5rem;
  }
`;

export const ThumbImg = styled.div`
  position: absolute;
  bottom: 0;
  height: 15.5rem;
  width: 10rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 480px) {
    z-index: 20;
    width: 8rem;
    height: 13rem;
  }
`;

export const Movies = styled(Swiper)`
  position: absolute;
  border-top: 2px solid rgba(147, 148, 150, 0.6);
  width: calc(100% - 5rem);
  z-index: 15;
  bottom: 5vh;
  .swiper-slide {
    height: 17rem;
    width: 10rem;
    &:hover ${ThumbImg} {
      height: 16.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    z-index: 20;
    .swiper-slide {
      height: 14rem;
      width: 10rem;
    }
  }
`;
