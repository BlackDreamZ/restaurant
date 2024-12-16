import {Counter} from "../Counter/component.jsx";
import {useState} from "react";
import './styles.css';

export const Dish = ({dish}) => {

    const [counter, setCounter] = useState(0);
    const MAX_QUANTITY = 5;
    const MIN_QUANTITY = 0;

    function onClickIncrease(){
        setCounter(counter => counter + 1);
        return counter;
    }
    function onClickDecrease(){
        setCounter(counter => counter - 1);
        return counter;
    }

    if (!dish) return null;

    return (
    <div className={'RestaurantItem__Dish'}>
        <div>
            {dish.name}
        </div>
        <Counter
            counter={counter}
            minQuantity={MIN_QUANTITY}
            maxQuantity={MAX_QUANTITY}
            onClickIncrease={() => onClickIncrease(counter)}
            onClickDecrease={() => onClickDecrease(counter)} />
    </div>)
}