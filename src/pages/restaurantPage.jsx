import {restaurants} from "../constants/mock.js";
import {RestaurantsListNav} from "../components/restaurantsListNav/component.jsx";
import {RestaurantListCards} from "../components/restaurantListCards/component.jsx";

export const RestaurantPage = () => {

    console.log(restaurants.map(restaurant => restaurant.name));
    const restaurantNames = restaurants.map(restaurant => restaurant.name);

    return (
        <>
            <RestaurantsListNav restaurantNames={restaurantNames} />
            <RestaurantListCards restaurants={restaurants} />
        </>
    )
}