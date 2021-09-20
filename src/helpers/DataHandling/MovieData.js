import { ImageJoin } from "../image/Image";
import Star from "../stars/Stars";
const { getRating } = Star();

const MovieData = (data) => [
  { id: data.id },
  { backdrop: ImageJoin(data.backdrop_path) },
  { genre: data.genre_ids },
  { title: data.original_title },
  { description: data.overview },
  { poster: ImageJoin(data.poster_path) },
  { rating: getRating(data.vote_average, "20px", "2px") },
];

export default MovieData;
