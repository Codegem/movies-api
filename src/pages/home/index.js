import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopularSection from "../../components/PopularList";
import {
  popularTVShows,
  popularMovies,
} from "../../redux/actions/movieActions";

const Home = () => {
  const dispatch = useDispatch();

  const popularMoviesList = useSelector(
    (state) => state.movies.popularMovies.results
  );
  const popularShowsList = useSelector(
    (state) => state.movies.popularTvShows.results
  );

  useEffect(() => {
    dispatch(popularTVShows);
    dispatch(popularMovies);
  }, []);

  return (
    <div style={{ marginTop: "3rem" }}>
      <PopularSection
        data={popularMoviesList}
        title="Popular Movies"
        type="Movie"
      />
      <PopularSection data={popularShowsList} title="Popular TV Shows " />
    </div>
  );
};

export default Home;
