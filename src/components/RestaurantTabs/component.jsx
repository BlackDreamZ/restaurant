import {RestaurantTab} from "../RestaurantTab/component.jsx";
import "./styles.css";

export const RestaurantCategories = ({restaurants, onRestaurantTabSelect}) => {

    if(!restaurants.length) return null;

    return (
        <ul className={'RestaurantCategories'}>
            {Array.from(new Set(restaurants)).map(
                ({name}, index) => (
                <li key={index}>
                    <RestaurantTab onClick={() => onRestaurantTabSelect(index)}>{name}</RestaurantTab>
                </li>
            ))}
        </ul>
    )
}