import {RestaurantTab} from "../RestaurantTab/component.jsx";
import "./styles.css";

export const RestaurantCategories = ({restaurants}) => {

    function onTabClick(index){
        console.log(index);
    }

    return (
        <ul className={'RestaurantCategories'}>
            {Array.from(new Set(restaurants)).map(
                ({name}, index) => (
                <li key={index}>
                    <RestaurantTab onClick={() => onTabClick(index)}>{name}</RestaurantTab>
                </li>
            ))}
        </ul>
    )
}