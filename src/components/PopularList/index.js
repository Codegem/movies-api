import React from "react";
import {
  Movies,
  ThumbImg,
  AllMovies,
  Title,
  TestContainer,
  Text,
  Slide,
} from "./PopularElements";
import "swiper/swiper-bundle.css";
import { ImageJoin } from "../../helpers/image/Image";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const PopularSection = ({ data, title }) => {
  return (
    <TestContainer>
      <AllMovies>
        <Title>{title}</Title>
        <Movies
          modules={[Navigation]}
          navigation
          loop={true}
          watchSlidesProgress={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1141: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {data !== undefined &&
            data.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <ThumbImg src={ImageJoin(item.poster_path)} />
                  <Text>
                    {item.title === undefined ? item.name : item.title}
                  </Text>
                </SwiperSlide>
              );
            })}
        </Movies>
      </AllMovies>
    </TestContainer>
  );
};

export default PopularSection;
