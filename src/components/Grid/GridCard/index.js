import React, { useState } from "react";
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

const GridCardElements = ({ data }) => {
  const { getRating } = Star();

  const [openAbout, setOpenAbout] = useState(false);

  const aboutToggle = () => {
    setOpenAbout(!openAbout);
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
      {openAbout && (
        <About id={data.id} toggle={aboutToggle} open={openAbout} data={data} />
      )}
    </>
  );
};

export default GridCardElements;
