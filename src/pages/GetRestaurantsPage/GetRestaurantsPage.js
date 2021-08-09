import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../contants/urls";
import Footer from "../../components/Footer/Footer";


const GetRestaurantsPage = () => {
  useProtectedPage();
  const restaurants = useRequestData([], `${BASE_URL}/restaurants`);
  console.log(restaurants);
  const restaurantsCards =
    restaurants &&
    restaurants.restaurants &&
    restaurants.restaurants.map((restaurant) => {
      return (
        <>
          <img src={restaurant.logoUrl} alt={restaurant.name} height="150px" />
          <p>{restaurant.name}</p>
          <p>{`${restaurant.deliveryTime}min`}</p>
          <p>{`Frete R$${restaurant.shipping},00`}</p>
        </>
      );
    });

  return (
    <>
      <div>{restaurantsCards}</div>
      <Footer />
    </>
  );
};
export default GetRestaurantsPage;
