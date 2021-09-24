import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../../components/Grid";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";
import { upcomingMovies } from "../../redux/actions/movieActions";

const Upcoming = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);

  const upcomingList = useSelector(
    (state) => state.movies.upcomingMovie.data?.results
  );

  useEffect(() => {
    dispatch(upcomingMovies);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div style={{ marginTop: "5rem" }}>
          <Grid data={upcomingList} />;
        </div>
      )}
    </>
  );
};

export default Upcoming;
