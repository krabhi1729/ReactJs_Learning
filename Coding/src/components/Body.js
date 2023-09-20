import { restaurantList } from "../components/constants";
import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list  ">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
