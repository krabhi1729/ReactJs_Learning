import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import { restaurantData } from "./constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    //   const data=await fetch("https://www.swiggy.com/dapi/menu/v4?lat=12.9351929&lng=77.62448069999999&menuId=229")
    // const json=await data.json();
    // console.log(
    //   restaurantData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setRestaurant(
      restaurantData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
console.log(restaurant)
  return (
    <div>
      <h1>Restaurant id:{id}</h1>
      <h2>{restaurant.info.name}</h2>
      <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} /> 
    </div>
  );
};
export default RestaurantMenu;
