import * as type from "../action-types/movieActionTypes";

const initialState = {
  trendingMovieList: {},
  searchMovieResults: {},
  trendingTvShowsList: {},
  popularTvShows: {},
  popularMovies: {},
  movieTrailer: {},
  tvshowTrailer: {},
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
        trendingTvShowsList: action.payload,
      };
    }
    case type.GET_TVSHOWS_POPULAR.typeStr: {
      return {
        ...state,
        popularTvShows: action.payload,
      };
    }
    case type.GET_MOVIES_POPULAR.typeStr: {
      return {
        ...state,
        popularMovies: action.payload,
      };
    }
    case type.GET_MOVIE_VIDEO.typeStr: {
      return {
        ...state,
        movieTrailer: action.payload,
      };
    }
    case type.GET_TVSHOW_VIDEO.typeStr: {
      return {
        ...state,
        tvshowTrailer: action.payload,
      };
    }
    default:
      return state;
  }
};
