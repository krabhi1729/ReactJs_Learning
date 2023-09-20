import { IMG_CDN_URL } from "../components/constants";
import { Rate } from "antd";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // Calculate the number of stars based on avgRating
  // const starCount = Math.floor(avgRating);

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h4>
        Average Rating: <Rate disabled defaultValue={avgRating} />
      </h4>
    </div>
  );
};

export default RestaurantCard;
