import './style.scss';

export const RestaurantCard = ({ restaurant }) => {

    if (!restaurant) return null;

    return (
        <div className="restaurantCard">
            <h2>{restaurant?.name}</h2>
            <h3>{restaurant?.name} menu:</h3>
            <ul className="restaurantCard__menu">
                {restaurant?.menu.map((dish) => <li>{dish?.name}</li>)}
            </ul>
            <h3>{restaurant?.name} reviews:</h3>

            <ul className="restaurantCard__reviews">
                {restaurant?.reviews.map((review) => <li>{review?.text}</li>)}
            </ul>
        </div>
    );
}