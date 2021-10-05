import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 2rem);
  height: calc(100vh - 1rem);
  margin-top: 2.5rem;
  margin-bottom: ${({ type }) => type === "Movie" && "100vh"};
  @media screen and (max-width: 480px) {
    padding: 0 0.2rem;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 0.5vw;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1px;
  }
`;
