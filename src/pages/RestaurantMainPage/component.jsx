import {RestaurantCategories} from "../../components/RestaurantTabs/component.jsx";
import {RestaurantsList} from "../../components/RestaurantsList/component.jsx";

export const RestaurantMainPage = ({restaurants}) => {
    return (
        <>
            <RestaurantCategories restaurants={restaurants} />
            <RestaurantsList restaurants={restaurants}/>
        </>
    )
}