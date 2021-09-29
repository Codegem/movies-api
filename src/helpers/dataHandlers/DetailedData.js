import { ImageJoin } from "../image/Image";
import Star from "../stars/Stars";
const { getRating } = Star();

const DetailedData = (data) => {
  let ModifiedData = {};
  ModifiedData = {
    id: data.id,
    name: data.title || data.original_name,
    overview: data.overview,
    backdrop: ImageJoin(data.backdrop_path, "original"),
    poster: ImageJoin(data.poster_path, "w500"),
    genres: data.genres,
    rating: getRating(data.vote_average, "20px", "2px"),
    popularity: data.popularity,
    key: data.key,
    released: data.release_date,
    time: data.runtime,
    page: data.homepage,
  };
  return ModifiedData;
};

export default DetailedData;
