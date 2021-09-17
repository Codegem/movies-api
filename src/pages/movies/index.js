import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrendingMovies from "../../components/AllTrendingMovies";
import { trendingMovies } from "../../redux/actions/movieActions";

const Movies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.trendingMovieList.results);

  useEffect(() => {
    dispatch(trendingMovies);
  }, []);

  return <>{movies !== undefined && <TrendingMovies data={movies} />}</>;
};

export default Movies;
