import './style.scss'

export const RestaurantItemNav = ({ restaurantName, key }) => {

    if (!restaurantName) return null;

    return <div className="restaurantItemNav" key={key}>{restaurantName}</div>;
}