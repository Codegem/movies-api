import * as type from "../action-types/movieActionTypes";
import ShowData from "../../helpers/dataHandlers/ShowData";
import MovieData from "../../helpers/dataHandlers/MovieData";
import DetailedData from "../../helpers/dataHandlers/DetailedData";

const initialState = {
  trendingMovieList: {},
  searchMovieResults: null,
  trendingTvShowsList: {},
  popularTvShows: {},
  popularMovies: {},
  videoTrailer: null,
  upcomingMovie: {},
  mediaInfo: null,
  genres: null,
};

export const trendingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TRENDING_MOVIE.typeStr: {
      return {
        ...state,
        trendingMovieList: MovieData(action.payload.results),
      };
    }
    case type.SEARCH_MOVIE.typeStr: {
      return {
        ...state,
        searchMovieResults: MovieData(action.payload),
      };
    }
    case type.GET_GENRES.typeStr: {
      return {
        ...state,
        genres: action.payload,
      };
    }
    case type.GET_TRENDING_TVSHOWS.typeStr: {
      return {
        ...state,
        trendingTvShowsList: ShowData(action.payload.results),
      };
    }
    case type.GET_TVSHOWS_POPULAR.typeStr: {
      return {
        ...state,
        popularTvShows: ShowData(action.payload.results),
      };
    }
    case type.GET_MOVIES_POPULAR.typeStr: {
      return {
        ...state,
        popularMovies: MovieData(action.payload.results),
      };
    }
    case type.GET_VIDEO_TRAILER.typeStr: {
      return {
        ...state,
        videoTrailer: action.payload.results,
      };
    }
    case type.GET_UPCOMING_MOVIE.typeStr: {
      return {
        ...state,
        upcomingMovie: MovieData(action.payload.results),
      };
    }
    case type.GET_INFO.typeStr: {
      return {
        ...state,
        mediaInfo: DetailedData(action.payload),
      };
    }
    default:
      return state;
  }
};
