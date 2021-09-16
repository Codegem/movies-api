import { useEffect, useState } from "react";
import Suggestions from "../searchSuggest/";
import { useDispatch, useSelector } from "react-redux";
import { Search, SearchInput } from "./TabElements";
import { searchMovies } from "../../../redux/actions/movieActions";

const SearchTab = ({ open }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.trim() !== "") {
      dispatch(searchMovies(query));
    }
  }, [query]);

  const searchMovie = useSelector(
    (state) => state.movies.searchMovieResults.results
  );
  return (
    <Search className={open && "open"}>
      <SearchInput
        type="text"
        name="query"
        value={query}
        placeholder="Search Movie..."
        onChange={(e) => queryHandler(e)}
      />
      {query.length >= 1 && <Suggestions query={query} data={searchMovie} />}
    </Search>
  );
};

export default SearchTab;
