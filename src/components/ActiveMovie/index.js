import React from "react";
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
import StarRatings from "react-star-ratings";

const ActiveMovie = ({ activeData, children }) => {
  const backgroundImg = ImageJoin(activeData.backdrop_path);
  const { genre } = useMovies();
  return (
    <>
      <MovieImage src={backgroundImg}>{children}</MovieImage>
      <AboutMovieWrapper>
        <AboutMovie>
          <MovieTitle>{activeData.original_title}</MovieTitle>
          <Vote>
            <StarRatings
              rating={(10 + (activeData.vote_average * 10 - 100) / 10) / 2}
              numberOfStars={5}
              starRatedColor="yellow"
              starEmptyColor="grey"
              starDimension="20px"
              starSpacing="2px"
            />
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
            <ButtonPlay>
              <PlayIcon />
            </ButtonPlay>
            <ButtonFavorite>
              <FavoriteIcon />
            </ButtonFavorite>
          </ButtonWrapper>
          <DescriptionText>{activeData.overview}</DescriptionText>
        </AboutMovie>
      </AboutMovieWrapper>
    </>
  );
};

export default ActiveMovie;
