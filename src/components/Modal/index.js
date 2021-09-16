import YouTube from "react-youtube";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const VideoModal = ({ toggle, open }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={toggle}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <YouTube videoId="2g811Eo7K8U" opts={opts} />
    </Modal>
  );
};

export default VideoModal;
