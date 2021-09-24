import { useDispatch, useSelector } from "react-redux";

const useDispatcher = () => {
  const loading = useSelector((state) => state.movies.loading);
  const dispatch = useDispatch();
};

export default useDispatcher;
