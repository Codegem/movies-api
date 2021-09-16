import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./API";

const trendingWeek = `${BASE_URL}/trending/movie/week`;
const genreList = `${BASE_URL}/genre/movie/list`;
const searchQuery = `${BASE_URL}/search/movie`;
const trailer = `${BASE_URL}/movie`;

const useMovies = () => {
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);
  const [searchData, setSearchData] = useState(null);

  const getMovies = async () => {
    const { data } = await axios(trendingWeek, {
      params: {
        api_key: API_KEY,
        language: "en_US",
        page: 1,
      },
    });
    if (!data || data.length === 0) {
      console.log("no data");
      return;
    }
    setData(data);
  };

  const getVideo = async (id) => {
    const { data } = await axios(trailer, {
      params: {
        api_key: API_KEY,
        language: "en_US",
        id: id,
      },
    });
  };

  const getGenres = async () => {
    const { data } = await axios(genreList, {
      params: {
        api_key: API_KEY,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));

    setGenre(modifiedData);
  };

  const search = async (query) => {
    if (query === "") {
      return;
    } else {
      const { data } = await axios(searchQuery, {
        params: {
          api_key: API_KEY,
          language: "en_US",
          page: 1,
          include_adult: false,
          query: query,
        },
      });
      setSearchData(data.results);
    }
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return { data, getMovies, genre, search, searchData };
};

export default useMovies;
