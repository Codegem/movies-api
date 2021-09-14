import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "817e8342d860daa34f8e4510732ca634";
const BASE_URL = `https://api.themoviedb.org/3`;
const trendingWeek = `${BASE_URL}/trending/movie/week`;
const genreList = `${BASE_URL}/genre/movie/list`;

const useMovies = () => {
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);

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

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return { data, getMovies, genre };
};

export default useMovies;
