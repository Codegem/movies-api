import { useState } from "react";
import {
  Title,
  InfoGenres,
  OverView,
  VideoSection,
  InfoGenreItem,
  Wrapper,
  Rating,
  Container,
  Flex,
  Popularity,
  Release,
  CloseButton,
  Button,
} from "./BigInfoElements";
import YouTube from "react-youtube";

const BigInfo = ({ data }) => {
  const [trailerActive, setTrailerActive] = useState(false);
  const opts = {
    height: window.innerWidth <= 480 ? "280" : window.innerHeight,
    width: window.innerWidth <= 480 ? "480" : window.innerWidth,
    position: "absolute",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      rel: 0,
    },
  };

  const activationHandler = () => {
    setTrailerActive(!trailerActive);
  };

  return (
    <>
      <Container src={data?.backdrop} className={trailerActive && "active"}>
        <Wrapper>
          <Title>
            {data?.name}
            {data?.key !== undefined && <Button onClick={activationHandler} />}
          </Title>
          <Flex>
            <InfoGenres>
              {data?.genres?.map((genre, index) => (
                <InfoGenreItem key={index}>{genre.name}</InfoGenreItem>
              ))}
            </InfoGenres>
            <Rating> {data?.rating}</Rating>
            <Popularity>Popularity: {data?.popularity}</Popularity>
            <Release>Released: {data?.released}</Release>
          </Flex>
          <OverView>{data?.overview}</OverView>
        </Wrapper>
      </Container>
      {trailerActive && (
        <VideoSection className={trailerActive && "active"}>
          <CloseButton onClick={activationHandler} />
          <YouTube videoId={data?.key} opts={opts} />
        </VideoSection>
      )}
    </>
  );
};

export default BigInfo;
