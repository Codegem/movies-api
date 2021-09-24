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
  Overlay,
} from "./ActiveElements";
import useMovies from "../../hooks/getMovies";
import Star from "../../helpers/stars/Stars";
import VideoModal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { ModalToggle } from "../../redux/actions/globalActions";
import LoaderSpinner from "../Loading/LoaderSpinner";

const ActiveMovie = ({ activeData, children }) => {
  console.log(activeData);
  const dispatch = useDispatch();
  const backgroundImg = ImageJoin(activeData.backdrop_path);
  const { genre } = useMovies(); // DESTROY THIS LINE AND CHANGE IT TO NORMAL REDUX AXIOS FETCH
  const { getRating } = Star();
  const loading = useSelector((state) => state.movies.loading);
  const modalState = useSelector((state) => state.global.modalOpen);

  const modalToggle = () => {
    dispatch(ModalToggle);
  };

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <Overlay />
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
          {modalState && (
            <VideoModal
              open={modalState}
              toggle={modalToggle}
              data={activeData}
            />
          )}
        </>
      )}
    </>
  );
};

export default ActiveMovie;
