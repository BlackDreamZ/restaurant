import {RestaurantsListNav} from "../../components/restaurantsListNav/component.jsx";
import {RestaurantListCards} from "../../components/restaurantListCards/component.jsx";
import React from "react";
import './style.scss'

export const RestaurantPage = ({ restaurants }) => {

    const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

    if (restaurants.length === 0) {
        return null;
    }

    const restaurantNames = restaurants.map(restaurant => restaurant?.name);

    const selectedRestaurantCard = restaurants.filter(restaurant => restaurant?.name === selectedRestaurant);

    return (
        <div className="restaurantPage">
            <RestaurantsListNav restaurantNames={restaurantNames} selectRestaurant={setSelectedRestaurant} />
            {selectedRestaurant && <RestaurantListCards restaurants={selectedRestaurantCard} />}
        </div>
    )
}