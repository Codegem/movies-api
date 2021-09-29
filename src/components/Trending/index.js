import { useState } from "react";
import { useSelector } from "react-redux";
import { Movies, ThumbImg, AllMovies, Title } from "./TrendingElements";
import "swiper/swiper-bundle.css";
import { SwiperSlide } from "swiper/react";
import LoaderSpinner from "../Loading/LoaderSpinner";
import ActiveMovie from "../ActiveMovie";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import useDispatcher from "../../helpers/dispatch";
import { ActiveData } from "../../redux/actions/globalActions";
import { useDispatch } from "react-redux";

const Trending = ({ data }) => {
  const loading = useSelector((state) => state.global.loading);
  const dispatch = useDispatch();
  SwiperCore.use([Autoplay, Navigation]);

  // const dispatcher = useDispatcher();

  const clickHander = (data) => {
    // dispatcher(ActiveData, data, true);
    dispatch(ActiveData(data));
  };

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <AllMovies data={data}>
          <Title>Trending</Title>
          <Movies
            loop={true}
            spaceBetween={5}
            slidesPerView={8.5}
            watchSlidesProgress={true}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
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
            {Object.keys(data).length !== 0 &&
              data?.map((movie, key) => {
                return (
                  <SwiperSlide key={key}>
                    <ThumbImg
                      src={movie.poster}
                      onClick={() => clickHander(movie)}
                    />
                  </SwiperSlide>
                );
              })}
          </Movies>
        </AllMovies>
      )}
    </>
  );
};

export default Trending;
