import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Loading } from "../redux/actions/globalActions";
const useDispatcher = (dispatchName, additionalArguments, loading) => {
  //	dispatchName => what you want to dispatch
  // loading => if wanted to see loading spinner
  const dispatchData = additionalArguments
    ? dispatchName(additionalArguments)
    : dispatchName;

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(Loading);
      dispatch(dispatchData);
      setTimeout(function () {
        dispatch(Loading);
      }, 1500);
    } else {
      dispatch(dispatchData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useDispatcher;
