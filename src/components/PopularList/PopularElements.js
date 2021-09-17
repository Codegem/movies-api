import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrimaryColor } from "../GlobalElements";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;
  background: url(${({ bg }) => bg});
  background-size: cover;
`;

export const AllMovies = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  bottom: 20.5rem;
  margin-left: 2.5rem;
  font-size: 1.5rem;
  color: ${PrimaryColor};
`;

export const ThumbImg = styled.div`
  height: 13rem;
  width: 10rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 320px) {
    width: 8rem;
    height: 14rem;
  }
`;

export const Movies = styled(Swiper)`
  border-top: 2px solid rgba(147, 148, 150, 0.6);
  padding: 1.3rem 5rem;
  width: calc(100% - 5rem);
  margin-top: 0.5rem;
  .swiper-slide {
    height: 17rem;
    width: 10rem;
    &:hover ${ThumbImg} {
      transform: scale(1.1);
    }
  }
`;

export const Text = styled.p`
  margin-top: 0.5rem;
  font-size: 1.425rem;
  text-align: center;
  color: white;
`;