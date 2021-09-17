import React, { useState } from "react";
import { ImageJoin } from "../../helpers/image/Image";
import {
  MovieImage,
  AboutMovie,
  Vote,
  Genre,
  GenreItem,
  ButtonPlay,
  ButtonFavorite,
  DescriptionText,
  MovieTitle,
  PlayIcon,
  FavoriteIcon,
  ButtonWrapper,
  AboutMovieWrapper,
} from "./ActiveElements";
import useMovies from "../../hooks/getMovies";
import Star from "../../helpers/stars/Stars";
import VideoModal from "../Modal";

const ActiveMovie = ({ activeData, children }) => {
  const backgroundImg = ImageJoin(activeData.backdrop_path);
  const { genre } = useMovies();
  const { getRating } = Star();

  const [modalIsOpen, setIsOpen] = useState(false);

  const modalToggle = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <>
      <MovieImage src={backgroundImg}>{children}</MovieImage>
      <AboutMovieWrapper>
        <AboutMovie>
          <MovieTitle>
            {activeData.original_title !== undefined
              ? activeData.original_title
              : activeData.name}
          </MovieTitle>
          <Vote>
            {getRating(activeData.vote_average, "20px", "2px")}
            {activeData.vote_average}
          </Vote>
          <Genre>
            {genre !== null &&
              genre.map((g) => {
                return activeData.genre_ids.map((g2, key) => {
                  return (
                    g.id === g2 && <GenreItem key={key}>{g.name}</GenreItem>
                  );
                });
              })}
          </Genre>
          <ButtonWrapper>
            <ButtonPlay onClick={modalToggle}>
              <PlayIcon />
            </ButtonPlay>
            <ButtonFavorite>
              <FavoriteIcon />
            </ButtonFavorite>
          </ButtonWrapper>
          <DescriptionText>
            {activeData.overview.slice(0, 150)}...
          </DescriptionText>
        </AboutMovie>
      </AboutMovieWrapper>
      {modalIsOpen && (
        <VideoModal open={modalIsOpen} toggle={modalToggle} data={activeData} />
      )}
    </>
  );
};

export default ActiveMovie;
