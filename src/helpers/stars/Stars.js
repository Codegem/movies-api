import StarRatings from "react-star-ratings";

const Star = () => {
  const getRating = (number, size, space) => {
    return (
      <StarRatings
        rating={(10 - (100 - number * 10) / 10) / 2}
        numberOfStars={5}
        starRatedColor="yellow"
        starEmptyColor="grey"
        starDimension={size}
        starSpacing={space}
      />
    );
  };

  return { getRating };
};
export default Star;
