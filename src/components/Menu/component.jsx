import './styles.css';

import {Dish} from "../Dish/component.jsx";

export const Menu = ({dishes}) => {

    if(!dishes) return null;
    return (
        <>
            <h4>Меню:</h4>
            <ul className={'RestaurantItem__Menu'}>
                {dishes.map((dish) => (<Dish dish={dish} key={dish.id} />)) }
            </ul>
        </>
    )};