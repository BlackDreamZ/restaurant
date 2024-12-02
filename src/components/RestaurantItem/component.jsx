import {Menu} from "../Menu/component.jsx";
import './styles.css';

export const RestaurantItem = ({restaurant}) => {

    if(!restaurant) return null;

    return (
        <div id={restaurant.id} className={'RestaurantItem'}>
            <h3>Ресторан {restaurant.name}</h3>
            <Menu dishes={restaurant.menu}/>
            <h4>Отзывы о {restaurant.name}:</h4>
            <ul className={'RestaurantItem__Reviews'}>
                {Array.from(restaurant.reviews).map((review) => (<li key={review.id}>{review.text}</li>))}
            </ul>
        </div>
    )
}