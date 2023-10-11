import { IMG_CDN_URL } from "./constants";


const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // Calculate the number of stars based on avgRating
  // const starCount = Math.floor(avgRating);

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name}  />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="rating">
     {avgRating}
      </div>
    </div>
  );
};

export default RestaurantCard;
