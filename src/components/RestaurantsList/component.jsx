import {RestaurantItem} from '../RestaurantItem/component.jsx';
import './styles.css';

export const RestaurantsList = ({restaurants}) => {

    return  (
        <div className={'RestaurantsList'}>
            {Array.from(restaurants).map(
                restaurant => <RestaurantItem restaurant={restaurant} key={restaurant.id} />
            )}
        </div>
    )
}