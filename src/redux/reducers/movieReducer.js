import { QUERY_MOVIE, GET_MOVIES } from "../action-types/movieActionTypes";

const initialState = {
  movieList: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      const { data } = action;
      return {
        ...state,
        movieList: [...state.movieList, action],
      };
    }
    case QUERY_MOVIE: {
      const { query } = action;
      return {
        ...state,
        query,
      };
    }
    default:
      return state;
  }
};
