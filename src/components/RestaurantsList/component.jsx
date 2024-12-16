import {RestaurantItem} from '../RestaurantItem/component.jsx';
import './styles.css';

export const RestaurantsList = ({restaurant, index}) => {

    return  (
        <div className={'RestaurantsList'}>
            <RestaurantItem restaurant={restaurant} key={index} />
        </div>
    )
}