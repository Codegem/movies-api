import * as type from "../action-types/movieActionTypes";

const initialState = {
  trendingMovieList: {},
  searchMovieResults: {},
  trendingTvShowsList: {},
};

export const trendingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TRENDING_MOVIE.typeStr: {
      return {
        ...state,
        trendingMovieList: action.payload,
      };
    }
    case type.SEARCH_MOVIE.typeStr: {
      return {
        ...state,
        searchMovieResults: action.payload,
      };
    }
    case type.GET_TRENDING_TVSHOWS.typeStr: {
      return {
        ...state,
        searchMovieResults: action.payload,
      };
    }
    default:
      return state;
  }
};
