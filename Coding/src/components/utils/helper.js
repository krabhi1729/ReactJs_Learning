// Filter the restaurant data according input type
export function filterData(searchTxt, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return filterData;
}