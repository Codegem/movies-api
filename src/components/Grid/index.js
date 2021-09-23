import React from "react";
import GridCardElements from "./GridCard";
import { GridWrapper, GridContainer } from "./GridElements";

const Grid = ({ data }) => {
  return (
    <GridContainer>
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
