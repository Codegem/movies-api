import styled from "styled-components";

export const GridContainer = styled.div`
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 2rem);
  margin-top: 2.5rem;
  margin-bottom: ${({ type }) => type === "Movie" && "100vh"};
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(50px, 20rem));
  row-gap: 1rem;
  @media screen and (max-width: 480px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 6.5rem));
    column-gap: 1.5rem;
    row-gap: 0.5rem;
  }
`;
