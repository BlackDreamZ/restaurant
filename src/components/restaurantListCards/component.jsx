import { RestaurantCard } from '../restaurantCard/component.jsx'
import './style.scss';

export const RestaurantListCards = ({ restaurants }) => {
    return (
        <div className="restaurantListCards">
            {restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
        </div>);
}