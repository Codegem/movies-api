const TrailerData = (data) => {
  let trailer = [];
  let nonOficial = [];
  if (data !== null || undefined) {
    data.map((item) => {
      if (item.type === "Trailer" && item.official === true) {
        return trailer.push(item);
      }
      if (item.type === "Trailer" && item.official === false) {
        return nonOficial.push(item);
      }
    });
  }

  return trailer.length > nonOficial.length ? trailer : nonOficial;
};

export default TrailerData;
