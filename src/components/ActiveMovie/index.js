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
import GenresData from "../../helpers/dataHandlers/GenresData";

const ActiveMovie = ({ children, data }) => {
  const dispatch = useDispatch();

  const modalState = useSelector((state) => state.global.modalOpen);
  const activeData = useSelector((state) => state.global.activeData);

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
            {GenresData(activeData.genres).map((genre, index) => {
              return <GenreItem key={index}>{genre}</GenreItem>;
            })}
          </Genre>
          {data === undefined && (
            <ButtonWrapper>
              <ButtonPlay onClick={modalToggle}>
                <PlayIcon />
              </ButtonPlay>
              <ButtonFavorite>
                <FavoriteIcon />
              </ButtonFavorite>
            </ButtonWrapper>
          )}
          <DescriptionText>
            {activeData?.overview?.slice(0, 150)}
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
