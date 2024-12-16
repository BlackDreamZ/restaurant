import './styles.css';

export const Counter = (props) => {

    const {
        counter = 0,
        onClickDecrease,
        onClickIncrease,
        minQuantity = 0,
        maxQuantity,
    } = props;

    return <div className={'RestaurantItem__Dish-counter'}>
        <button onClick={onClickDecrease} disabled={counter <= minQuantity}>-</button>
        <p>Quantity: {counter}</p>
        <button onClick={onClickIncrease} disabled={counter >= maxQuantity}>+</button>
    </div>
}