import React, { useEffect } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import {
  movieTrailer,
  getMediaInfo,
  tvshowTrailer,
} from "../../redux/actions/movieActions";
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
import Star from "../../helpers/stars/Stars";
import { useState } from "react";
import Loading from "../Loading";

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
    background: "rgba(0, 0, 0, 0)",
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

const About = ({ data, id, open, toggle }) => {
  const dispatch = useDispatch();
  const { getRating } = Star();
  const [loading, setLoading] = useState(false);

  const type = data !== undefined && data.name === undefined ? "movie" : "tv";

  useEffect(() => {
    if (type === "tv") {
      dispatch(getMediaInfo("tv", id));
      dispatch(tvshowTrailer(id, "/videos"));
      setLoading(true);
    } else {
      dispatch(getMediaInfo("movie", id));
      dispatch(movieTrailer(id, "/videos"));
      setLoading(true);
    }
  }, []);

  const aboutMovie = useSelector((state) => state.movies.mediaInfo);
  const officialTrailer = useSelector(
    type === "tv"
      ? (state) => state.movies.tvshowTrailer.results
      : (state) => state.movies.movieTrailer.results
  );

  if (aboutMovie !== undefined && officialTrailer !== undefined) {
    setTimeout(function () {
      setLoading(false);
    }, 1200);
  }

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
        <Loading />
      ) : (
        <>
          <VideoWrapper>
            <YouTube
              videoId={
                officialTrailer !== undefined ? officialTrailer[0].key : ""
              }
              opts={opts}
            />
          </VideoWrapper>
          <Description>
            <DescriptionText>{aboutMovie.overview}</DescriptionText>
          </Description>
          <Rating>
            <span>{aboutMovie.vote_average}</span>
            {getRating(aboutMovie.vote_average, "25px", "5px")}
          </Rating>
          <Genres>
            {aboutMovie.genres !== undefined &&
              aboutMovie.genres.map((genre) => {
                return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
              })}
          </Genres>
          <ButtonWrapper>
            <OfficialSite href={aboutMovie.homepage}>
              Visit Official
            </OfficialSite>
            <Favorite>Favorite</Favorite>
          </ButtonWrapper>
        </>
      )}
    </Modal>
  );
};

export default About;
