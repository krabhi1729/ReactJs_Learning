import { restaurantList} from "../components/constants"
import RestaurantCard from "../components/RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list  ">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Body;
