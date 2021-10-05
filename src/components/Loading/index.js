import React from "react";
import {
  LoadingWrapper,
  LoadingCutter,
  LoadingBody,
  LoadingTop,
  LoadingMid,
  Stripe,
  StripeBottom,
  LoadingText,
} from "./LoadingElements";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingCutter>
        <Stripe />
        <Stripe />
        <Stripe />
      </LoadingCutter>
      <LoadingBody>
        <LoadingTop>
          <StripeBottom />
          <StripeBottom />
          <StripeBottom />
        </LoadingTop>
        <LoadingMid>
          <LoadingText>Loading...</LoadingText>
        </LoadingMid>
      </LoadingBody>
    </LoadingWrapper>
  );
};

export default Loading;
