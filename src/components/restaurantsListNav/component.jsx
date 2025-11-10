import { RestaurantItemNav } from '../restaurantItemNav/component.jsx'
import './style.scss'

export const RestaurantsListNav = ({ restaurantNames }) => {

    if (!restaurantNames) return null;


    return <div className="restaurants-navList">
        {restaurantNames.map((restaurantName) => <RestaurantItemNav restaurantName={restaurantName} key={restaurantName} />)}
    </div>;
}