import './styles.css';

export const RestaurantCategory = (restaurant) => {

    return <a href={`#${restaurant.name}`} className={'RestaurantCategory'}>{restaurant.name}</a>
}