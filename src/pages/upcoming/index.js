import React from "react";
import { useSelector } from "react-redux";
import Grid from "../../components/Grid";
import { upcomingMovies } from "../../redux/actions/movieActions";
import useDispatcher from "../../helpers/dispatch";

const Upcoming = () => {
  useDispatcher(upcomingMovies, undefined, true);

  const upcomingList = useSelector((state) => state.movies.upcomingMovie);

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <Grid data={upcomingList} />;
      </div>
    </>
  );
};

export default Upcoming;
