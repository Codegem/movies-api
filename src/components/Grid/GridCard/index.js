import React from "react";
import {
  Card,
  Info,
  Title,
  Overlay,
  Rating,
  MoreInfo,
} from "./GridCardElements";
import { Loading, ModalToggle } from "../../../redux/actions/globalActions";
import { useDispatch, useSelector } from "react-redux";
import { getMediaInfo } from "../../../redux/actions/movieActions";
import About from "../../AboutInfo";

const GridCardElements = ({ data, id }) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.global.modalOpen);

  const aboutDataModal = (e, mediaType, id) => {
    console.log(e.target.id);
    dispatch(ModalToggle);
    // dispatch(getMediaInfo(mediaType, id));
  };

  return (
    <>
      <Card url={data.poster} key={id}>
        <Overlay />
        <Info>
          <Title>{data.name}</Title>
          <Rating>{data.rating}</Rating>
          <MoreInfo
          // onClick={(e) => aboutDataModal(e, data.mediaType, data.id)}
          // id={data.id}
          >
            More Info
          </MoreInfo>
        </Info>
        {modalState && (
          <About open={modalState} toggle={() => dispatch(ModalToggle)} />
        )}
      </Card>
    </>
  );
};

export default GridCardElements;
