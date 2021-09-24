import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";
import PopularSection from "../../components/PopularList";
import {
  popularTVShows,
  popularMovies,
} from "../../redux/actions/movieActions";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);
  // selector
  const popularMoviesList = useSelector(
    (state) => state.movies.popularMovies.data?.results
  );
  const popularShowsList = useSelector(
    (state) => state.movies.popularTvShows.data?.results
  );
  //selector end
  useEffect(() => {
    dispatch(popularTVShows);
    dispatch(popularMovies);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div style={{ marginTop: "3rem" }}>
          <PopularSection data={popularMoviesList} title="Popular Movies" />
          <div
            style={{
              marginBottom: window.innerWidth <= 480 ? "40rem" : "50rem",
            }}
          />
          <PopularSection data={popularShowsList} title="Popular TV Shows " />
        </div>
      )}
    </>
  );
};

export default Home;
