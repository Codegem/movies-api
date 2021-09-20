import React from "react";
import {
  Wrapper,
  Image,
  Text,
  ErrorH1,
  TakePill1,
  TakePill2,
  PillWrapper,
} from "./404Elements";
import Morpheus from "../../assets/images/404morpheus.png";

const PageError = () => {
  return (
    <Wrapper>
      <ErrorH1>404 Not Found...</ErrorH1>
      <Image src={Morpheus} alt="404Matrix" />
      <PillWrapper>
        <TakePill1 to="/movies-api/" />
        <TakePill2 to="/movies-api/" />
      </PillWrapper>
      <Text>
        What if i told you....
        <span> that both pills takes you to the right page?</span>
      </Text>
    </Wrapper>
  );
};

export default PageError;
