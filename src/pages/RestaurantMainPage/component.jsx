import {RestaurantCategories} from "../../components/RestaurantCategories/component.jsx";
import {RestaurantsList} from "../../components/RestaurantsList/component.jsx";

export const RestaurantMainPage = ({restaurants}) => {
    return (
        <>
            <RestaurantCategories restaurants={restaurants} />
            <RestaurantsList restaurants={restaurants}/>
        </>
    )
}