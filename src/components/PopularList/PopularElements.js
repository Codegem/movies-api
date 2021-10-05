import styled from "styled-components";
import { PrimaryColor } from "../GlobalElements";

export const Title = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 5rem;
  color: ${PrimaryColor};
  border-bottom: 1px solid rgba(147, 148, 150, 0.6);
  border-top: 1px solid rgba(147, 148, 150, 0.6);
  padding: 0.5rem 0;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
