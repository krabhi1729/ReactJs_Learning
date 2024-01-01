import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import { ShimmerUI } from "../components/ShimmerUI";
import { swiggy_api_URL } from "../components/Constants";
import {Link} from "react-router-dom";
import { filterData } from "./utils/helper";


// Body Component for body section: It contain all restaurant cards
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
const [searchTxt, setSearchTxt] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

 // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
if(!allRestaurants) return (<h1>Restaurants are null</h1>)
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
              <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard {...restaurant.info}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
