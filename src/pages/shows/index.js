import { useDispatch, useSelector } from "react-redux";
import { trendingTvShows } from "../../redux/actions/movieActions";
import LoaderSpinner from "../../components/Loading/LoaderSpinner";
import useDispatcher from "../../helpers/dispatch";
import ActiveMovie from "../../components/ActiveMovie";
import Trending from "../../components/Trending";
import { ActiveData } from "../../redux/actions/globalActions";

const Shows = () => {
  const dispatch = useDispatch();
  useDispatcher(trendingTvShows, undefined, true);
  const shows = useSelector((state) => state.movies.trendingTvShowsList);
  const loading = useSelector((state) => state.global.loading);

  dispatch(ActiveData(shows[0]));

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <ActiveMovie>
          <Trending data={shows} />
        </ActiveMovie>
      )}
    </>
  );
};

export default Shows;
