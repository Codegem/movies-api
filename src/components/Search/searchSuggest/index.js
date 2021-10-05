import {
  SearchSuggestions,
  MovieSuggestion,
  SuggestImage,
  SuggestRating,
  SuggestTitle,
  NoResults,
} from "./SuggestElements";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SearchToggle } from "../../../redux/actions/globalActions";
import { getMediaInfo } from "../../../redux/actions/movieActions";

const Suggestions = ({ query }) => {
  const dispatch = useDispatch();
  const searchMovie = useSelector((state) => state.movies.searchMovieResults);
  const location = useLocation();
  const selectHandler = (type, id) => {
    dispatch(SearchToggle);
    if (location.pathname.slice(0, 17) === "/movies-api/about") {
      dispatch(getMediaInfo(`${type}/${id}`));
    }
  };
  return (
    <>
      <SearchSuggestions className={query.trim() >= 1 && "open"}>
        {searchMovie?.slice(0, 5).map((movie, key) => {
          return (
            <div key={key}>
              {!movie.error ? (
                <MovieSuggestion
                  to={`/movies-api/about/${movie.mediaType}/${movie.id}`}
                  onClick={() => selectHandler(movie.mediaType, movie.id)}
                >
                  <SuggestTitle>{movie.name}</SuggestTitle>
                  <SuggestRating>{movie?.rating}</SuggestRating>
                  <SuggestImage src={movie.poster} />
                </MovieSuggestion>
              ) : (
                <NoResults>{movie.error}</NoResults>
              )}
            </div>
          );
        })}
      </SearchSuggestions>
    </>
  );
};

export default Suggestions;
