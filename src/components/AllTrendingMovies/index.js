import React, { useState } from "react";
import { Movies, ThumbImg, AllMovies, Title } from "./TrendingMoviesElements";
import "swiper/swiper-bundle.css";
import ActiveMovie from "../ActiveMovie";
import { ImageJoin } from "../../helpers/image/Image";
import { SwiperSlide } from "swiper/react";

const TrendingMovies = ({ data }) => {
  const [activeData, setActiveData] = useState(data[0]);

  const selectHandler = (movie) => {
    setActiveData(movie);
  };

  return (
    <ActiveMovie activeData={activeData}>
      <AllMovies>
        <Title>Trending</Title>
        <Movies
          loop={true}
          spaceBetween={5}
          slidesPerView={8.5}
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
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
        >
          {data?.map((movie, key) => {
            return (
              <SwiperSlide
                key={key}
                onClick={(e) => {
                  selectHandler(movie);
                }}
              >
                <ThumbImg src={ImageJoin(movie.poster_path)} />
              </SwiperSlide>
            );
          })}
        </Movies>
      </AllMovies>
    </ActiveMovie>
  );
};

export default TrendingMovies;
