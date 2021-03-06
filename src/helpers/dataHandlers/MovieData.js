import { ImageJoin } from "../image/Image";
import Star from "../stars/Stars";

const { getRating } = Star();

const TrendingMovieData = (data) => {
  let ModifiedData = {};
  ModifiedData = data.map((item) => ({
    backdrop: ImageJoin(item.backdrop_path, "original"),
    poster: ImageJoin(item.poster_path, "w500"),
    genres: item.genre_ids,
    id: item.id,
    rating: getRating(item.vote_average, "20px", "2px"),
    overview: item.overview,
    name: item.title,
    mediaType: item.media_type || "movie",
    popularity: item.popularity,
  }));
  return ModifiedData;
};

export default TrendingMovieData;
