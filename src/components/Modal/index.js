import { useEffect } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { movieTrailer, tvshowTrailer } from "../../redux/actions/movieActions";

const customStyles = {
  content: {
    top: "20rem",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "black",
    border: "none",
  },
  overlay: {
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(5px)",
  },
};

const VideoModal = ({ toggle, open, data }) => {
  const dispatch = useDispatch();

  const trailer = useSelector((state) =>
    data.media_type === "movie"
      ? state.movies.movieTrailer.results
      : state.movies.tvshowTrailer.results
  );

  const opts = {
    height: "480",
    width: "360",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (data !== undefined) {
      dispatch(
        data.media_type === "movie"
          ? movieTrailer(data.id)
          : tvshowTrailer(data.id)
      );
      return;
    }
  }, []);

  return (
    <Modal
      isOpen={open}
      onRequestClose={toggle}
      style={customStyles}
      ariaHideApp={false}
    >
      {trailer !== undefined && (
        <YouTube
          videoId={trailer[0].key !== undefined && trailer[0].key}
          opts={opts}
        />
      )}
    </Modal>
  );
};

export default VideoModal;
