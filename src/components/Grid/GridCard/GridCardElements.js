import styled from "styled-components";
import { PrimaryColor } from "../../GlobalElements";
import { Link } from "react-router-dom";

export const Info = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 20%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 275px;
  height: 380px;
  background-image: url(${({ url }) => url});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &:hover > ${Info} {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
  &:hover > ${Overlay} {
    opacity: 1;
  }
  @media screen and (max-width: 480px) {
    width: 130px;
    height: 200px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    letter-spacing: 0.05em;
  }
`;

export const Rating = styled.div``;

export const WatchTrailer = styled.button`
  margin: 1rem;
  width: 5rem;
  height: 2.5rem;
  border: none;
  background: none;
  border: 2.5px solid ${PrimaryColor};
  color: white;
  cursor: pointer;
`;

export const SelectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MoreInfo = styled(Link)`
  margin: 1rem;
  width: 6.3rem;
  height: 2.5rem;
  line-height: 2.5rem;
  vertical-align: center;
  font-size: 0.8em;
  border: none;
  background: none;
  border: 2.5px solid ${PrimaryColor};
  color: white;
  cursor: pointer;
`;
