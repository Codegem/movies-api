import { useSelector } from "react-redux";

const GenresData = (genresID) => {
  const allGenres = useSelector((state) => state.movies.genres);
  const genreNames = [];
  if (allGenres !== undefined || null) {
    allGenres?.map((gAll) => {
      genresID?.map((gID) => {
        if (gAll.id === gID) {
          genreNames.push(gAll.name);
        }
      });
    });
  }
  return genreNames;
};

export default GenresData;
