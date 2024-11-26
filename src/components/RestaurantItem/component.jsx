import './styles.css';

export const RestaurantItem = ({restaurant}) => {
    console.log(restaurant);
    return (
        <div id={restaurant.name} className={'RestaurantItem'}>
            <h3>Ресторан {restaurant.name}</h3>
            <h4>Меню {restaurant.name}:</h4>
            <ul className={'RestaurantItem__Menu'}>
                {Array.from(restaurant.menu).map((dish) => (<li key={dish.id}>{dish.name}</li>))}
            </ul>

            <h4>Отзывы о {restaurant.name}:</h4>
            <ul className={'RestaurantItem__Reviews'}>
                {Array.from(restaurant.reviews).map((review) => (<li key={review.id}>{review.text}</li>))}
            </ul>
        </div>
    )
}