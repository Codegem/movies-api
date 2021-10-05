import React from "react";
import {
  Title,
  InfoGenres,
  OverView,
  VideoSection,
  InfoGenreItem,
  Wrapper,
  Rating,
} from "./BigInfoElements";
const BigInfo = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Title>{data?.name}</Title>
      <InfoGenres>
        {data?.genres?.map((genre, index) => (
          <InfoGenreItem key={index}>{genre.name}</InfoGenreItem>
        ))}
      </InfoGenres>
      <OverView>{data?.overview}</OverView>
      <Rating> {data?.rating}</Rating>
    </Wrapper>
  );
};

export default BigInfo;
