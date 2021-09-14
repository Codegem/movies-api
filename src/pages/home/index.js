// import { useDispatch } from "react-redux";
import TrendingMovies from "../../components/AllTrendingMovies";
import useMovies from "../../hooks/getMovies";

const Home = () => {
  // const dispatch = useDispatch();

  const { data } = useMovies();

  return <>{data !== null && <TrendingMovies data={data} />}</>;
};

export default Home;
