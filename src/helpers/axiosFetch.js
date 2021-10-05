import axios from "axios";
export const API_KEY = "817e8342d860daa34f8e4510732ca634";
export const BASE_URL = `https://api.themoviedb.org/3`;

const axiosFetch = async (type, paramsAdditional, additionalLink) => {
  if (additionalLink === undefined) {
    additionalLink = "";
  }

  const params = {
    api_key: API_KEY,
    language: "en_US",
    page: 1,
  };
  paramsAdditional !== undefined && Object.assign(params, paramsAdditional);
  return await axios(BASE_URL + type.axiosUrl + additionalLink, {
    params: params,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export default axiosFetch;
