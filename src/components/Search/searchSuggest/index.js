import {
  SearchSuggestions,
  MovieSuggestion,
  SuggestImage,
  SuggestRating,
  SuggestTitle,
} from "./SuggestElements";
import { useSelector } from "react-redux";
import Star from "../../../helpers/stars/Stars";
import { ImageJoin } from "../../../helpers/image/Image";

const Suggestions = ({ query }) => {
  const { getRating } = Star();
  const searchMovie = useSelector((state) => state.movies.searchMovieResults);
  return (
    <SearchSuggestions className={query.trim() >= 1 && "open"}>
      {searchMovie?.slice(0, 5).map((movie, key) => {
        return (
          <MovieSuggestion key={key}>
            <SuggestTitle>{movie.title}</SuggestTitle>
            <SuggestRating>
              {getRating(movie.vote_average, "10px", "1px")}
            </SuggestRating>
            <SuggestImage src={ImageJoin(movie.poster_path, "w500")} />
          </MovieSuggestion>
        );
      })}
    </SearchSuggestions>
  );
};

export default Suggestions;
