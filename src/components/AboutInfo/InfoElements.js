import styled from "styled-components";
import { PrimaryColor } from "../GlobalElements";

export const VideoWrapper = styled.div`
  margin: 0.5rem;
`;
export const Description = styled.div`
  max-width: 100%;
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1.25rem;
  line-height: 1.8rem;
  color: rgb(233, 237, 240);
  text-indent: 25px;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
`;

export const Rating = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  span {
    text-align: center;
    margin-right: 1rem;
    color: white;
    font-size: 1.5rem;
  }
`;
export const Genres = styled.div`
  display: flex;
  margin: 0.5rem;
`;

export const GenreItem = styled.p`
  color: rgb(233, 237, 240);
  :not(:last-child) {
    margin-right: 1rem;
    border-right: 2.5px solid rgb(233, 237, 240);
    padding-right: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const OfficialSite = styled.a`
  margin: 1rem;
  width: 8rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  vertical-align: center;
  border: none;
  color: ${PrimaryColor};
  background: white;
  border: 2.5px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

export const Favorite = styled.button`
  margin: 1rem;
  width: 8rem;
  height: 2.5rem;
  font-size: 1.1rem;
  border: none;
  background: ${PrimaryColor};
  border: 2.5px solid ${PrimaryColor};
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
