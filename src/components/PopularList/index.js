import React from "react";
import { Title } from "./PopularElements.js";
import Grid from "../Grid";

const PopularSection = ({ data, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Grid data={data}></Grid>
    </>
  );
};

export default PopularSection;
