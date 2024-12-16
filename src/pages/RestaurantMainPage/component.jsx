import {RestaurantCategories} from "../../components/RestaurantTabs/component.jsx";
import {RestaurantsList} from "../../components/RestaurantsList/component.jsx";
import React from "react";

export const RestaurantMainPage = ({restaurants}) => {

    const [selectedRestaurantIndex, setSelectedRestaurantIndex] = React.useState(0);

    const selectedRestaurant = restaurants[selectedRestaurantIndex];

    return (
        <>
            <RestaurantCategories restaurants={restaurants} onRestaurantTabSelect={setSelectedRestaurantIndex}/>
            <RestaurantsList restaurant={selectedRestaurant} index={selectedRestaurantIndex}/>
        </>
    )
}