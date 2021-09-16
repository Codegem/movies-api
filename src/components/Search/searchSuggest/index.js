import {
  SearchSuggestions,
  MovieSuggestion,
  SuggestImage,
  SuggestRating,
  SuggestTitle,
  NoResults,
} from "./SuggestElements";
import Star from "../../../helpers/stars/Stars";
import { ImageJoin } from "../../../helpers/image/Image";

const Suggestions = ({ query, data }) => {
  const { getRating } = Star();

  return (
    <SearchSuggestions className={query.trim() >= 1 && "open"}>
      {data !== undefined &&
        data.slice(0, 5).map((movie, key) => {
          if (movie.length === 0) {
            console.log("not");
          }
          return (
            <MovieSuggestion key={key}>
              <SuggestTitle>{movie.title}</SuggestTitle>
              <SuggestRating>
                {getRating(movie.vote_average, "10px", "1px")}
              </SuggestRating>
              <SuggestImage src={ImageJoin(movie.poster_path)} />
            </MovieSuggestion>
          );
        })}
    </SearchSuggestions>
  );
};

export default Suggestions;
