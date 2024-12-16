import {Counter} from "../Counter/component.jsx";
import {useState} from "react";
import './styles.css';

export const Dish = ({dish}) => {

    const [counter, setCounter] = useState(0);

    function onClickIncrease(){
        if (counter < 5) setCounter(counter => counter + 1);
        return counter;
    }
    function onClickDecrease(){
        if (counter > 0) setCounter(counter => counter - 1);
        return counter;
    }

    if (!dish) return null;

    return (
    <div className={'RestaurantItem__Dish'}>
        <div>
            {dish.name}
        </div>
        <Counter counter={counter} onClickIncrease={() => onClickIncrease(counter)} onClickDecrease={() => onClickDecrease(counter)} />
    </div>)
}