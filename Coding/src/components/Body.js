import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import { ShimmerUI } from "../components/ShimmerUI";

function filterData(searchTxt, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

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
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
if(!allRestaurants) returns (<h1>Restaurants are null</h1>)
  return allRestaurants?.length === 0  ? (
    <ShimmerUI
      cardData={Array(16).fill({
        title: "",
        cuisines: "",
        rating: "",
      })}
    />
  ) : (
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
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list  ">
        {filteredRestaurants.length === 0  ? (
          <p>No Restaurant Found</p>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
