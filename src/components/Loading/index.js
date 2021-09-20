import React from "react";
import {
  LoadingWrapper,
  LoadingCutter,
  LoadingBody,
  LoadingTop,
  LoadingMid,
  Sripe,
  SripeBottom,
  LoadingText,
} from "./LoadingElements";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingCutter>
        <Sripe />
        <Sripe />
        <Sripe />
      </LoadingCutter>
      <LoadingBody>
        <LoadingTop>
          <SripeBottom />
          <SripeBottom />
          <SripeBottom />
        </LoadingTop>
        <LoadingMid>
          <LoadingText>Loading...</LoadingText>
        </LoadingMid>
      </LoadingBody>
    </LoadingWrapper>
  );
};

export default Loading;
