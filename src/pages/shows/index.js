import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrendingMovies from "../../components/AllTrendingMovies";
import { useSelector } from "react-redux";
import { trendingTvShows } from "../../redux/actions/movieActions";

const Shows = () => {
  const dispatch = useDispatch();

  const shows = useSelector(
    (state) => state.movies.trendingTvShowsList.results
  );

  useEffect(() => {
    dispatch(trendingTvShows);
  }, []);

  return <>{shows !== undefined && <TrendingMovies data={shows} />}</>;
};

export default Shows;
