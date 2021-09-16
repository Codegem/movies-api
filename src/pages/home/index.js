import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrendingMovies from "../../components/AllTrendingMovies";
import { useSelector } from "react-redux";
import { trendingMovies } from "../../redux/actions/movieActions";

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.trendingMovieList.results);

  useEffect(() => {
    dispatch(trendingMovies);
  }, []);

  return <>{movies !== undefined && <TrendingMovies data={movies} />}</>;
};

export default Home;
