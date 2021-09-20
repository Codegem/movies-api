import React from "react";
import { Title } from "./PopularElements.js";
import Grid from "../Grid";

const PopularSection = ({ data, title, type }) => {
  return (
    <>
      <Title>{title}</Title>
      <Grid data={data} type={type}></Grid>
    </>
  );
};

export default PopularSection;
