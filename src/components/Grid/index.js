import React from "react";
import GridCardElements from "./GridCard";
import { GridWrapper, GridContainer } from "./GridElements";

const Grid = ({ data, type }) => {
  console.log(type);
  return (
    <GridContainer type={type}>
      <GridWrapper>
        {data !== undefined &&
          data.map((item, key) => {
            return <GridCardElements data={item} key={key} />;
          })}
      </GridWrapper>
    </GridContainer>
  );
};

export default Grid;
