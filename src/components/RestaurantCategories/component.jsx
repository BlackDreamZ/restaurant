import {RestaurantCategory} from "../RestaurantCategory/component.jsx";
import "./styles.css";

export const RestaurantCategories = ({restaurants}) => {

    return (
        <div className={'RestaurantCategories'}>
            {Array.from(new Set(restaurants)).map(
                restaurant => <RestaurantCategory name={restaurant.name} key={restaurant.id} />
            )}
        </div>
    )
}