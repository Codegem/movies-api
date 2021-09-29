import React from "react";
import GridCardElements from "./GridCard";
import { GridWrapper, GridContainer } from "./GridElements";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";
import { useSelector } from "react-redux";

const Grid = ({ data }) => {
  const loading = useSelector((state) => state.global.loading);

  return (
    <>
      {loading || Object.keys(data).length === 0 ? (
        <LoaderSpinner />
      ) : (
        <GridContainer>
          <GridWrapper>
            {data.map((item) => {
              return <GridCardElements data={item} key={item.id} />;
            })}
          </GridWrapper>
        </GridContainer>
      )}
    </>
  );
};

export default Grid;
