import {Counter} from "../counter/component.jsx";
import './style.scss';

export const Dish = ({ nameOfDish }) => {

    if (!nameOfDish) return null;

    return (
        <div className="restaurantCard__menu-dish">
            <li className="Menu__nameOfDish">{nameOfDish}</li>
            <Counter />
        </div>
    );
}