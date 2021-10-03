import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Loading, ModalLoader } from "../redux/actions/globalActions";
const useDispatcher = (dispatchName, additionalArguments, loading, modal) => {
  //	dispatchName => what you want to dispatch
  // loading => if wanted to see loading spinner
  const Loader = modal ? ModalLoader : Loading;
  const dispatchData = additionalArguments
    ? dispatchName(additionalArguments)
    : dispatchName;

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(Loader);
      dispatch(dispatchData);
      setTimeout(
        function () {
          dispatch(Loader);
        },
        Loader === ModalLoader ? 1400 : 500
      );
    } else {
      dispatch(dispatchData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useDispatcher;
