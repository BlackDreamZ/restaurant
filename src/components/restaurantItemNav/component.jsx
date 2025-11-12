import './style.scss'

export const RestaurantItemNav = ({ restaurantName, selectRestaurant, key }) => {

    if (!restaurantName) return null;

    return <button className="restaurantItemNav" key={key} onClick={() => selectRestaurant(restaurantName)}>{restaurantName}</button>;
}