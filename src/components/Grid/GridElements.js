import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 4rem;
  padding: 0.5rem 1.5rem;
  margin-bottom: ${({ type }) => type === "Movie" && "100vh"};
  @media screen and (max-width: 480px) {
    padding: 0 0.2rem;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 5px;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1px;
  }
`;
