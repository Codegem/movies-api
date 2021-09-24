import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trendingMovies } from "../../redux/actions/movieActions";
import TrendingMovies from "../../components/AllTrendingMovies";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trendingMovies);
  }, []);

  const movies = useSelector(
    (state) => state.movies.trendingMovieList.data?.results
  );

  const loading = useSelector((state) => state.movies.loading);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <TrendingMovies data={movies} />
        </>
      )}
    </>
  );
};

export default Movies;
