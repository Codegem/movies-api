const BASE_URL = `https://api.themoviedb.org/3`;

export const SEARCH_MOVIE = {
  typeStr: "SEARCH_MOVIE",
  axiosUrl: `${BASE_URL}/search/movie`,
};
export const GET_MOVIES_POPULAR = {
  typeStr: "GET_MOVIES_POPULAR",
  axiosUrl: `${BASE_URL}/movie/popular`,
};
export const GET_GENRES = {
  typeStr: "GET_GENRES",
  axiosUrl: `${BASE_URL}/genre/movie/list`,
};
export const GET_TRENDING_MOVIE = {
  typeStr: "GET_TRENDING_MOVIE",
  axiosUrl: `${BASE_URL}/trending/movie/week`,
};
export const GET_UPCOMING_MOVIE = {
  typeStr: "GET_UPCOMING_MOVIE",
  axiosUrl: `${BASE_URL}/movie/upcoming`,
};
export const GET_TRENDING_TVSHOWS = {
  typeStr: "GET_TRENDING_TVSHOWS",
  axiosUrl: `${BASE_URL}/trending/tv/week`,
};
export const GET_TVSHOWS_POPULAR = {
  typeStr: "GET_TVSHOWS_POPULAR",
  axiosUrl: `${BASE_URL}/tv/popular`,
};
