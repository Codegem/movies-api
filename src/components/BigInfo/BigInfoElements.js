import styled from "styled-components";
import { PrimaryColor } from "../GlobalElements";
import {
  Genre,
  GenreItem,
  DescriptionText,
  Vote,
} from "../ActiveMovie/ActiveElements";
export const Wrapper = styled.div`
  position: absolute;
  top: 10rem;
  left: 5rem;
  width: 100%;
`;

export const Rating = styled(Vote)``;
export const Title = styled.h1`
  font-size: 3.5rem;
  color: ${PrimaryColor};
`;
export const InfoGenres = styled(Genre)``;
export const InfoGenreItem = styled(GenreItem)``;
export const OverView = styled(DescriptionText)``;
export const VideoSection = styled.div``;
