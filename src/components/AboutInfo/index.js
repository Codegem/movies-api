import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import { getMediaInfo } from "../../redux/actions/movieActions";
import {
  ButtonWrapper,
  Description,
  DescriptionText,
  Favorite,
  Genres,
  OfficialSite,
  Rating,
  VideoWrapper,
  GenreItem,
} from "./InfoElements";
import LoadingAnimation from "../Loading";
import useDispatcher from "../../helpers/dispatch";

const customStyles = {
  content: {
    position: "relative",
    width: window.innerWidth <= 480 ? "80%" : "55%",
    height: "100vh",
    top: window.innerWidth <= 480 ? "24rem" : "25rem",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    backdropFilter: "blur(0)",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(5px)",
  },
};

const About = ({ open, toggle, data, mediaType }) => {
  console.log(data, mediaType);
  useDispatcher(getMediaInfo, `${mediaType}/${data}`, true, true);

  const info = useSelector((state) => state.movies.mediaInfo);
  const loading = useSelector((state) => state.global.modalLoader);

  const opts =
    window.innerWidth <= 480
      ? {
          height: "380",
          width: "480",
          playerVars: {
            autoplay: 1,
          },
        }
      : {
          height: "420",
          width: "660",
          playerVars: {
            autoplay: 1,
          },
        };

  return (
    <Modal
      isOpen={open}
      onRequestClose={toggle}
      style={customStyles}
      ariaHideApp={false}
    >
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <VideoWrapper>
            <YouTube videoId={info?.key} opts={opts} />
          </VideoWrapper>
          <Description>
            <DescriptionText>{info?.overview}</DescriptionText>
          </Description>
          <Rating>
            <span>{info?.vote_average}</span>
            {info?.rating}
          </Rating>
          <Genres>
            {info?.genres !== undefined &&
              info?.genres.map((genre) => {
                return <GenreItem key={genre?.id}>{genre?.name}</GenreItem>;
              })}
          </Genres>
          <ButtonWrapper>
            <OfficialSite href={info?.homepage}>Visit Official</OfficialSite>
            <Favorite>Favorite</Favorite>
          </ButtonWrapper>
        </>
      )}
    </Modal>
  );
};

export default About;
