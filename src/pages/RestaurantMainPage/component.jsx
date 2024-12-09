import {RestaurantCategories} from "../../components/RestaurantTabs/component.jsx";
import {RestaurantsList} from "../../components/RestaurantsList/component.jsx";
import React from "react";

export const RestaurantMainPage = ({restaurants}) => {

    const [selectedTab, setSelectedTab] = React.useState('');
    console.log(selectedTab);
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.name === selectedTab || !selectedTab);

    return (
        <>
            <RestaurantCategories restaurants={restaurants} onRestaurantTabSelect={setSelectedTab}/>
            <RestaurantsList restaurants={filteredRestaurants}/>
        </>
    )
}