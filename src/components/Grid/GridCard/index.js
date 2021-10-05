import { useState } from "react";
import {
  Card,
  Info,
  Title,
  Overlay,
  Rating,
  MoreInfo,
  SelectionWrapper,
  WatchTrailer,
} from "./GridCardElements";
import About from "../../AboutInfo";

const GridCardElements = ({ data }) => {
  const [openAbout, setopenAbout] = useState(false);

  const ModalToggle = () => {
    setopenAbout(!openAbout);
  };

  return (
    <>
      <Card url={data.poster}>
        <Overlay />
        <Info>
          <Title>{data.name}</Title>
          <Rating>{data.rating}</Rating>
          <SelectionWrapper>
            <WatchTrailer onClick={ModalToggle}>Trailer</WatchTrailer>
            <MoreInfo to={`/movies-api/about/${data.mediaType}/${data.id}`}>
              More Info
            </MoreInfo>
          </SelectionWrapper>
        </Info>
        {openAbout && (
          <About
            open={openAbout}
            toggle={ModalToggle}
            data={data.id}
            mediaType={data.mediaType}
          />
        )}
      </Card>
    </>
  );
};

export default GridCardElements;
