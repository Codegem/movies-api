import axios from "axios";
export const API_KEY = "817e8342d860daa34f8e4510732ca634";

const axiosFetch = async (type, paramsAditional, aditionalLink) => {
  if (aditionalLink === undefined) {
    aditionalLink = "";
  } else {
    aditionalLink = aditionalLink;
  }
  const params = {
    api_key: API_KEY,
    language: "en_US",
    page: 1,
  };
  paramsAditional !== undefined && Object.assign(params, paramsAditional);
  const data = await axios(type.axiosUrl + aditionalLink, {
    params: params,
  });

  return data;
};

export default axiosFetch;
