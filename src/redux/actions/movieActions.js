import * as type from "../action-types/movieActionTypes";

export const searchMovie = (query) => {
  return {
    type: type.QUERY_MOVIE,
    query,
  };
};

export const movieList = (data) => {
  return {
    type: type.GET_MOVIES,
    data: data,
  };
};
