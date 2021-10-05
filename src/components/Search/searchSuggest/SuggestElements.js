import styled, { keyframes } from "styled-components";
import { PrimaryColor } from "../../GlobalElements";
import { Link } from "react-router-dom";

const SuggestAnimation = keyframes`
 0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
`;

export const SearchSuggestions = styled.div`
  position: absolute;
  top: 6.7vh;
  max-height: 45rem;
  width: 75vw;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  &.open {
    animation: ${SuggestAnimation} 1s both;
  }
`;

export const MovieSuggestion = styled(Link)`
  width: 90%;
  height: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(147, 148, 150, 0.6);
`;

export const SuggestImage = styled.div`
  bottom: 0;
  height: 4.5rem;
  width: 3.5rem;
  background-image: url(${({ src }) => src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

export const SuggestTitle = styled.p`
  width: 25%;
  color: ${PrimaryColor};
  font-size: 1.25rem;
`;

export const SuggestRating = styled.div`
  width: 25%;
`;

export const NoResults = styled.div`
  text-align: center;
  font-size: 2.5rem;
  color: ${PrimaryColor};
`;
