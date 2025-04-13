const api_url =
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/osm-france-food-service/records?select=*&where=type%3D%22restaurant%22%20and%20cuisine!%3D%22null%22%20and%20takeaway!%3D%22null%22&limit=52&refine=meta_name_dep%3A%22Paris%22";

export async function getRestaurants() {
  const response = await fetch(api_url);
  const data = await response.json();
  return data.results;
}
export async function getRestaurant(nameRestau) {
  const restaurants = await getRestaurants();
  const result = restaurants.filter(
    (restaurant) => restaurant.name == nameRestau
  );
  // console.log(result);
  return result;
}
