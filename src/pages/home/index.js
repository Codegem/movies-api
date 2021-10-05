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
        <div style={{ marginTop: "3rem" }}>
          <PopularSection data={popularMoviesList} title="Popular Movies" />
          <div
            id="movies"
            style={{
              marginBottom: window.innerWidth <= 480 ? "40rem" : "50rem",
            }}
          />
          <PopularSection data={popularTVList} title="Popular TV Shows " />
        </div>
      )}
    </>
  );
};

export default Home;
