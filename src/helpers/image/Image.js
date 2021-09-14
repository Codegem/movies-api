export const ImageJoin = (url) => {
  const MAIN_PATH = "https://image.tmdb.org/t/p/original";
  const imageSrc = MAIN_PATH + url;
  return imageSrc;
};
