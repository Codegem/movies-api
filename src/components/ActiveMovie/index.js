import React from "react";
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
  DesktopOverlay,
} from "./ActiveElements";
import VideoModal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { ModalToggle } from "../../redux/actions/globalActions";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";

const ActiveMovie = ({ children }) => {
  const dispatch = useDispatch();

  const modalState = useSelector((state) => state.global.modalOpen);
  const activeData = useSelector((state) => state.global.activeData);
  const loading = useSelector((state) => state.global.loading);

  const modalToggle = () => {
    dispatch(ModalToggle);
  };

  const mouseEnter = () => {
    document.getElementById("Overlay").style.opacity = "1";
  };
  const mouseLeave = () => {
    document.getElementById("Overlay").style.opacity = "0";
  };

  return (
    <>
      <Overlay />
      <DesktopOverlay id="Overlay" />
      <MovieImage src={activeData?.backdrop}>{children}</MovieImage>
      <AboutMovieWrapper
        onMouseEnter={() => mouseEnter()}
        onMouseLeave={() => mouseLeave()}
      >
        <AboutMovie>
          <MovieTitle>{activeData?.name}</MovieTitle>
          <Vote>{activeData?.rating}</Vote>
          <Genre>
            {/* {genre !== null &&
              genre.map((g) => {
                return activeData.genre_ids.map((g2, key) => {
                  return (
                    g.id === g2 && <GenreItem key={key}>{g.name}</GenreItem>
                  );
                });
              })} */}
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
            {activeData?.overview?.slice(0, 150)}...
          </DescriptionText>
        </AboutMovie>
      </AboutMovieWrapper>
      {modalState && (
        <VideoModal open={modalState} toggle={modalToggle} data={activeData} />
      )}
    </>
  );
};

export default ActiveMovie;
