import * as type from "../action-types/movieActionTypes";
import axiosFetch from "../../helpers/axiosFetch";

export const trendingMovies = async (dispatch) => {
  const data = await axiosFetch(type.GET_TRENDING_MOVIE);
  dispatch({
    type: type.GET_TRENDING_MOVIE.typeStr,
    payload: data,
  });
};

export const searchMovies = (query) => async (dispatch) => {
  const data = await axiosFetch(type.SEARCH_MOVIE, { query: query });
  dispatch({
    type: type.SEARCH_MOVIE.typeStr,
    payload: data,
  });
};

export const trendingTvShows = async (dispatch) => {
  const data = await axiosFetch(type.GET_TRENDING_TVSHOWS);
  dispatch({
    type: type.GET_TRENDING_TVSHOWS.typeStr,
    payload: data,
  });
};

export const popularMovies = async (dispatch) => {
  const data = await axiosFetch(type.GET_MOVIES_POPULAR);
  dispatch({
    type: type.GET_MOVIES_POPULAR.typeStr,
    payload: data,
  });
};

export const popularTVShows = async (dispatch) => {
  const data = await axiosFetch(type.GET_TVSHOWS_POPULAR);
  dispatch({
    type: type.GET_TVSHOWS_POPULAR.typeStr,
    payload: data,
  });
};

export const getMediaInfo = (mediaType, id) => async (dispatch) => {
  const infoData = await axiosFetch(
    type.GET_INFO,
    undefined,
    `/${mediaType}/${id}`
  );
  const videoData = await axiosFetch(
    type.GET_VIDEO_TRAILER,
    undefined,
    `/${mediaType}/${id}/videos`
  );
  const allData = {
    ...infoData,
    ...videoData.results[0],
  };
  dispatch({
    type: type.GET_INFO.typeStr,
    payload: allData,
  });
};

export const upcomingMovies = async (dispatch) => {
  const data = await axiosFetch(type.GET_UPCOMING_MOVIE);
  dispatch({
    type: type.GET_UPCOMING_MOVIE.typeStr,
    payload: data,
  });
};

export const VideoTrailer = (id) => async (dispatch) => {
  const data = await axiosFetch(
    type.GET_VIDEO_TRAILER,
    undefined,
    `/${id}/videos`
  );
  dispatch({
    type: type.GET_VIDEO_TRAILER.typeStr,
    payload: data,
  });
};
