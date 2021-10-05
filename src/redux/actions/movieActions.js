import * as type from "../action-types/movieActionTypes";
import axiosFetch from "../../helpers/axiosFetch";
import TrailerData from "../../helpers/dataHandlers/TrailerData";
import ArrayJoin from "../../helpers/ArrayJoin";
const { Join } = ArrayJoin();

export const trendingMovies = async (dispatch) => {
  const data = await axiosFetch(type.GET_TRENDING_MOVIE);
  dispatch({
    type: type.GET_TRENDING_MOVIE.typeStr,
    payload: data,
  });
};

export const searchMovies = (query) => async (dispatch) => {
  const Movies = await axiosFetch(type.SEARCH_MOVIE, { query: query }, `movie`);
  const TVShows = await axiosFetch(type.SEARCH_MOVIE, { query: query }, `tv`);
  const data = Join(Movies.results, TVShows.results);
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

export const getMediaInfo = (id) => async (dispatch) => {
  const infoData = await axiosFetch(type.GET_INFO, undefined, `/${id}`);
  let videoData = await axiosFetch(
    type.GET_VIDEO_TRAILER,
    undefined,
    `/${id}/videos`
  );
  let Trailers = TrailerData(videoData.results);
  if (Trailers.length === 0) {
    Trailers = videoData.results;
  }
  const allData = { ...infoData, ...Trailers[0] };
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

export const AllGenres = async (dispatch) => {
  const genreMovie = await axiosFetch(
    type.GET_GENRES,
    undefined,
    `/movie/list`
  );
  const genreTV = await axiosFetch(type.GET_GENRES, undefined, `/tv/list`);

  const data = Join(genreMovie.genres, genreTV.genres);

  dispatch({
    type: type.GET_GENRES.typeStr,
    payload: data,
  });
};
