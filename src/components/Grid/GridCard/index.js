import React from "react";
import {
  Card,
  Info,
  Title,
  Overlay,
  Rating,
  MoreInfo,
} from "./GridCardElements";
import { ImageJoin } from "../../../helpers/image/Image";
import Star from "../../../helpers/stars/Stars";
import About from "../../AboutInfo";
import { ModalToggle } from "../../../redux/actions/globalActions";
import { useDispatch, useSelector } from "react-redux";

const GridCardElements = ({ data }) => {
  const dispatch = useDispatch();
  const { getRating } = Star();

  const modalState = useSelector((state) => state.global.modalOpen);

  const aboutToggle = () => {
    dispatch(ModalToggle);
  };

  return (
    <>
      <Card
        url={ImageJoin(
          data.poster_path !== null ? data.poster_path : data.backdrop_path
        )}
      >
        <Overlay />
        <Info>
          <Title>{data.original_title || data.name}</Title>
          <Rating>{getRating(data.vote_average, "15", "8")}</Rating>
          <MoreInfo onClick={aboutToggle}>More Info</MoreInfo>
        </Info>
      </Card>
      {modalState && (
        <About
          id={data.id}
          toggle={aboutToggle}
          open={modalState}
          data={data}
        />
      )}
    </>
  );
};

export default GridCardElements;
