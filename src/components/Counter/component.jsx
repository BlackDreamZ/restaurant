import './styles.css';

export const Counter = ({counter, onClickDecrease, onClickIncrease}) => {

    return <div className={'RestaurantItem__Dish-counter'}>
        <button onClick={onClickDecrease}>-</button>
        <p>Quantity: {counter || 0}</p>
        <button onClick={onClickIncrease}>+</button>
    </div>
}