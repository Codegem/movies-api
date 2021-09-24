import React from "react";
import Loader from "react-loader-spinner";
import { LoaderPosition } from "../../GlobalElements";

const LoaderSpinner = () => {
  return (
    <LoaderPosition>
      <Loader type="Rings" color="#00BFFF" height={280} width={280} />
    </LoaderPosition>
  );
};

export default LoaderSpinner;
