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

export const trendingTvShows = async (dispatch) => {
  const { data } = await axiosFetch(type.GET_TRENDING_TVSHOWS);
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_TRENDING_TVSHOWS.typeStr,
    payload: data,
  });
};

export const popularMovies = async (dispatch) => {
  const { data } = await axiosFetch(type.GET_MOVIES_POPULAR);
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_MOVIES_POPULAR.typeStr,
    payload: data,
  });
};

export const popularTVShows = async (dispatch) => {
  const { data } = await axiosFetch(type.GET_TVSHOWS_POPULAR);
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_TVSHOWS_POPULAR.typeStr,
    payload: data,
  });
};

export const movieTrailer = (id, video) => async (dispatch) => {
  if (video === undefined) {
    video = "";
  }
  const { data } = await axiosFetch(
    type.GET_MOVIE_VIDEO,
    undefined,
    `/${id}${video}`
  );
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_MOVIE_VIDEO.typeStr,
    payload: data,
  });
};

export const tvshowTrailer = (id, video) => async (dispatch) => {
  if (video === undefined) {
    video = "";
  }
  const { data } = await axiosFetch(
    type.GET_TVSHOW_VIDEO,
    undefined,
    `/${id}${video}`
  );
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_TVSHOW_VIDEO.typeStr,
    payload: data,
  });
};

export const getMediaInfo = (mediaType, id) => async (dispatch) => {
  const { data } = await axiosFetch(
    type.GET_INFO,
    undefined,
    `/${mediaType}/${id}`
  );
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_INFO.typeStr,
    payload: data,
  });
};

export const upcomingMovies = async (dispatch) => {
  const { data } = await axiosFetch(type.GET_UPCOMING_MOVIE);
  if (!data || data.length === 0) {
    return;
  }
  dispatch({
    type: type.GET_UPCOMING_MOVIE.typeStr,
    payload: data,
  });
};
