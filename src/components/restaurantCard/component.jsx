import './style.scss';
import {Dish} from "../dish/component.jsx";
import {ReviewForm} from "../reviewForm/component.jsx";

export const RestaurantCard = ({ restaurant }) => {

    if (!restaurant) return null;

    return (
        <div className="restaurantCard">
            <h2>{restaurant?.name}</h2>
            <h3>{restaurant?.name} menu:</h3>
            <ul className="restaurantCard__menu">
                {restaurant?.menu.map((dish) => <Dish key={dish} nameOfDish={dish?.name} />)}
            </ul>
            <h3>{restaurant?.name} reviews:</h3>

            <ul className="restaurantCard__reviews">
                {restaurant?.reviews.map((review) => <li>{review?.text}</li>)}
            </ul>
            <ReviewForm />
        </div>
    );
}