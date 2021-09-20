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

  return <Grid data={upcomingList} />;
};

export default Upcoming;
