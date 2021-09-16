import * as type from "../action-types/movieActionTypes";
import axiosFetch from "../../helpers/axiosFetch";

export const trendingMovies = async (dispatch) => {
  const { data } = await axiosFetch(type.GET_TRENDING_MOVIE);
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_TRENDING_MOVIE.typeStr,
    payload: data,
  });
};

export const searchMovies = (query) => async (dispatch) => {
  const { data } = await axiosFetch(type.SEARCH_MOVIE, { query: query });
  dispatch({
    type: type.SEARCH_MOVIE.typeStr,
    payload: data,
  });
};
