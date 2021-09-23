import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../../components/Grid";
import { upcomingMovies } from "../../redux/actions/movieActions";

const Upcoming = () => {
  const dispatch = useDispatch();

  const upcomingList = useSelector(
    (state) => state.movies.upcomingMovie.results
  );

  useEffect(() => {
    dispatch(upcomingMovies);
  }, []);

  return (
    <div style={{ marginTop: "5rem" }}>
      <Grid data={upcomingList} />;
    </div>
  );
};

export default Upcoming;
