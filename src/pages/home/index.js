import { useSelector } from "react-redux";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";
import PopularSection from "../../components/PopularList";
import useDispatcher from "../../helpers/dispatch";
import {
  popularTVShows,
  popularMovies,
} from "../../redux/actions/movieActions";

const Home = () => {
  const loading = useSelector((state) => state.global.loading);

  useDispatcher(popularMovies, undefined, true);
  useDispatcher(popularTVShows, undefined, false);
  const popularMoviesList = useSelector((state) => state.movies.popularMovies);
  const popularTVList = useSelector((state) => state.movies.popularTvShows);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <PopularSection data={popularMoviesList} title="Popular Movies" />
          <PopularSection data={popularTVList} title="Popular TV Shows " />
        </>
      )}
    </>
  );
};

export default Home;
