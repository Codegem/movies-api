import YouTube from "react-youtube";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import useDispatcher from "../../helpers/dispatch";
import { VideoTrailer } from "../../redux/actions/movieActions";

const customStyles = {
  content: {
    top: window.innerWidth <= 480 ? window.innerHeight - 400 : "25rem",
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
  const opts = {
    height: window.innerWidth <= 480 ? window.innerHeight - 100 : "600",
    width: window.innerWidth <= 480 ? window.innerWidth - 50 : "800",
    playerVars: {
      autoplay: 1,
    },
  };

  useDispatcher(VideoTrailer, `${data.mediaType}/${data.id}`, false);
  const trailer = useSelector((state) => state.movies.videoTrailer);

  return (
    <Modal
      isOpen={open}
      onRequestClose={toggle}
      style={customStyles}
      ariaHideApp={false}
    >
      {trailer !== null && <YouTube videoId={trailer[0].key} opts={opts} />}
    </Modal>
  );
};

export default VideoModal;
