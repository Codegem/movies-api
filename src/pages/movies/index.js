import { useDispatch, useSelector } from "react-redux";
import { trendingMovies } from "../../redux/actions/movieActions";
import Trending from "../../components/Trending";
import ActiveMovie from "../../components/ActiveMovie";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";
import useDispatcher from "../../helpers/dispatch";
import { ActiveData } from "../../redux/actions/globalActions";

const Movies = () => {
  const dispatch = useDispatch();
  useDispatcher(trendingMovies, undefined, true);

  const movies = useSelector((state) => state.movies.trendingMovieList);
  const loading = useSelector((state) => state.global.loading);

  dispatch(ActiveData(movies[0]));

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <ActiveMovie>
          <Trending data={movies} />
        </ActiveMovie>
      )}
    </>
  );
};

export default Movies;
