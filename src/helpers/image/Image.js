export const ImageJoin = (url, size) => {
  const MAIN_PATH = `https://image.tmdb.org/t/p/${size}`;
  const imageSrc = MAIN_PATH + url;
  return imageSrc;
};
